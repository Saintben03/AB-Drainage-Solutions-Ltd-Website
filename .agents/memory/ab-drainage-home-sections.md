---
name: ab-drainage home section differentiation
description: Why adjacent dark sections on the Home page use different tones and how the WaterWave dividers must be colored
---

**Adjacent dark sections must not share the same bg, or the wave divider between them disappears.**

The Home services section ("Complete Drainage Solutions") is neutral `bg-background` (~hsl(0 0% 11%)). The "Why Choose A&B / 33 Years" section directly below it is a deep navy gradient `bg-gradient-to-b from-[#0f2a44] via-[#0b1e30] to-[#0a1622]`. Previously both were `bg-background`, so they merged into one black blob.

**WaterWave fill = the NEXT section's top color.** The wave sits at the bottom of the current section and reads as the next section rising up with a curved top edge. So the wave at the bottom of the services section is `fill="#0f2a44"` (why-choose's top navy). If you recolor either section, update the wave fill in lockstep or the break vanishes / mismatches.

**Why:** client said the services section "goes into the section below but both are black" and wanted differentiation + clearer section breaks. Navy was chosen because the client likes the navy hero treatment (see ab-drainage-hero-overlay.md).

The why-choose info cards use `bg-white/[0.05] border-white/10 backdrop-blur-sm` (not `bg-card`/`border-border`) so they sit naturally on navy instead of looking like grey boxes on blue.
