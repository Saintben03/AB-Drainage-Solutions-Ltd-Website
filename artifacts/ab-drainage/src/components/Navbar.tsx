import { Link, useLocation } from "wouter";
import { Phone, Mail, Menu, X, ArrowRight, ChevronDown, AlertTriangle } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoMain from "@assets/site_files_1/AB Drainage logo.png";
import logoConstruction from "@assets/AB-Construction-300x54_1783288669800.png";
import logoFencing from "@assets/AB-Fencing-300x56_1783288689329.png";
import logoFacilities from "@assets/AB-Facilities-scaled-1-300x52_1783288632041.png";
import { SocialLinks } from "./SocialLinks";
import { useBookNow } from "@/contexts/BookNowContext";
import { EmergencyModal } from "./EmergencyModal";
import { servicePages } from "@/data/servicePages";

const groupCompanies = [
  {
    name: "AB Construction Solutions",
    sub: "Civil Engineering & Groundworks",
    href: "/ab-group/construction",
    logo: logoConstruction,
  },
  {
    name: "AB Fencing Solutions",
    sub: "Residential, Commercial & Agricultural",
    href: "/ab-group/fencing",
    logo: logoFencing,
  },
  {
    name: "AB Facilities Management",
    sub: "Buildings & Compliance",
    href: "/ab-group/facilities",
    logo: logoFacilities,
  },
];

