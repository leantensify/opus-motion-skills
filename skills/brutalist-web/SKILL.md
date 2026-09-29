# Brutalist Web

## Purpose

Create motion design in the **Brutalist Web** visual language. The defining motion engine is **cursor + hard cuts**.

## Best used for

Internet-native pieces, dev tools, anti-polish campaigns, playful launches.

## Visual grammar

Default HTML feel; Times/Arial; blue links; thick borders; raw buttons; alert boxes.

## Motion grammar

Cursor clicks, instant state changes, hard cuts, marquee movement, jitter.

## Avoid

Smooth luxury easing; glossy gradients; fake 3D polish.

## Implementation

Preferred approach: HTML/CSS/JS + GSAP steps easing.

## Operating rules

1. Start by identifying the message, hero object, and strongest 2–4 second moment.
2. Make **cursor + hard cuts** responsible for the motion whenever possible.
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

Preserve rawness. Interactions should feel like the browser itself is performing the edit.

Before export, inspect the opening frame, hero frame, fastest transition, and final frame at full resolution.

## Prompt pattern

```text
Use the Brutalist Web motion skill.
Message: [MESSAGE]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Build the motion in code.
Let cursor + hard cuts drive the animation.
Do not make it feel like a generic AI slideshow.
```
