---
name: ab-drainage hero photo source
description: Which hero photo to use and why composited fake AB tiles were abandoned.
---

# Hero photo: use the pristine original, not composited tiles

The hero must use the **pristine company photo** `attached_assets/site_files_1/AB Drainage background.png`
(3648x2432). It already has AUTHENTIC AB livery on all the vans (white AB + blue swoosh/circle decals)
and a clean white Scania. Center-fill crop to 3000x1697 and save as JPG `AB Drainage background_logos.jpg`
(the path Home.tsx imports): `magick ORIG -resize 3000x1697^ -gravity center -extent 3000x1697 -strip -interlace Plane -quality 86 OUT`.

**Why:** I spent many turns compositing fake brand-blue AB "tiles" (drawn rounded-rects + white AB) onto
the vans' doors and the Scania roof. Every version read as a pasted-on sticker; the user called the
result "awful" — the floating Scania roof tile was the worst. The `_edited.jpg` variant also had ugly
flat-navy blobs where the real livery decals are. The pristine PNG has none of these problems.

**How to apply:**
- Do NOT add synthetic AB decals/tiles to the vehicles. The vans already carry real AB branding; the
  Scania is authentically plain white. Authentic > more-logos.
- If the user wants the hero changed, start from the pristine PNG, not from `_edited.jpg` or the current
  composited JPG.
- `opengraph.jpg` auto-regenerates from the hero on restart; don't hand-edit it.
