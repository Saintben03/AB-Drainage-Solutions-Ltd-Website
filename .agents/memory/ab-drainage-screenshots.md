---
name: ab-drainage screenshot limitation
description: Why app_preview screenshots can't show below-fold content on the Home page
---

All content-page heros (via shared `PageHero`) are `min-h-[72vh] md:min-h-[64vh]`. Because `vh` scales with whatever viewport height you pass to the screenshot tool, the hero always fills ~64-72% of the capture no matter how tall you make the viewport — so below-fold sections cannot be reached via `app_preview` screenshots by growing the viewport.

**How to apply:** To visually verify below-hero content, don't keep increasing viewport height (it won't help). Rely on typecheck + clean browser console, temporarily reduce the hero min-height in PageHero, or screenshot with a viewport where content still fits.
