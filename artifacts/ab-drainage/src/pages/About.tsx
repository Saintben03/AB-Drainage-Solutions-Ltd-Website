import { Link } from "wouter";
import { ShieldCheck, Check, Phone, ArrowRight, Award, Users, Clock, Zap } from "lucide-react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { WaterWave } from "@/components/WaterWave";

import fleetImg from "@assets/site_files_1/AB Drainage background_edited.jpg";
import crewTeam from "@assets/ab_group_gallery/worker-9.33.16.jpeg";
import crewDrain from "@assets/ab_group_gallery/worker-9.33.28.jpeg";
import lanesLogo from "@assets/site_files_1/LanesGroup-1000-px.png";
import nhsLogo from "@assets/site_files_1/National_Health_Service_(England)_logo.svg.png";
import ccLogo from "@assets/site_files_1/CC-Multi-Disciplinary-Strap-White-BG-Full-Col-RGB-Trans.png";

const stats = [
  { icon: <Clock size={28} />, value: "33+", label: "Years in Business" },
  { icon: <Zap size={28} />, value: "~1hr", label: "Average Response" },
  { icon: <Users size={28} />, value: "24/7", label: "Always Available" },
  { icon: <Award size={28} />, value: "100%", label: "Fully Accredited" },
];

const standards = [
  "Honest, transparent communication — no hidden fees",
  "Latest technology including crawler CCTV and high-pressure jetting",
  "Fully insured and health &amp; safety compliant",
  "Respect for your property — we leave sites clean and tidy",
  "Permanent fixes over temporary patches wherever possible",
  "Flexible FlexiPay plans for unexpected major costs",
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function About() {
  return (
    <>
      <SEO
        title="About Us | 33+ Years Experience | A&B Drainage"
        description="A&B Drainage Solutions Ltd has been providing expert drainage services across Hampshire for over 33 years. Reliable, honest, and professional."
        canonicalUrl="/about"
      />

      {/* ── HERO ── */}
      <section className="pt-36 pb-24 relative overflow-hidden min-h-[62vh] flex items-start">
        <div className="absolute inset-0 z-0">
          <img src={fleetImg} alt="A&B Drainage Fleet" className="w-full h-full object-cover object-bottom" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/97 via-background/80 to-background/30"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4"
          >
            Hampshire's Trusted Drainage Specialists
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-5xl md:text-7xl font-display font-bold text-white uppercase mb-6 leading-tight"
          >
            About <span className="text-accent">A&amp;B</span> Drainage
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-xl text-foreground/70 max-w-2xl leading-relaxed"
          >
            For over three decades, A&amp;B Drainage Solutions Ltd has been the name Hampshire trusts when things go wrong underground.
          </motion.p>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-[#0a0a0a] relative overflow-hidden pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-border"
          >
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#0a0a0a] py-12 px-8 flex flex-col items-center text-center gap-3">
                <span className="text-accent">{s.icon}</span>
                <p className="text-5xl font-display font-bold text-accent">{s.value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#ffffff" />
      </section>

      {/* ── OUR STORY (light) ── */}
      <section className="py-24 pb-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — Story + Standards */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">Our Story</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 uppercase leading-tight mb-8">
                  Built on a Simple Promise
                </h2>
                <div className="space-y-5 text-lg text-zinc-600 leading-relaxed">
                  <p>
                    Established over 33 years ago, we built this company on a simple premise: answer the phone, turn up quickly, and do the job right the first time.
                  </p>
                  <p>
                    Drainage issues are stressful. Our goal is to remove that stress entirely. We operate a fleet of fully equipped, liveried vans manned by experienced, accredited engineers who have seen and solved every type of drainage disaster imaginable.
                  </p>
                  <p>
                    We handle everything from a blocked domestic toilet to complex industrial drain rehabilitation for major UK institutions — including the NHS and Lanes Group. We are big enough to cope with major commercial contracts, yet local enough to care about every single residential callout.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="pt-12 mt-12 border-t border-zinc-200"
              >
                <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">The A&amp;B Standard</p>
                <h2 className="text-3xl font-display font-bold text-zinc-900 uppercase mb-8">How We Operate</h2>
                <ul className="space-y-4">
                  {standards.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.07 }}
                      className="flex items-start gap-4"
                    >
                      <div className="w-6 h-6 bg-accent shrink-0 flex items-center justify-center mt-0.5">
                        <Check size={13} className="text-white" />
                      </div>
                      <span className="text-zinc-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: item }} />
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Right — Images + Cards */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={crewTeam}
                  alt="A&B Drainage team on a railway platform"
                  className="w-full object-cover object-center border-l-4 border-accent shadow-2xl"
                  style={{ maxHeight: "400px" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-0.5 bg-zinc-200"
              >
                <div className="bg-zinc-50 p-7 border-t-2 border-accent">
                  <h3 className="text-accent font-display font-bold uppercase text-lg mb-2">Over 65s Discount</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">A dedicated discount for all customers aged 65 and over. Because community matters.</p>
                </div>
                <div className="bg-zinc-50 p-7 border-t-2 border-accent">
                  <h3 className="text-accent font-display font-bold uppercase text-lg mb-2">FlexiPay Plans</h3>
                  <p className="text-zinc-600 text-sm leading-relaxed">Unexpected major repairs? Spread the cost with our flexible payment plans.</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-accent p-8 text-center"
              >
                <ShieldCheck size={40} className="text-white mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-3">Need Us Right Now?</h3>
                <a
                  href="tel:01256688650"
                  className="inline-flex bg-white hover:bg-white/90 text-accent px-8 py-4 text-lg font-bold uppercase tracking-wider items-center justify-center gap-3 transition-all"
                >
                  <Phone size={22} />
                  01256 688 650
                </a>
              </motion.div>
            </div>
          </div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#e2e8f0" />
      </section>

      {/* ── TRUSTED BY (light band) ── */}
      <section className="py-20 pb-28 bg-slate-200 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">Our Track Record</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 uppercase">Trusted by Major UK Institutions</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center items-center gap-16 md:gap-28"
          >
            <img src={nhsLogo} alt="NHS" className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_6px_14px_rgba(15,23,42,0.18)] hover:scale-110 transition-transform duration-300" />
            <img src={lanesLogo} alt="Lanes Group" className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_6px_14px_rgba(15,23,42,0.18)] hover:scale-110 transition-transform duration-300" />
            <img src={ccLogo} alt="CC Multi Disciplinary" className="h-12 md:h-16 w-auto object-contain drop-shadow-[0_6px_14px_rgba(15,23,42,0.18)] hover:scale-110 transition-transform duration-300" />
          </motion.div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="hsl(0 0% 11%)" />
      </section>

      {/* ── PHOTO STRIP + CTA ── */}
      <section className="relative">
        <div className="grid grid-cols-2 overflow-hidden" style={{ height: "420px" }}>
          {[crewDrain, fleetImg].map((src, i) => (
            <div key={i} className="overflow-hidden relative">
              <motion.img
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9 }}
                src={src}
                alt=""
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          ))}
        </div>
        <div className="bg-background py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">Get in Touch</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase mb-8">Ready to Work With Hampshire's Best?</h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:01256688650"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-10 py-5 text-lg font-bold uppercase tracking-wider transition-all"
                >
                  <Phone size={20} /> 01256 688 650
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-accent text-white hover:text-accent px-10 py-5 text-lg font-bold uppercase tracking-wider transition-all"
                >
                  Send a Message <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
