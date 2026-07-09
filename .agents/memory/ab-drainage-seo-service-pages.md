---
name: ab-drainage SEO service pages
description: How the 6 dedicated SEO service pages, FAQ page, and JSON-LD are wired; E-E-A-T bio gap.
---
- 6 service pages live at TOP-LEVEL slugs (/blocked-drains etc.), data in src/data/servicePages.ts; rendered by ServicePage.tsx. Add new pages there — routes/prerender/sitemap pick up via servicePages array (App.tsx map + entry-server.tsx + public/sitemap.xml which is manual).
- **Why:** top-level slugs chosen for SEO; they sit before NotFound route, so any new top-level page slug must not collide with them.
- Area page (TownArea/CountyArea) service tiles link via servicePageByServiceId(), falling back to /services#id.
- Site-level LocalBusiness JSON-LD is on Home only; ServicePage emits Service + WebPage(dateModified from CONTENT_UPDATED_ISO). FaqSection auto-emits FAQPage schema.
- CLIENT RULE: do NOT name owner Louis Barnett anywhere on the site (client explicitly rejected it, July 2026). About page instead says the firm works from two bases: Hampshire and East Sussex. AggregateRating/Review schema deliberately omitted (no verified review data).
- Google reviews status (July 2026): Louis's Google reviews were removed from his profile; client has an open case with Google to reinstate them. Once reinstated, add GBP URL to LocalBusiness sameAs on Home and consider review-related schema — not before.
- Update CONTENT_UPDATED/CONTENT_UPDATED_ISO in servicePages.ts + sitemap lastmod when content changes.

## Areas expansion (July 2026)
- areas.ts holds 85 towns across 9 counties; counties.ts has 10 county pages (incl. London extra). Old /areas/county/sussex removed — split into west-sussex/east-sussex.
- London county lists district labels (Greater London etc.) with no town pages — intentional; CountyArea renders non-matching names as plain chips.
- sitemap.xml is manual: regenerate by extracting slugs from areas.ts/counties.ts; /privacy-policy and /terms are intentionally excluded.
- Full build prerenders 130 routes; entry-server derives routes from the data arrays automatically.

## Service x location keyword pages (July 2026)
- 1,034 pages at /[service]/[location] generated at prerender from src/data/serviceLocations.ts (11 localServices with copy/FAQ generator functions) + ServiceLocationPage.tsx; not stored as static data.
- Only 6 services have dedicated pages; the other 5 (drain-repairs, commercial-drainage, soakaway-installation, septic-tanks, guttering-downpipes) link to /services#anchor. "emergency-drainage" combo slug differs from dedicated page slug "emergency-drainage-services" (intentional, per client keyword list).
- SEO component auto-appends "| A&B Drainage Solutions Ltd" to titles — never include a brand suffix in page-level title props or it doubles.
- Full build now prerenders 1,164 routes (~1 min); sitemap.xml has 1,162 URLs, regenerated via inline node script deriving slugs from data files.
- County-level service pages cover only the 9 real counties (London excluded from the combo matrix).
