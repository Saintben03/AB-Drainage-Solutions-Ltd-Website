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
