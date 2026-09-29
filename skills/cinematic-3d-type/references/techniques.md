# Cinematic 3D Type — Signature Techniques

## 01 · Depth Rise

Extruded letters rise from or through a plane into volumetric space.

**Implementation:** Animate z/height from a shared baseline and reveal side faces gradually.

## 02 · Hero Orbit

Camera arcs around a stable title to reveal extrusion and depth.

**Implementation:** Keep focal target fixed and limit orbit to the angle needed to show form.

## 03 · O-Portal Flythrough

Camera moves through a circular counter or ring into the next scene.

**Implementation:** Match aperture size and center to the next environment.

## 04 · Light Sweep

A narrow highlight traverses letter faces and edges.

**Implementation:** Animate light or shader direction, not a fake flat gradient when true depth exists.

## 05 · Fog Reveal

Atmosphere hides distant geometry that emerges as camera approaches.

**Implementation:** Use depth-based fog with restrained density.

## 06 · Parallax Stack

Foreground, hero type and background planes separate at different camera rates.

**Implementation:** Keep motion coherent with one camera path.

## 07 · Extrusion Pulse

Depth briefly increases on impact while front faces remain anchored.

**Implementation:** Use subtle overshoot; avoid rubbery text.

## 08 · Shadow Horizon

Long shadows or a horizon line establish scale before title reveal.

**Implementation:** Keep light direction consistent.

## 09 · Depth Rack

Focus or visual emphasis shifts between near and far type layers.

**Implementation:** If real DOF is unavailable, emulate sparingly with blur/contrast.

## 10 · Letter Canyon

Oversized characters form walls the camera travels between.

**Implementation:** Maintain readable glimpses of the phrase before/after immersion.

## 11 · Dust Volume

Sparse particles reveal light shafts and camera motion.

**Implementation:** Use low density; particles are atmosphere, not the subject.

## 12 · Face-On Resolve

After spatial movement, camera settles into a readable frontal composition.

**Implementation:** Hold long enough for the title to be read.

## Selection rule

For short scenes, combine 2–4 techniques around one hero transformation.
