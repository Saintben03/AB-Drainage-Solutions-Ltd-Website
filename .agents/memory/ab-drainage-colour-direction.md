---
name: ab-drainage colour direction (resolved — blue-led)
description: The long-open orange-vs-blue accent decision was resolved in favour of AB blue sitewide
---

Client resolved the long-standing accent-colour decision: **go blue-led sitewide.** The dominant action colour is the AB brand blue `#5392B6`.

- The single source of truth is the `--accent` token in `src/index.css`: `--accent: 202 40% 52%` (= `#5392B6`). Changing that one line flips every `text-accent` / `bg-accent` / `border-accent` across all pages and the nav (BOOK NOW, active tab, OTHER SERVICES dropdown), the stats band, review CTAs, FAQ accents, footer, etc.
- Hardcoded orange that the token does NOT cover, and had to be changed by hand: the `WaterWave` SVG `fill` on Home + Contact (were `hsl(32 98% 50%)` → `#5392B6`), and BlogPost's Emergency category gradient (`to-orange-400` → `to-blue-300`).
- `--primary` (`202 43% 51%` ≈ `#4C90B8`) and `--orange` (`32 98% 50%`, now unused) tokens still exist. Review stars are gold (`yellow-400`) by design — NOT orange — so they were left alone.

**Why:** client asked to replace orange with the AB blue on the hero, then "all the rest of the site also." Supersedes the earlier orange-led vs blue-led mockup exploration the client never picked from.
**How to apply:** to shift the whole site's action colour again, edit `--accent` first; then grep for hardcoded `#5392B6`, `hsl(32`, `orange-`, `amber-` for the few spots the token misses.
