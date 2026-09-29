---
name: hud-sci-fi
description: Create functional-looking interface motion using reticles, object tracking, scan sweeps, radar, brackets, identifiers and compact readouts. Use for AI, robotics, aerospace, diagnostics, security, computer vision, advanced interfaces or scenes where the system should appear to measure, classify or track something.
license: MIT
---

# HUD / Sci-Fi

## Core idea

The defining motion engine is **tracking + micro-data**. Build the scene so this system—not a surface effect—creates the visual identity.

## Non-negotiable rules

- Every readout should appear to measure, identify or control something specific.
- Do not fill empty space with meaningless telemetry.
- Keep micro-data subordinate to the hero object.
- Use scanning and lock-on as causal events.
- Maintain consistent coordinate, label and status conventions.

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

- Let **tracking + micro-data** cause the movement.
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
Use the HUD / Sci-Fi skill.
Goal: [GOAL]
Content: [CONTENT]
Duration: [SECONDS]
Format: [ASPECT RATIO]
Let tracking + micro-data drive the motion.
Build in code.
Use only techniques that strengthen the story.
```
