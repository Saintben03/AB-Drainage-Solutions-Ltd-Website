---
name: ab-drainage mobile top divider (grey seam)
description: Why the mobile hero→Trusted divider kept rendering grey and the durable fix.
---

# Mobile top divider (hero → Trusted By) grey-seam bug

**Symptom (recurring):** the divider between the dark hero photo and the light-blue
`bg-sky-100` (#e0f2fe / rgb(223,242,254)) "Trusted By" section renders as a washed
**grey band** (~rgb(200,216,226)) instead of light-blue.

**Root cause:** a LIGHT-coloured wave (fill #e0f2fe) laid ON TOP of the dark hero
gets composited/darkened to grey. Any pale fill placed over the dark photo washes out
— tweaking gradient/edge/shimmer/z-index never reliably kills it. This is a whole
class of bug: *light-over-dark = grey*.

**Durable fix (do this, don't relitigate):** mirror the proven working BOTTOM divider.
Use a DARK wave rendered INSIDE the Trusted `<section>`, at the top, vertically flipped:
`WaterWave className="absolute -top-px left-0 w-full z-[5] [transform:scaleY(-1)] md:hidden" fill="hsl(0 0% 11%)" edgeColor="#bae6fd"`.
The dark hero crests DOWN into the light-blue band with a #bae6fd foam edge; the
light-blue is the section's real background showing through the troughs. No pale colour
is ever composited over the photo, so it cannot go grey.

**Why:** the bottom divider (dark wave over light section) has always looked clean;
the top one only broke because it was light-over-dark. Making the top a dark/flipped
wave applies the same working mechanism.

**How to apply:**
- Bump the Trusted section mobile top padding so content clears the in-section wave:
  `pt-20 md:pt-4` (desktop keeps pt-4; the top wave is `md:hidden`, desktop uses the
  schedule-strip wave instead).
- Verified transition (pixel-sampled): dark(28,28,28) → foam(185,218,237) →
  true light-blue(224,242,254). Grey gone.
- If a faint seam appears on a specific device, tune ONLY the dark fill (e.g. `#000`
  vs `hsl(0 0% 11%)`) — never revert to a light-over-dark wave.

**Verifying the seam is hard:** hero is `min-h-[92vh]`, so vh scales with the capture
viewport and the seam always lands under the fixed cookie banner (localStorage key
`ab_site_consent`, fresh every screenshot). To capture it, temporarily shrink the hero
min-h (e.g. `min-h-[38vh]`), screenshot ~[402,1200], pixel-sample the seam, then REVERT
the min-h.
