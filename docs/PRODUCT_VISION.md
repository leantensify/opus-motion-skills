# Product Vision — MotionOS (working name)

The open-source repository is the **motion intelligence layer**. A product can turn that intelligence into a complete brief-to-video workflow.

## Product promise

> Give AI agents the visual instincts of a motion designer.

A user should be able to write:

```text
Create a 30-second launch video for my SaaS.
Premium, technical, clear. Show one metric and one UI moment.
```

The system should then:

1. understand the brief
2. build a story spine
3. select the smallest effective combination of motion skills
4. create a storyboard and timeline
5. generate implementation-ready code
6. preview and iterate
7. render/export delivery formats

## Why this can be a product

The repository solves **how motion should behave**. The product solves everything around that intelligence:

- collecting the brief
- choosing the right visual language
- sequencing scenes
- applying a brand system
- generating editable code
- previewing and revising
- rendering multiple formats
- storing reusable motion systems

The product should not compete as “another AI video generator.” Its position is closer to:

**creative direction + motion system + editable coded output**

## Core product architecture

### 1. Brief Parser

Extract:
- audience
- message
- duration
- aspect ratio
- required scenes
- claims / metrics
- product UI moments
- available assets
- tone
- brand constraints
- delivery channels

### 2. Motion Director

Uses `skills/motion-director` to decide:
- story beats
- narrative role of each beat
- style roles
- motion engines
- transitions
- pacing
- implementation stack

The Director should prefer the **smallest useful style set**, not visual variety for its own sake.

### 3. Skill Runtime

Loads only the selected skills and the references needed for the current scene.

This is where the open-source library becomes the product's design intelligence.

### 4. Scene Compiler

Converts direction into structured scene specifications:

```json
{
  "start": 0,
  "end": 4,
  "style": "kinetic-typography",
  "role": "hook",
  "message": "SHIP FASTER",
  "techniques": ["word-slam", "split-reveal"],
  "transition_out": "o-to-circle",
  "hero_frame": 3.2
}
```

### 5. Code Builder

Generates the simplest stack that can express the scene:
- HTML / CSS / JS
- GSAP / Web Animations
- SVG
- Canvas
- Three.js / WebGL only when depth or shaders materially help

The output should remain editable.

### 6. Preview & Render

- frame-accurate preview
- deterministic procedural rendering
- scene re-rendering without rebuilding everything
- 16:9 / 9:16 / 1:1 adaptation
- MP4 / WebM / GIF where appropriate
- source export

### 7. Brand Motion Kit

Reusable:
- fonts
- colors
- logos
- spacing
- type hierarchy
- motion personality
- approved transitions
- pacing ranges
- safe areas
- product UI components
- forbidden patterns

The goal is to make the tenth video look like it belongs to the same company as the first.

### 8. QA Layer

Automated checks can include:
- text readability
- clipping / safe areas
- continuity
- deterministic output
- unsupported assets
- factual/data consistency
- hero-frame quality
- excessive motion density
- transition continuity
- brand-kit violations

## Product surfaces

### Director

Turns a natural-language brief into a motion treatment and timeline before any code is written.

### Style Lab

Renders the **same message** through multiple motion systems for direct comparison.

This mirrors the original 15-style experiment and can be one of the strongest product demos.

### Scene Builder

Creates or regenerates one scene without touching the rest of the film.

### Timeline

Shows style, technique, message, timing, transition, and implementation state per beat.

### Brand Motion Kit

Stores the organization's reusable motion identity.

### Render Studio

Creates final outputs and social variants.

### Skill Marketplace

Designers can publish specialized systems such as:
- luxury editorial
- sports broadcast
- documentary maps
- finance/news graphics
- Y2K
- architectural visualization
- anime title systems
- product UI demo systems

A marketplace listing should contain a real motion grammar and QA rules, not merely a prompt preset.

## Open-core model

### Open source

- 15 motion style skills
- Motion Director
- examples
- validation
- community-contributed skills
- reference implementations over time

### Hosted product

- visual brief builder
- automatic direction
- storyboard/timeline UI
- live preview
- code generation
- rendering
- project history
- brand kits
- reusable private skills
- collaboration

## Pricing hypothesis — validate before committing

### Free

Useful enough to demonstrate the system:
- public skills
- basic Director
- prompt/treatment output
- limited saved projects

### Pro

Potential paid value:
- complete multi-scene direction
- code generation
- live previews
- brand kits
- project history
- more renders / exports

### Studio

Potential team value:
- shared brand motion systems
- custom/private skills
- batch variants
- collaboration
- approvals
- high-resolution rendering

Pricing should be decided from usage and willingness-to-pay interviews, not from feature count alone.

## Moat

The durable advantage can become:

1. **motion-design knowledge** encoded as reusable systems rather than prompts
2. **cross-style transition logic** that preserves continuity
3. **Motion Director data** showing which styles work for which communication jobs
4. **brand-motion memory** across repeated projects
5. **scene-level QA and evaluation**
6. **editable code generation + deterministic rendering**
7. **community / premium skill ecosystem**

## MVP validation path

Do not start by building a giant editor.

### Phase 1 — prove demand

- publish the repository
- put the 15-style showreel at the top
- launch on GitHub + LinkedIn/X
- watch stars, forks, installs, inbound questions, and repeated usage

### Phase 2 — hosted Motion Director

Build one simple web surface:

```text
brief → treatment → style sequence → timeline → implementation prompt
```

No rendering infrastructure is required to validate the core decision layer.

### Phase 3 — one-click coded prototype

Generate a runnable project from the selected plan.

### Phase 4 — preview + scene regeneration

Let users change:
- one scene
- one style
- one transition
- one message
- one brand constraint

without rebuilding the entire video.

### Phase 5 — rendering + brand kits

Only after users repeatedly create projects should rendering infrastructure and persistent brand systems become the major investment.

## Key validation questions

Early users should tell us which part is most valuable:

- “I don't know which motion style to use.”
- “I can design it, but coding the motion takes too long.”
- “I can generate scenes, but they don't feel consistent.”
- “Rendering and format variants are painful.”
- “My team cannot reproduce our motion identity.”

The product should grow around the strongest repeated pain.

## Product principle

The competitive advantage is not **more templates**.

It is a reusable **motion-design reasoning system** that turns creative direction into editable code.