export const Navbar = () => {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [groupDropdownOpen, setGroupDropdownOpen] = useState(false);
  const [mobileGroupOpen, setMobileGroupOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [emergencyOpen, setEmergencyOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(80);
  const { openBookNow } = useBookNow();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesLeaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
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
    setServicesDropdownOpen(false);
  }, [location]);

  const handleServicesEnter = () => {
    if (servicesLeaveTimer.current) clearTimeout(servicesLeaveTimer.current);
    setServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    servicesLeaveTimer.current = setTimeout(() => setServicesDropdownOpen(false), 180);
  };

  const handleGroupEnter = () => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setGroupDropdownOpen(true);
  };

  const handleGroupLeave = () => {
    leaveTimer.current = setTimeout(() => setGroupDropdownOpen(false), 180);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Areas Covered", href: "/areas" },
    { name: "About Us", href: "/about" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const isGroupActive = location.startsWith("/ab-group");

  return (
    <>
      {/* ── Emergency Bar — bright Ferrari-red scrolling banner, click to open emergency modal ── */}
      <button
        onClick={() => setEmergencyOpen(true)}
        className="group relative w-full overflow-hidden bg-[#FF2800] text-white py-2 xl:py-2.5 text-[11px] xl:text-xs font-bold uppercase tracking-[0.18em] cursor-pointer transition-[filter] duration-200 hover:brightness-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/70"
        aria-label="24/7 Emergency — open emergency call panel"
      >
        <span className="sr-only">24/7 Emergency — Click to Call Now</span>
        <div aria-hidden="true" className="flex w-max animate-marquee whitespace-nowrap will-change-transform">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="flex items-center gap-2.5 px-6">
                  <AlertTriangle size={13} className="shrink-0 animate-pulse" />
                  24/7 Emergency — Click to Call Now
                </span>
              ))}
            </div>
          ))}
        </div>
      </button>

      {/* ── Contact details strip — moved out of the emergency bar, sits immediately below it ── */}
      <div className="w-full bg-zinc-900 border-b border-white/5 text-white/75 text-[10px] xl:text-xs font-bold uppercase tracking-[0.12em] 2xl:tracking-[0.18em]">
        <div className="container mx-auto px-4 lg:px-8 py-2 flex items-center justify-between gap-3">
          {/* Left: contact details */}
          <div className="flex items-center gap-3 2xl:gap-5 min-w-0">
            <a href="tel:01256688650" className="flex items-center gap-1.5 whitespace-nowrap hover:text-accent transition-colors">
              <Phone size={13} className="shrink-0" /> 01256 688 650
            </a>
            <span className="hidden md:inline text-white/25 shrink-0">|</span>
            <a href="mailto:info@abdrainage.co.uk" className="hidden md:flex items-center gap-1.5 whitespace-nowrap normal-case tracking-normal hover:text-accent transition-colors">
              <Mail size={13} className="shrink-0" /> info@abdrainage.co.uk
            </a>
          </div>

          {/* Right: Follow Us + social icons */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden sm:inline text-white/60 tracking-[0.18em]">Follow Us</span>
            <SocialLinks
              iconSize={20}
              itemClassName="text-white/80 hover:text-accent hover:-translate-y-0.5 [&_svg]:w-5 [&_svg]:h-5"
            />
          </div>
        </div>
      </div>

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
            <Link href="/" onClick={scrollToTop} className="group flex-shrink-0 relative z-50 block">
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
              {/* Home first */}
              <Link
                href="/"
                onClick={scrollToTop}
                className={`whitespace-nowrap text-[13px] xl:text-sm font-bold uppercase tracking-tight xl:tracking-wide transition-colors relative group ${
                  location === "/" ? "text-accent" : "text-foreground/80 hover:text-accent"
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${location === "/" ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>

              {/* Services dropdown — sits right after Home */}
              <div
                className="relative"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <Link
                  href="/services"
                  className={`whitespace-nowrap text-[13px] xl:text-sm font-bold uppercase tracking-tight xl:tracking-wide transition-colors relative group flex items-center gap-1 ${
                    location === "/services" || servicePages.some((s) => location === `/${s.slug}`)
                      ? "text-accent"
                      : "text-foreground/80 hover:text-accent"
                  }`}
                  aria-expanded={servicesDropdownOpen}
                >
                  Services
                  <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180" : ""}`}
                  />
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    location === "/services" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                </Link>

                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute top-full left-0 mt-3 w-72 bg-[#111418] border border-white/10 shadow-2xl shadow-black/70 z-50 rounded-xl overflow-hidden"
                      onMouseEnter={handleServicesEnter}
                      onMouseLeave={handleServicesLeave}
                    >
                      <div className="px-5 pt-4 pb-3 bg-white/[0.03]">
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.22em]">Drainage Services</p>
                      </div>
                      {servicePages.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/${s.slug}`}
                          className="flex items-center gap-3 px-5 py-3.5 hover:bg-white/[0.06] transition-colors group/item border-t border-white/5"
                        >
                          <span className="text-white/85 text-sm font-semibold flex-1">{s.name}</span>
                          <ArrowRight
                            size={14}
                            className="shrink-0 text-white/25 group-hover/item:text-white/70 group-hover/item:translate-x-0.5 transition-all"
                          />
                        </Link>
                      ))}
                      <Link
                        href="/services"
                        className="flex items-center gap-3 px-5 py-3.5 border-t border-white/10 bg-white/[0.02] hover:bg-white/[0.06] transition-colors group/item"
                      >
                        <span className="text-accent text-xs font-bold uppercase tracking-wider flex-1">View All Services</span>
                        <ArrowRight size={14} className="shrink-0 text-accent" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {navLinks.slice(1).map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={link.href === "/" ? scrollToTop : undefined}
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
                      className="absolute top-full right-0 mt-3 w-[22rem] bg-[#111418] border border-white/10 shadow-2xl shadow-black/70 z-50 rounded-xl overflow-hidden"
                      onMouseEnter={handleGroupEnter}
                      onMouseLeave={handleGroupLeave}
                    >
                      <div className="px-5 pt-4 pb-3 bg-white/[0.03]">
                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.22em]">AB Group Divisions</p>
                      </div>
                      {groupCompanies.map((co) => (
                        <Link
                          key={co.href}
                          href={co.href}
                          className="flex items-center gap-4 px-5 py-4 hover:bg-white/[0.06] transition-colors group/item border-t border-white/5"
                        >
                          <div className="min-w-0 flex-1">
                            <img
                              src={co.logo}
                              alt={co.name}
                              className="h-7 w-auto object-contain group-hover/item:scale-[1.03] origin-left transition-transform"
                            />
                            <p className="text-white/50 text-xs mt-2 leading-snug">{co.sub}</p>
                          </div>
                          <ArrowRight
                            size={15}
                            className="ml-auto shrink-0 text-white/25 group-hover/item:text-white/70 group-hover/item:translate-x-0.5 transition-all"
                          />
                        </Link>
                      ))}
                      <div className="px-5 py-3 border-t border-white/10 bg-white/[0.02]">
                        <p className="text-white/30 text-[10px] uppercase tracking-[0.15em]">A&B Drainage — Currently Viewing</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center shrink-0">
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

      </header>

      {/* Mobile Menu — outside <header> so it sits above the header's z-50 stacking context */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 bg-[#080808]/98 backdrop-blur-xl z-[60] lg:hidden flex flex-col p-6 overflow-y-auto"
            style={{ top: headerHeight }}
          >
              <nav className="flex flex-col gap-0 bg-border mt-4">
                {navLinks.map((link, i) => {
                  const isActive = location === link.href;
                  return (
                    <div key={link.name} className="contents">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, delay: i * 0.05 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            if (link.href === "/") scrollToTop();
                          }}
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

                      {/* Services accordion — directly after Home */}
                      {i === 0 && (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, delay: 0.05 }}
                        >
                          <button
                            onClick={() => setMobileServicesOpen((o) => !o)}
                            className={`w-full flex items-center justify-between bg-card px-6 py-5 text-xl font-display uppercase font-bold border-l-4 transition-colors ${
                              location === "/services" || servicePages.some((s) => location === `/${s.slug}`)
                                ? "border-accent text-accent"
                                : "border-transparent text-foreground hover:border-accent hover:text-accent"
                            }`}
                          >
                            Services
                            <ChevronDown
                              size={20}
                              className={`text-accent opacity-60 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                            />
                          </button>

                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.22 }}
                                className="overflow-hidden bg-zinc-950"
                              >
                                {servicePages.map((s) => (
                                  <Link
                                    key={s.slug}
                                    href={`/${s.slug}`}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center gap-4 px-8 py-4 border-t border-zinc-800 hover:bg-zinc-900 transition-colors"
                                  >
                                    <span className="flex-1 text-white/85 text-base font-semibold">{s.name}</span>
                                    <ArrowRight size={14} className="text-white/30" />
                                  </Link>
                                ))}
                                <Link
                                  href="/services"
                                  onClick={() => setMobileMenuOpen(false)}
                                  className="flex items-center gap-4 px-8 py-4 border-t border-zinc-800 hover:bg-zinc-900 transition-colors"
                                >
                                  <span className="flex-1 text-accent text-sm font-bold uppercase tracking-wider">View All Services</span>
                                  <ArrowRight size={14} className="text-accent" />
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      )}
                    </div>
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
                            className="flex items-center gap-4 px-8 py-4 border-t border-zinc-800 hover:bg-zinc-900 transition-colors"
                          >
                            <div className="flex-1 min-w-0">
                              <img
                                src={co.logo}
                                alt={co.name}
                                className="h-6 w-auto object-contain"
                              />
                              <p className="text-white/40 text-xs mt-1.5">{co.sub}</p>
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
    </>
  );
};
