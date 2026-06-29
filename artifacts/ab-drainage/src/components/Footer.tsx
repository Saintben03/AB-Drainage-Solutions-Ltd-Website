import { Link } from "wouter";
import logoMain from "@assets/site_files_1/AB Drainage logo.png";
import { SocialLinks } from "./SocialLinks";

export const Footer = () => {
  return (
    <footer className="bg-[#080808] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-8">
        <img src={logoMain} alt="A&B Drainage Solutions Ltd" className="h-36 w-auto mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="space-y-4">
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              With over 33 years of experience, we are Hampshire's trusted experts for domestic, commercial, and industrial drainage solutions. We answer when it matters.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:01256688650" className="text-lg font-bold hover:text-primary transition-colors">01256 688 650</a>
              <a href="tel:07498062710" className="text-lg font-bold hover:text-primary transition-colors">07498 062 710</a>
              <a href="mailto:info@abdrainage.co.uk" className="text-primary hover:text-primary/80 transition-colors">info@abdrainage.co.uk</a>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold mb-3">Follow Us</p>
              <SocialLinks
                iconSize={18}
                itemClassName="w-10 h-10 border border-white/10 text-muted-foreground flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent rounded-md"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-white">Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/services#blocked-drains" className="hover:text-primary transition-colors">Blocked Drains</Link></li>
              <li><Link href="/services#cctv-surveys" className="hover:text-primary transition-colors">CCTV Drain Surveys</Link></li>
              <li><Link href="/services#drain-repairs" className="hover:text-primary transition-colors">Drain Repairs</Link></li>
              <li><Link href="/services#emergency" className="hover:text-primary transition-colors">24/7 Emergency Drainage</Link></li>
              <li><Link href="/services#commercial" className="hover:text-primary transition-colors">Commercial & Industrial</Link></li>
              <li><Link href="/services" className="hover:text-primary transition-colors">View All Services &rarr;</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-white">Coverage Area</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/areas" className="hover:text-primary transition-colors">Hampshire</Link></li>
              <li><Link href="/areas" className="hover:text-primary transition-colors">Southampton</Link></li>
              <li><Link href="/areas" className="hover:text-primary transition-colors">Basingstoke</Link></li>
              <li><Link href="/areas" className="hover:text-primary transition-colors">Winchester</Link></li>
              <li><Link href="/areas" className="hover:text-primary transition-colors">Aldershot</Link></li>
              <li><Link href="/areas" className="hover:text-primary transition-colors">Reading & Surrounding</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-display font-bold mb-6 text-white">Why Choose Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> 33+ Years Experience</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> 24/7 Emergency Callouts</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Over 65s Discount</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> FlexiPay Available</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Highly Rated Across UK</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} A&B Drainage Solutions Ltd. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};