---
name: ab-drainage section dividers
description: Divider/transition motifs used to avoid flat straight section boundaries, and the shared fill-matching rule.
---

# Section dividers

The site deliberately breaks up flat section boundaries with several divider motifs:

- **WaterWave** (`components/WaterWave.tsx`) — animated curved water crest, used site-wide.
- **AngledEdge** (`components/AngledEdge.tsx`) — crisp diagonal wedge; `position` top/bottom, `fill`, optional `line` hairline. Used on the Home PHOTO STRIP to blend the white FAQ above (#ffffff) and the dark AB Group below (zinc-950 #09090b).
- **DiagonalDivider** (in `ABGroupConstruction.tsx`) and **SteppedDivider** (in `ABGroupFacilities.tsx`) — page-local shapes.

**Invariant (applies to ALL of them):** the divider `fill` MUST equal the colour of the section it transitions INTO, or the shape reads as a mismatched band instead of a clean seam. WaterWave fill = next section top colour; AngledEdge top-fill = section above, bottom-fill = section below.

**Why:** these are overlays on top of a photo/section, not gaps — a wrong fill shows as an obvious coloured stripe.

**How to apply:** when adding a divider, look up the adjacent section's bg colour and pass it as `fill`. Add `-mt-px`/`-mb-px` to kill sub-pixel seams.
