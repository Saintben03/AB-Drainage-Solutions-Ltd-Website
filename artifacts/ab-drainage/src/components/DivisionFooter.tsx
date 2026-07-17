import logoConstruction from "@assets/AB-Construction-300x54_1783288669800.png";
import logoFencing from "@assets/AB-Fencing-300x56_1783288689329.png";
import logoFacilities from "@assets/AB-Facilities-scaled-1-300x52_1783288632041.png";
import { SiteDomain } from "@/lib/domain";

type DivisionSite = Exclude<SiteDomain, "drainage">;

interface DivisionFooterProps {
  site: DivisionSite;
}

const config: Record<DivisionSite, {
  logo: string;
  alt: string;
  company: string;
  description: string;
  accent: string;
  services: string[];
  otherSites: { label: string; href: string }[];
}> = {
  construction: {
    logo: logoConstruction,
    alt: "AB Construction Solutions Ltd",
    company: "AB Construction Solutions Ltd",
    description: "Hampshire's civil engineering and groundworks specialists. Foundation laying, site clearance, structural works and project management — delivered on time and on budget.",
    accent: "#dc2626",
    services: [
      "Groundworks & Excavation",
      "Civil Engineering",
      "Structural Works",
      "Site Clearance",
      "Concrete Works",
      "Project Management",
    ],
    otherSites: [
      { label: "AB Drainage Solutions", href: "https://www.abdrainage.co.uk" },
      { label: "AB Fencing Solutions", href: "https://abfencingsolutions.co.uk" },
      { label: "AB Facilities Management", href: "https://abfacilitiesmgmt.co.uk" },
    ],
  },
  fencing: {
    logo: logoFencing,
    alt: "AB Fencing Solutions Ltd",
    company: "AB Fencing Solutions Ltd",
    description: "Hampshire's fencing specialists. Residential, commercial, agricultural and security fencing installed to the highest standard — on time, every time.",
    accent: "#16a34a",
    services: [
      "Residential Fencing",
      "Commercial Fencing",
      "Agricultural Fencing",
      "Security Fencing",
      "Gates & Access",
      "Timber & Panel Fencing",
    ],
    otherSites: [
      { label: "AB Drainage Solutions", href: "https://www.abdrainage.co.uk" },
      { label: "AB Construction Solutions", href: "https://abconstructionsolutions.co.uk" },
      { label: "AB Facilities Management", href: "https://abfacilitiesmgmt.co.uk" },
    ],
  },
  facilities: {
    logo: logoFacilities,
    alt: "AB Facilities Management Ltd",
    company: "AB Facilities Management Ltd",
    description: "Hampshire's trusted facilities management partner. Keeping commercial buildings safe, compliant and operating at their best — every day.",
    accent: "#64748b",
    services: [
      "Building Maintenance",
      "M&E Services",
      "Compliance & H&S",
      "Cleaning Services",
      "Pest Control",
      "Grounds Maintenance",
    ],
    otherSites: [
      { label: "AB Drainage Solutions", href: "https://www.abdrainage.co.uk" },
      { label: "AB Construction Solutions", href: "https://abconstructionsolutions.co.uk" },
      { label: "AB Fencing Solutions", href: "https://abfencingsolutions.co.uk" },
    ],
  },
};

export const DivisionFooter = ({ site }: DivisionFooterProps) => {
  const c = config[site];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#080808] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8 mb-16">

          {/* Logo + description + contact */}
          <div className="col-span-2 md:col-span-1 space-y-4">
            <img
              src={c.logo}
              alt={c.alt}
              className="h-10 w-auto object-contain"
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              {c.description}
            </p>
            <div className="flex flex-col gap-1.5">
              <a href="tel:01256688650" className="text-base font-bold text-white hover:opacity-80 transition-opacity">
                01256 688 650
              </a>
              <a href="mailto:info@abdrainage.co.uk" className="text-sm hover:opacity-80 transition-opacity" style={{ color: c.accent }}>
                info@abdrainage.co.uk
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {c.services.map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: c.accent }} />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Priory Farm, Hampshire, Andwell, Hook RG27 9PA</li>
              <li>
                <a href="tel:01256688650" className="hover:text-white transition-colors">
                  01256 688 650
                </a>
              </li>
              <li>
                <a href="mailto:info@abdrainage.co.uk" className="hover:text-white transition-colors">
                  info@abdrainage.co.uk
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="#enquire"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-white text-xs font-bold uppercase tracking-wider transition-all hover:opacity-90"
                  style={{ backgroundColor: c.accent }}
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>

          {/* AB Group links */}
          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-white">AB Group</h3>
            <p className="text-muted-foreground text-sm mb-4">Part of a multi-discipline contracting group serving Hampshire and the South East.</p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {c.otherSites.map((o) => (
                <li key={o.href}>
                  <a
                    href={o.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {o.label} →
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {year} {c.company}. All rights reserved.</p>
          <div className="flex gap-4 items-center flex-wrap justify-center">
            <a href="https://www.abdrainage.co.uk/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://www.abdrainage.co.uk/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
            <span className="text-white/15">|</span>
            <a href="https://obsessivesoftware.app" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/60 transition-colors">
              Designed by ObsessiveSoftware.app
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
