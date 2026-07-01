import React from "react";
import { 
  Phone, AlertTriangle, ArrowRight, ShieldCheck, Clock, 
  MapPin, Star, Mail, Facebook, Instagram, Twitter, ChevronRight, CheckCircle2, ChevronDown 
} from "lucide-react";

export function Blue() {
  return (
    <div className="font-['Inter'] text-[#f0f0f0] bg-[#1c1c1c] min-h-screen selection:bg-[#5392B6] selection:text-white flex flex-col">
      
      {/* 1. EMERGENCY TOP BAR (Orange - ONLY for action/emergency) */}
      <div className="bg-[#fe9a01] text-white py-2 px-4 w-full z-50 relative">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between text-[11px] sm:text-xs font-bold uppercase tracking-wider gap-2">
          <div className="flex items-center gap-2">
            <AlertTriangle size={14} className="animate-pulse" />
            <span>24/7 Emergency Drainage Response</span>
          </div>
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Phone size={14} />
            <span className="text-sm">01256 688 650</span>
          </a>
        </div>
      </div>

      {/* 2. NAVBAR */}
      <header className="sticky top-0 z-40 bg-[#1c1c1c]/95 backdrop-blur-md border-b border-[#383838]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img 
              src="/__mockup/images/logo.png" 
              alt="A&B Drainage Solutions Ltd" 
              className="h-10 md:h-[44px] w-auto object-contain brightness-0 invert"
            />
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#" className="text-sm font-bold uppercase tracking-wide text-[#5392B6] relative">
              Home
              <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#5392B6]"></span>
            </a>
            <a href="#" className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] hover:text-[#5392B6] transition-colors">Services</a>
            <a href="#" className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] hover:text-[#5392B6] transition-colors">About Us</a>
            <a href="#" className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] hover:text-[#5392B6] transition-colors">Gallery</a>
            <a href="#" className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] hover:text-[#5392B6] transition-colors">Blog</a>
            <a href="#" className="text-sm font-bold uppercase tracking-wide text-[#f0f0f0] hover:text-[#5392B6] transition-colors">Contact</a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold text-[#f0f0f0] hover:text-[#5392B6] transition-colors">
              <Phone size={16} className="text-[#5392B6]" />
              07498 062 710
            </a>
            <button className="bg-[#fe9a01] hover:bg-[#e68a00] text-white px-6 py-2.5 text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all">
              Book Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO */}
      <section className="relative min-h-[80vh] flex items-center pt-10 pb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/hero.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
          {/* Blue Haze Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#06182a] via-[#06182a]/80 to-[#0a2c47]/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[#013D85]/20"></div>
        </div>

        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0a2c47]/60 border border-[#5392B6]/30 backdrop-blur-sm rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-[#5392B6] animate-pulse"></span>
              <span className="text-[#5392B6] text-[10px] font-bold uppercase tracking-[0.2em]">33+ Years Experience</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-['Oswald'] font-bold text-white uppercase leading-[1.05] mb-6 drop-shadow-lg">
              The Drain Experts <span className="text-[#5392B6]">Hampshire</span> Relies On.
            </h1>
            
            <p className="text-lg md:text-xl text-[#f0f0f0] mb-8 leading-relaxed max-w-2xl drop-shadow-md">
              Blocked drain? Sewage backing up? We answer at 2am and arrive typically within 1 hour. Solving Hampshire's toughest drainage problems safely and reliably.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button className="bg-[#fe9a01] hover:bg-[#e68a00] text-white px-8 py-4 text-base font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-lg">
                Book Now <ArrowRight size={20} />
              </button>
              <button className="border-2 border-[#5392B6] hover:bg-[#5392B6]/10 text-white px-8 py-4 text-base font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all backdrop-blur-sm">
                Our Services
              </button>
            </div>

            {/* Trust Row - Blue Icons */}
            <div className="flex flex-wrap gap-6 sm:gap-8 text-xs font-bold text-[#f0f0f0]/80 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#5392B6]" /> 
                1 Hour ETA
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#5392B6]" /> 
                Fully Insured
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-[#5392B6]" /> 
                Hampshire Wide
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS / TRUST STRIP */}
      <section className="bg-[#232323] border-y border-[#383838] py-12 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute -left-20 -top-20 text-[#2b2b2b] font-['Oswald'] font-bold text-[12rem] leading-none select-none pointer-events-none opacity-50">AB</div>
        
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x-0 md:divide-x divide-[#383838]">
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-['Oswald'] font-bold text-[#5392B6] mb-1">33+</div>
              <div className="text-xs text-[#9a9a9a] uppercase tracking-[0.15em] font-bold">Years Experience</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-['Oswald'] font-bold text-[#5392B6] mb-1">5,000+</div>
              <div className="text-xs text-[#9a9a9a] uppercase tracking-[0.15em] font-bold">Jobs Completed</div>
            </div>
            <div className="text-center px-4">
              <div className="text-4xl md:text-5xl font-['Oswald'] font-bold text-[#5392B6] mb-1">24/7</div>
              <div className="text-xs text-[#9a9a9a] uppercase tracking-[0.15em] font-bold">Emergency Callout</div>
            </div>
            <div className="text-center px-4 flex flex-col items-center justify-center">
              <div className="flex gap-1 mb-2">
                {[...Array(5)].map((_, i) => <Star key={i} size={24} className="fill-[#5392B6] text-[#5392B6]" />)}
              </div>
              <div className="text-xs text-[#9a9a9a] uppercase tracking-[0.15em] font-bold">Rated Excellent</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SERVICES GRID */}
      <section className="py-24 bg-[#1c1c1c]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-[#5392B6] text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-['Oswald'] font-bold uppercase text-[#f0f0f0] leading-tight mb-4">
              Complete <span className="text-[#5392B6]">Drainage</span> Solutions
            </h2>
            <p className="text-[#9a9a9a] text-lg">
              From emergency blockages to full CCTV surveys—one expert team covering every drainage need across Hampshire.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Emergency Response", img: "/__mockup/images/emergency-response.png", desc: "24/7 rapid response typically within the hour for blockages and flooding." },
              { title: "Blocked Drains", img: "/__mockup/images/blocked-drain.png", desc: "Fast, guaranteed clearance for domestic and commercial blocked drains." },
              { title: "Drain Repairs", img: "/__mockup/images/drain-repair.png", desc: "Structural repairs using no-dig relining or traditional excavation." },
              { title: "Commercial Drainage", img: "/__mockup/images/commercial-drainage.png", desc: "Planned maintenance contracts and rapid reactive response." },
              { title: "CCTV Surveys", img: "/__mockup/images/cctv-survey.png", desc: "HD camera inspection for accurate diagnosis and pre-purchase reports." },
              { title: "Guttering", img: "/__mockup/images/guttering.png", desc: "Professional clearing, repair, and maintenance for residential and commercial." },
            ].map((srv, i) => (
              <div key={i} className="group relative bg-[#2b2b2b] border border-[#383838] overflow-hidden flex flex-col h-full hover:border-[#5392B6]/50 transition-colors">
                <div className="h-48 relative overflow-hidden">
                  <img src={srv.img} alt={srv.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  {/* Subtle Navy Tint Overlay */}
                  <div className="absolute inset-0 bg-[#0a2c47]/50 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-30"></div>
                  {/* Bottom gradient fade into card color */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#2b2b2b] to-transparent"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col relative z-10 -mt-6">
                  <h3 className="text-2xl font-['Oswald'] font-bold text-[#f0f0f0] uppercase mb-2 group-hover:text-[#5392B6] transition-colors">{srv.title}</h3>
                  <p className="text-[#9a9a9a] text-sm leading-relaxed mb-6 flex-grow">{srv.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#5392B6] group-hover:gap-3 transition-all">
                    Learn More <ChevronRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-24 bg-[#232323] border-y border-[#383838]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <p className="text-[#5392B6] text-xs font-bold uppercase tracking-[0.25em] mb-3">Why Choose A&amp;B</p>
              <h2 className="text-3xl md:text-5xl font-['Oswald'] font-bold uppercase text-[#f0f0f0] leading-tight mb-6">
                33 Years of Getting It <span className="text-[#5392B6]">Right.</span>
              </h2>
              <p className="text-[#9a9a9a] text-lg leading-relaxed mb-8">
                We aren't a faceless franchise. We are a dedicated, local team of seasoned drainage engineers. We invest in the best equipment, turn up when we say we will, and fix problems permanently.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5392B6]/10 border border-[#5392B6]/20 flex items-center justify-center shrink-0">
                    <Clock size={24} className="text-[#5392B6]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f0f0f0] mb-1">1 Hour Response</h4>
                    <p className="text-sm text-[#9a9a9a]">We aim to be on site within the hour, day or night.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5392B6]/10 border border-[#5392B6]/20 flex items-center justify-center shrink-0">
                    <ShieldCheck size={24} className="text-[#5392B6]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f0f0f0] mb-1">Fully Accredited</h4>
                    <p className="text-sm text-[#9a9a9a]">Approved to work for NHS and major contractors.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5392B6]/10 border border-[#5392B6]/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} className="text-[#5392B6]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f0f0f0] mb-1">No Hidden Fees</h4>
                    <p className="text-sm text-[#9a9a9a]">Honest, upfront pricing before we start.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#5392B6]/10 border border-[#5392B6]/20 flex items-center justify-center shrink-0">
                    <MapPin size={24} className="text-[#5392B6]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#f0f0f0] mb-1">Hampshire Wide</h4>
                    <p className="text-sm text-[#9a9a9a]">Covering Southampton, Winchester, Portsmouth.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
               <img src="/__mockup/images/hero.png" className="rounded-lg object-cover h-64 w-full opacity-80" alt="Work 1" />
               <img src="/__mockup/images/emergency-response.png" className="rounded-lg object-cover h-64 w-full mt-8 opacity-80" alt="Work 2" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. CTA BAND */}
      <section className="bg-[#0a2c47] relative overflow-hidden">
        {/* Background texture/pattern suggestion */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent mix-blend-overlay"></div>
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8 py-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-['Oswald'] font-bold text-white uppercase mb-2">
              Blocked drain? We'll be there fast.
            </h2>
            <p className="text-[#5392B6] font-bold tracking-wide">Call our 24/7 team for immediate assistance.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <button className="bg-[#fe9a01] hover:bg-[#e68a00] text-white px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors whitespace-nowrap">
              <Phone size={18} /> Call Now
            </button>
            <button className="bg-transparent border border-[#5392B6] text-white hover:bg-[#5392B6]/20 px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors whitespace-nowrap">
              Book Online <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="bg-[#080808] pt-16 pb-8 border-t border-[#383838]">
        <div className="max-w-[1280px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            <div className="space-y-4">
              <img src="/__mockup/images/logo.png" alt="A&B Drainage Logo" className="h-12 w-auto brightness-0 invert opacity-80" />
              <p className="text-[#9a9a9a] text-sm leading-relaxed">
                Hampshire's trusted experts for domestic, commercial, and industrial drainage solutions. We answer when it matters.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="w-8 h-8 rounded-full bg-[#1c1c1c] border border-[#383838] flex items-center justify-center text-[#9a9a9a] hover:text-[#5392B6] hover:border-[#5392B6] transition-colors"><Facebook size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#1c1c1c] border border-[#383838] flex items-center justify-center text-[#9a9a9a] hover:text-[#5392B6] hover:border-[#5392B6] transition-colors"><Twitter size={14} /></a>
                <a href="#" className="w-8 h-8 rounded-full bg-[#1c1c1c] border border-[#383838] flex items-center justify-center text-[#9a9a9a] hover:text-[#5392B6] hover:border-[#5392B6] transition-colors"><Instagram size={14} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-['Oswald'] font-bold text-xl uppercase mb-6 tracking-wide">Services</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[#9a9a9a] hover:text-[#5392B6] text-sm transition-colors">Blocked Drains</a></li>
                <li><a href="#" className="text-[#9a9a9a] hover:text-[#5392B6] text-sm transition-colors">CCTV Drain Surveys</a></li>
                <li><a href="#" className="text-[#9a9a9a] hover:text-[#5392B6] text-sm transition-colors">Drain Repairs</a></li>
                <li><a href="#" className="text-[#9a9a9a] hover:text-[#5392B6] text-sm transition-colors">24/7 Emergency Drainage</a></li>
                <li><a href="#" className="text-[#9a9a9a] hover:text-[#5392B6] text-sm transition-colors">Commercial &amp; Industrial</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-['Oswald'] font-bold text-xl uppercase mb-6 tracking-wide">Coverage Area</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-[#9a9a9a] hover:text-[#5392B6] text-sm transition-colors">Hampshire</a></li>
                <li><a href="#" className="text-[#9a9a9a] hover:text-[#5392B6] text-sm transition-colors">Southampton</a></li>
                <li><a href="#" className="text-[#9a9a9a] hover:text-[#5392B6] text-sm transition-colors">Basingstoke</a></li>
                <li><a href="#" className="text-[#9a9a9a] hover:text-[#5392B6] text-sm transition-colors">Winchester</a></li>
                <li><a href="#" className="text-[#9a9a9a] hover:text-[#5392B6] text-sm transition-colors">Portsmouth</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-['Oswald'] font-bold text-xl uppercase mb-6 tracking-wide">Contact</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone size={18} className="text-[#5392B6] mt-0.5" />
                  <div>
                    <div className="text-white font-bold">01256 688 650</div>
                    <div className="text-[#9a9a9a] text-xs">Main Office</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-[#5392B6] mt-0.5" />
                  <div>
                    <div className="text-white font-bold">07498 062 710</div>
                    <div className="text-[#9a9a9a] text-xs">24/7 Emergency</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-[#5392B6] mt-0.5" />
                  <div>
                    <a href="mailto:info@abdrainage.co.uk" className="text-white hover:text-[#5392B6] transition-colors">info@abdrainage.co.uk</a>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-[#383838] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#9a9a9a]">
            <p>&copy; {new Date().getFullYear()} A&B Drainage Solutions Ltd. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
