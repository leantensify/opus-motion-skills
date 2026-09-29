---
name: brutalist-web
description: Create raw browser-native motion using default-web aesthetics, cursor interaction, hard state changes, borders, links, alerts and intentionally unpolished UI. Use for developer tools, internet culture, anti-polish campaigns, experimental launches, or scenes that should feel like the browser itself is performing the edit.
license: MIT
---

# Brutalist Web

## Core idea

The defining motion engine is **cursor + hard cuts**. Do not reduce this skill to a color palette, font choice, or preset. The motion system itself must make the style recognizable.

## Use this skill when

Use it when the brief matches the activation cues in the description above, or when the Motion Director explicitly assigns this visual language to a scene.

## Non-negotiable rules

- Use browser behavior as choreography.
- Hard cuts and state changes are valid motion; do not smooth everything.
- Keep the interface intentionally raw but still readable.
- Prefer semantic HTML-looking components over decorative cyberpunk UI.
- Use cursor actions only when they cause a visible state change.

## Workflow

1. **Extract the message.** Identify the one sentence, metric, object, or transformation the viewer must remember.
2. **Choose the hero frame.** Design the strongest still composition before animating.
3. **Choose 2–4 techniques.** Load `references/techniques.md`; do not stack techniques just to show variety.
4. **Plan continuity.** Decide how the scene enters and exits using `references/recipes.md`.
5. **Block timing.** Establish hook, build, transformation and hold before adding micro-motion.
6. **Implement in code.** Prefer deterministic, frame-repeatable animation.
7. **QA at delivery size.** Check typography, contrast, safe areas, fastest transition and final hold.

## Timing model

A useful default for a 6–12 second scene:

- 0–15%: immediate visual premise
- 15–55%: establish the style system
- 55–80%: strongest transformation
- 80–100%: readable hero/payoff

Break this model when the narrative requires it, but never spend the first third on setup that communicates nothing.

## Motion principles

- Use the style's motion engine as the cause of transitions.
- Prefer object continuity over disappear/reappear editing.
- Use easing intentionally. Mechanical systems should not feel rubbery; organic systems should not feel like linear UI tweens.
- Keep one dominant motion idea per beat.
- Major state changes should align to narrative or musical structure, not every available beat.
- A viewer should understand the scene with audio muted.

## Implementation

Choose the simplest stack that can express the motion:
- HTML/CSS for layout and typography
- GSAP or Web Animations for timelines
- SVG for paths, masks, vector morphs and line work
- Canvas for many repeated/dynamic elements
- WebGL/Three.js only when depth, particles or shaders materially improve the result

Avoid adding a heavy 3D stack to solve a 2D composition problem.

## Progressive references

Load these only when needed:

- `references/techniques.md` — signature techniques and implementation notes
- `references/recipes.md` — shot structures, transitions and sequence recipes
- `examples/prompts.md` — reusable brief patterns

## Quality gate

Before considering the scene complete:

- the style remains recognizable with the style label removed
- the hero message is readable at delivery resolution
- no transition is a generic fade when a stronger motivated transformation exists
- animation has a clear beginning, escalation and payoff
- the exit offers a usable handoff to the next scene
- the frame still looks designed when paused

## Prompt starter

```text
Use the Brutalist Web skill.
Goal: [GOAL]
Message/content: [CONTENT]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Build the motion in code.
Let cursor + hard cuts drive the animation.
Choose only the techniques that strengthen the story.
Avoid generic AI-slideshow transitions.
```
