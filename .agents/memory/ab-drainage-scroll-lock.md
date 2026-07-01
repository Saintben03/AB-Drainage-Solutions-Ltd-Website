---
name: ab-drainage modal scroll lock
description: Why body scroll lock must be ref-counted when one modal can open another.
---

Multiple modals (ServiceModal on the Services page, and the global BookNowModal) each control `document.body.style.overflow`. Use the shared ref-counted `lockBodyScroll()` / `unlockBodyScroll()` helpers in `lib/utils.ts` — never set `document.body.style.overflow` directly in a modal.

**Why:** ServiceModal's "Book This Service" button calls `onClose()` then `openBookNow()`. Both modals are wrapped in `AnimatePresence`, so ServiceModal unmounts ~250ms later (after exit animation). If each modal sets/clears overflow directly, BookNowModal mounts and locks scroll, then ServiceModal's delayed unmount cleanup resets overflow to "" — leaving the background scrollable while BookNow is still open. Ref-counting keeps the body locked until the last modal closes.

**How to apply:** Any new modal/overlay in this app that locks scroll must go through the shared helpers so stacked/handoff modals don't stomp each other's lock.
