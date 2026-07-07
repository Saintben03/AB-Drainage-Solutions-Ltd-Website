---
name: ab-drainage prerender / SSG
description: How the static prerender step works and the head-tag ownership contract that must not be broken.
---

# ab-drainage static prerender (SSG)

The site is a client-rendered SPA (Vite + wouter + react-helmet-async) but now ships fully-built per-page HTML via a browser-free prerender step.

## How it works
- `src/entry-server.tsx` renders each route with `renderToString`, wouter `ssrPath`, and a `HelmetProvider` context; it also exports the `routes` list (static pages + every town slug from `data/areas` + every blog slug from `data/blogPosts`).
- `App` accepts optional `{ ssrPath, helmetContext }` props for SSR; client path (`main.tsx` → `createRoot`) passes nothing and is unchanged.
- `prerender.mjs` reads the built `dist/public/index.html` template, injects `helmet.title/meta/link/script` before `</head>` and the app HTML into `#root`, writing `dist/public/<route>/index.html`.
- `build` script = client build → `--ssr` build to `dist/ssr` → `node prerender.mjs`. There is also `build:client` for a plain client-only build.

## Head-tag ownership contract (DO NOT BREAK)
`index.html` has had all per-page SEO tags REMOVED (title, description, keywords, robots, canonical, all og:*, all twitter:*). Those are owned per-page by `src/components/SEO.tsx` (Helmet) and baked into static HTML by the prerender step.
**Why:** react-helmet-async output carries `data-rh="true"`, so client mount reconciles them instead of duplicating. If you re-add static per-page tags to `index.html`, prerendered pages get DUPLICATE title/description/canonical — the exact thing that breaks the SEO win.
**How to apply:** keep only truly-global tags in `index.html` (charset/viewport/theme-color, geo, author, favicon, fonts, sitemap link, LocalBusiness JSON-LD). Add per-page tags only via the `SEO` component.

## Deploy caveat
The external DigitalOcean deploy MUST run the full `pnpm --filter @workspace/ab-drainage run build` (client + ssr + prerender), not a bare `vite build`/`build:client`. A bare client build serves the thin SPA shell again (no baked meta/content). Build needs `PORT` and `BASE_PATH` env (vite.config throws without them). Prerender output is served from `dist/public`.

## Notes
- Client still uses `createRoot` (not `hydrateRoot`) — prerendered DOM is replaced on mount. Fine for SEO; a future hardening is `hydrateRoot` if parity is verified.
- FAQPage schema lives on the town pages (via `FaqSection`) and Home. It is NOT on the Services page because that page shows service detail (incl. FAQs) in a modal, so the content isn't visibly present in the DOM.
