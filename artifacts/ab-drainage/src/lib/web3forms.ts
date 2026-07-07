// Single source of truth for the Web3Forms delivery key used by both the
// Contact form and the Emergency alert panel.
//
// This is a PUBLIC form access key (safe to ship in the frontend), NOT a secret.
// Create one for free at https://web3forms.com using info@abdrainage.co.uk as the
// destination address, confirm it via the email they send you, then either:
//   - paste the key into WEB3FORMS_ACCESS_KEY below, or
//   - set VITE_WEB3FORMS_ACCESS_KEY in the hosting environment.
//
// Every submission is delivered to the email address the key was created with
// (info@abdrainage.co.uk). The emergency panel additionally CCs louis@abdrainage.co.uk.
export const WEB3FORMS_ACCESS_KEY =
  (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined) ||
  "YOUR_WEB3FORMS_ACCESS_KEY";

// True only once a real key has been installed (guards against silent no-delivery).
export const isWeb3FormsConfigured = (): boolean =>
  WEB3FORMS_ACCESS_KEY !== "YOUR_WEB3FORMS_ACCESS_KEY" &&
  WEB3FORMS_ACCESS_KEY.trim().length > 10;
