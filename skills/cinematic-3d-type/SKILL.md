# Cinematic 3D Type

## Purpose

Create motion design in the **Cinematic 3D Type** visual language. The defining motion engine is **camera + depth**.

## Best used for

Hero launches, premium title reveals, dramatic finales.

## Visual grammar

Extruded typography; fog; dust; directional light; deep perspective.

## Motion grammar

Camera orbit, dolly, fly-through, depth reveals, light sweeps.

## Avoid

Constant camera motion; cheap bevel overload.

## Implementation

Preferred approach: Three.js/WebGL or disciplined CSS 3D.

## Operating rules

1. Start by identifying the message, hero object, and strongest 2–4 second moment.
2. Make **camera + depth** responsible for the motion whenever possible.
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

Camera movement is the edit. Establish scale, then earn the hero move through space.

Before export, inspect the opening frame, hero frame, fastest transition, and final frame at full resolution.

## Prompt pattern

```text
Use the Cinematic 3D Type motion skill.
Message: [MESSAGE]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Build the motion in code.
Let camera + depth drive the animation.
Do not make it feel like a generic AI slideshow.
```
