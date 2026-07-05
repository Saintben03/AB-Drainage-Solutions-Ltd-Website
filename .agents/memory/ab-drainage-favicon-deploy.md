---
name: ab-drainage favicon / DigitalOcean deploy
description: Why the live abdrainage.co.uk favicon can look stale even when the build is correct, and the cache-bust fix.
---

# Favicon "red square" persistence

The dev server (localhost:80 via Replit proxy) and the production build are both
verified correct: `favicon.ico` is a real MS Windows icon (32x32 + 16x16, 5430 bytes)
and lands in `artifacts/ab-drainage/dist/public/favicon.ico` after
`pnpm --filter @workspace/ab-drainage run build`. So code is NOT the cause.

**Cause of a persistent old favicon:** the browser favicon cache is separate from
the page cache and survives even Ctrl+Shift+R. 

**Fix applied:** version query strings on favicon links in index.html
(`/favicon.ico?v=3`, etc). Bump the version number whenever the icon changes to
force re-fetch.

**How to apply:** if the user reports a stale favicon after a real icon change,
bump the `?v=N` on all favicon `<link>`s in index.html and push.

# Environment boundaries (important)

- Outbound HTTPS from Replit to abdrainage.co.uk is BLOCKED — `curl` returns empty.
  Cannot inspect the live DigitalOcean site from the Replit shell. Don't retry it.
- external_url screenshot of abdrainage.co.uk also fails (Firecrawl no valid URL).
- The `*.worf.replit.dev` URL is the INTERNAL dev URL; opening it externally is not
  the live site. The live site is the DigitalOcean deploy at abdrainage.co.uk.
- Replit preview pane / canvas iframe cache a blank page if the Vite workflow was
  crashed when they first loaded; they do NOT auto-refresh on workflow restart.
  Tell the user to use "open in new tab" or reselect the artifact in the preview dropdown.

## Blank page = ad blocker blocking dev module by filename (ERR_BLOCKED_BY_CLIENT)
Client's desktop showed a fully blank site (tab title still set) while mobile + other repls worked; antivirus off, cache cleared, multiple browsers — all still blank. Root cause: a browser ad/privacy blocker (uBlock/AdBlock/Ghostery) blocked the Vite dev module `/src/components/CookieBanner.tsx` with `net::ERR_BLOCKED_BY_CLIENT` purely because the filename contained "Cookie"+"Banner" (matches EasyList cosmetic/network filters). In dev each component is its own URL, so blocking one import crashes the whole app → blank. Prod bundles to a hashed file so it wouldn't block the same way, but cosmetic filters can still hide elements by class/aria containing "cookie/banner".
**Fix:** renamed component/file to `SiteNotice.tsx` (neutral), storage key `ab_site_consent`, aria-labels de-cookied. **Rule:** never name a shipped component/file/class/id with adblock-trigger words (cookie, banner, ad, ads, sponsor, popup, consent, gdpr, tracking, analytics). The F12 Console `ERR_BLOCKED_BY_CLIENT` line is the definitive tell.
