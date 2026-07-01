---
name: ab-drainage hero heading typography
description: The agreed text style/size for all page hero H1s (light weight, not heavy bold)
---

## Hero H1 style (client-approved, from an AB Group reference screenshot)
All 9 page hero headings (Home mobile + desktop, Services, About, Contact, Blog, BlogPost, Gallery, Areas) use ONE refined style — NOT the old heavy `font-bold` / `md:text-7xl`:
- `font-display font-light` (thin uppercase — this is the whole point; do not revert to font-bold)
- Size `text-4xl sm:text-5xl md:text-6xl` (moderate; the old text-7xl was too big/heavy)
- `uppercase tracking-normal leading-[1.1]` — `tracking-normal` is required to override the global base-layer `@apply ... tracking-tight` on headings (index.css)
- Soft single shadow `[text-shadow:0_2px_20px_rgba(0,0,0,0.6)]` (was a double heavy shadow — thin text + heavy shadow looked muddy)
- Key word highlighted in accent blue via `<span className="text-accent">` (or `text-[#5392B6]`), e.g. HAMPSHIRE.
**Why:** client wanted the lighter, more editorial hero look from the reference; the heavy bold felt clunky.

## Gotcha: display font never actually loads
`index.html` Google Fonts link is corrupted — `family=n:wght@...` (the word "Oswald" was mangled to "n"), so `--font-display: 'Oswald'` silently falls back to system sans-serif. The heros render in the sans fallback, which happens to match the reference. Do NOT "fix" the link to real Oswald without checking — Oswald is condensed and would NOT match the approved reference look.
