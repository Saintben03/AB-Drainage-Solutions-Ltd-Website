---
name: ab-drainage hero van livery compositing
description: How to composite AB logos onto the hero van photo so they read as real paintwork, not stickers.
---

# Hero van livery compositing (ImageMagick)

The hero photo's vehicles wear **dark navy `#013D85`** livery with a **white "AB"** mark — NOT
the light-blue brand asset (`#5392B6`, ABsquarelogo / square_clean.png).

**Why:** Earlier attempts used the light-blue square asset directly; on the navy vans it popped as
an obvious flat sticker and the user rejected it twice. Sampling the van's real rear-door panel
showed `#013D85` (white AB on navy). Matching that color is what makes added decals look native.

**How to apply (future hero edits):**
- Build decals as: a *drawn* navy rounded-rect (`-fill "#013D85" -draw roundrectangle`) + the white
  "AB" composited on top. Extract white AB from square_clean.png via `-fuzz ~42% -transparent "#5392B6"`.
- Do NOT recolor the whole square with high `-fuzz` (>~50%) — it also recolors the white letters and
  you lose the AB (came out as a solid navy block).
- Place with `-distort Perspective` matching each van's *actual* body-line slope. The middle van is
  near-broadside so the skew is gentle (front/right edge slightly taller, lines slope down toward the
  front); extreme skew looks wrong. Keep decals on flat panels, off windows/door gaps.
- The clean source is `attached_assets/site_files_1/AB Drainage background_edited.jpg`; the edited
  hero the site imports is `...background_logos.jpg` (overwrite it — Home.tsx already imports that path).
- `artifacts/ab-drainage/public/opengraph.jpg` auto-regenerates from the hero on workflow restart; no
  need to edit it by hand.

## Removing the middle-van navy "blob" (inpaint)
There is NO clean source — BOTH `background.png` (3648x2432) and `background_edited.jpg` (3000x1697)
already have the navy teardrop "blob" baked onto the middle van's door. So the blob must be inpainted.

**Why earlier fills looked like a grey rectangle:** the blob is wedged with a navy livery panel on its
LEFT and the front-door window on its RIGHT — there is no white-door margin on either side. Feathering
the patch sideways made its edges semi-transparent *over the navy blob*, which blended to grey-blue.
- Fix: fill the patch SOLID/opaque edge-to-edge horizontally (the navy panel and the dark window are
  natural hard borders), and feather ONLY the top and bottom (into roof / lower door).
- Door white there is ~210-213 near the top fading to ~176 lower; add a thin dark strip (~#6d6f6e) at the
  very top to preserve the roof drip-rail line.
- Judge the result at real display scale, NOT at 1:1 — the hero downscales 3000px to ~700px on screen,
  so a patch that looks rough zoomed-in is invisible in situ.

**Scania roof mark:** the cab roof slopes DOWN to the right (follow the orange beacon bar). Tilt the AB
tile down-right ~10° to match; an up-right tilt reads as wrong/floating.
