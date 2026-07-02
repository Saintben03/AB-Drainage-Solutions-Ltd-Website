---
name: ab-drainage hero overlay
description: How the content-page hero image overlays are tuned — taste has flip-flopped bright<->heavy several times
---

## Current direction (LATEST): one shared PageHero WITH a clear blue filter
All 7 content-page heroes (Home, Areas, Services, About, Contact, Gallery, Blog) render from a single shared component `components/PageHero.tsx`. Do NOT re-inline per-page hero markup — edit PageHero to change all of them at once.

Taste flip-flops constantly, but the client LOCKED a direction by pointing at the AB Fencing division hero ("that hero is smashing it — that's what we need for the drainage mobile site. Do not change anything on the desktop site"). Mobile and desktop are now COMPLETELY different hero treatments, fully breakpoint-split in PageHero:
- MOBILE (fencing formula): `min-h-[92vh] items-end pb-24`, bright treatment `saturate-[1.35] brightness-[1.08] contrast-[1.1]`, overlays = bottom `from-black/80` + left `from-black/55` gradients + `#01618E`/40 `mixBlendMode:color` cast. NO heavy blue tint on mobile.
- MOBILE background is now a looping VIDEO (client: "animated so seeing the water exploding"): 8s AI-generated 9:16 mp4 `@assets/generated_videos/drain_water_burst_loop.mp4` (~5MB), default `mobileVideo` prop on PageHero (pass `null` to fall back to the still). The `<video>` is mounted ONLY when `useMobileVideoEnabled()` (viewport ≤767px AND motion allowed) — CSS-hiding it would still download 5MB on desktop; reduced-motion users get the still image + no pan. Poster = `hero-burst-mobile.png`. `.animate-heropan-mobile` only applies to the still-image fallback.
- DESKTOP (unchanged, do not touch): `md:min-h-[64vh] md:items-center`, `bg-[#0a2c47]/45` multiply + `bg-[#0e4a78]/35`, left scrim `to_right rgba(6,24,42,0.72)→transparent 88%`, bottom fade `from-[#06182a]/65`, image `md:saturate-[1.1] md:brightness-[0.95] md:contrast-[1.05]`, static (no pan).
- soft bottom fade `from-[#06182a]/65` + localized `bg-black/40 blur-3xl -z-10` panel behind copy + white text-shadows.

**Why:** client compares the NEW build's mobile against the OLD LIVE desktop (still heavier blue). When they say "match the desktop," they mean add MORE blue filter, not less. The lighter version always gets rejected.

**How to apply:** to go bluer/darker raise the two tint layers together; to lighten lower both — but keep the mobile values HIGHER than md: values (mobile is meant to near-hide the image). Do not restore the old heavy `color`-blend monochrome duotone unless they explicitly ask for the "AB Group monochrome-blue" look.

## Mobile hero image: separate PORTRAIT crop (do NOT full-bleed the wide photo on mobile)
The fleet photo is wide (vans side by side); a narrow phone can't both put text OVER it and show the fleet — object-cover zoomed to one van ("too zoomed"), and a short bottom band looked "outside the text". Solution the client accepted: a DIFFERENT portrait mobile image. PageHero uses a `<picture>`: `<source media="(min-width:768px)" srcSet={image}>` (wide desktop fleet) + `<img src={mobileImage}>` fallback (portrait, decorative alt="" aria-hidden). Picture = only ONE asset downloads per viewport. `mobileImage` prop defaults to `@assets/hero-burst-mobile.png` (AI-generated 3:4 dramatic water burst erupting from a manhole — client asked for "an animated drain water pipe explosion"). Earlier candidates still exist if they change their mind: `hero-workers-mobile.png` (AI aerial of 2 workers in hard hats) and `hero-fleet-mobile.png` (real fleet portrait crop, from `magick "<wide>" -crop 768x1024+520+0 +repage`). All 7 pages share PageHero + pass the same wide `image`, so changing the default fixes/changes them all at once.
**Why:** wide-in-tall is geometrically unsolvable; only a portrait image lets text sit over a visible subject on mobile. AI-generating WORKERS is OK (generic hi-vis figures); NEVER AI-regenerate the FLEET (real branded vans/plates/numbers).

## Gotchas that got the client annoyed (do NOT reintroduce)
- **No hero pan animation ON DESKTOP.** The client disliked `animate-heropan` on the desktop drainage heroes. BUT they later praised the fencing hero (which pans) and asked for the drainage MOBILE hero to be "animated" — so mobile pans via `.animate-heropan-mobile`, desktop stays static. Don't add pan back to desktop.
- **No blue text in the hero.** Blue accent words over the blue filter vanish. Home's "South England" span is `text-sky-300` and PageHero's eyebrow is `text-sky-200` (both light blue + text-shadow), NOT `text-accent`/`#5392B6`. Keep hero accent text a LIGHT sky tone.
- **Logo marquee must ANIMATE on mobile too.** `components/LogoMarquee.tsx` used to render a static row on mobile (iOS Safari width:max-content worry); the client noticed the logos stopped moving. It now uses the animated marquee (two identical LogoGroups, `w-max animate-marquee`, right→left) on ALL breakpoints. Do not revert to a static mobile row.

**Home wave-fill is breakpoint-split:** Home's next section differs by breakpoint (desktop = `#01618E` schedule strip which is `hidden md:block`; mobile = `#e0f2fe` Trusted band). PageHero supports `waveFill` + `waveFillMobile` and renders two breakpoint-scoped WaterWaves for exactly this. Other pages pass a single `waveFill` matching their next section (Areas/About/Contact `#5392B6`, Services/Gallery/Blog `#ffffff`).

**Excluded on purpose:** AB Group division pages (Construction/Fencing/Facilities, `min-h-[92vh]`, red/green/slate sub-brand) and BlogPost (dynamic post image) keep their own hero markup — do not fold them into PageHero.

## Standing rule: heading darkens ~1s after load (framer + absolute panel stacking bug)
Symptom: hero heading loads bright, then goes dark ~0.7-1s later. Cause: an animated `motion.h1` composites above a dark `blur-3xl` backing panel during the transform; when framer clears the inline transform the static heading falls back into flow and the positioned panel paints OVER it.
**Fix:** the backing panel must always sit behind the text — give it `-z-10` (PageHero does this) or wrap the motion text in `relative z-10`. Never leave the panel a plain `absolute` sibling of animated text.
