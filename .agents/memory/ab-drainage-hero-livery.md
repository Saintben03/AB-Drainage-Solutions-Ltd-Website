---
name: ab-drainage hero photo source
description: Which hero photo to use, why white-out attempts fail, and how to composite logos that look natural.
---

# Hero photo: use the pristine original, not composited tiles

The hero must use the **pristine company photo** `attached_assets/site_files_1/AB Drainage background.png`
(3648x2432). It already has AUTHENTIC AB livery on all the vans (white AB + blue swoosh/circle decals)
and a clean white Scania. Center-fill crop to 3000x1697 and save as JPG `AB Drainage background_logos.jpg`
(the path Home.tsx imports):
```
magick PRISTINE -gravity Center -crop 3000x1697+0+0 +repage hero_base.jpg
```
(pristine is 3648x2432; center crop gives the same result as resize+extent at this ratio)

## Coordinate system warning

The pristine is 3648x2432. The hero JPG is 3000x1697, center-cropped from pristine:
- pristine_x = hero_x + 324; pristine_y = hero_y + 367.
- Always work in HERO (3000x1697) coordinates when editing the hero file directly.
- Never crop/sample from the pristine file and assume those are hero coordinates.

## White-out attempts always look fake — do NOT do them

Tried to "white out" the blue circle van livery (blue swoosh + AB + circle → flat white fill).
Results were always terrible: a visible flat rectangle that looked obviously pasted in, clearly not
matching van body shading/texture. Even with feathered masks and color-matched fill, the flat patch is
obvious at hero scale.

**Rule: never use flat-fill white-out on van livery.** The user called both attempts "awful" / "a joke."

## Correct approach for user-requested logo decals

Place the transparent AB brand logo (`ABsquarelogo.png`, 1188×1188 with alpha, lighter blue #5392B6)
**directly over** the existing blue circle/livery. The transparent rounded corners let the van body show
through; the logo reads as a natural branded decal over the blue panel. Covers the original AB letters
and most of the circle. Looks like a real rebranded vehicle decal.

Make logo corners transparent BEFORE compositing (white background bleeds as white box otherwise):
```
magick sqlogo.png -alpha set -fuzz 22% \
  -fill none -draw 'alpha 0,0 floodfill' -draw 'alpha 1187,0 floodfill' \
  -draw 'alpha 0,1187 floodfill' -draw 'alpha 1187,1187 floodfill' logoT.png
```

## Hero text overlay zone — keep logos OUT of left portion

The hero CSS applies a dark gradient overlay on the LEFT side (where the headline text lives).
Any logo in hero x < ~1500 (screen x < ~640 at 1280 viewport) will sit behind/under the text.
**Only place logos in hero x > 1600** to stay in the clear right-hand zone.

The hero uses `object-cover object-bottom` + kenburns. At 1280-wide desktop:
- scale = 0.427 (1280/3000)
- topcut ≈ 360 hero-px (object-bottom with ~570px tall hero)
- screen_x = hero_x × 0.427; screen_y = (hero_y − 360) × 0.427

Known safe logo positions (hero coords):
- Middle van circle centre: ~(1815, 870). Logo 360×360 at +1635+690.
- FPSO van white body panel: centre ~(2000, 1140). Logo 140×140 at +1930+1070.
- Scania cab roof (perspective): quad TL(2402,416) TR(2606,412) BR(2616,464) BL(2396,468).

## opengraph.jpg

Auto-regenerates from the hero on workflow restart; don't hand-edit it.
