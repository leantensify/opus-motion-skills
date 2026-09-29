# MotionOS Prototype

A no-build, no-API-key MVP for the product layer of **Opus Motion Skills**.

It turns a natural-language brief into:

- creative diagnosis
- style selection
- story roles
- timed scenes
- technique choices
- transition logic
- implementation stack
- machine-readable scene JSON
- a copyable build prompt for Claude/Opus

## Run locally

From the repository root:

```bash
python3 -m http.server 8080
```

Open:

```text
http://localhost:8080/apps/motionos-prototype/
```

No install step is required.

## Why the first version is deterministic

The MVP deliberately separates **motion direction** from **model generation**.

The local rules engine lets us validate:

1. whether users understand the brief → direction workflow,
2. whether style recommendations feel useful,
3. whether the scene JSON is a good product contract,
4. which part users actually want AI to automate next.

A hosted model layer can replace or augment the decision engine later without changing the UI contract.

## Next build layer

The next technical milestone is:

```text
direction JSON
  ↓
scene compiler
  ↓
selected SKILL.md + references
  ↓
Claude / Opus
  ↓
runnable HTML/CSS/JS motion scene
```

See `docs/MOTION_DIRECTOR_SCHEMA.md` and `docs/PRODUCT_VISION.md`.
