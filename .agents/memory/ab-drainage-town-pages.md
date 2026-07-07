---
name: ab-drainage local town pages
description: The per-town local SEO landing pages and why the structure was chosen.
---

# ab-drainage local town pages

- Route `/areas/:town` → `src/pages/TownArea.tsx`, data in `src/data/areas.ts` (15 Hampshire/Berkshire towns, each with intro paragraphs, nearby towns, a local note, county, and sewerage provider).
- `Areas.tsx` town grid links each card to `/areas/${slug}`; town pages cross-link to nearby towns and back to `/areas` (internal linking for SEO).
- Each town page emits per-page `SEO` (title/description/canonical/keywords) plus a visible FAQ with `FAQPage` JSON-LD via `FaqSection`.

**Why 15 rich pages, not 120 service×town combos:** thin, near-duplicate service×town pages trip Google's doorway-page penalty. Fewer genuinely-unique local pages rank better and are safer.

**How to apply:** to add a town, append to `towns` in `data/areas.ts` (unique slug, real local content), add its URL to `public/sitemap.xml`, and it is auto-picked up by the prerender route list in `entry-server.tsx`. Keep intro/localNote genuinely town-specific, not boilerplate with the name swapped.
