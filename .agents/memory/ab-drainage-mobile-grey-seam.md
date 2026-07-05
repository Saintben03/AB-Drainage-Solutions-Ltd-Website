---
name: ab-drainage mobile grey seam (hero → Trusted By)
description: Why the mobile hero→Trusted-By transition kept looking wrong, and the final layout that fixed it for good.
---

# Mobile hero → Trusted By transition (Home)

**History of the problem:** On mobile only, the seam between the hero and the light-blue
`bg-sky-100` Trusted By section looked wrong — first a grey band, then an empty flat
light-grey strip that read as a dead "empty section". Root cause of the grey tint was the
hero heading's blurred black legibility scrim (`bg-black/40 blur-3xl`) bleeding DOWN onto a
light `#e0f2fe` WaterWave that used to sit at the hero's bottom. Re-layering the wave above
the scrim (z-[11]) killed the grey, but the light wave + hero bottom padding still read as an
empty light strip the client disliked.

**Final fix (the one that stuck):** stop drawing ANY wave at the bottom of the mobile hero.
Let the dark hero photo run all the way to the section edge, then render the flowing divider
as the TOP of the Trusted By section instead.

- PageHero: the `waveFillMobile` prop is now just a **Home-only flag** — when set, the hero
  renders only the desktop base wave (`hidden md:block`) and NO mobile wave.
- Home: a mobile-only (`md:hidden`) `WaterWave` is rendered as a **sibling immediately before**
  the Trusted By `<section>`, with `relative -mt-20 h-20`, fill `#e0f2fe`, edgeColor `#bae6fd`.
  The negative margin pulls it up so sky-100 water crests over the bottom of the dark hero
  photo, matching the flowing wave at the base of that section.

**Why a sibling, not inside the section:** the Trusted By section has `overflow-hidden`
(needed for the logo marquee + its bottom wave), which would CLIP any inner top wave that
tries to overlap the hero above it. A sibling with negative margin overlaps the hero without
being clipped, and paints on top because it comes later in the DOM.

**Desktop is untouched:** on desktop the Trusted By transition still comes from the schedule
strip's `#e0f2fe` bottom wave (that strip is `hidden md:block`, i.e. mobile-hidden), so the
new mobile sibling wave (`md:hidden`) and the desktop strip never both show.

**Principle:** a hero that is a PHOTO can't hand off to a solid-colour section with a solid
wave without a visible seam. The trick that works is a wave filled with the DESTINATION
(solid) colour rising UP into the photo — the photo shows through the transparent troughs, so
the seam reads as organic water, not a mismatched band. Fades from light into the dark photo
always render grey; don't use them.

**Debugging note:** this seam sits at ~92vh, below the mobile fold, and the fixed cookie
banner (SiteNotice) covers it. To screenshot it, use a very tall mobile viewport (e.g.
402x2950) so 92vh pushes the seam just above the banner — or temporarily disable SiteNotice.
Preview proxy caches frames: vary the viewport size between shots to bust the cache.
