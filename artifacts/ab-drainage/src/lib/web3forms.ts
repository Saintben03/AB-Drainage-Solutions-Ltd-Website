// Single source of truth for the Web3Forms delivery key used by both the
// Contact form and the Emergency alert panel.
//
// This is a PUBLIC form access key (safe to ship in the frontend), NOT a secret.
// Create one for free at https://web3forms.com using info@abdrainage.co.uk as the
// destination address, confirm it via the email they send you, then either:
//   - paste the key into WEB3FORMS_ACCESS_KEY below, or
//   - set VITE_WEB3FORMS_ACCESS_KEY in the hosting environment.
//
// Every submission is delivered to the email address the key was created with —
// currently louis@abdrainage.co.uk (the account this key belongs to).
// NOTE: Web3Forms' free plan delivers to that SINGLE account inbox only. CC to
// extra recipients (ccemail) is a Pro-only feature ($12/mo), so we do not send it.
// NOTE: Web3Forms blocks submissions from some temporary domain TLDs (e.g. the
// *.replit.dev preview URL), so an end-to-end submit test only succeeds from the
// real production domain (abdrainage.co.uk), where the block does not apply.
export const WEB3FORMS_ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ||
  "1fff1011-7ce5-4637-a911-a8636db20080";

// True only once a real key has been installed (guards against silent no-delivery).
export const isWeb3FormsConfigured = (): boolean =>
  WEB3FORMS_ACCESS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY" &&
  WEB3FORMS_ACCESS_KEY.trim().length > 10;
