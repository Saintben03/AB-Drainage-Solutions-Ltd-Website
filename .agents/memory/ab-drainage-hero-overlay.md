---
name: ab-drainage hero overlay brightness
description: How the hero image overlays are tuned so text reads bright, not dull/filtered
---

Every page hero (Home, Services, Areas, About, Gallery, Blog, Contact, BlogPost) layers three overlays over the fleet photo. The client's explicit taste: heros must look **bright and crisp**, not "filtered and dull."

**Rule:** keep these overlays light. The tuned values that satisfied the client:
- `mix-blend-multiply` navy cast: `bg-[#0a2c47]/22` (was /40 — multiply is the biggest culprit for dulling/desaturating; keep it low).
- Left directional gradient: `from-[#06182a]/85 via-[#06182a]/40 to-transparent` (was full-opacity `from-[#06182a] via-[#06182a]/75 to-[#06182a]/15`).
- Bottom gradient: `from-[#06182a]/55 via-transparent to-transparent` (was `/85 ... to-[#06182a]/30`).
- Home mobile hero (text sits at bottom): keep bottom darker — `from-transparent via-[#06182a]/35 to-[#06182a]/80`.

**Why:** legibility is already carried by strong text-shadows on the h1/p and a blurred dark panel behind the copy (`bg-black/60 blur-3xl` inner pages, `bg-[#06182a]/55 blur-3xl` Home). So the full-frame overlays can stay light without hurting readability — the image shows through and white text pops.

**How to apply:** if you ever re-darken a hero for "legibility," lower the text-panel/opacity or add shadow instead of cranking the multiply/gradient back up. Do NOT restore full-opacity `from-[#06182a]` gradients or multiply above ~/25.

## Heading darkens ~1s after load (framer + absolute panel stacking bug)
Symptom: hero heading loads bright, then goes dark ~0.7-1s later. Cause: the heading is a `motion.h1` with an entrance transform, and the dark `blur-3xl` backing panel is an `absolute` sibling with NO z-index. During the animation the transformed heading composites ABOVE the panel; when framer finishes and clears the inline transform, the static heading falls back into normal flow and the positioned panel paints OVER it (CSS paints positioned elements after static siblings).
**Fix:** the backing panel must always sit behind the text. Either wrap the motion text in `<div className="relative z-10">` (Home/Services pattern) OR give the panel `-z-10` (works because the hero's `container ... relative z-10` is already a stacking context, so `-z-10` keeps the panel above the z-0 image but below the text). Never leave the panel as a plain `absolute` sibling of animated text.

