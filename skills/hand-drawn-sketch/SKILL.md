---
name: hand-drawn-sketch
description: Create motion that feels drawn, revised and annotated by hand using construction lines, graphite, ink, hatching, onion-skin frames and controlled line boil. Use for ideation, education, humanized technology, concept explanations, process stories, design thinking or scenes that should feel exploratory and authored.
license: MIT
---

# Hand-Drawn Sketch

## Core idea

The defining motion engine is **strokes**. The style must remain recognizable even when labels and decorative effects are removed.

## Non-negotiable rules

- Show the act of drawing, not merely a sketch texture applied to finished shapes.
- Controlled imperfection beats random wobble.
- Separate construction lines from confident final strokes.
- Use annotations and arrows as thinking tools, not decoration.
- Preserve enough frame-to-frame variation to feel handmade without destroying readability.

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

- Let **strokes** cause the movement.
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
Use the Hand-Drawn Sketch skill.
Goal: [GOAL]
Content: [CONTENT]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Let strokes drive the motion.
Build it in code.
Use only techniques that strengthen the story.
```
