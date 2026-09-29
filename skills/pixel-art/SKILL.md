# Pixel Art

## Purpose

Create motion design in the **Pixel Art** visual language. The defining motion engine is **sprites on a grid**.

## Best used for

Games, retro-tech, playful explainers, nostalgic launches.

## Visual grammar

Low-res canvas; tile maps; sprites; coins; score; pixel UI.

## Motion grammar

Run cycles, jumps, pickups, tile reveals, blinking prompts.

## Avoid

Subpixel blur; smooth vector scaling.

## Implementation

Preferred approach: Canvas with integer coordinates; image-rendering: pixelated.

## Operating rules

1. Start by identifying the message, hero object, and strongest 2–4 second moment.
2. Make **sprites on a grid** responsible for the motion whenever possible.
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

Quantize position and scale. The grid is a constraint, not just an aesthetic.

Before export, inspect the opening frame, hero frame, fastest transition, and final frame at full resolution.

## Prompt pattern

```text
Use the Pixel Art motion skill.
Message: [MESSAGE]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Build the motion in code.
Let sprites on a grid drive the animation.
Do not make it feel like a generic AI slideshow.
```
