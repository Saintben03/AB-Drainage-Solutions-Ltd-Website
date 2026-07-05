---
name: ab-drainage hero video scene preference
description: What the client wants the Home desktop hero video to depict — and the scenes they rejected.
---

# Home desktop hero video — preferred scene

**Client's preferred scene (the one that stuck):** a RESIDENTIAL South England street —
rows of red-brick terraced houses receding down the road — with a burst underground water
main gushing high into the air and flooding the street, a yellow excavator/digger in shot,
and a workman in a hard hat + orange hi-vis slumped in the digger cab with his **head in his
hands** (dejected). Face expression is NOT important; the posture sells it.

**Why:** the client explicitly said the corporate/office version "looks terrible" and asked
for "the previous animation back" — meaning the original residential-street burst-main scene,
just with the workman added. They value the relatable British-street setting over a slick
corporate tower.

**Scenes the client REJECTED — do not drift back to these:**
- Office building / glass corporate tower backdrop (the "office_digger_operator" and
  "office_building_digger_pipe_burst" versions). Too corporate.
- A shocked/gasping operator with an exaggerated facial expression. They don't want the face
  to be the focus — head-in-hands body language is better.

**How to apply:** when regenerating the hero video, keep it a residential street with houses
down the street + burst main + dejected workman in the digger. Add `negativePrompt` for
"office building, skyscraper, glass tower, corporate tower". Landscape 16:9, 1080p, 8s.

**Asset pipeline (desktop hero):** generate raw → `ffmpeg -an -vf scale=1920:-2 -c:v libx264
-crf 30 -preset veryslow -movflags +faststart -pix_fmt yuv420p` (lands ~4-6MB) → extract a
poster frame, `magick ... -strip -quality 85` jpg → wire both into Home.tsx hero imports
(`heroPipePoster` = poster jpg, `heroPipeVideo` = compressed mp4) → delete the old + raw
assets → typecheck. Desktop-only: mobile hero uses its own close-up `drain_water_burst_loop`.
