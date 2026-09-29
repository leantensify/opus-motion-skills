# Generative Motion

## Purpose

Create motion design in the **Generative Motion** visual language. The defining motion engine is **procedural systems**.

## Best used for

Finales, identity systems, AI/compute themes, abstract transformation.

## Visual grammar

Particles; flow fields; sampled text targets; trails; attractors; emergent forms.

## Motion grammar

Self-assembly, dispersion, advection, attraction, collapse.

## Avoid

Pure randomness; non-deterministic renders.

## Implementation

Preferred approach: Canvas/WebGL with seeded randomness.

## Operating rules

1. Start by identifying the message, hero object, and strongest 2–4 second moment.
2. Make **procedural systems** responsible for the motion whenever possible.
3. Prefer transformation, continuity, and motivated cuts over generic fade-in/fade-out animation.
4. Keep one dominant idea per shot.
5. Build a hero frame that works as a still image.
6. Preserve readability throughout fast motion.
7. If music exists, align major state changes to musical structure rather than decorating every beat.
8. Transitions into the next scene should reuse an existing object, line, camera move, texture, or geometry when possible.

## Timing guidance

- Hook: 0–2s
- Establish the system: 2–4s
- Escalate or transform: 4–8s
- Hero composition / payoff: final 20–30% of the scene
- Hold important copy long enough to read at normal playback speed

## Quality check

Procedural motion must be deterministic for rendering. Systems should transition between meaningful target states.

Before export, inspect the opening frame, hero frame, fastest transition, and final frame at full resolution.

## Prompt pattern

```text
Use the Generative Motion motion skill.
Message: [MESSAGE]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Build the motion in code.
Let procedural systems drive the animation.
Do not make it feel like a generic AI slideshow.
```
