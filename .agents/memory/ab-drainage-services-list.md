---
name: ab-drainage services list surfaces
description: Where services are listed sitewide and what to update when adding a service
---

Single source of truth: `services` array in `src/pages/Services.tsx` (Services page grid + detail modals; TownArea & CountyArea map over it automatically).

But three surfaces are hardcoded and must be updated by hand when adding a service:
- `src/pages/Home.tsx` — local `services` tile list (icon/title/tagline/href). Now 8 tiles in `lg:grid-cols-4` (2 rows of 4); keep tile count divisible by 4 or the grid orphans.
- `src/components/Footer.tsx` — "Services" link list (`/services#<id>` anchors).
- Services page `<SEO description>` names example services — keep it in sync.

Detail modal opens via URL hash: link to `/services#<id>` from anywhere. Sitemap needs no change (services live on /services).
