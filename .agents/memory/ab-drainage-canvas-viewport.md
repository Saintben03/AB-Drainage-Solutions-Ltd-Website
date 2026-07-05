---
name: ab-drainage canvas iframe is desktop
description: The canvas preview iframe renders the site at desktop width, so user complaints from that view are about the desktop layout, not mobile.
---

The Replit canvas iframe shape for this artifact renders at ~1920px wide, i.e. the DESKTOP breakpoint (md: and up active).

**Why this matters:** When the user reports a visual problem while looking at the canvas iframe, they are almost always describing the DESKTOP layout. Repeated "I'm still seeing it" churn happened because mobile-only fixes were applied while the user was viewing desktop.

**How to apply:**
- Before fixing a reported visual bug, confirm which breakpoint the user is actually viewing. If the complaint comes with the canvas viewport context (iframe ~1920 wide), screenshot at desktop width (e.g. 1440–1920) first, not just mobile.
- The user may separately attach real mobile screenshots (narrow) — those are genuinely mobile. Match the fix to the breakpoint shown in the attached image.
- Client standing order: do NOT change the desktop layout without explicit sign-off. If a reported bug is on desktop, confirm scope before editing.

**Also learned (hero video):** Do not speculatively change the mobile hero video sizing. The transform-cover technique (`min-w-full min-h-full w-auto h-auto` centered) fills the tall portrait hero with no gaps. Switching to fit-width (`w-full h-auto`) leaves top/bottom gaps that show as a black strip + a blurred-backdrop "sky" strip under the nav. Keep cover.
