# Motion Director

## Purpose

Choose and sequence motion-design styles for a brief before implementation begins.

This skill coordinates the 15 style skills in this repository. It should not default to using all of them. Select the smallest combination that makes the story stronger.

## Input

Extract:
- goal
- audience
- duration
- aspect ratio
- core message
- required product/UI moments
- available assets
- tone
- audio constraints
- delivery environment

## Style selection

Choose styles based on the **motion engine**, not surface decoration.

| Need | Strong candidates |
|---|---|
| Immediate hook | Kinetic Typography, Brutalist Web |
| Precision / premium editorial | Swiss / International |
| Technical construction | Blueprint |
| Developer / AI coding | Terminal |
| Metrics / proof | Data Visualization |
| Systems / modularity | Isometric |
| Organic transformation | Liquid Morph |
| Tactile editorial | Paper Cut / Collage |
| Playfulness / game language | Pixel Art |
| Human ideation | Hand-Drawn Sketch |
| Nostalgia / technology history | Retro Futurism |
| Premium hero moment | Cinematic 3D Type |
| Intelligence / tracking | HUD / Sci-Fi |
| Emergence / finale | Generative Motion |

## Sequence rules

1. Use 1–4 styles for most short videos.
2. Give each chosen style a narrative job.
3. Never switch style only to show variety.
4. Hand off between styles through a shared object, geometry, word, line, camera move, or texture.
5. Alternate density, scale, brightness, or speed to create contrast.
6. Reserve the most visually expensive style for a meaningful moment.
7. End on the clearest statement, not the busiest frame.

## Workflow

### 1. Write the story spine

Express the video as 3–7 beats.

### 2. Assign visual jobs

For each beat, specify:
- style
- motion engine
- hero object
- transition in
- transition out
- duration
- audio cue if relevant

### 3. Challenge the choices

Remove any style that does not add meaning.

### 4. Build

Load the chosen style skills and follow their constraints.

### 5. QA

Check:
- Can the story be understood muted?
- Does every transition have a visual cause?
- Is there at least one memorable hero frame?
- Are typography and UI readable at delivery size?
- Does the piece avoid generic slideshow behavior?

## Output format

```markdown
## Motion Direction

### Concept
[one sentence]

### Style sequence
1. [STYLE] — [narrative job]
2. [STYLE] — [narrative job]

### Timeline
0–Xs — ...
X–Ys — ...

### Transitions
- A → B: ...

### Implementation
- ...

### QA targets
- ...
```
