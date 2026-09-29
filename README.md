# Opus Motion Skills

**16 reusable motion-design skills for Claude / Opus — 15 visual styles + 1 Motion Director.**

Turn a coding agent into a motion designer with explicit visual grammar, motion rules, timing, implementation guidance, and quality checks.

## Included styles

| # | Skill | Motion engine |
|---|---|---|
| 01 | Kinetic Typography | Letters |
| 02 | Swiss / International | Grid |
| 03 | Brutalist Web | Cursor + hard cuts |
| 04 | Blueprint | Construction |
| 05 | Terminal | Output streaming |
| 06 | Data Visualization | Data transitions |
| 07 | Isometric | Modular assembly |
| 08 | Liquid Morph | Fluid merging |
| 09 | Paper Cut / Collage | Physical layers |
| 10 | Pixel Art | Sprites on a grid |
| 11 | Hand-Drawn Sketch | Strokes |
| 12 | Retro Futurism | Scanlines + signal |
| 13 | Cinematic 3D Type | Camera + depth |
| 14 | HUD / Sci-Fi | Tracking + micro-data |
| 15 | Generative Motion | Procedural systems |
| 16 | Motion Director | Style selection + sequencing |

## How to use

Copy one skill folder into your agent's skills directory, or give the relevant `SKILL.md` to Claude Code / Opus as project guidance.

Example request:

```text
Create a 30-second product launch video.
Use the motion-director skill to choose the strongest visual languages,
then follow the selected style skills exactly.
Avoid generic slideshow transitions.
Build the motion in code.
```

You can also call a style directly:

```text
Create a 12-second launch sequence using the kinetic-typography skill.
The phrase is "SHIP FASTER".
Make the letters drive the animation.
```

## Core philosophy

A motion style is not a color palette or a preset. Each style needs a **motion engine**: the visual system that actually causes things to move.

The same content should feel fundamentally different when rendered through different motion engines.

## Recommended stack

- HTML / CSS / JavaScript
- GSAP
- SVG
- Canvas
- WebGL / Three.js where depth genuinely matters
- Frame-exact procedural animation where possible

## Repository structure

```
skills/
  motion-director/
  kinetic-typography/
  swiss-international/
  brutalist-web/
  blueprint/
  terminal/
  data-visualization/
  isometric/
  liquid-morph/
  paper-cut-collage/
  pixel-art/
  hand-drawn-sketch/
  retro-futurism/
  cinematic-3d-type/
  hud-sci-fi/
  generative-motion/
```

## Quality bar

Every generated piece should have:
- a clear visual hierarchy
- intentional timing
- transitions motivated by form
- no arbitrary fades when a stronger transformation exists
- a hero frame worth pausing on
- readable typography at delivery resolution
- motion that still communicates with audio muted

## Origin

The system began as a single experiment: **one idea, redrawn 15 times**. The phrase, circle, play control, and style index stayed constant while only the visual language and motion engine changed.

## License

MIT. Use, remix, improve, and contribute.

---

Built by [Egemen Toprak](https://github.com/leantensify).
