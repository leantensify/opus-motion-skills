# Opus Motion Skills

**Motion-design intelligence for AI coding agents.**

15 professional motion languages + one Motion Director, packaged as reusable Agent Skills.

> One idea can look completely different when the **motion engine** changes.

## Showcase

### 15 motion styles. One fixed idea.

The phrase, circle, play control and style index stay constant. Only the visual language and motion system change.

**Full showreel:** 2:30 · 16:9 · 15 styles

<!-- SHOWCASE_VIDEO: paste the GitHub user-attachments video URL on its own line below this comment -->

See the full showcase breakdown in [showcase/README.md](showcase/README.md).

| # | Skill | Motion engine |
|---|---|---|
| 01 | [Kinetic Typography](skills/kinetic-typography/) | letters |
| 02 | [Swiss / International](skills/swiss-international/) | the grid |
| 03 | [Brutalist Web](skills/brutalist-web/) | cursor + hard cuts |
| 04 | [Blueprint](skills/blueprint/) | construction |
| 05 | [Terminal](skills/terminal/) | output streaming |
| 06 | [Data Visualization](skills/data-visualization/) | data transitions |
| 07 | [Isometric](skills/isometric/) | modular assembly |
| 08 | [Liquid Morph](skills/liquid-morph/) | fluid merging |
| 09 | [Paper Cut / Collage](skills/paper-cut-collage/) | physical layers |
| 10 | [Pixel Art](skills/pixel-art/) | sprites on a grid |
| 11 | [Hand-Drawn Sketch](skills/hand-drawn-sketch/) | strokes |
| 12 | [Retro Futurism](skills/retro-futurism/) | scanlines + signal |
| 13 | [Cinematic 3D Type](skills/cinematic-3d-type/) | camera + depth |
| 14 | [HUD / Sci-Fi](skills/hud-sci-fi/) | tracking + micro-data |
| 15 | [Generative Motion](skills/generative-motion/) | procedural systems |
| — | [Motion Director](skills/motion-director/) | story + style orchestration |

## Why this exists

Most AI motion prompts describe **appearance**:

> “Make it futuristic. Use bold typography. Add some particles.”

That is not a motion system.

This repository describes what actually **drives the animation**.

A Swiss scene moves because the grid changes.  
A Terminal scene moves because output streams.  
A Liquid scene moves because mass splits and merges.  
A 3D scene moves because the camera and depth change.  
A Generative scene moves because a procedural system reorganizes itself.

That difference is the core idea.

## What is inside each professional skill

Each style now uses progressive disclosure:

```text
skills/kinetic-typography/
├── SKILL.md
├── references/
│   ├── techniques.md
│   └── recipes.md
└── examples/
    └── prompts.md
```

The `SKILL.md` contains:
- Agent Skills frontmatter
- activation guidance
- non-negotiable design rules
- workflow
- timing model
- implementation guidance
- quality gate

The deeper references contain:
- **12 signature techniques**
- shot structures
- transition recipes
- implementation patterns
- reusable prompts

This keeps the core skill compact while letting an agent load detail only when it is useful.

## Motion Director

The [Motion Director](skills/motion-director/) sits above the 15 styles.

Give it a brief:

```text
Create a 30-second launch video for my SaaS.
Audience: operations leaders.
Show one metric and one UI moment.
Modern and premium, but not cyberpunk.
```

It should first build a story spine, then select the smallest useful combination of skills.

Example direction:

```text
0–04s   Kinetic Typography — hook
04–13s  Isometric          — explain the system
13–20s  Data Visualization — prove the result
20–27s  Cinematic 3D       — hero moment
27–30s  Swiss              — clean CTA
```

The point is **not** to use more styles.

The point is to give each style a narrative job.

## Use with an Agent Skills-compatible coding agent

Clone the repository:

```bash
git clone https://github.com/leantensify/opus-motion-skills.git
```

Then copy the skill folders you want into the skills directory used by your agent, or reference the relevant `SKILL.md` from your project.

You can invoke a style directly:

```text
Use the kinetic-typography skill.

Create an 8-second launch hook for:
"BUILD LESS. SHIP MORE."

Let typography drive every transition.
Build the motion in code.
```

Or start with Motion Director:

```text
Use the motion-director skill.

Create a 30-second product film from this brief.
Choose the minimum number of motion languages needed.
Create the story spine and timeline before implementation.
```

## Recommended implementation stack

The skills are intentionally not tied to one framework.

Useful building blocks include:
- HTML / CSS / JavaScript
- GSAP or Web Animations
- SVG
- Canvas
- WebGL / Three.js when depth or shaders are genuinely needed

The design logic should survive a change of tooling.

## Quality bar

A finished piece should:
- communicate with audio muted
- contain at least one strong hero frame
- use transitions motivated by form or narrative
- keep important copy readable
- avoid generic fade/slide slideshow behavior
- preserve object continuity where possible
- render deterministically when procedural systems are involved

Read [Motion Principles](docs/MOTION_PRINCIPLES.md).

## Validation

Every skill is automatically checked for:
- required `SKILL.md`
- valid kebab-case `name`
- matching folder/name
- non-empty `description`
- compact core manifest
- required references/examples
- exactly 15 styles + Motion Director

Run locally:

```bash
python scripts/validate_skills.py
```

CI runs the same validator on pushes and pull requests.

## From open-source library to product

This repository can become the intelligence layer of a full motion product:

```text
brief
  ↓
Motion Director
  ↓
selected motion skills
  ↓
storyboard + timeline
  ↓
coded scenes
  ↓
preview
  ↓
render / export
```

The working product direction is documented in [Product Vision](docs/PRODUCT_VISION.md).

The long-term opportunity is not another template library.

It is a system that can turn creative direction into **coded motion design**.

## Roadmap

See [ROADMAP.md](ROADMAP.md).

Current milestone: **v0.2 — Professional Skill System**

- [x] 15 motion languages
- [x] Motion Director
- [x] Agent Skills metadata
- [x] technique libraries
- [x] transition recipes
- [x] examples
- [x] validation + CI
- [ ] inline showcase video

## Contributing

New skills should define a real motion engine, not only an aesthetic.

Read [CONTRIBUTING.md](CONTRIBUTING.md).

## License

MIT.

---

Built by [Egemen Toprak](https://github.com/leantensify).
