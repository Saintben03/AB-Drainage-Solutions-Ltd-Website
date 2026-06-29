import { Link, useLocation } from "wouter";
import { Phone, Menu, X, ArrowRight, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoMain from "@assets/site_files_1/AB Drainage logo.png";
import { BookNowModal } from "./BookNowModal";

export const Navbar = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bookNowOpen, setBookNowOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Areas Covered", href: "/areas" },
    { name: "About Us", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const groupLink = { name: "AB Group", href: "https://ab-group.uk/services/" };

  return (
    <>
      {/* ── Emergency Bar ── */}
      <div className="bg-accent text-white py-2 px-4 text-center text-xs font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
        <span className="animate-pulse w-2 h-2 rounded-full bg-white block shrink-0"></span>
        24/7 Emergency Callout — Typically Within 1 Hour
      </div>

      <header
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/96 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5 py-2"
            : "bg-background py-4"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between gap-6">

            {/* Logo */}
            <Link href="/" className="flex-shrink-0 relative z-50">
              <img
                src={logoMain}
                alt="A&B Drainage Solutions Ltd Logo"
                className="h-52 md:h-64 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm font-bold uppercase tracking-wider transition-colors relative group ${
                      isActive ? "text-accent" : "text-foreground/80 hover:text-accent"
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                  </Link>
                );
              })}
              <a
                href={groupLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase tracking-wider text-foreground/80 hover:text-accent transition-colors relative group flex items-center gap-1.5"
              >
                {groupLink.name}
                <ExternalLink size={13} className="opacity-60" />
                <span className="absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 w-0 group-hover:w-full"></span>
              </a>
            </nav>

            {/* Desktop Emergency CTA */}
            <div className="hidden lg:flex items-center gap-5">
              <div className="flex flex-col items-end">
                <span className="text-[10px] text-muted-foreground uppercase tracking-[0.18em] font-bold">Emergency Response</span>
                <a
                  href="tel:07498062710"
                  className="text-lg font-display font-bold text-white hover:text-accent transition-colors flex items-center gap-2"
                >
                  <Phone size={17} className="text-accent" />
                  07498 062 710
                </a>
              </div>
              <button
                onClick={() => setBookNowOpen(true)}
                className="bg-accent hover:bg-accent/90 text-white px-6 py-3 text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
              >
                Book Now <ArrowRight size={15} />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-3 lg:hidden relative z-50">
              <a
                href="tel:07498062710"
                className="bg-accent text-white p-2.5 flex items-center gap-2 font-bold"
                aria-label="Emergency call"
              >
                <Phone size={19} />
                <span className="hidden sm:inline text-sm font-bold uppercase tracking-wider">Emergency</span>
              </a>
              <button
                className="text-foreground p-1.5 hover:text-accent transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 top-[120px] bg-[#080808]/98 backdrop-blur-xl z-40 lg:hidden flex flex-col p-6"
            >
              <nav className="flex flex-col gap-0 bg-border mt-4">
                {navLinks.map((link, i) => {
                  const isActive = location === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between bg-card px-6 py-5 text-xl font-display uppercase font-bold border-l-4 transition-colors ${
                          isActive
                            ? "border-accent text-accent"
                            : "border-transparent text-foreground hover:border-accent hover:text-accent"
                        }`}
                      >
                        {link.name}
                        <ArrowRight size={18} className="text-accent opacity-60" />
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: navLinks.length * 0.05 }}
                >
                  <a
                    href={groupLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between bg-card px-6 py-5 text-xl font-display uppercase font-bold border-l-4 border-transparent text-foreground hover:border-accent hover:text-accent transition-colors"
                  >
                    {groupLink.name}
                    <ExternalLink size={18} className="text-accent opacity-60" />
                  </a>
                </motion.div>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.35 }}
                className="mt-8 pb-12 space-y-4"
              >
                <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold mb-4">24/7 Emergency Lines</p>
                <a href="tel:01256688650" className="flex items-center gap-3 text-2xl font-display font-bold text-white hover:text-accent transition-colors">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  01256 688 650
                </a>
                <a href="tel:07498062710" className="flex items-center gap-3 text-2xl font-display font-bold text-white hover:text-accent transition-colors">
                  <div className="w-10 h-10 bg-accent flex items-center justify-center shrink-0">
                    <Phone size={18} className="text-white" />
                  </div>
                  07498 062 710
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <BookNowModal open={bookNowOpen} onClose={() => setBookNowOpen(false)} />
    </>
  );
};
