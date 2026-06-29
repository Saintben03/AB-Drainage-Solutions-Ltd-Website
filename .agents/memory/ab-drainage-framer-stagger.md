---
name: framer-motion nested stagger goes invisible
description: Why some stagger lists render at opacity 0 (invisible) in ab-drainage and how to fix
---

# Nested whileInView stagger can render children invisible

**Symptom:** A staggered list/grid renders almost invisible — items stuck at their `initial` opacity 0. Both the content text AND its icons/checkboxes look faint (the whole item, not just a color).

**Pattern that breaks:** a `variants={stagger}` + `initial="hidden"` + `whileInView="show"` container whose children use `variants={fadeUp}`, when that container is itself nested **inside another animating `motion.div`** (one that has its own object-based `whileInView`/`animate`). The parent's animation context disrupts variant-state propagation to the grandchildren, so the "show" state never reaches them.

**Same pattern works fine** when the stagger container is NOT wrapped in an animating motion parent (e.g. About STATS BAR, directly under a plain `<section>`/`<div>`).

**Fix (reliable):** decouple — make the wrapper a plain `<ul>`/`<div>` and give each item its own `initial`/`whileInView`/`viewport`, recreating the stagger with `transition={{ delay: i * 0.07 }}`. Mirrors the working object-based `whileInView` sections.

**Why:** variant propagation through nested animating motion components is flaky; per-item independent `whileInView` removes the dependency entirely.

**Known remaining latent risk (not yet changed, was rendering OK):** `Home.tsx` "Why Choose Us" (~line 246) uses the same nested pattern inside an animating `motion.div` (~line 231). Apply the same decoupling if it ever shows up faint.
