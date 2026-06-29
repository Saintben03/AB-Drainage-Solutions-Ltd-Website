---
name: ab-drainage screenshot limitation
description: Why app_preview screenshots can't show below-fold content on the Home page
---

The Home hero uses `min-h-[92vh]`. Because `vh` scales with whatever viewport height you pass to the screenshot tool, the hero always fills ~92% of the capture no matter how tall you make the viewport — so below-fold sections (logo marquee, animated divider, water wave, stats band, service cards) cannot be reached via `app_preview` screenshots.

**How to apply:** To visually verify below-hero content on Home, don't keep increasing viewport height (it won't help). Rely on typecheck + clean browser console, or temporarily reduce the hero min-height, or screenshot an inner page (Services/About/Contact) whose hero is `min-h-[80vh]` but content-driven.
