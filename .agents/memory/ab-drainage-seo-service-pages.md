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
