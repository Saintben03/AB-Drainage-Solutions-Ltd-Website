---
name: ab-drainage hero overlay
description: How the hero image overlays are tuned — now a deliberate strong monochrome-blue haze
---

**Top-left navy (client "really likes" it):** All 8 hero overlays END with a top-left radial `bg-[radial-gradient(100%_100%_at_0%_0%,#0b2942_0%,rgba(11,41,66,0.55)_30%,transparent_68%)]` — deep navy #0b2942 filling the top-left corner, fading to reveal the fleet on the right (matches the AB Group reference). Keep this layer.

Every page hero (Home, Services, Areas, About, Gallery, Blog, Contact, BlogPost) layers overlays over the fleet photo. Taste has CHANGED over time — read the history before adjusting.

**Current direction (latest): strong AB-blue DUOTONE.** The client repeatedly asked for the deep monochrome-blue wash of the AB Group reference site. The Home hero (desktop + mobile) now uses a heavier stack:
- `bg-[#0a2c47]/60` `mixBlendMode: multiply` — depth/darkening.
- `bg-[#0e4a78]/60` `mixBlendMode: color` — the key: `color` blend forces the whole image to the AB-blue HUE (monochrome-blue look, not just darker). Without it you only get a darker image, not a blue one.
- `bg-[#0b2f52]/35` plain normal-blend tint — unifies the whole frame into one blue field (this uniform layer is what finally matched the reference; the blend layers alone weren't enough).
- Also dial the IMAGE filters DOWN (`saturate-[1.15] brightness-[0.98]`, not the old `saturate-[1.6] brightness-[1.12]`) — a bright/saturated photo fights the duotone and reads grey-blue instead of deep navy.
- Directional gradients: left `from-[#06182a]/85 via/45 to/15`, bottom `from-[#06182a]/60`. Other page heroes still use the lighter /45+/38 stack — only Home was pushed to the heavy duotone.

**Why:** the earlier direction (below) was "keep heros bright"; the client reversed it and now explicitly wants the saturated blue treatment. Legibility still holds because white h1/p carry text-shadows + a blurred dark panel behind the copy, and the left gradient stays dark where text sits.

**How to apply:** to make the blue stronger, raise the `color`-blend opacity (hue intensity) and/or the multiply (darkness) together. To pull back toward "brighter," lower BOTH — do not just drop the multiply, or you lose the blue and keep it grey.

### Prior direction (superseded — kept for context)
Before this, the rule was to keep overlays LIGHT (single `bg-[#0a2c47]/22` multiply, no color layer) because the client called filtered heros "dull." That taste was later overridden by the blue-haze request above. If the client ever asks for "brighter/less filtered" again, that's a revert toward this lighter setup — lower both haze layers rather than restoring old exact values.

## Heading darkens ~1s after load (framer + absolute panel stacking bug)
Symptom: hero heading loads bright, then goes dark ~0.7-1s later. Cause: the heading is a `motion.h1` with an entrance transform, and the dark `blur-3xl` backing panel is an `absolute` sibling with NO z-index. During the animation the transformed heading composites ABOVE the panel; when framer finishes and clears the inline transform, the static heading falls back into normal flow and the positioned panel paints OVER it (CSS paints positioned elements after static siblings).
**Fix:** the backing panel must always sit behind the text. Either wrap the motion text in `<div className="relative z-10">` (Home/Services pattern) OR give the panel `-z-10` (works because the hero's `container ... relative z-10` is already a stacking context, so `-z-10` keeps the panel above the z-0 image but below the text). Never leave the panel as a plain `absolute` sibling of animated text.

