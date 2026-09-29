# Contributing

Contributions are welcome.

The standard is intentionally high: a new motion skill must define more than a visual look. It needs a **motion engine** — the system that actually causes movement.

## Skill anatomy

```text
skills/<skill-name>/
├── SKILL.md
├── references/
│   ├── techniques.md
│   └── recipes.md
└── examples/
    └── prompts.md
```

A specialized orchestrator may use different reference filenames, as Motion Director does.

## SKILL.md requirements

Every skill must begin with YAML frontmatter:

```yaml
---
name: kinetic-typography
description: What the skill does and when an agent should use it.
license: MIT
---
```

Rules:
- `name` is kebab-case
- `name` matches the directory name
- `description` explains both capability and activation context
- keep the core `SKILL.md` compact
- move detailed technique libraries into `references/`

## Design requirements

A proposed style should document:
- defining motion engine
- non-negotiable visual/motion rules
- best-fit use cases
- anti-patterns
- timing logic
- implementation guidance
- at least several signature techniques
- transition/shot recipes
- quality checks
- reusable prompt examples

## What not to submit

Please avoid:
- prompt-only “styles” with no motion logic
- copyrighted third-party brand assets
- a famous living designer's style copied as the core identity
- generic particle/fade/slide presets
- fake data presented as real
- dependencies that are unnecessary for the visual system

## Validate locally

```bash
python scripts/validate_skills.py
```

The same check runs in GitHub Actions.

## Pull requests

Keep each PR focused on one skill or one coherent system improvement.

Explain:
1. what motion behavior is being added or changed
2. when the skill should be used
3. how the motion engine differs from existing skills
4. what you tested
