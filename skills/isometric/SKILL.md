---
name: isometric
description: Create modular isometric motion using tiles, blocks, cylinders, stacked systems and consistent spatial logic. Use for workflows, logistics, infrastructure, manufacturing, cloud systems, city-like metaphors, product ecosystems or scenes where many parts assemble into one system.
license: MIT
---

# Isometric

## Core idea

The defining motion engine is **modular assembly**. Do not reduce this skill to a color palette, font choice, or preset. The motion system itself must make the style recognizable.

## Use this skill when

Use it when the brief matches the activation cues in the description above, or when the Motion Director explicitly assigns this visual language to a scene.

## Non-negotiable rules

- Maintain consistent isometric projection and light direction.
- Build complexity from reusable modules.
- Use camera or pan sparingly; prefer moving the system when possible.
- Keep vertical height meaningful when it encodes state or magnitude.
- Transitions should assemble, extrude, unfold or reconfigure existing modules.

## Workflow

1. **Extract the message.** Identify the one sentence, metric, object, or transformation the viewer must remember.
2. **Choose the hero frame.** Design the strongest still composition before animating.
3. **Choose 2–4 techniques.** Load `references/techniques.md`; do not stack techniques just to show variety.
4. **Plan continuity.** Decide how the scene enters and exits using `references/recipes.md`.
5. **Block timing.** Establish hook, build, transformation and hold before adding micro-motion.
6. **Implement in code.** Prefer deterministic, frame-repeatable animation.
7. **QA at delivery size.** Check typography, contrast, safe areas, fastest transition and final hold.

## Timing model

For a typical 6–12 second scene:
- 0–15%: immediate visual premise
- 15–55%: establish the style system
- 55–80%: strongest transformation
- 80–100%: readable hero/payoff

## Motion principles

- Use the style's motion engine as the cause of transitions.
- Prefer object continuity over disappear/reappear editing.
- Use easing intentionally.
- Keep one dominant motion idea per beat.
- Align major state changes to narrative or musical structure.
- Make the scene understandable with audio muted.

## Implementation

Use the simplest stack that can express the motion: HTML/CSS, GSAP or Web Animations, SVG, Canvas, and WebGL/Three.js only when depth, particles or shaders materially improve the result.

## Progressive references

- `references/techniques.md` — signature techniques and implementation notes
- `references/recipes.md` — shot structures and transition recipes
- `examples/prompts.md` — reusable brief patterns

## Quality gate

- recognizable without the style label
- hero message readable at delivery resolution
- no generic fade where a stronger motivated transformation exists
- clear beginning, escalation and payoff
- usable exit handoff
- strong paused hero frame

## Prompt starter

```text
Use the Isometric skill.
Goal: [GOAL]
Message/content: [CONTENT]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Build the motion in code.
Let modular assembly drive the animation.
Choose only techniques that strengthen the story.
Avoid generic AI-slideshow transitions.
```
