---
name: ab-drainage mobile grey seam (hero → Trusted By)
description: Root cause + fix for the recurring grey band at the mobile hero/Trusted-By seam.
---

# Recurring grey band at mobile hero → Trusted By seam

**Symptom:** On mobile only, a grey band (~rgb(185,199,208), i.e. #e0f2fe darkened ~18%)
appears at the seam between the hero and the light-blue `bg-sky-100` (#e0f2fe) Trusted By
section. Has recurred multiple times; earlier "fixes" kept relocating the grey.

**Confirmed root cause (via red-wave pixel probe):** The hero's mobile WaterWave is filled
solid #e0f2fe (`waveFillMobile` on Home). The hero heading has a soft legibility scrim in
PageHero — `div.absolute.-inset-x-8.-inset-y-10.bg-black/40.blur-3xl ... -z-10` — which lives
inside the **z-10 content layer**. `blur-3xl` (~64px) makes its bottom edge bleed DOWN onto
the wave. Because the wave was `z-[5]` (below the content layer), the black blur multiplied
the light-blue wave into grey. On other pages the wave is dark (#01618E) so the same bleed is
invisible — only Home's light mobile wave exposes it.

**Why past fixes failed:** Adding a `#e0f2fe → transparent` fade/backing just moves the
problem — ANY fade from light-blue into the dark hero renders as a grey-blue gradient.
WaterWave's own fill is a flat opaque shape when `edgeColor === fill`; it is NOT the source.

**Fix that works:** raise the mobile light wave above the content/scrim layer
(`z-[5]` → `z-[11]`) so nothing composites over it. Verified: wave renders true #e0f2fe
(224,242,254) at crest peaks AND troughs, clean hard edge to the dark hero, seamless into
Trusted By. Also shortened h-32 → h-24 (keeps crest clear of stats). Safe because no hero
content sits in the bottom wave strip.

**Why (principle):** a light-coloured wave/divider must sit ABOVE any blurred dark scrim in
the hero, or the blur bleed darkens it into grey. Don't try to fix it with fades — fades over
dark are grey by definition.

**Debugging tooling that worked:**
- Preview proxy caches screenshot frames — change the viewport size (e.g. 412x1180 → 414x1180)
  to bust the cache; identical byte-for-byte pixels across shots = stale cache, not "no change".
- Sample seam colours with ImageMagick: `convert shot.jpg -format "%[pixel:p{x,y}]" info:`.
- To locate/diagnose a wave overlay, temporarily set its fill to pure red and sample — if red
  reads darker than 255, something semi-transparent is compositing over it.
- The seam is below the fold (hero is min-h-[92vh]) and the fixed cookie banner (SiteNotice)
  covers it; to capture it, temporarily disable SiteNotice + use a tall viewport (min-h alone
  won't shrink the hero — its height is content-driven). Revert both after.
