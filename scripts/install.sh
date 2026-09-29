#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SOURCE="$ROOT/skills"
MODE="project"
FORCE=0
SELECTED=()

usage() {
  cat <<'EOF'
Install Opus Motion Skills for Claude Code.

Usage:
  bash scripts/install.sh [--project|--global] [--force] [skill-name ...]

Examples:
  bash scripts/install.sh
  bash scripts/install.sh --global motion-director kinetic-typography
  bash scripts/install.sh --project --force

Options:
  --project  Install to ./.claude/skills (default)
  --global   Install to ~/.claude/skills
  --force    Replace an existing skill directory
  --list     List available skills
  -h,--help  Show this help
EOF
}

list_skills() {
  find "$SOURCE" -mindepth 1 -maxdepth 1 -type d -exec basename {} \; | sort
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --project) MODE="project"; shift ;;
    --global) MODE="global"; shift ;;
    --force) FORCE=1; shift ;;
    --list) list_skills; exit 0 ;;
    -h|--help) usage; exit 0 ;;
    --*) echo "Unknown option: $1" >&2; usage; exit 2 ;;
    *) SELECTED+=("$1"); shift ;;
  esac
done

if [[ "$MODE" == "global" ]]; then
  DEST="$HOME/.claude/skills"
else
  DEST="$PWD/.claude/skills"
fi

mkdir -p "$DEST"

if [[ ${#SELECTED[@]} -eq 0 ]]; then
  while IFS= read -r skill; do SELECTED+=("$skill"); done < <(list_skills)
fi

for skill in "${SELECTED[@]}"; do
  src="$SOURCE/$skill"
  dst="$DEST/$skill"

  if [[ ! -f "$src/SKILL.md" ]]; then
    echo "Unknown skill: $skill" >&2
    exit 2
  fi

  if [[ -e "$dst" ]]; then
    if [[ "$FORCE" -ne 1 ]]; then
      echo "Already exists: $dst (use --force to replace)" >&2
      exit 3
    fi
    rm -rf "$dst"
  fi

  cp -R "$src" "$dst"
  echo "Installed $skill -> $dst"
done

echo
echo "Installed ${#SELECTED[@]} skill(s)."
