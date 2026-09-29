# Motion Director Scene Schema

A structured scene format gives Motion Director a stable bridge between creative direction and implementation.

## Goals

The schema should:
- preserve the story role of every scene
- identify the selected motion language
- name the techniques being used
- define timing explicitly
- describe continuity between scenes
- remain renderer-agnostic

## Draft project shape

```json
{
  "project": {
    "title": "Example Launch Film",
    "duration": 30,
    "fps": 30,
    "aspect_ratio": "16:9"
  },
  "direction": {
    "concept": "From complexity to control",
    "tone": ["precise", "technical", "premium"]
  },
  "scenes": [
    {
      "id": "scene-01",
      "start": 0,
      "end": 4,
      "role": "hook",
      "style": "kinetic-typography",
      "motion_engine": "letters",
      "message": "SHIP FASTER",
      "techniques": [
        "word-slam",
        "split-reveal"
      ],
      "hero_frame": 3.2,
      "transition_in": null,
      "transition_out": {
        "recipe": "o-to-circle",
        "handoff_object": "O"
      },
      "implementation": {
        "preferred": ["html", "css", "gsap", "svg"],
        "requires_3d": false
      }
    }
  ]
}
```

## Required scene fields

### `role`

Why the scene exists.

Examples:
- hook
- problem
- explanation
- proof
- product
- transformation
- hero
- CTA

### `style`

Must map to a skill in the catalogue.

### `motion_engine`

The causal system behind the style. This should agree with the selected skill.

### `techniques`

Use stable technique identifiers where possible.

### `hero_frame`

A useful timestamp for:
- thumbnails
- storyboard extraction
- visual QA
- review

### `transition_out`

Should describe continuity rather than merely naming an effect.

Good:

```json
{
  "recipe": "o-to-circle",
  "handoff_object": "O"
}
```

Weak:

```json
{
  "recipe": "fade"
}
```

## Future fields

Potential additions:
- brand-kit reference
- required assets
- product screenshot coordinates
- music bar / beat
- voiceover line
- safe-area constraints
- data source
- factual claim source
- render dependencies
- scene status
- review comments

## Principle

The schema is not meant to replace creative direction.

It is meant to make creative direction **executable, editable, and inspectable**.
