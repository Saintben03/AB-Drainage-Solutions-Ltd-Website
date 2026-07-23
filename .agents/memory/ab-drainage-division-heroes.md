---
name: ab-drainage division hero images
description: Which hero images the client wants on the three AB Group division pages, and the anti-flash boot guard for division domains.
---

The client wants the ORIGINAL AI-generated heroes on the three division pages, NOT real client photos:
- Construction: digger/excavator (`attached_assets/construction/const-gallery-excavation.png`)
- Fencing: dusk garden with modern black fencing + LED lighting (`attached_assets/fencing/fence-hero.png`)
- Facilities: dark office hallway (Unsplash `photo-1497366216548-37526070297c` URL, no local asset)

**Why:** A commit replaced AI heroes with real client photos (roof deck / patio / optician) and the client rejected all three. The two PNGs were later deleted by an asset cleanup and had to be restored from git history — don't remove them again.

**Anti-flash guard:** division domains serve the prerendered AB Drainage home HTML at `/`, causing a ~1s wrong-site flash before hydration. `index.html` has an inline script that adds `html.division-boot` (hides `#root`, dark bg) when hostname matches a division domain; `App.tsx` Router removes the class once the division renders. Keep hooks above the early returns in Router.

**Dev preview screenshots can show stale page renders** even after HMR/restart — verify via curl of the transformed module and the production build output instead.
