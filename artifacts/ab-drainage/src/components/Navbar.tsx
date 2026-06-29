import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import logoMain from "@assets/site_files_1/AB Drainage logo.png";

export const Navbar = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Areas Covered", href: "/areas" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Top Emergency Bar */}
      <div className="bg-destructive text-destructive-foreground py-2 px-4 text-center text-sm font-semibold uppercase tracking-wider flex items-center justify-center gap-2">
        <span className="animate-pulse w-2 h-2 rounded-full bg-white block"></span>
        24/7 Emergency Callout - Typically within 1 hour
      </div>

      <header 
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-3" : "bg-background py-5"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative z-50">
              <img 
                src={logoMain} 
                alt="A&B Drainage Solutions Ltd Logo" 
                className="h-12 md:h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Emergency CTA Desktop */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex flex-col items-end">
                <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Emergency Response</span>
                <a href="tel:01256688650" className="text-xl font-display font-bold text-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Phone size={20} className="text-primary" />
                  01256 688 650
                </a>
              </div>
              <Link 
                href="/contact"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
              >
                Book Now <ArrowRight size={16} />
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-4 lg:hidden relative z-50">
              <a 
                href="tel:07498062710" 
                className="bg-primary text-primary-foreground p-2 md:px-4 md:py-2 rounded flex items-center gap-2 font-bold animate-pulse"
              >
                <Phone size={20} />
                <span className="hidden sm:inline">07498 062 710</span>
              </a>
              <button 
                className="text-foreground p-1"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 top-[120px] bg-background/98 backdrop-blur-xl z-40 lg:hidden flex flex-col p-6 animate-in slide-in-from-top-4">
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-display uppercase font-bold border-b border-white/10 pb-4 ${
                    location === link.href ? "text-primary" : "text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pb-12 flex flex-col gap-4">
              <p className="text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-2">24/7 Emergency Lines</p>
              <a href="tel:01256688650" className="text-3xl font-display font-bold text-foreground flex items-center gap-3">
                <Phone className="text-primary" size={28} />
                01256 688 650
              </a>
              <a href="tel:07498062710" className="text-3xl font-display font-bold text-foreground flex items-center gap-3">
                <Phone className="text-primary" size={28} />
                07498 062 710
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};