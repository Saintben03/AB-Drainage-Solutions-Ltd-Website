---
name: Emergency modal + email delivery
description: How the red EmergencyModal works and how emergency emails are sent on the static site.
---

# Emergency modal (EmergencyModal.tsx)

Red compact card modal (NOT full-screen, NOT orange) triggered by the top emergency bar in Navbar.
- Buzzing phone icon (framer-motion infinite rotate/x shake + pulsing ring).
- Headline "EMERGENCY"; MOBILE 07498 062 710 is the big centre CTA; OFFICE 01256 688 650 is the smaller line below. (User wants mobile prioritised for emergencies.)
- Inline alert form: name / phone / problem + "Alert our team now" button.

# Email delivery on a STATIC site

**Why:** the live site is a static build on DigitalOcean — there is NO backend reachable from production, so server email is impossible. Email must be sent client-side.

**How:** uses Web3Forms (https://api.web3forms.com/submit, JSON POST). The Web3Forms account is registered to the company's primary inbox; extra recipients go via the `cc` array. Customer never sees the recipient addresses — only the "Emailing all contacts…" / "Alert sent" notifications.

**Key:** the Web3Forms access key lives in ONE place — `src/lib/web3forms.ts` — reading `VITE_WEB3FORMS_ACCESS_KEY` with the placeholder fallback `YOUR_WEB3FORMS_ACCESS_KEY`. Both EmergencyModal and ContactForm import it (do NOT redefine per-component). The key is a PUBLIC form key (not a secret), safe to commit. The access key MUST be created for the same inbox you want emails delivered to (info@abdrainage.co.uk), or routing will be wrong. Vite bakes env at build time, so setting `VITE_WEB3FORMS_ACCESS_KEY` requires a rebuild — simplest for this novice client is to paste the key straight into `web3forms.ts`.

**Config guard:** `isWeb3FormsConfigured()` (same file) returns false while the placeholder is present. Both forms call it first and short-circuit to the "please call/email us" error state instead of attempting a doomed network submit. So a real key is REQUIRED for any delivery.

**Web3Forms FREE plan limits (confirmed):** delivers to the SINGLE account inbox the key was created under — no way to change the "to" without recreating the key under a different email. CC (`ccemail`) is PRO-only ($12/mo); sending a `cc`/`ccemail` field on free does NOT error by itself, but do not rely on it. 250 submissions/month, 30-day storage. The installed key belongs to louis@abdrainage.co.uk, so messages land there (NOT info@, despite info@ being the address shown all over the site).

**CANNOT e2e-test form delivery from the Replit dev preview:** Web3Forms blocks submissions from the `*.replit.dev` preview TLD → HTTP 400 `"Form submissions from this domain TLD is blocked."` This is a per-TLD spam block, NOT a code/key bug. Real domain abdrainage.co.uk (.co.uk) is not blocked, so the forms work in production. Verification of live delivery can only be done on the production domain.

**Both forms now really send** (as of this wiring): ContactForm POSTs to Web3Forms (was previously a fake setTimeout stub); EmergencyModal POSTs too. No `cc`/`ccemail` field is sent (Pro-only). mailto: links on ABGroup*/FlexiPay pages are unaffected (they open the visitor's mail client, always "worked").

**Reply-To bounce (IMPORTANT):** if you DON'T send a `replyto` field, Web3Forms sets the notification's Reply-To to its own no-reply address, so when the business hits Reply the email bounces 550 "notify wasn't found at web3forms.com". FIX: always send a valid `replyto`. Both forms use `resolveReplyTo()` in `lib/web3forms.ts` → customer email if valid, else BUSINESS_EMAIL (info@abdrainage.co.uk). Emergency form collects no email so it always falls back to the business inbox (respond by phone). The JSON API field name is lowercase `replyto` (same key as the HTML form field). Any future form/key change must keep sending `replyto`, or bounces return.
