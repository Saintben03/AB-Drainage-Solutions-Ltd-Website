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

**Key:** the Web3Forms access key reads from `VITE_WEB3FORMS_ACCESS_KEY` with a placeholder fallback. The key is a PUBLIC form key (not a secret), safe to commit. Until a real key is set, submits return success:false → the form shows the "please call us" fallback. The access key MUST be created for the same inbox you want emails delivered to, or routing will be wrong.

**Gotcha:** the site's other forms (e.g. ContactForm) only *simulate* submission with a setTimeout — they do NOT actually send email. Any "make the contact form work" request needs the same Web3Forms wiring.
