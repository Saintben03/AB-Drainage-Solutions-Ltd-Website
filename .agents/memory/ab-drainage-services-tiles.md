---
name: ab-drainage services tiles + detail modal
description: Client's preferred styling for the Home "What We Do" tiles and how the Services detail view works
---

## Home services tiles ("Complete Drainage Solutions")
Client rejected the original flat `bg-[#5392B6]` cards with a full-sentence description each. Preferred (from a reference screenshot) and now live:
- Blue **gradient** tiles (`bg-gradient-to-br from-[#4d8bb0] via-[#2c6188] to-[#123f61]`) on the dark section.
- Large icon top-left (size 32, no box), big bold uppercase title, then a **short letter-spaced tagline** (e.g. "24/7 Rapid Response") — NOT a paragraph.
- Whole tile is a clickable `Link` to `/services#<anchor>`.
- Interaction: framer `whileHover={{y:-8}}` lift + `whileTap={{scale:0.96}}` press ("cool click animation"), plus a group-hover diagonal shine sweep, ring glow, and arrow slide.
**Why:** client said the gradient/short-tagline look "looks better than ours." Keep tiles concise; don't reintroduce long per-tile descriptions.

## Services detail is a MODAL, not a page
Clicking a service (tile on Home, or card on the Services page) opens an in-page modal (`bg-white max-w-4xl max-h-[90vh] overflow-y-auto`) with header image + intro + Signs / What's Included / How It Works / FAQ / CTA.
- The content is genuinely rich, so it **cannot fully fit one viewport without scrolling** — compaction (tighter `space-y`, shorter header) reduces scroll but zero-scroll would require trimming content. Flag this tradeoff before cutting copy.
- Header images are worker photos: a centered `object-cover` on the short header band **crops the face out**. Use `object-[center_25%]` (faces sit ~20-25% from top) so the person's face stays visible.
