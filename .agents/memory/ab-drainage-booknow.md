---
name: ab-drainage BookNow modal
description: How the global "Book Now" call-us popup is wired and triggered.
---
The "Book Now" popup is a single global instance.

**Rule:** There is exactly ONE `<BookNowModal>`, rendered inside `BookNowProvider` (`src/contexts/BookNowContext.tsx`), which wraps the router in `App.tsx`. To open it from anywhere, call `const { openBookNow } = useBookNow()` and wire it to a button. Do NOT render extra `<BookNowModal>` instances or add per-component open state.

**Why:** Originally the modal lived in Navbar with local state, so page content (e.g. the Services CTA) had no way to trigger it. Centralizing to context lets any page open the same modal.

**How to apply:** New "Book Now" buttons just call `openBookNow()`. The modal already includes social links, reduced-motion gating, and a focus trap — extend that one component rather than cloning it.
