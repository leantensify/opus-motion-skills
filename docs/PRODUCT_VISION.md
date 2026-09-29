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

## Product architecture

### 1. Brief Parser

Extract audience, message, format, duration, assets, constraints, brand rules and required claims.

### 2. Motion Director

Uses `skills/motion-director` to decide:
- story beats
- style roles
- transitions
- pacing
- implementation stack

### 3. Skill Runtime

Loads only the selected Agent Skills and their references.

### 4. Scene Compiler

Converts direction into scene specifications:
- start/end
- content
- selected techniques
- layout state
- transition state
- audio cue
- implementation requirements

### 5. Code Builder

Generates HTML/CSS/JS, GSAP, SVG, Canvas and/or Three.js scenes.

### 6. Preview & Render

Frame-accurate preview, deterministic renders, aspect-ratio variants and export.

### 7. Brand System

Reusable:
- fonts
- colors
- logos
- spacing
- motion personality
- approved transitions
- safe areas
- product UI components

### 8. QA Layer

Checks:
- text readability
- clipping/safe areas
- continuity
- deterministic output
- unsupported assets
- factual/data consistency
- hero-frame quality

## Open-core model

### Open source
- 15 motion style skills
- Motion Director
- examples
- validation
- community-contributed skills

### Product
- visual brief builder
- automatic style selection
- storyboard/timeline UI
- live preview
- code generation
- rendering
- project history
- brand kits
- reusable custom skills
- collaboration

### Future marketplace

Designers could publish specialized motion skills such as:
- luxury editorial
- sports broadcast
- documentary maps
- finance/news graphics
- Y2K
- architectural visualization
- anime title systems
- product UI demo systems

The marketplace should reward genuine motion systems, not shallow prompt presets.

## Product principle

The competitive advantage is not “more templates.”

It is a reusable **motion-design reasoning system** that turns creative direction into code.
