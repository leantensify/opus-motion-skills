# HUD / Sci-Fi

## Purpose

Create motion design in the **HUD / Sci-Fi** visual language. The defining motion engine is **tracking + micro-data**.

## Best used for

AI, aerospace, security, robotics, diagnostics.

## Visual grammar

Reticles; object IDs; radar; brackets; readouts; scan grids; micro labels.

## Motion grammar

Lock-on, target tracking, sweeps, toggles, arc rotations.

## Avoid

Unreadable decorative telemetry; random sci-fi noise.

## Implementation

Preferred approach: SVG/Canvas + GSAP.

## Operating rules

1. Start by identifying the message, hero object, and strongest 2–4 second moment.
2. Make **tracking + micro-data** responsible for the motion whenever possible.
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

Every readout should appear to measure or track something specific. Function creates the aesthetic.

Before export, inspect the opening frame, hero frame, fastest transition, and final frame at full resolution.

## Prompt pattern

```text
Use the HUD / Sci-Fi motion skill.
Message: [MESSAGE]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Build the motion in code.
Let tracking + micro-data drive the animation.
Do not make it feel like a generic AI slideshow.
```
