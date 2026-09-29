---
name: cinematic-3d-type
description: Create premium spatial motion where extruded typography, depth, camera choreography, atmosphere and lighting carry the scene. Use for hero launches, title sequences, premium brand films, dramatic product moments, event openers or any brief where scale and camera movement should create the payoff.
license: MIT
---

# Cinematic 3D Type

## Core idea

The defining motion engine is **camera + depth**. Build the scene so this system—not a surface effect—creates the visual identity.

## Non-negotiable rules

- Camera movement must have narrative purpose.
- Establish scale before the biggest move.
- Use depth to clarify hierarchy, not to decorate every element.
- Lighting changes should reveal form, not hide weak geometry.
- Reserve the most dramatic fly-through or orbit for a meaningful beat.

## Workflow

1. Extract the single hero message, object or transformation.
2. Design the hero frame before animating.
3. Load `references/techniques.md` and choose 2–4 techniques.
4. Load `references/recipes.md` for sequence and handoff patterns.
5. Block macro timing before micro-detail.
6. Implement deterministic frame behavior.
7. QA opening, hero, fastest transition and exit at delivery resolution.

## Timing model

For a 6–12 second scene:
- 0–15% visual premise
- 15–55% establish system
- 55–80% strongest transformation
- 80–100% readable payoff

## Motion principles

- Let **camera + depth** cause the movement.
- Prefer continuity to disappear/reappear edits.
- Match easing and temporal behavior to the physical/system logic.
- Keep one dominant motion idea per beat.
- Align major events to narrative or musical structure.
- Make the scene understandable muted.

## Implementation

Use HTML/CSS, GSAP/Web Animations, SVG, Canvas, WebGL or Three.js as required. Choose the lightest stack that expresses the real behavior.

## Progressive references

- `references/techniques.md`
- `references/recipes.md`
- `examples/prompts.md`

## Quality gate

- recognizable without the style label
- readable hero state
- no generic fade where a motivated transition exists
- clear escalation and payoff
- deterministic/repeatable behavior
- coherent exit for the next scene

## Prompt starter

```text
Use the Cinematic 3D Type skill.
Goal: [GOAL]
Content: [CONTENT]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Let camera + depth drive the motion.
Build in code.
Use only techniques that strengthen the story.
```
