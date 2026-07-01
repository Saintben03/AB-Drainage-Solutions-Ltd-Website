---
name: ab-drainage hero overlay
description: How the hero image overlays are tuned — now a deliberate strong monochrome-blue haze
---

**Top-left navy (client "really likes" it):** All 8 hero overlays END with a top-left radial `bg-[radial-gradient(100%_100%_at_0%_0%,#0b2942_0%,rgba(11,41,66,0.55)_30%,transparent_68%)]` — deep navy #0b2942 filling the top-left corner, fading to reveal the fleet on the right (matches the AB Group reference). Keep this layer.

Every page hero (Home, Services, Areas, About, Gallery, Blog, Contact, BlogPost) layers overlays over the fleet photo. Taste has CHANGED over time — read the history before adjusting.

**Current direction (latest): strong AB-blue haze.** The client asked for a "stronger AB blue haze filter like the other website" (the AB Group site, which tints its hero a deep monochrome blue). The haze layer is now TWO stacked layers per hero:
- `bg-[#0a2c47]/45` `mixBlendMode: multiply` (Home main hero uses /48) — depth/darkening.
- `bg-[#0e4a78]/38` `mixBlendMode: color` — this is the key: `color` blend forces the whole image to the AB-blue HUE, giving the monochrome-blue "haze" look (not just darker). Without the `color` layer you only get a darker image, not a blue one.
- The directional gradients (`from-[#06182a]/85 ...` left, `from-[#06182a]/55 ...` bottom) are unchanged.

**Why:** the earlier direction (below) was "keep heros bright"; the client reversed it and now explicitly wants the saturated blue treatment. Legibility still holds because white h1/p carry text-shadows + a blurred dark panel behind the copy, and the left gradient stays dark where text sits.

**How to apply:** to make the blue stronger, raise the `color`-blend opacity (hue intensity) and/or the multiply (darkness) together. To pull back toward "brighter," lower BOTH — do not just drop the multiply, or you lose the blue and keep it grey.

### Prior direction (superseded — kept for context)
Before this, the rule was to keep overlays LIGHT (single `bg-[#0a2c47]/22` multiply, no color layer) because the client called filtered heros "dull." That taste was later overridden by the blue-haze request above. If the client ever asks for "brighter/less filtered" again, that's a revert toward this lighter setup — lower both haze layers rather than restoring old exact values.

## Heading darkens ~1s after load (framer + absolute panel stacking bug)
Symptom: hero heading loads bright, then goes dark ~0.7-1s later. Cause: the heading is a `motion.h1` with an entrance transform, and the dark `blur-3xl` backing panel is an `absolute` sibling with NO z-index. During the animation the transformed heading composites ABOVE the panel; when framer finishes and clears the inline transform, the static heading falls back into normal flow and the positioned panel paints OVER it (CSS paints positioned elements after static siblings).
**Fix:** the backing panel must always sit behind the text. Either wrap the motion text in `<div className="relative z-10">` (Home/Services pattern) OR give the panel `-z-10` (works because the hero's `container ... relative z-10` is already a stacking context, so `-z-10` keeps the panel above the z-0 image but below the text). Never leave the panel as a plain `absolute` sibling of animated text.

