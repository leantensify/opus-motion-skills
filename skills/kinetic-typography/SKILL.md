# Kinetic Typography

## Purpose

Create motion design in the **Kinetic Typography** visual language. The defining motion engine is **letters**.

## Best used for

Hooks, launch moments, title sequences, bold statements.

## Visual grammar

Oversized type; aggressive cropping; repetition; split words; outline/fill contrast.

## Motion grammar

Scale, squash, stretch, tracking, line marches, word collisions.

## Avoid

Fades as the main transition; decorative particles that do not serve typography.

## Implementation

Preferred approach: HTML/CSS + GSAP; SVG for masks and outlined type.

## Operating rules

1. Start by identifying the message, hero object, and strongest 2–4 second moment.
2. Make **letters** responsible for the motion whenever possible.
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

Every major movement must originate from type. Land transformations on beats and preserve legibility at hero frames.

Before export, inspect the opening frame, hero frame, fastest transition, and final frame at full resolution.

## Prompt pattern

```text
Use the Kinetic Typography motion skill.
Message: [MESSAGE]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Build the motion in code.
Let letters drive the animation.
Do not make it feel like a generic AI slideshow.
```
