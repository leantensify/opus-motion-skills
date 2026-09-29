---
name: pixel-art
description: Create motion inside a deliberately low-resolution pixel system using integer-positioned sprites, tiles, game UI, coins, score states and frame-based animation. Use for games, retro-tech, playful explainers, nostalgic launches or any concept where interaction and progress can be told through a tiny game world.
license: MIT
---

# Pixel Art

## Core idea

The defining motion engine is **sprites on a grid**. The style must remain recognizable even when labels and decorative effects are removed.

## Non-negotiable rules

- Quantize positions, dimensions and scaling to the pixel grid.
- Use nearest-neighbor scaling; never blur pixel edges.
- Animate sprites with discrete frames, not vector-like interpolation.
- Game mechanics should communicate the story, not exist only as decoration.
- Keep the palette and resolution intentionally constrained.

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

- Let **sprites on a grid** cause the movement.
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
Use the Pixel Art skill.
Goal: [GOAL]
Content: [CONTENT]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Let sprites on a grid drive the motion.
Build it in code.
Use only techniques that strengthen the story.
```
