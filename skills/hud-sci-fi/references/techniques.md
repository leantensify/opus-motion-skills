# HUD / Sci-Fi — Signature Techniques

## 01 · Reticle Lock

A targeting reticle converges on a hero object and changes state to LOCKED.

**Implementation:** Animate brackets/arc radius inward, then switch status.

## 02 · Object Track

Bounding brackets follow a moving object with stable ID label.

**Implementation:** Derive position from object bounds; avoid lag unless intentional.

## 03 · Scan Sweep

A line or radial sweep passes across the frame and reveals measurements.

**Implementation:** Only update data as the scan crosses relevant regions.

## 04 · Radar Arc

Rotating sweep highlights blips within a circular radar.

**Implementation:** Time detections to angle intersection.

## 05 · Micro Readout

Compact coordinate, confidence, velocity or status text updates near the tracked object.

**Implementation:** Use plausible formatting and limited precision.

## 06 · Bracket Build

Corner brackets assemble around a region of interest.

**Implementation:** Use short line-growth and snap alignment.

## 07 · Status Toggle

ENGAGE/ACTIVE/LOCK/SCAN states change with clear control feedback.

**Implementation:** Tie state changes to another visible system response.

## 08 · Trajectory Trace

A path predicts or records object motion.

**Implementation:** Use dotted/solid distinction for predicted vs actual when relevant.

## 09 · Grid Scan

Perspective or flat grid illuminates cell-by-cell as data is sampled.

**Implementation:** Keep scan direction consistent.

## 10 · Classification Stack

System cycles through candidate labels then commits to one.

**Implementation:** Show uncertainty briefly; avoid fake precision when content is conceptual.

## 11 · Arc Gauge

Partial circular gauges communicate bounded values around a central object.

**Implementation:** Use start/end angles consistently across gauges.

## 12 · Dissolve-to-Particles

HUD grid/data points detach into a particle field for generative handoff.

**Implementation:** Use actual grid intersections as particle seeds.

## Selection rule

For short scenes, combine 2–4 techniques around one hero transformation.
