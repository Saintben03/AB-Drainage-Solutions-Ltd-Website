---
name: ab-drainage screenshot limitation
description: Why app_preview screenshots can't show below-fold content on the Home page
---

All content-page heros (via shared `PageHero`) are `min-h-[72vh] md:min-h-[64vh]`. Because `vh` scales with whatever viewport height you pass to the screenshot tool, the hero always fills ~64-72% of the capture no matter how tall you make the viewport — so below-fold sections cannot be reached via `app_preview` screenshots by growing the viewport.

**How to apply:** To visually verify below-hero content, don't keep increasing viewport height (it won't help). Rely on typecheck + clean browser console, temporarily reduce the hero min-height in PageHero, or screenshot with a viewport where content still fits.

## Mobile hero video: two iOS-Safari-only bugs (invisible in headless app_preview — only reproduce on a real iPhone)
- **Black strip under the nav** = iOS Safari ignores `object-fit: cover` on `<video>` and letterboxes it with black bars (top bar = the strip; same bug class as the old native `poster` letterbox). **Fix:** size background video with the transform-cover technique (centre via translate + `min-w-full min-h-full w-auto h-auto max-w-none`), never rely on object-fit.
- **Obvious restart / gap on `<video loop>`** = the attribute hard-cuts last frame → first frame. **Fix:** run two copies of the clip and crossfade opacity between them just before the end; `preload="auto"` avoids rebuffer gaps; fade video in from the still image on first paint so there's no black flash. See `HeroVideoLoop.tsx`.
