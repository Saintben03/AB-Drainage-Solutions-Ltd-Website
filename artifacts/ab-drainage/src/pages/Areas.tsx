import { Link } from "wouter";
import { MapPin, Phone, ArrowRight, Check, Clock, ShieldCheck } from "lucide-react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { WaterWave } from "@/components/WaterWave";

import heroImg from "@assets/Designer_(1)_1782807579036.png";
import vanImg from "@assets/site_files_1/g-01u.jpg";
import crewArea from "@assets/ab_group_gallery/worker-9.33.26.jpeg";

const areas = [
  { name: "Basingstoke", tag: "HQ Area" },
  { name: "Southampton", tag: "Major Hub" },
  { name: "Winchester", tag: "" },
  { name: "Aldershot", tag: "" },
  { name: "Reading", tag: "" },
  { name: "Farnborough", tag: "" },
  { name: "Andover", tag: "" },
  { name: "Fleet", tag: "" },
  { name: "Alton", tag: "" },
  { name: "Petersfield", tag: "" },
  { name: "Portsmouth", tag: "" },
  { name: "Eastleigh", tag: "" },
  { name: "Fareham", tag: "" },
  { name: "Gosport", tag: "" },
  { name: "Havant", tag: "" },
];

const borderAreas = ["Berkshire", "Surrey", "West Sussex", "Dorset", "Wiltshire"];

const stats = [
  { value: "33+", label: "Years Serving Hampshire" },
  { value: "1hr", label: "Typical Response Time" },
  { value: "15+", label: "Towns & Cities Covered" },
  { value: "24/7", label: "Emergency Coverage" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

export default function Areas() {
  return (
    <>
      <SEO
        title="Areas We Cover | Drainage Solutions Hampshire"
        description="A&B Drainage Solutions covers all of Hampshire and surrounding areas including Basingstoke, Southampton, Winchester, Aldershot and Reading."
        canonicalUrl="/areas"
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="A&B Drainage Fleet" className="w-full h-full object-cover object-center animate-heropan saturate-[1.45] brightness-[1.08] contrast-[1.12]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/97 via-background/55 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-[#5392B6]/35 via-[#5392B6]/12 to-transparent" style={{ mixBlendMode: "multiply" }}></div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#e0f2fe" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4"
          >
            Hampshire-Wide Coverage
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-5xl md:text-7xl font-display font-bold text-white uppercase mb-6 leading-tight"
          >
            Areas We <span className="text-accent">Cover</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-xl text-foreground/70 max-w-xl leading-relaxed mb-10"
          >
            Based centrally in Hampshire, we provide rapid response drainage services across the county and into surrounding areas — typically on-site within one hour.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
          >
            <a
              href="tel:01256688650"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all"
            >
              <Phone size={18} /> Call for Availability
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#0a0a0a] py-14 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-0.5 bg-border"
          >
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-[#0a0a0a] text-center py-10 px-6">
                <p className="text-5xl md:text-6xl font-display font-bold text-accent mb-2">{s.value}</p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#ffffff" />
      </section>

      {/* ── AREA CARDS (light) ── */}
      <section className="py-24 pb-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">Primary Coverage</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 uppercase leading-tight">
              Hampshire &amp; Surrounding Counties
            </h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-0.5 bg-zinc-200 mb-16"
          >
            {areas.map((area, i) => (
              <motion.div key={i} variants={fadeUp} className="h-full">
                <div className="bg-white p-6 flex items-start gap-3 group hover:bg-accent/10 transition-colors cursor-default border-t-2 border-t-transparent hover:border-t-accent h-full">
                  <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-zinc-900 text-sm uppercase tracking-wide group-hover:text-accent transition-colors">
                      {area.name}
                    </p>
                    {area.tag && (
                      <span className="text-[10px] font-bold text-accent uppercase tracking-widest">{area.tag}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Border counties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-50 border-l-4 border-accent p-8 mb-16"
          >
            <h3 className="text-xl font-display font-bold text-zinc-900 uppercase mb-3">We Also Operate In</h3>
            <p className="text-zinc-600 mb-5">
              We frequently cover towns and villages bordering Hampshire. If you are unsure whether we serve your area, call us — we will always try.
            </p>
            <div className="flex flex-wrap gap-3">
              {borderAreas.map((county, i) => (
                <span key={i} className="px-4 py-2 border border-zinc-300 text-sm font-bold text-zinc-600 uppercase tracking-wider hover:border-accent hover:text-accent transition-colors">
                  {county}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#fafafa" />
      </section>

      {/* ── WHY LOCAL (light) ── */}
      <section className="py-20 pb-28 bg-zinc-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">Why Local Matters</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 uppercase leading-tight mb-8">
                Deep Local Knowledge
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-8 text-lg">
                Being local means we understand the specific drainage infrastructure and common problems found in Hampshire's diverse properties — from historic Winchester townhouses to modern Southampton developments and rural Andover farmhouses.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Knowledge of local pipe materials, ages, and failure modes",
                  "Familiarity with Hampshire Water Authority requirements",
                  "Strong local supply chain for fast parts &amp; materials",
                  "30+ years of local relationships and referrals",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex items-start gap-3 text-zinc-700 font-medium"
                  >
                    <Check size={16} className="text-accent shrink-0 mt-1" />
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </motion.li>
                ))}
              </ul>
              <div className="flex gap-4">
                <a
                  href="tel:01256688650"
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all"
                >
                  <Phone size={16} /> 01256 688 650
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-zinc-300 hover:border-accent text-zinc-700 hover:text-accent px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all"
                >
                  Request Callout <ArrowRight size={15} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              <img src={vanImg} alt="A&B Drainage tanker" className="w-full h-[260px] object-cover" />
              <img src={crewArea} alt="A&B Drainage engineers working at Bath Spa station" className="w-full h-[260px] object-cover object-center mt-10" />
            </motion.div>
          </div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="hsl(0 0% 11%)" />
      </section>

      {/* ── EMERGENCY CTA ── */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <ShieldCheck size={42} className="text-accent shrink-0" />
              <div>
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-1">Not Sure We Cover Your Area?</h3>
                <p className="text-muted-foreground">Call us — we will always do our best to get to you, even outside our primary zone.</p>
              </div>
            </div>
            <a
              href="tel:01256688650"
              className="shrink-0 bg-accent hover:bg-accent/90 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm flex items-center gap-2 transition-all"
            >
              <Phone size={16} /> Call to Check Coverage
            </a>
          </div>
        </div>
      </motion.section>
    </>
  );
}
