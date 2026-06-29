import { Link } from "wouter";
import { ArrowRight, Phone, Check, Clock, MapPin, ShieldCheck } from "lucide-react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

// Assets
import heroImg from "@assets/site_files_1/AB Drainage background_edited.jpg";
import work1 from "@assets/site_files_1/369541839_240515012286429_2194496784194718742_n.jpg";
import work2 from "@assets/site_files_1/468849454_17949583832886709_2702370064044539379_n.jpg";
import work3 from "@assets/site_files_1/472171552_560083023662958_8976223963179451031_n.jpg";
import work4 from "@assets/site_files_1/g-01u.jpg";
import lanesLogo from "@assets/site_files_1/LanesGroup-1000-px.png";
import nhsLogo from "@assets/site_files_1/National_Health_Service_(England)_logo.svg.png";
import ccLogo from "@assets/site_files_1/CC-Multi-Disciplinary-Strap-White-BG-Full-Col-RGB-Trans.png";
import imgCctv from "@assets/blog/cctv-survey.png";
import imgJetting from "@assets/blog/drain-jetting.png";

const services = [
  {
    img: work3,
    title: "Emergency Drainage",
    features: ["24/7 Rapid Response", "Typically 1 Hour ETA", "Sewage & Flooding"],
    href: "/services#emergency",
  },
  {
    img: imgCctv,
    title: "CCTV Drain Surveys",
    features: ["HD Camera Inspection", "Pre-Purchase Surveys", "Pinpoint Diagnosis"],
    href: "/services#cctv-surveys",
  },
  {
    img: imgJetting,
    title: "Drain Cleaning & Jetting",
    features: ["Up to 4,000 PSI", "Grease & Root Clearance", "Fully Cleared Pipes"],
    href: "/services#cleaning-jetting",
  },
  {
    img: work2,
    title: "Drain Repairs",
    features: ["No-Dig Relining", "Traditional Excavation", "Full Reinstatement"],
    href: "/services#drain-repairs",
  },
  {
    img: work1,
    title: "Commercial Drainage",
    features: ["Grease Trap Cleaning", "Planned Maintenance", "Industrial Tankers"],
    href: "/services#commercial",
  },
  {
    img: work4,
    title: "Soakaway Installation",
    features: ["Building Regs Compliant", "Soil Percolation Testing", "Modern Crate Systems"],
    href: "/services#soakaways",
  },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Blocked Drain Hampshire | 24/7 Emergency Drainage"
        description="Expert drainage services across Hampshire for domestic, commercial and industrial clients. 24/7 emergency callouts typically within 1 hour. 33+ years experience."
        canonicalUrl="/"
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="A&B Drainage Solutions Ltd Fleet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent text-sm font-bold uppercase tracking-[0.25em] mb-5 flex items-center gap-3"
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block"></span>
              Hampshire's Drainage Specialists — 33 Years Experience
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.05] mb-6 uppercase"
            >
              The Drain Experts{" "}
              <span className="text-accent">Hampshire</span>{" "}
              Relies On.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              className="text-lg md:text-xl text-foreground/80 mb-10 max-w-xl leading-relaxed"
            >
              Blocked drain? Sewage backing up? We answer at 2am and arrive typically within 1 hour. 33 years solving Hampshire's toughest drainage problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a
                href="tel:01256688650"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-5 text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all"
              >
                <Phone size={22} />
                Call 01256 688 650
              </a>
              <Link
                href="/services"
                className="bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-5 text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                Our Services <ArrowRight size={20} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-8 text-sm font-bold text-white/70 uppercase tracking-widest"
            >
              <span className="flex items-center gap-2"><Clock size={15} className="text-accent" /> 1 Hour ETA</span>
              <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-accent" /> 33+ Yrs Exp</span>
              <span className="flex items-center gap-2"><MapPin size={15} className="text-accent" /> Hampshire Wide</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#0a0a0a] py-10 border-y border-white/5">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs text-muted-foreground uppercase tracking-[0.2em] font-semibold mb-8">
            Trusted by institutions &amp; businesses across the UK
          </p>
          <div className="flex flex-wrap justify-center items-center gap-14 md:gap-24 opacity-50 hover:opacity-80 transition-opacity duration-500 grayscale hover:grayscale-0">
            <img src={nhsLogo} alt="NHS" className="h-10 md:h-14 w-auto object-contain" />
            <img src={lanesLogo} alt="Lanes Group" className="h-12 md:h-16 w-auto object-contain" />
            <img src={ccLogo} alt="CC Multi Disciplinary" className="h-12 md:h-16 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-14">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Do</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white leading-tight max-w-xl">
                Complete Drainage Solutions
              </h2>
              <Link href="/services" className="text-accent font-bold hover:text-accent/80 flex items-center gap-2 uppercase tracking-widest text-sm whitespace-nowrap">
                All Services <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-border">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <Link href={s.href} className="group block bg-card h-full">
                  <div className="overflow-hidden h-52 relative">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  <div className="p-8 border-t-2 border-t-accent">
                    <h3 className="text-2xl font-display font-bold text-accent uppercase mb-4">{s.title}</h3>
                    <ul className="space-y-2 mb-8">
                      {s.features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-3 text-sm text-foreground/80 font-medium">
                          <Check size={14} className="text-accent shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-accent group-hover:gap-4 transition-all">
                      Find Out More <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">Why Choose A&amp;B</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white leading-tight mb-8">
                33 Years of Getting It Right.
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-10 text-lg">
                We aren't a faceless franchise. We are a dedicated, local team of seasoned drainage engineers. We invest in the best equipment, we turn up when we say we will, and we fix the problem permanently.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "24/7 Emergency Callouts",
                  "Typically 1 Hour ETA",
                  "Domestic &amp; Commercial",
                  "Over 65s Discount",
                  "FlexiPay Payment Plans",
                  "Fully Insured &amp; Accredited",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-semibold text-sm uppercase tracking-wide">
                    <Check size={16} className="text-accent shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all"
              >
                More About Us <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <img src={work1} alt="A&B Drainage at a commercial site" className="object-cover w-full h-[280px] mt-10" />
              <img src={work2} alt="A&B Drainage engineers at work" className="object-cover w-full h-[280px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <div className="grid grid-cols-3 h-40 md:h-64 overflow-hidden">
        {[heroImg, work1, work4].map((src, i) => (
          <div key={i} className="overflow-hidden relative">
            <img src={src} alt="" className="w-full h-full object-cover scale-105 hover:scale-100 transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* ── FINAL CTA ── */}
      <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
        <div className="absolute inset-0 border-y border-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">In Need of Expert Advice?</p>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase mb-6 leading-tight">
            Need a Drainage Expert Right Now?
          </h2>
          <p className="text-lg text-foreground/70 mb-10">
            Don't wait for the problem to get worse. Our rapid response team is standing by.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:01256688650"
              className="bg-accent hover:bg-accent/90 text-white px-10 py-5 text-xl font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all"
            >
              <Phone size={22} />
              01256 688 650
            </a>
            <a
              href="tel:07498062710"
              className="bg-transparent border-2 border-white/30 hover:border-accent hover:text-accent text-white px-10 py-5 text-xl font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all"
            >
              <Phone size={22} />
              07498 062 710
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
