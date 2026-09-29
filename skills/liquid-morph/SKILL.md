# Liquid Morph

## Purpose

Create motion design in the **Liquid Morph** visual language. The defining motion engine is **fluid merging**.

## Best used for

Creative brands, music, transitions, playful identity motion.

## Visual grammar

Metaballs; rounded silhouettes; surface tension; viscous type; droplets.

## Motion grammar

Split, merge, drip, absorb, wobble, pour.

## Avoid

Rigid linear movement; too many unrelated colors/shapes.

## Implementation

Preferred approach: SVG gooey filters / Canvas / WebGL.

## Operating rules

1. Start by identifying the message, hero object, and strongest 2–4 second moment.
2. Make **fluid merging** responsible for the motion whenever possible.
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

Continuity matters: shapes should transform through shared mass rather than disappear and respawn.

Before export, inspect the opening frame, hero frame, fastest transition, and final frame at full resolution.

## Prompt pattern

```text
Use the Liquid Morph motion skill.
Message: [MESSAGE]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Build the motion in code.
Let fluid merging drive the animation.
Do not make it feel like a generic AI slideshow.
```
