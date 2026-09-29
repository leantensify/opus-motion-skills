---
name: generative-motion
description: Create deterministic procedural motion using particles, flow fields, attractors, sampled targets, emergent patterns and rule-based transformation. Use for AI or compute themes, identity systems, abstract finales, data-driven art, large-scale transitions or scenes where many simple elements should self-organize into meaningful forms.
license: MIT
---

# Generative Motion

## Core idea

The defining motion engine is **procedural systems**. Build the scene so this system—not a surface effect—creates the visual identity.

## Non-negotiable rules

- Procedural does not mean random: renders must be deterministic.
- Define clear system states and transitions between them.
- Particles or agents should encode structure, not merely fill space.
- Use seeded randomness and time-based pure functions whenever possible.
- The final target form must become readable before the system disperses again.

## Workflow

1. Extract the single hero message, object or transformation.
2. Design the hero frame before animating.
3. Load `references/techniques.md` and choose 2–4 techniques.
4. Load `references/recipes.md` for sequence and handoff patterns.
5. Block macro timing before micro-detail.
6. Implement deterministic frame behavior.
7. QA opening, hero, fastest transition and exit at delivery resolution.

## Timing model

For a 6–12 second scene:
- 0–15% visual premise
- 15–55% establish system
- 55–80% strongest transformation
- 80–100% readable payoff

## Motion principles

- Let **procedural systems** cause the movement.
- Prefer continuity to disappear/reappear edits.
- Match easing and temporal behavior to the physical/system logic.
- Keep one dominant motion idea per beat.
- Align major events to narrative or musical structure.
- Make the scene understandable muted.

## Implementation

Use HTML/CSS, GSAP/Web Animations, SVG, Canvas, WebGL or Three.js as required. Choose the lightest stack that expresses the real behavior.

## Progressive references

- `references/techniques.md`
- `references/recipes.md`
- `examples/prompts.md`

## Quality gate

- recognizable without the style label
- readable hero state
- no generic fade where a motivated transition exists
- clear escalation and payoff
- deterministic/repeatable behavior
- coherent exit for the next scene

## Prompt starter

```text
Use the Generative Motion skill.
Goal: [GOAL]
Content: [CONTENT]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Let procedural systems drive the motion.
Build in code.
Use only techniques that strengthen the story.
```
