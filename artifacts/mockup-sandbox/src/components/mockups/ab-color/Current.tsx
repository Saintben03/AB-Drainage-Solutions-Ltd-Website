import React from "react";
import { Phone, ArrowRight, ShieldCheck, Clock, MapPin, Mail, ChevronRight, CheckCircle2 } from "lucide-react";

export function Current() {
  const services = [
    {
      title: "24/7 Emergency Drainage",
      desc: "Rapid response typically within 1 hour for blockages, sewage and flooding.",
      img: "/__mockup/images/emergency-response.png",
    },
    {
      title: "Blocked Drains",
      desc: "Fast, guaranteed clearance for domestic and commercial blocked drains.",
      img: "/__mockup/images/blocked-drain.png",
    },
    {
      title: "Drain Repairs",
      desc: "Structural repairs using no-dig relining or traditional excavation.",
      img: "/__mockup/images/drain-repair.png",
    },
    {
      title: "Commercial Drainage",
      desc: "Planned maintenance contracts and rapid reactive response for businesses.",
      img: "/__mockup/images/commercial-drainage.png",
    },
    {
      title: "Guttering",
      desc: "Professional clearing, cleaning and repair of domestic and commercial guttering.",
      img: "/__mockup/images/guttering.png",
    },
    {
      title: "CCTV Drain Surveys",
      desc: "HD camera inspection for accurate diagnosis and pre-purchase reports.",
      img: "/__mockup/images/cctv-survey.png",
    },
  ];

  const stats = [
    { value: "33+", label: "Years Experience" },
    { value: "~1hr", label: "Average Response" },
    { value: "24/7", label: "Always Available" },
    { value: "5-Star", label: "Rated Service" },
  ];

  const whyUs = [
    { icon: Clock, title: "1 Hour Response", desc: "We aim to be on site within the hour — day or night, including weekends." },
    { icon: ShieldCheck, title: "Fully Accredited", desc: "Fully insured, health & safety compliant, and approved contractors." },
    { icon: MapPin, title: "Hampshire Wide", desc: "Based centrally — we cover Basingstoke, Southampton, Winchester and beyond." },
  ];

  return (
    <div className="min-h-screen font-['Inter'] flex flex-col" style={{ backgroundColor: "#1c1c1c", color: "#f0f0f0" }}>
      {/* 1. EMERGENCY TOP BAR */}
      <div className="w-full py-2 px-4 flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-wider" style={{ backgroundColor: "#fe9a01", color: "#000000" }}>
        <span className="animate-pulse">🚨 24/7 Emergency Drainage Callout</span>
        <span className="hidden sm:inline opacity-30">|</span>
        <span className="flex items-center gap-2"><Phone size={14} /> 01256 688 650</span>
      </div>

      {/* 2. NAVBAR */}
      <header className="sticky top-0 z-50 border-b" style={{ backgroundColor: "#1c1c1c", borderColor: "#383838" }}>
        <div className="container mx-auto px-4 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <img src="/__mockup/images/logo.png" alt="A&B Drainage Logo" className="h-11 object-contain" />
            <nav className="hidden lg:flex items-center gap-6">
              {["Home", "Services", "About", "Gallery", "Blog", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`text-sm font-bold uppercase tracking-wide transition-colors ${item === "Home" ? "" : "opacity-80 hover:opacity-100"}`}
                  style={{ color: item === "Home" ? "#fe9a01" : "#f0f0f0" }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden xl:flex flex-col items-end">
              <span className="text-[10px] uppercase tracking-widest font-bold" style={{ color: "#9a9a9a" }}>Emergency Response</span>
              <span className="font-['Oswald'] text-lg tracking-wide font-bold" style={{ color: "#f0f0f0" }}>07498 062 710</span>
            </div>
            <button className="px-6 py-3 font-bold uppercase tracking-wider text-sm flex items-center gap-2 transition-transform hover:scale-105" style={{ backgroundColor: "#fe9a01", color: "#000" }}>
              Book Now <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </header>

      {/* 3. HERO */}
      <section className="relative min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src="/__mockup/images/hero.png" alt="Fleet" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(6, 24, 42, 0.95), rgba(10, 44, 71, 0.7))" }}></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 mb-6 text-xs font-bold uppercase tracking-widest border" style={{ color: "#fe9a01", borderColor: "rgba(254, 154, 1, 0.3)", backgroundColor: "rgba(254, 154, 1, 0.1)" }}>
              Hampshire's Drainage Specialists
            </div>
            <h1 className="text-5xl md:text-7xl font-['Oswald'] font-bold uppercase leading-[1.05] mb-6" style={{ color: "#ffffff" }}>
              The Drain Experts <span style={{ color: "#fe9a01" }}>Hampshire</span> Relies On.
            </h1>
            <p className="text-lg md:text-xl mb-10 max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
              Blocked drain? Sewage backing up? We answer at 2am and arrive typically within 1 hour. 33 years solving Hampshire's toughest drainage problems.
            </p>
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button className="px-8 py-4 font-bold uppercase tracking-wider flex items-center gap-2 text-base transition-transform hover:scale-105" style={{ backgroundColor: "#fe9a01", color: "#000" }}>
                Book Now <ArrowRight size={18} />
              </button>
              <button className="px-8 py-4 font-bold uppercase tracking-wider flex items-center gap-2 text-base border-2 transition-colors hover:bg-white/5" style={{ borderColor: "#fe9a01", color: "#fe9a01" }}>
                Our Services
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm font-bold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.7)" }}>
              <span className="flex items-center gap-2"><Clock size={16} style={{ color: "#fe9a01" }} /> 24/7 Response</span>
              <span className="flex items-center gap-2"><ShieldCheck size={16} style={{ color: "#fe9a01" }} /> Fully Insured</span>
              <span className="flex items-center gap-2"><CheckCircle2 size={16} style={{ color: "#fe9a01" }} /> Checkatrade Approved</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STATS / TRUST STRIP */}
      <section className="py-12 border-y" style={{ backgroundColor: "#232323", borderColor: "#383838" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-['Oswald'] font-bold mb-2" style={{ color: "#fe9a01" }}>{stat.value}</div>
                <div className="text-sm font-bold uppercase tracking-wider" style={{ color: "#9a9a9a" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SERVICES GRID */}
      <section className="py-24" style={{ backgroundColor: "#1c1c1c" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16">
            <span className="text-sm font-bold uppercase tracking-widest mb-4 block" style={{ color: "#fe9a01" }}>What We Do</span>
            <h2 className="text-4xl md:text-5xl font-['Oswald'] font-bold uppercase">Complete Drainage Solutions</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" style={{ backgroundColor: "#2b2b2b", borderColor: "#383838" }}>
                <div className="relative h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ backgroundColor: "rgba(10, 44, 71, 0.4)", mixBlendMode: "multiply" }}></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-['Oswald'] font-bold uppercase mb-3">{service.title}</h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: "#9a9a9a" }}>{service.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest transition-transform group-hover:translate-x-2" style={{ color: "#fe9a01" }}>
                    Learn More <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-24 border-y" style={{ backgroundColor: "#232323", borderColor: "#383838" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <span className="text-sm font-bold uppercase tracking-widest mb-4 block" style={{ color: "#fe9a01" }}>Why Choose A&B</span>
            <h2 className="text-4xl md:text-5xl font-['Oswald'] font-bold uppercase mb-6">33 Years of Getting It Right.</h2>
            <p className="text-lg" style={{ color: "#9a9a9a" }}>We are a dedicated team of seasoned drainage engineers. We invest in the best equipment, turn up when we say we will, and fix problems permanently.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <div key={i} className="p-8 border rounded-lg" style={{ backgroundColor: "#2b2b2b", borderColor: "#383838" }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: "rgba(254, 154, 1, 0.1)", color: "#fe9a01" }}>
                  <item.icon size={28} />
                </div>
                <h4 className="text-xl font-['Oswald'] font-bold uppercase mb-3">{item.title}</h4>
                <p className="text-sm leading-relaxed" style={{ color: "#9a9a9a" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA BAND */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: "#0a2c47" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url(/__mockup/images/hero.png)", backgroundSize: "cover", backgroundPosition: "center" }}></div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-['Oswald'] font-bold uppercase mb-8" style={{ color: "#ffffff" }}>
            Blocked drain? We'll be there fast.
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-8 py-4 font-bold uppercase tracking-wider flex items-center gap-2 text-base transition-transform hover:scale-105" style={{ backgroundColor: "#fe9a01", color: "#000" }}>
              Book Now <ArrowRight size={18} />
            </button>
            <button className="px-8 py-4 font-bold uppercase tracking-wider flex items-center gap-2 text-base border-2 transition-colors hover:bg-white/10" style={{ borderColor: "#fe9a01", color: "#fe9a01" }}>
              <Phone size={18} /> Call Now
            </button>
          </div>
        </div>
      </section>

      {/* 8. FOOTER */}
      <footer className="pt-20 pb-10" style={{ backgroundColor: "#080808" }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-4">
              <img src="/__mockup/images/logo.png" alt="Logo" className="h-16 object-contain mb-6" />
              <p className="text-sm leading-relaxed" style={{ color: "#9a9a9a" }}>
                Hampshire's trusted experts for domestic, commercial, and industrial drainage solutions. We answer when it matters.
              </p>
              <div className="flex flex-col gap-2 pt-4">
                <span className="font-bold">01256 688 650</span>
                <span style={{ color: "#fe9a01" }}>info@abdrainage.co.uk</span>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-['Oswald'] font-bold uppercase mb-6" style={{ color: "#ffffff" }}>Services</h3>
              <ul className="space-y-3 text-sm" style={{ color: "#9a9a9a" }}>
                <li>Blocked Drains</li>
                <li>CCTV Drain Surveys</li>
                <li>Drain Repairs</li>
                <li>24/7 Emergency Drainage</li>
                <li>Commercial & Industrial</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-['Oswald'] font-bold uppercase mb-6" style={{ color: "#ffffff" }}>Coverage</h3>
              <ul className="space-y-3 text-sm" style={{ color: "#9a9a9a" }}>
                <li>Hampshire</li>
                <li>Southampton</li>
                <li>Basingstoke</li>
                <li>Winchester</li>
                <li>Reading & Surrounding</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-['Oswald'] font-bold uppercase mb-6" style={{ color: "#ffffff" }}>Why Choose Us</h3>
              <ul className="space-y-3 text-sm" style={{ color: "#9a9a9a" }}>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#fe9a01" }}></span> 33+ Years Experience</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#fe9a01" }}></span> 24/7 Callouts</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#fe9a01" }}></span> Fully Insured</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 text-xs" style={{ borderColor: "#383838", color: "#9a9a9a" }}>
            <p>&copy; {new Date().getFullYear()} A&B Drainage Solutions Ltd. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
