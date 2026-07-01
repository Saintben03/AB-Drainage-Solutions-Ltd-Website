---
name: ab-drainage logo marquee iOS glitch
description: Why the LogoMarquee intermittently rendered blank / mid-page on iOS Safari and the reliable fix
---

Symptom (reported on iPhone Safari): the "Trusted by institutions" logo marquee sometimes rendered completely blank, and when it did show, logos appeared to start mid-page with gaps.

Root cause: `-webkit-mask-image` / `mask-image` applied to a container whose child uses an animated `transform` (the marquee track) triggers a known iOS Safari compositing bug — the masked content flickers or disappears intermittently.

Fix: remove the CSS `maskImage` edge-fade entirely and replace it with two absolutely-positioned gradient overlay divs (left/right) whose color matches the section background. This gives the same visual edge-fade without the mask+transform interaction.

**Why:** mask + animated transform is the trigger; overlay gradients composite reliably.
**How to apply:** any time you want an edge fade over animated/scrolling content, prefer gradient overlay divs over `mask-image`, especially for iOS.
