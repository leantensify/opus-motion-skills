# Isometric

## Purpose

Create motion design in the **Isometric** visual language. The defining motion engine is **modular assembly**.

## Best used for

Systems, logistics, workflows, infrastructure, product ecosystems.

## Visual grammar

Isometric tiles; voxel-like modules; cylinders; stacked layers; tiny worlds.

## Motion grammar

Tile waves, block drops, assembly, camera pans, pressable pads.

## Avoid

Perspective inconsistency; arbitrary floating objects.

## Implementation

Preferred approach: CSS 3D / Canvas / Three.js + GSAP.

## Operating rules

1. Start by identifying the message, hero object, and strongest 2–4 second moment.
2. Make **modular assembly** responsible for the motion whenever possible.
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

Build motion from modules. Depth and orientation must remain spatially coherent.

Before export, inspect the opening frame, hero frame, fastest transition, and final frame at full resolution.

## Prompt pattern

```text
Use the Isometric motion skill.
Message: [MESSAGE]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Build the motion in code.
Let modular assembly drive the animation.
Do not make it feel like a generic AI slideshow.
```
