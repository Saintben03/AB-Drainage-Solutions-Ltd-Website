---
name: ab-drainage hero video (mobile + desktop)
description: How PageHero mounts looping hero videos and the mandatory compression step for generated clips.
---

# Hero video pattern (PageHero)

PageHero supports TWO independent looping hero videos, each gated so the clip is
never downloaded off-viewport:
- `mobileVideo` (portrait) — gated by `useMobileVideoEnabled()` (max-width 767px + motion allowed), rendered `md:hidden`. Defaults to the drain burst loop.
- `desktopVideo` (landscape) — gated by `useDesktopVideoEnabled()` (min-width 768px + motion allowed), rendered `hidden md:block`. Defaults to `null`, so ONLY Home passes it; every other page's hero stays a still image.

Both use `HeroVideoLoop` (crossfades two copies, so the source need not be perfectly seamless). Layer order inside the z-0 bg div: still `image` (poster) → mobile video → desktop video → overlay gradient stack. Overlays MUST stay last so hero copy remains legible over motion.

**Why:** client explicitly wanted the desktop hero animated (a burst street pipe), matching the mobile energy, without touching mobile.

# Generated video MUST be compressed before use
`generateVideo` at 1080p/8s outputs ~36MB — far too heavy for a web hero (mobile clip is ~5MB). Always re-encode before wiring in:
`ffmpeg -y -i in.mp4 -an -vf "scale=1920:-2" -c:v libx264 -crf 30 -preset veryslow -movflags +faststart -pix_fmt yuv420p out.mp4` → ~6MB. Then overwrite the original so the import path stays stable.
**How to apply:** any time you import a generated .mp4 as a background, check its size first and compress.
