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

## Services page tile grid
Client said the 4-col grid looked "cramped." Now `lg:grid-cols-3` (was `lg:grid-cols-4`), taller image `h-52` (was h-40), `p-6` + `rounded-xl` cards, `text-lg` title / `text-sm` desc, and a `hover:-translate-y-1` lift. Keep it at 3 columns — do not go back to 4.

## Services detail MODAL — single-tile "everything visible" layout
Client explicitly rejected the old tall scrolling modal (drew a red X over it) and the FAQ accordion. Requirement: **all info visible in ONE tile, no slider/accordion.**
Current design (live): wide panel `sm:max-w-6xl max-h-[94vh]`, laid out as a compact dashboard:
- **Slim** header banner (`h-28 sm:h-32`) with title + stat badge overlaid (not the old tall h-56 banner) — saves vertical space.
- Overview intro flows in `sm:columns-2` (CSS multi-column) at `text-[13px]` — compact height.
- One row of 3 cards: Signs You Need This | What's Included (dark) | How It Works — `lg:grid-cols-3`, `text-[11px]/[12px]`.
- FAQ rendered as a `lg:grid-cols-3` of small cards with **question + answer both always shown** (NO accordion — the FaqItem component was deleted).
- On a 1080p desktop this fits in ~one viewport; `overflow-y-auto` is kept only as a safety for short laptops/mobile. Mobile necessarily stacks+scrolls — unavoidable given content volume.
- **Why:** the accordion + long vertical scroll felt clunky; client wants a scannable single panel. If asked to "fit everything" harder, shrink text/spacing or drop an intro paragraph — do NOT reintroduce the accordion or a stacked single-column scroll.
- Header images are worker photos: centered `object-cover` on the short band **crops the face out**. Use `object-[center_30%]` so the face stays visible.
