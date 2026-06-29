---
name: ab-drainage theme token traps in light sections
description: Why theme tokens like text-foreground / bg-card become invisible or wrong on light/white sections
---

The theme is dark-first: `--foreground` is near-white and `--background`/`bg-card`/`bg-border` are dark/near-black.

**Rule:** Inside any light section (`bg-white` / `bg-zinc-50` / `bg-slate-200`), never use theme tokens for text or surfaces — `text-foreground`, `text-foreground/80`, `text-muted-foreground`, `bg-card`, `bg-background`, `border-border` all render light-on-light (invisible) or dark-block-on-light. Use explicit zinc values instead.

**Why:** Converting dark sections to light by only changing the section bg leaves descendant tokens pointing at dark-theme values; `text-foreground/80` on `bg-white` is a real contrast/accessibility failure that typecheck cannot catch.

**How to apply:** When lightening a section, sweep the whole subtree and replace tokens with the standard light recipe — headings `text-zinc-900`, body `text-zinc-600/700`, muted `text-zinc-400/500`, cards `bg-white border-zinc-200`, gaps `bg-zinc-200`, outline buttons `border-zinc-300 text-zinc-700`. Accent (orange) and `text-accent` eyebrows stay unchanged on any background.
