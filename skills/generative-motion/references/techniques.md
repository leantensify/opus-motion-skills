# Generative Motion — Signature Techniques

## 01 · Flow Field

Agents move through a vector field that creates coherent swirls or streams.

**Implementation:** Seed initial positions and derive vectors from deterministic noise or analytic fields.

## 02 · Target Sampling

Sample pixels or path points from text/shape and assign particles to targets.

**Implementation:** Use stable assignment to avoid unnecessary crossing.

## 03 · Attractor Pull

Particles accelerate toward one or more attractor points.

**Implementation:** Clamp forces and damping to maintain controllable trajectories.

## 04 · Explode/Reform

A readable target disperses, traverses a field, then assembles into a new target.

**Implementation:** Keep one phase of readable hold between transformations.

## 05 · Ring Formation

Particles converge onto a circular radius with controlled angular spacing.

**Implementation:** Assign target angle per particle deterministically.

## 06 · Trail Field

Agents leave fading trails that reveal vector direction.

**Implementation:** Use accumulation buffer or short history; prevent muddy overdraw.

## 07 · Density Wave

Local particle density changes propagate through the field.

**Implementation:** Drive via distance-to-wavefront rather than per-particle random timing.

## 08 · Seeded Burst

A burst varies direction/speed using a fixed seed.

**Implementation:** Replays must produce identical frames.

## 09 · Text Assembly

Thousands of particles form typography sampled from a rasterized text mask.

**Implementation:** Oversample important edges and counters for readability.

## 10 · State Morph

System interpolates between target sets such as word → ring → icon → word.

**Implementation:** Maintain particle identity across states.

## 11 · Field Collapse

All agents spiral or fall into a single point for a decisive end.

**Implementation:** Reduce entropy and velocity as radius approaches zero.

## 12 · Procedural Color Phase

Color changes follow state, position or velocity rather than random flicker.

**Implementation:** Map palette changes to meaningful system variables.

## Selection rule

For short scenes, combine 2–4 techniques around one hero transformation.
