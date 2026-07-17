import { Phone, ArrowRight, ExternalLink } from "lucide-react";
import { SiteDomain } from "@/lib/domain";
import logoConstruction from "@assets/AB-Construction-300x54_1783288669800.png";
import logoFencing from "@assets/AB-Fencing-300x56_1783288689329.png";
import logoFacilities from "@assets/AB-Facilities-scaled-1-300x52_1783288632041.png";

type DivisionSite = Exclude<SiteDomain, "drainage">;

const logos: Record<DivisionSite, string> = {
  construction: logoConstruction,
  fencing: logoFencing,
  facilities: logoFacilities,
};

const alts: Record<DivisionSite, string> = {
  construction: "AB Construction Solutions Ltd",
  fencing: "AB Fencing Solutions Ltd",
  facilities: "AB Facilities Management Ltd",
};

interface DivisionNavbarProps {
  site: DivisionSite;
}

export const DivisionNavbar = ({ site }: DivisionNavbarProps) => {
  return (
    <header className="sticky top-0 w-full z-50 bg-[#0a0a0a] border-b border-white/10 shadow-lg shadow-black/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <a href="/" className="flex-shrink-0 group">
            <img
              src={logos[site]}
              alt={alts[site]}
              className="h-8 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </a>
          <div className="flex items-center gap-3">
            <a
              href="tel:01256688650"
              className="hidden sm:flex items-center gap-2 text-white/65 hover:text-white text-sm font-bold uppercase tracking-wide transition-colors"
            >
              <Phone size={14} className="shrink-0" />
              01256 688 650
            </a>
            <a
              href="#enquire"
              className="flex items-center gap-2 px-4 py-2.5 text-white font-bold uppercase tracking-wider text-xs transition-all hover:opacity-90"
              style={{ backgroundColor: "#dc2626" }}
            >
              Get a Quote <ArrowRight size={13} />
            </a>
            <a
              href="https://abdrainage.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 text-white/35 hover:text-white/65 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors border border-white/10 hover:border-white/25 px-3 py-2 rounded-sm"
            >
              <ExternalLink size={11} />
              Part of AB Group
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
