---
name: ab-drainage county SEO pages
description: How the 7 surrounding-county landing pages are structured and wired
---

# County landing pages

7 dedicated county pages (Berkshire, Surrey, Sussex, Kent, London, Dorset, Wiltshire) for wider SEO reach, separate from the 15 town pages.

- Data: `src/data/counties.ts` (County[] + `countyBySlug`). Each county has genuinely distinct intro copy, towns[], work emphasis, localNote — written to avoid thin/doorway-page risk. Border counties (Berkshire/Surrey/Wiltshire) framed domestic+commercial; farther ones (Kent/London/Sussex) framed commercial/CCTV.
- Page: `src/pages/CountyArea.tsx` clones TownArea structure (SEO/hero/stats/intro/services/why/FAQ+schema/CTA) plus a "Towns We Cover" band that cross-links to existing town pages when a name matches `towns` data.
- Route: `/areas/county/:county` — MUST be registered BEFORE `/areas/:town` in App.tsx (two-segment path won't collide, order kept defensive).
- Prerender: county routes spread into `entry-server.tsx` routes array (build prerenders them as static HTML).
- Areas.tsx: county badges are now clickable `<Link>`s built from `counties` data (old `borderAreas` const removed). Kept in their own "We Also Operate In" band, NOT merged into town grid (user decision).
- Sitemap: 7 county URLs at priority 0.7 (towns are 0.8).

**Why:** user approved dedicated county pages "if that helps us be seen wider". Counties are secondary/border coverage vs Hampshire towns, so copy is honest about commercial/CCTV emphasis to stay non-spammy.

## emergency flag
County interface has `emergency: boolean`. true = Berkshire/Surrey/Dorset/Wiltshire (run emergency call-outs); false = Sussex/Kent/London (planned commercial/CCTV only). CountyArea.tsx switches stats card, one FAQ Q&A, why-choose card, and SEO description on this flag so pages never claim "24/7 emergency" in planned-only counties (fixes an architect-flagged consistency issue).
