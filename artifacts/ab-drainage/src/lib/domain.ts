export type SiteDomain = 'drainage' | 'construction' | 'fencing' | 'facilities';

export function getCurrentSite(): SiteDomain {
  if (typeof window === 'undefined') return 'drainage';
  const h = window.location.hostname;
  if (h.includes('abconstructionsolutions')) return 'construction';
  if (h.includes('abfencingsolutions')) return 'fencing';
  if (h.includes('abfacilitiesmgmt')) return 'facilities';
  return 'drainage';
}
