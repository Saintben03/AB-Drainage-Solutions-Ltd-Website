import { Link, useLocation } from "wouter";
import { Phone, Smartphone, Mail, Menu, X, ArrowRight, ChevronDown, AlertTriangle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoMain from "@assets/site_files_1/AB Drainage logo.png";
import { SocialLinks } from "./SocialLinks";
import { useBookNow } from "@/contexts/BookNowContext";
import { EmergencyModal } from "./EmergencyModal";

const groupCompanies = [
  {
    name: "AB Construction Solutions",
    sub: "Civil Engineering & Groundworks",
    href: "/ab-group/construction",
    color: "#dc2626",
    dot: "bg-red-600",
  },
  {
    name: "AB Fencing Solutions",
    sub: "Residential, Commercial & Agricultural",
    href: "/ab-group/fencing",
    color: "#16a34a",
    dot: "bg-green-600",
  },
  {
    name: "AB Facilities Management",
    sub: "Buildings & Compliance",
    href: "/ab-group/facilities",
    color: "#64748b",
    dot: "bg-slate-500",
  },
];

export const Navbar = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [groupDropdownOpen, setGroupDropdownOpen] = useState(false);
  const [mobileGroupOpen, setMobileGroupOpen] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(80);
  const { openBookNow } = useBookNow();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const measure = () => {
      if (headerRef.current) setHeaderHeight(headerRef.current.getBoundingClientRect().bottom);
    };
    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setGroupDropdownOpen(false);
  }, [location]);

  const handleGroupEnter = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setGroupDropdownOpen(true);
  };

  const handleGroupLeave = () => {
    leaveTimer.current = setTimeout(() => setGroupDropdownOpen(false), 180);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Areas Covered", href: "/areas" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isGroupActive = location.startsWith("/ab-group");

  return (
    <>
      {/* ── Emergency Bar — click to open emergency modal ── */}
      <button
        onClick={() => setEmergencyOpen(true)}
        className="group relative w-full bg-accent text-white px-4 py-2 text-[10px] xl:text-xs font-bold uppercase tracking-[0.12em] 2xl:tracking-[0.18em] transition-all duration-200 hover:py-3 hover:brightness-110 hover:shadow-lg hover:shadow-accent/50 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 active:scale-[0.995]"
        aria-label="Open emergency call panel"
      >
        {/* Animated border-bottom pulse on hover to hint interactivity */}
        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/30 group-hover:bg-white/60 transition-colors duration-200 pointer-events-none" />

        {/* Mobile layout */}
        <div className="xl:hidden flex items-center justify-between gap-2">
          <span className="flex items-center gap-1 whitespace-nowrap shrink-0">
            <AlertTriangle size={11} className="shrink-0 animate-pulse" /> EMERGENCY
          </span>
          <span className="text-white/30 shrink-0">|</span>
          <span className="flex items-center gap-1.5 shrink-0">
            <span className="animate-pulse w-1.5 h-1.5 rounded-full bg-white block shrink-0"></span>
            <span className="hidden sm:inline">24/7 — Tap to Call Now</span>
            <span className="sm:hidden">Tap to Call</span>
          </span>
          <span className="text-white/30 shrink-0">|</span>
          <span className="flex items-center gap-1 whitespace-nowrap shrink-0">
            <Phone size={11} className="shrink-0" /> 01256 688 650
          </span>
        </div>

        {/* xl+ layout: left phones | center message | right socials */}
        <div className="hidden xl:flex items-center justify-center gap-4">
          {/* Left contact group */}
          <div className="flex flex-1 items-center gap-3 2xl:gap-5 pl-2 2xl:pl-6">
            <span className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
              <Phone size={13} className="shrink-0" /> 01256 688 650
            </span>
            <span className="text-white/30 shrink-0">|</span>
            <span className="flex items-center gap-1.5 whitespace-nowrap shrink-0">
              <Smartphone size={13} className="shrink-0" /> 07498 062 710
            </span>
            <span className="hidden 2xl:inline text-white/30 shrink-0">|</span>
            <span className="hidden 2xl:flex items-center gap-1.5 whitespace-nowrap shrink-0 normal-case tracking-normal">
              <Mail size={13} className="shrink-0" /> info@abdrainage.co.uk
            </span>
          </div>

          {/* Center: 24/7 message + click hint */}
          <span className="flex items-center gap-2 px-6 border-x border-white/30 whitespace-nowrap shrink-0">
            <AlertTriangle size={14} className="shrink-0 animate-pulse" />
            24/7 Emergency — Click to Call Now
            <AlertTriangle size={14} className="shrink-0 animate-pulse" />
          </span>

          {/* Right: Follow Us + social icons */}
          <div className="flex flex-1 items-center justify-end gap-3 pr-4 xl:pr-6">
            <span className="text-white/80 tracking-[0.18em]">Follow Us</span>
            <SocialLinks
              iconSize={24}
              itemClassName="text-white hover:-translate-y-0.5 [&_svg]:w-6 [&_svg]:h-6"
            />
          </div>
        </div>
      </button>

      <EmergencyModal open={emergencyOpen} onClose={() => setEmergencyOpen(false)} />

      <header
        ref={headerRef}
        className={`sticky top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/96 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5 py-0"
            : "bg-background py-0"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between gap-6">

            {/* Logo */}
            <Link href="/" className="group flex-shrink-0 relative z-50 block">
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="relative will-change-transform"
              >
                <div className="relative">
                  <img
                    src={logoMain}
                    alt="A&B Drainage Solutions Ltd Logo"
                    className="h-48 md:h-56 lg:h-48 xl:h-56 2xl:h-64 w-auto object-contain -my-12 transition-[filter] duration-300 group-hover:drop-shadow-[0_0_18px_rgba(234,88,12,0.45)]"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 overflow-hidden"
                    style={{
                      WebkitMaskImage: `url(${logoMain})`,
                      maskImage: `url(${logoMain})`,
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                    }}
                  >
                    <motion.span
                      className="absolute top-0 left-0 h-full w-1/4 -skew-x-12 bg-gradient-to-r from-transparent via-white/80 to-transparent"
                      initial={{ x: "-160%" }}
                      animate={{ x: ["-160%", "560%"] }}
                      transition={{ duration: 1.3, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                    />
                  </span>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 shrink-0">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`whitespace-nowrap text-[13px] xl:text-sm font-bold uppercase tracking-tight xl:tracking-wide transition-colors relative group ${
                      isActive ? "text-accent" : "text-foreground/80 hover:text-accent"
                    }`}
                  >
                    {link.name}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                  </Link>
                );
              })}

              {/* The AB Group dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={handleGroupEnter}
                onMouseLeave={handleGroupLeave}
              >
                <button
                  className={`whitespace-nowrap text-[13px] xl:text-sm font-bold uppercase tracking-tight xl:tracking-wide transition-all relative flex items-center gap-1 px-3 py-1.5 rounded-sm border ${
                    isGroupActive
                      ? "bg-accent text-white border-accent"
                      : "bg-accent/10 text-accent border-accent/40 hover:bg-accent hover:text-white hover:border-accent"
                  }`}
                  onClick={() => setGroupDropdownOpen((o) => !o)}
                  aria-expanded={groupDropdownOpen}
                >
                  Other Services
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${groupDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <AnimatePresence>
                  {groupDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full right-0 mt-3 w-72 bg-[#0d0d0d] border border-white/10 shadow-2xl shadow-black/60 z-50"
                      onMouseEnter={handleGroupEnter}
                      onMouseLeave={handleGroupLeave}
                    >
                      <div className="px-4 pt-4 pb-2">
                        <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.2em]">AB Group Divisions</p>
                      </div>
                      {groupCompanies.map((co) => (
                        <Link
                          key={co.href}
                          href={co.href}
                          className="flex items-start gap-3 px-4 py-3.5 hover:bg-white/5 transition-colors group/item border-t border-white/5"
                        >
                          <span
                            className="w-2.5 h-2.5 rounded-full shrink-0 mt-1"
                            style={{ backgroundColor: co.color }}
                          />
                          <div>
                            <p className="text-white font-bold text-sm uppercase tracking-wide leading-tight group-hover/item:text-white transition-colors" style={{ color: "inherit" }}>
                              {co.name}
                            </p>
                            <p className="text-white/45 text-xs mt-0.5">{co.sub}</p>
                          </div>
                          <ArrowRight
                            size={13}
                            className="ml-auto shrink-0 mt-1 text-white/20 group-hover/item:text-white/60 transition-colors"
                          />
                        </Link>
                      ))}
                      <div className="px-4 py-3 border-t border-white/10">
                        <p className="text-white/25 text-[10px] uppercase tracking-[0.15em]">A&B Drainage — Currently Viewing</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop Emergency CTA */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-10 shrink-0">
              <div className="hidden 2xl:flex flex-col items-center 2xl:ml-8 2xl:pl-8 2xl:border-l 2xl:border-white/15">
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
                onClick={openBookNow}
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

              {/* Bordered hamburger — hair salon style, mobile only */}
              <button
                className={`w-[44px] h-[44px] border flex flex-col items-center justify-center gap-[5px] transition-all duration-200 shrink-0 ${
                  mobileMenuOpen
                    ? "border-accent bg-accent/5"
                    : "border-foreground/25 hover:border-accent"
                }`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X size={20} className="text-accent" />
                ) : (
                  <>
                    <span className="w-[22px] h-[2px] bg-foreground block"></span>
                    <span className="w-[22px] h-[2px] bg-accent block"></span>
                    <span className="w-[22px] h-[2px] bg-foreground block"></span>
                  </>
                )}
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
              className="fixed inset-x-0 bottom-0 bg-[#080808]/98 backdrop-blur-xl z-40 lg:hidden flex flex-col p-6 overflow-y-auto"
          style={{ top: headerHeight }}
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

                {/* The AB Group — accordion */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: navLinks.length * 0.05 }}
                >
                  <button
                    onClick={() => setMobileGroupOpen((o) => !o)}
                    className={`w-full flex items-center justify-between bg-card px-6 py-5 text-xl font-display uppercase font-bold border-l-4 transition-colors ${
                      isGroupActive ? "border-accent text-accent" : "border-transparent text-foreground hover:border-accent hover:text-accent"
                    }`}
                  >
                    Other Services
                    <ChevronDown
                      size={20}
                      className={`text-accent opacity-60 transition-transform duration-200 ${mobileGroupOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileGroupOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22 }}
                        className="overflow-hidden bg-zinc-950"
                      >
                        {groupCompanies.map((co) => (
                          <Link
                            key={co.href}
                            href={co.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center gap-3 px-8 py-4 border-t border-zinc-800 hover:bg-zinc-900 transition-colors"
                          >
                            <span
                              className="w-2 h-2 rounded-full shrink-0"
                              style={{ backgroundColor: co.color }}
                            />
                            <div className="flex-1">
                              <p className="text-white font-bold text-sm uppercase tracking-wide">{co.name}</p>
                              <p className="text-white/40 text-xs">{co.sub}</p>
                            </div>
                            <ArrowRight size={14} className="text-white/30" />
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
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

                <div className="pt-4">
                  <p className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold mb-4">Follow Us</p>
                  <SocialLinks
                    iconSize={20}
                    itemClassName="w-11 h-11 border border-white/15 bg-card text-foreground/80 flex items-center justify-center hover:bg-accent hover:text-white hover:border-accent rounded-md"
                  />
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
