# Swiss / International — Signature Techniques

Use these as a vocabulary, not a checklist. Select the smallest combination that produces a distinct scene.

## 01 · Column Snap

Elements travel only between defined column starts/ends.

**Implementation:** Compute target x positions from grid columns; use short ease-out motion.

## 02 · Rule Expansion

A thin rule grows from one grid line and becomes a divider, mask or next-scene edge.

**Implementation:** Animate scaleX/scaleY from a fixed origin.

## 03 · Modular Flip

Rectangular modules rotate 90° or swap positions while preserving the grid.

**Implementation:** Keep rotation axis aligned to module edges.

## 04 · Circle Anchor

A single circle establishes hierarchy and moves between grid intersections.

**Implementation:** Use it as a visual punctuation mark or transition token.

## 05 · Quarter-Turn Layout

Rotate a type block 90° while another block reflows to occupy its previous space.

**Implementation:** Coordinate rotation with container resize.

## 06 · Crop Window

A grid cell becomes a mask that reveals type, imagery or video.

**Implementation:** Keep mask boundaries aligned to columns/rows.

## 07 · Index Cascade

Numbers or labels populate a margin in sequence.

**Implementation:** Use consistent baseline spacing and restrained stagger.

## 08 · Negative-Space Shift

Instead of moving the hero, move surrounding modules to create a new reading order.

**Implementation:** Animate margins/gaps and grid spans.

## 09 · Poster Build

Construct the frame from rule → index → headline → circle → secondary text.

**Implementation:** Use a fixed reveal order so hierarchy is legible.

## 10 · Grid Dissolve

Break a large object into grid modules that become the next layout.

**Implementation:** Map each fragment to a destination cell.

## 11 · Axis Rotation

Rotate geometric pieces around precise centers, often quarter- or half-turns.

**Implementation:** Use exact angles and avoid springy easing.

## 12 · Typographic Reflow

Move words between columns while retaining baseline relationships.

**Implementation:** Animate container widths and line breaks where possible rather than independent word drift.

## Selection rule

For a short scene, 2–4 techniques are usually enough. If more than five are active simultaneously, simplify unless the deliberate goal is controlled overload.
