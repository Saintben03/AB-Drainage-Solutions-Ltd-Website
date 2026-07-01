---
name: ab-drainage hero overlay
description: How the content-page hero image overlays are tuned — taste has flip-flopped bright<->heavy several times
---

## Current direction (LATEST): one shared PageHero WITH a clear blue filter
All 7 content-page heroes (Home, Areas, Services, About, Contact, Gallery, Blog) render from a single shared component `components/PageHero.tsx`. Do NOT re-inline per-page hero markup — edit PageHero to change all of them at once.

Taste flip-flops constantly. The bright/light version was rejected (client: "no blue filter like the desktop version, image not sized right"). Current stack has a definite but not-black blue filter, identical on mobile + desktop:
- image `object-cover object-center` + `saturate-[1.1] brightness-[0.95] contrast-[1.05]` (+ optional `objectPosition` prop). NO `animate-heropan` — see gotcha below.
- `bg-[#0a2c47]/45` `mixBlendMode: multiply` (darken) + `bg-[#0e4a78]/35` normal blend (blue hue unify).
- LEFT scrim `linear-gradient(to_right, rgba(6,24,42,0.72) → transparent by 88%)` for text legibility.
- soft bottom fade `from-[#06182a]/65` + localized `bg-black/40 blur-3xl -z-10` panel behind copy + white text-shadows.

**Why:** client compares the NEW build's mobile against the OLD LIVE desktop (still heavier blue). When they say "match the desktop," they mean add MORE blue filter, not less. The lighter version always gets rejected.

**How to apply:** to go bluer/darker raise the two tint layers together; to lighten lower both. Do not restore the old heavy `color`-blend monochrome duotone unless they explicitly ask for the "AB Group monochrome-blue" look.

## Gotchas that got the client annoyed (do NOT reintroduce)
- **No hero pan animation.** The `animate-heropan` class (keyframe still in index.css) makes the image drift left↔right; the client did not ask for it and disliked it. Keep it off PageHero's img.
- **No blue text in the hero.** Blue accent words over the blue filter vanish. Home's "South England" span is `text-sky-300` and PageHero's eyebrow is `text-sky-200` (both light blue + text-shadow), NOT `text-accent`/`#5392B6`. Keep hero accent text a LIGHT sky tone.
- **Logo marquee must ANIMATE on mobile too.** `components/LogoMarquee.tsx` used to render a static row on mobile (iOS Safari width:max-content worry); the client noticed the logos stopped moving. It now uses the animated marquee (two identical LogoGroups, `w-max animate-marquee`, right→left) on ALL breakpoints. Do not revert to a static mobile row.

**Home wave-fill is breakpoint-split:** Home's next section differs by breakpoint (desktop = `#01618E` schedule strip which is `hidden md:block`; mobile = `#e0f2fe` Trusted band). PageHero supports `waveFill` + `waveFillMobile` and renders two breakpoint-scoped WaterWaves for exactly this. Other pages pass a single `waveFill` matching their next section (Areas/About/Contact `#5392B6`, Services/Gallery/Blog `#ffffff`).

**Excluded on purpose:** AB Group division pages (Construction/Fencing/Facilities, `min-h-[92vh]`, red/green/slate sub-brand) and BlogPost (dynamic post image) keep their own hero markup — do not fold them into PageHero.

## Standing rule: heading darkens ~1s after load (framer + absolute panel stacking bug)
Symptom: hero heading loads bright, then goes dark ~0.7-1s later. Cause: an animated `motion.h1` composites above a dark `blur-3xl` backing panel during the transform; when framer clears the inline transform the static heading falls back into flow and the positioned panel paints OVER it.
**Fix:** the backing panel must always sit behind the text — give it `-z-10` (PageHero does this) or wrap the motion text in `relative z-10`. Never leave the panel a plain `absolute` sibling of animated text.
