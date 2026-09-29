---
name: retro-futurism
description: Create motion inspired by 1970s–1990s visions of the future using CRT behavior, scanlines, tape counters, striped suns, chrome or italic type, signal glitches and analog interface cues. Use for technology history, music, speculative launches, nostalgia, synth aesthetics or moments where the medium's signal should drive the edit.
license: MIT
---

# Retro Futurism

## Core idea

The defining motion engine is **scanlines + signal**. The style must remain recognizable even when labels and decorative effects are removed.

## Non-negotiable rules

- Treat signal behavior as motion logic, not a generic glitch overlay.
- Establish one era-inspired visual system instead of mixing every retro trope.
- Use tracking errors, RGB split and noise sparingly and at motivated moments.
- Typography should feel period-aware but remain readable.
- Power-on, scan and tape behavior can provide scene structure.

## Workflow

1. Identify the single message or transformation the scene must communicate.
2. Design a strong hero frame before animating.
3. Load `references/techniques.md` and select 2–4 techniques.
4. Use `references/recipes.md` to plan entry, escalation and exit.
5. Block timing before adding micro-detail.
6. Implement deterministically in code.
7. QA the fastest frame sequence and hero hold at delivery resolution.

## Timing model

For 6–12 seconds:
- 0–15% premise
- 15–55% establish system
- 55–80% strongest transformation
- 80–100% readable payoff

## Motion principles

- Let **scanlines + signal** cause the movement.
- Prefer continuity to disappear/reappear edits.
- Match easing and frame cadence to the material/system.
- Keep one dominant idea per beat.
- Make the scene understandable muted.
- Transition using an object already present whenever possible.

## Implementation

Use HTML/CSS, GSAP/Web Animations, SVG, Canvas, or WebGL as required. Choose the lightest stack that preserves the style's actual behavior.

## Progressive references

- `references/techniques.md`
- `references/recipes.md`
- `examples/prompts.md`

## Quality gate

- recognizable without style label
- readable hero message
- no unmotivated generic fades
- clear escalation and payoff
- coherent exit handoff
- paused frames still look intentionally composed

## Prompt starter

```text
Use the Retro Futurism skill.
Goal: [GOAL]
Content: [CONTENT]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Let scanlines + signal drive the motion.
Build it in code.
Use only techniques that strengthen the story.
```
