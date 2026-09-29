# Installation

## Claude Code

Claude Code supports skills in project and personal locations.

### Install all skills into the current project

```bash
git clone https://github.com/leantensify/opus-motion-skills.git
cd opus-motion-skills
bash scripts/install.sh --project
```

The installer copies the folders to:

```text
./.claude/skills/<skill-name>/
```

### Install globally

```bash
bash scripts/install.sh --global
```

Global skills are copied to:

```text
~/.claude/skills/<skill-name>/
```

### Install only selected skills

```bash
bash scripts/install.sh --global \
  motion-director \
  kinetic-typography \
  cinematic-3d-type
```

### List skills

```bash
bash scripts/install.sh --list
```

### Existing skill with the same name

The installer does not overwrite existing skill folders by default.

Use `--force` only when you intentionally want to replace them:

```bash
bash scripts/install.sh --global --force kinetic-typography
```

## Manual installation

You can always copy any folder from `skills/` into the skill directory used by your agent.

Keep the complete folder, not only `SKILL.md`, because the professional skills use progressive-disclosure resources under `references/` and `examples/`.

## Direct invocation

In Claude Code a skill can be invoked directly by name, for example:

```text
/motion-director
```

or:

```text
/kinetic-typography
```

Claude can also select a skill automatically when your request matches its `description`.
