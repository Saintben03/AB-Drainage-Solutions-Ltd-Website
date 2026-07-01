---
name: ab-drainage hero overlay
description: How the content-page hero image overlays are tuned — taste has flip-flopped bright<->heavy several times
---

## Current direction (LATEST): one shared bright PageHero
All 7 content-page heroes (Home, Areas, Services, About, Contact, Gallery, Blog) now render from a single shared component `components/PageHero.tsx`. Do NOT re-inline per-page hero markup — edit PageHero to change all of them at once.

The client reversed the earlier "heavy blue duotone" taste and again wants BRIGHT heros where the whole van fleet is visible (complaint was: other pages too dark, only the right van showed; Home mobile text sat below the image instead of over it). PageHero's stack, kept deliberately light:
- image `object-cover object-center` + `saturate-[1.15] brightness-[1.04] contrast-[1.05]` (+ optional `objectPosition` prop for framing).
- blue hue wash `bg-[#0e4a78]/22` `mixBlendMode: multiply` — a light tint, NOT the old heavy `color`-blend duotone.
- gentle LEFT scrim `linear-gradient(to_right, rgba(6,24,42,0.6) → transparent by 80%)` so left-aligned white text stays legible while the right/fleet stays clear.
- soft bottom fade `from-[#06182a]/60` for lower-content legibility + wave blend.
- localized blurred panel behind the copy `bg-black/40 blur-3xl -z-10` + white text-shadows carry legibility (per the standing rule below).
- The old top-left navy radial and the heavy `#0c3e57` directional left gradient were REMOVED (they were the "too dark / only right van" culprits).

**Why:** legibility must come from the local blur panel + text-shadow, not from darkening the whole photo — that lets the fleet stay bright. This is the recurring client preference; it has been overridden twice then restored.

**How to apply:** to go brighter, lower the `/22` tint and the left-scrim opacities together. To go darker (if taste flips again), raise them together — do not restore the heavy `color`-blend duotone unless the client explicitly asks for the "AB Group monochrome-blue" look again.

**Home wave-fill is breakpoint-split:** Home's next section differs by breakpoint (desktop = `#01618E` schedule strip which is `hidden md:block`; mobile = `#e0f2fe` Trusted band). PageHero supports `waveFill` + `waveFillMobile` and renders two breakpoint-scoped WaterWaves for exactly this. Other pages pass a single `waveFill` matching their next section (Areas/About/Contact `#5392B6`, Services/Gallery/Blog `#ffffff`).

**Excluded on purpose:** AB Group division pages (Construction/Fencing/Facilities, `min-h-[92vh]`, red/green/slate sub-brand) and BlogPost (dynamic post image) keep their own hero markup — do not fold them into PageHero.

## Standing rule: heading darkens ~1s after load (framer + absolute panel stacking bug)
Symptom: hero heading loads bright, then goes dark ~0.7-1s later. Cause: an animated `motion.h1` composites above a dark `blur-3xl` backing panel during the transform; when framer clears the inline transform the static heading falls back into flow and the positioned panel paints OVER it.
**Fix:** the backing panel must always sit behind the text — give it `-z-10` (PageHero does this) or wrap the motion text in `relative z-10`. Never leave the panel a plain `absolute` sibling of animated text.
