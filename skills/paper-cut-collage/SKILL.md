---
name: paper-cut-collage
description: Create tactile motion from cut paper, tape, printed fragments, torn edges, shadows and stop-motion-like placement. Use for editorial culture, fashion, music, zines, handmade brand work, collage storytelling or any brief that should feel assembled by hand instead of rendered by a perfect digital system.
license: MIT
---

# Paper Cut / Collage

## Core idea

The defining motion engine is **physical layers**. The style must remain recognizable even when labels and decorative effects are removed.

## Non-negotiable rules

- Every element should feel physically placeable on a surface.
- Respect overlap, cast shadow and layer order.
- Use imperfect registration intentionally but keep hierarchy readable.
- Prefer stepped movement and hand-placed rhythm over polished easing.
- Texture supports the material illusion; it must not bury the message.

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

- Let **physical layers** cause the movement.
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
Use the Paper Cut / Collage skill.
Goal: [GOAL]
Content: [CONTENT]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Let physical layers drive the motion.
Build it in code.
Use only techniques that strengthen the story.
```
