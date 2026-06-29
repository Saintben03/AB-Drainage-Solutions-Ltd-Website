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
