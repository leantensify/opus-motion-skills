# Pixel Art — Signature Techniques

## 01 · Sprite Run

A character crosses the frame using a short looping run cycle.

**Implementation:** Advance integer x positions and 4–8 authored animation frames.

## 02 · Platform Letter

Letters or words become physical platforms in the world.

**Implementation:** Align glyph blocks to the tile grid.

## 03 · Coin Pickup

A circular token spins, gets collected and updates score or state.

**Implementation:** Use a short 4–6 frame spin and immediate UI feedback.

## 04 · Tile Reveal

Tiles appear, break or flip to expose a route or message.

**Implementation:** Operate in whole-cell units.

## 05 · Jump Arc

A sprite follows a simple parabolic jump onto a word/platform.

**Implementation:** Quantize sampled positions to integer pixels.

## 06 · Blink Prompt

START, PLAY or PRESS KEY flashes on a fixed cadence.

**Implementation:** Use binary on/off or a two-state palette swap.

## 07 · Score Tick

Score increments in chunky jumps tied to pickups or milestones.

**Implementation:** Use fixed-width pixel numerals.

## 08 · Palette Swap

The same scene switches palette to signal state, level or power-up.

**Implementation:** Change indexed colors, not arbitrary per-object recoloring.

## 09 · Screen Shake

Short global integer offsets emphasize impact.

**Implementation:** Limit to 2–4 frames; return exactly to origin.

## 10 · Pixel Dissolve

Objects break into grid-aligned pixel clusters.

**Implementation:** Use structured clusters or scanline order, not random noise.

## 11 · Parallax Tiles

Background tile layers move at integer ratios.

**Implementation:** Keep movement slow enough to avoid shimmer.

## 12 · Boss Reveal

Large pixel object assembles from tiles or scrolls into the tiny world.

**Implementation:** Use scale contrast while preserving pixel size.

## Selection rule

Use 2–4 techniques for most short scenes. A recognizable system is stronger than a catalogue of effects.
