# Isometric — Signature Techniques

Use these as a vocabulary, not a checklist.

## 01 · Tile Wave

Ground tiles appear in a directional wave.

**Implementation:** Use diagonal row/column delays matching isometric axes.

## 02 · Voxel Letter

Build a letter or icon cube-by-cube.

**Implementation:** Resolve quickly enough that the symbol becomes readable.

## 03 · Cylinder Rise

A cylinder grows vertically from a tile, often as a node or control.

**Implementation:** Animate height from its base to preserve grounding.

## 04 · Module Drop

Blocks fall into exact grid positions with short impact.

**Implementation:** Use limited bounce unless toy-like physics is intended.

## 05 · Path Pulse

A route lights tile-to-tile through the system.

**Implementation:** Use sequential emissive or fill changes.

## 06 · Stack State

A module gains layers as capacity or progress increases.

**Implementation:** Each layer should align exactly to the base footprint.

## 07 · Explode/Reassemble

Separate modules along isometric axes, then rebuild in a new arrangement.

**Implementation:** Keep component identities consistent.

## 08 · Camera Quarter-Pan

Move camera or scene along one isometric axis to reveal the next zone.

**Implementation:** Avoid arbitrary orbit that breaks orientation.

## 09 · Pad Press

A raised control tile depresses and triggers system change.

**Implementation:** Animate adjacent modules only after contact.

## 10 · Block Re-rank

Columns change height or order while staying locked to cells.

**Implementation:** Good bridge from data visualization.

## 11 · World Unfold

Flat tiles hinge upward into structures.

**Implementation:** Use consistent hinge axes.

## 12 · Portal Tile

One tile opens, melts or becomes the next style's dominant shape.

**Implementation:** Use as a clean transition anchor.

## Selection rule

For a short scene, 2–4 techniques are usually enough. Simplify when technique count starts competing with the message.
