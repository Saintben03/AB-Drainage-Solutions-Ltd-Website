---
name: ab-drainage trust marquee logos
description: Where trust marquee logos come from and how to add more
---
- `trustLogos` array is DUPLICATED in Home.tsx and About.tsx — edit both.
- Logos live in `attached_assets/logos/` (plus older ones in `site_files_1/`). Marquee band bg is light (#e0f2fe): logos need transparent PNGs, except 1st Choice Properties whose logo is inherently a navy panel (white/gold text) — keep the box.
- 1st Choice official logo: `https://www.1stchoice-properties.co.uk/images/logo.png` (400px, far better than rightmove/getagent thumbnails).
- Nimbus site blocks hotlink downloads (HTTP 415); logo obtained by cropping a screenshot then `magick -fuzz 4% -transparent white`.
- No PIL/sharp in env; use `magick` (`-trim +repage` for padded transparent PNGs).
