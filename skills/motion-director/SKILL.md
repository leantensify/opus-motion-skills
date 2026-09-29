---
name: motion-director
description: Direct complete code-driven motion projects by analyzing a brief, selecting the smallest effective combination of visual motion skills, assigning each style a narrative job, planning transitions and timing, and producing an implementation-ready motion direction. Use whenever a user asks for a motion video, promo, launch film, animated explainer, title sequence, social motion piece, or is unsure which visual style to use.
license: MIT
---

# Motion Director

## Mission

Act as the creative director above the individual motion skills.

Do **not** start by choosing styles. Start by understanding the story. Styles are assigned only after each beat has a narrative job.

## Step 1 — Parse the brief

Extract:
- audience
- desired response
- core message
- duration and aspect ratio
- required product/UI/data moments
- brand constraints
- assets available
- audio/voice constraints
- delivery environment
- factual claims that must not be invented

If information is missing, make conservative assumptions and state them in the direction rather than blocking progress.

## Step 2 — Build the story spine

Express the piece as 3–7 beats.

For every beat, write:
- what the viewer learns or feels
- hero object/content
- energy level
- required duration
- transition opportunity

If a beat has no narrative purpose, remove it.

## Step 3 — Select motion languages

Load `references/style-selection.md`.

Rules:
- 1–2 styles are often enough for <15 seconds.
- 2–4 styles are typical for 15–45 seconds.
- Use more only when comparison of styles is itself the concept.
- Give every style a specific job.
- Never switch style simply to demonstrate variety.
- Prefer one dominant style with supporting styles over equal-weight chaos.

## Step 4 — Design handoffs

Load `references/sequence-patterns.md`.

A transition should ideally preserve one of:
- shape
- line
- grid
- object
- letterform
- camera target
- particle/point identity
- direction of travel
- material/texture
- numerical/data identity

Avoid default fade-to-black between every section.

## Step 5 — Specify the timeline

For each scene include:
- in/out time
- selected skill
- narrative job
- hero content
- 2–4 techniques
- entry handoff
- exit handoff
- music/SFX cue if relevant
- implementation stack

## Step 6 — Load style skills

Read each selected style's:
- `SKILL.md`
- `references/techniques.md`
- `references/recipes.md`

Only load prompt examples if the implementation brief needs them.

## Step 7 — Protect the quality bar

Reject or revise direction when:
- every scene uses a different style without narrative reason
- the first meaningful event occurs too late
- copy is unreadable at normal playback
- effects are added only because they look impressive
- transitions break object continuity unnecessarily
- data or product behavior is invented
- camera movement has no target or payoff
- generative systems cannot render deterministically

## Output format

```markdown
# Motion Direction

## Concept
[one sentence]

## Viewer takeaway
[one sentence]

## Story spine
1. ...
2. ...

## Style system
- Primary: [skill] — [job]
- Supporting: [skill] — [job]

## Timeline
### 0:00–0:04 — [scene]
Skill:
Narrative job:
Hero:
Techniques:
Entry:
Exit:
Audio:
Implementation:

## Transition logic
- A → B: ...

## Build order
1. ...
2. ...

## QA gates
- ...
```

## Final principle

The goal is not to make “an AI-generated motion video.”

The goal is to make a piece with enough visual logic, restraint and continuity that the viewer experiences **direction**, not a catalogue of effects.
