---
name: ab-drainage hero video scene preference
description: What the client wants the Home desktop hero video to depict — and the scenes they rejected.
---

# Home desktop hero video — preferred scene

**Client's preferred scene (current, the one that stuck):** a RESIDENTIAL South England SIDE
STREET — rows of red-brick terraced houses receding down the road. A yellow excavator/digger
parked OFF TO ONE SIDE of the side street (NOT in the middle of the main road), with a workman
in a hard hat + orange hi-vis sitting IN the cab actively OPERATING THE CONTROLS — the bucket
arm moving up then down in a natural digging motion. Bright orange/white + yellow/red hi-vis
safety barriers and traffic cones close off the side street around the work. A burst underground
water main gushes and flows across the wet tarmac.

**Why:** the client said the earlier head-in-hands version "looks funny / too AI". They want a
believable working scene — operator doing real work, proper site safety (barriers), on a side
street rather than blocking the main road.

**Scenes the client REJECTED — do not drift back to these:**
- Workman with his HEAD IN HIS HANDS / slumped / dejected in the cab. Looked funny/too AI.
  (This was the prior "stuck" preference — it FLIPPED. Operator must look like he's working.)
- Digger sitting in the MIDDLE of the road. Must be to the side, on a side street.
- Work area with NO hi-vis barriers. Barriers/cones blocking the side street are required.
- Office building / glass corporate tower backdrop. Too corporate — keep it residential.
- Exaggerated shocked/gasping facial expressions.

**How to apply:** when regenerating, keep it a residential side street with terraced houses +
burst main flowing + operator working the digger controls (bucket up/down) + hi-vis barriers
closing the street. Add a `negativePrompt` covering: head in hands, idle/distressed worker,
digger in middle of road, no barriers, dry road, office/skyscraper/glass tower. Landscape 16:9,
1080p, 8s.

**Asset pipeline (desktop hero):** generate raw → `ffmpeg -an -vf scale=1920:-2 -c:v libx264
-crf 30 -preset veryslow -movflags +faststart -pix_fmt yuv420p` (lands ~6MB) → extract a poster
frame (`ffmpeg -ss 2 -frames:v 1`), `magick ... -strip -quality 85` jpg → wire both into
Home.tsx hero imports (`heroPipePoster` = poster jpg, `heroPipeVideo` = compressed mp4) → delete
the old + raw assets → typecheck. Desktop-only: mobile hero uses its own close-up
`drain_water_burst_loop`. NOTE: `imageAlt` IS now rendered (an `sr-only` span in PageHero), so
keep the alt text accurate to the scene.
