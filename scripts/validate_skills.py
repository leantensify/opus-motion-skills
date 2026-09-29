#!/usr/bin/env python3
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
SKILLS = ROOT / "skills"
NAME_RE = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")

errors = []
count = 0

for skill_dir in sorted(p for p in SKILLS.iterdir() if p.is_dir()):
    count += 1
    manifest = skill_dir / "SKILL.md"
    if not manifest.exists():
        errors.append(f"{skill_dir.name}: missing SKILL.md")
        continue

    text = manifest.read_text(encoding="utf-8")
    lines = text.splitlines()

    if not lines or lines[0].strip() != "---":
        errors.append(f"{skill_dir.name}: SKILL.md must start with YAML frontmatter")
        continue

    try:
        end = lines[1:].index("---") + 1
    except ValueError:
        errors.append(f"{skill_dir.name}: unclosed YAML frontmatter")
        continue

    front = lines[1:end]
    fields = {}
    for line in front:
        if ":" in line and not line.startswith((" ", "\t")):
            k, v = line.split(":", 1)
            fields[k.strip()] = v.strip().strip('"').strip("'")

    name = fields.get("name", "")
    description = fields.get("description", "")

    if not name:
        errors.append(f"{skill_dir.name}: missing frontmatter name")
    elif name != skill_dir.name:
        errors.append(f"{skill_dir.name}: name '{name}' must match directory")
    elif len(name) > 64 or not NAME_RE.fullmatch(name):
        errors.append(f"{skill_dir.name}: invalid skill name")

    if not description:
        errors.append(f"{skill_dir.name}: missing description")
    elif len(description) > 1024:
        errors.append(f"{skill_dir.name}: description exceeds 1024 chars")

    if len(lines) > 500:
        errors.append(f"{skill_dir.name}: SKILL.md exceeds 500 lines; move detail to references/")

    if skill_dir.name == "motion-director":
        required = [
            skill_dir / "references" / "style-selection.md",
            skill_dir / "references" / "sequence-patterns.md",
            skill_dir / "examples" / "briefs.md",
        ]
    else:
        required = [
            skill_dir / "references" / "techniques.md",
            skill_dir / "references" / "recipes.md",
            skill_dir / "examples" / "prompts.md",
        ]
    for path in required:
        if not path.exists():
            errors.append(f"{skill_dir.name}: missing {path.relative_to(ROOT)}")

if count != 16:
    errors.append(f"expected 16 skills (15 styles + motion-director), found {count}")

if errors:
    print("Skill validation failed:\n")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)

print(f"OK: validated {count} skills.")
