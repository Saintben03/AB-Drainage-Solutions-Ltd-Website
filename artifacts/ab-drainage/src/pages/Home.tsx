import { Link } from "wouter";
import { ArrowRight, Phone, Check, Clock, MapPin, ShieldCheck, Star, ThumbsUp, ExternalLink } from "lucide-react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { CountUp } from "@/components/CountUp";
import { LogoMarquee } from "@/components/LogoMarquee";
import { WaterWave } from "@/components/WaterWave";

import heroImg from "@assets/site_files_1/AB Drainage background_logos.jpg";
import work1 from "@assets/site_files_1/369541839_240515012286429_2194496784194718742_n.jpg";
import work2 from "@assets/site_files_1/468849454_17949583832886709_2702370064044539379_n.jpg";
import work3 from "@assets/site_files_1/472171552_560083023662958_8976223963179451031_n.jpg";
import work4 from "@assets/site_files_1/g-01u.jpg";
import crewTeam from "@assets/ab_group_gallery/worker-9.33.16.jpeg";
import crewManhole from "@assets/ab_group_gallery/worker-9.33.30.jpeg";
import crewChain from "@assets/ab_group_gallery/worker-9.33.26.jpeg";
import crewManholeOpen from "@assets/ab_group_gallery/worker-9.33.28.jpeg";
import workGroundwork from "@assets/site_files_1/groundwork-01a.jpg";
import workSurvey from "@assets/site_files_1/survey-01a.jpg";
import lanesLogo from "@assets/site_files_1/LanesGroup-1000-px.png";
import nhsLogo from "@assets/site_files_1/National_Health_Service_(England)_logo.svg.png";
import ccLogo from "@assets/site_files_1/CC-Multi-Disciplinary-Strap-White-BG-Full-Col-RGB-Trans.png";
import imgCctv from "@assets/blog/cctv-survey.png";
import imgJetting from "@assets/blog/drain-jetting.png";

const services = [
  { img: work3, title: "Emergency Drainage", features: ["24/7 Rapid Response", "Typically 1 Hour ETA", "Sewage & Flooding"], href: "/services#emergency" },
  { img: imgCctv, title: "CCTV Drain Surveys", features: ["HD Camera Inspection", "Pre-Purchase Surveys", "Pinpoint Diagnosis"], href: "/services#cctv-surveys" },
  { img: imgJetting, title: "Drain Cleaning & Jetting", features: ["Up to 4,000 PSI", "Grease & Root Clearance", "Fully Cleared Pipes"], href: "/services#cleaning-jetting" },
  { img: work2, title: "Drain Repairs", features: ["No-Dig Relining", "Traditional Excavation", "Full Reinstatement"], href: "/services#drain-repairs" },
  { img: work1, title: "Commercial Drainage", features: ["Grease Trap Cleaning", "Planned Maintenance", "Industrial Tankers"], href: "/services#commercial" },
  { img: work4, title: "Soakaway Installation", features: ["Building Regs Compliant", "Soil Percolation Testing", "Modern Crate Systems"], href: "/services#soakaways" },
];

const REVIEWS_URL = "https://www.google.com/search?sca_esv=c5931a817e678147&rlz=1C1FKPE_en&sxsrf=APpeQntSzWkW3P6RDjShZ8U4Q8pMdLUcJA:1782739760627&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_xzoarmiPr3yJTxjvJ0nn14nN_hbjN2cdyrmJ1QNlLQPa5PDTlbz830J71gI13mQ6_wOTedYLkVUWHeql5r2QfYQVysB5qiUseD0eGrPIQ8QKmLAeA%3D%3D&q=A%26B+Drainage+Solutions+ltd+Reviews";

const reviews = [
  { name: "James T.", location: "Basingstoke", stars: 5, text: "Called at 11pm with a badly blocked drain — engineer was on site within 45 minutes and had it cleared in under an hour. Exceptional service." },
  { name: "Sarah M.", location: "Winchester", stars: 5, text: "Used A&B for a CCTV survey before buying our house. The report was thorough, professional, and gave us real peace of mind. Highly recommend." },
  { name: "David H.", location: "Southampton", stars: 5, text: "Commercial contract with A&B for two years now. Reliable, honest, and the team always leaves the site clean. Worth every penny." },
];

const whyUs = [
  { icon: <Clock size={22} />, title: "1 Hour Response", desc: "We aim to be on site within the hour — day or night, including weekends and bank holidays.", color: "bg-accent" },
  { icon: <ShieldCheck size={22} />, title: "Fully Accredited", desc: "Fully insured, health & safety compliant, and approved to work for NHS and major UK contractors.", color: "bg-primary" },
  { icon: <ThumbsUp size={22} />, title: "No Hidden Fees", desc: "Honest, upfront pricing. We quote before we start so there are never any billing surprises.", color: "bg-primary" },
  { icon: <MapPin size={22} />, title: "Hampshire Wide", desc: "Based centrally — we cover Basingstoke, Southampton, Winchester, Portsmouth and all surrounding areas.", color: "bg-accent" },
];

type Stat = { label: string; text?: string; to?: number; prefix?: string; suffix?: string };
const stats: Stat[] = [
  { to: 33, suffix: "+", label: "Years Experience" },
  { prefix: "~", to: 1, suffix: "hr", label: "Average Response" },
  { text: "24/7", label: "Always Available" },
  { text: "5-Star", label: "Rated Service" },
];

const trustLogos = [
  { src: nhsLogo, alt: "NHS", className: "h-10 md:h-14" },
  { src: lanesLogo, alt: "Lanes Group", className: "h-12 md:h-16" },
  { src: ccLogo, alt: "CC Multi Disciplinary", className: "h-12 md:h-16" },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Home() {
  return (
    <>
      <SEO
        title="Blocked Drain Hampshire | 24/7 Emergency Drainage"
        description="Expert drainage services across Hampshire for domestic, commercial and industrial clients. 24/7 emergency callouts typically within 1 hour. 33+ years experience."
        canonicalUrl="/"
      />

      {/* ── HERO (dark) ── */}
      <section className="relative min-h-[80vh] flex items-center pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="A&B Drainage Solutions Ltd Fleet" className="w-full h-full object-cover object-bottom origin-bottom animate-kenburns saturate-[1.35] brightness-[1.12] contrast-[1.08]" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/97 via-background/70 to-background/5"></div>
        </div>

        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#e0f2fe" />

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
              className="text-lg md:text-xl text-foreground/80 mb-8 max-w-xl leading-relaxed"
            >
              Blocked drain? Sewage backing up? We answer at 2am and arrive typically within 1 hour. 33 years solving Hampshire's toughest drainage problems.
            </motion.p>

            <motion.a
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 px-5 py-3 rounded-lg mb-8 transition-all"
            >
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="text-white font-bold text-sm">Rated Excellent</span>
              <span className="text-white/60 text-sm">· See our reviews</span>
              <ExternalLink size={14} className="text-white/60" />
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
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

      {/* ── TRUSTED BY (light band, animated wave at its base) ── */}
      <section className="relative bg-sky-100 pt-4 pb-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs text-zinc-500 uppercase tracking-[0.2em] font-semibold mb-10">
            Trusted by institutions &amp; businesses across the UK
          </p>
          <LogoMarquee logos={trustLogos} />
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#ffffff" />
      </section>

      {/* ── SERVICES (light + colourful) ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Do</p>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-zinc-900 leading-tight max-w-xl">
                Complete Drainage Solutions
              </h2>
              <Link href="/services" className="text-accent font-bold hover:text-accent/80 flex items-center gap-2 uppercase tracking-widest text-sm whitespace-nowrap">
                All Services <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Link href={s.href} className="group block bg-white border border-zinc-200 rounded-xl overflow-hidden h-full shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="overflow-hidden h-52 relative">
                    <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-8 border-t-4 border-t-accent">
                    <h3 className="text-2xl font-display font-bold text-zinc-900 uppercase mb-4 group-hover:text-accent transition-colors">{s.title}</h3>
                    <ul className="space-y-2 mb-8">
                      {s.features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-3 text-sm text-zinc-600 font-medium">
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
          </motion.div>
        </div>

        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="hsl(0 0% 11%)" />
      </section>

      {/* ── WHY CHOOSE US (dark) ── */}
      <section className="relative pt-24 pb-40 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">Why Choose A&amp;B</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white leading-tight mb-6">
                33 Years of Getting It <span className="text-accent">Right.</span>
              </h2>
              <p className="text-foreground/70 leading-relaxed mb-10 text-lg">
                We aren't a faceless franchise. We are a dedicated, local team of seasoned drainage engineers. We invest in the best equipment, turn up when we say we will, and fix problems permanently.
              </p>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10"
              >
                {whyUs.map((item, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-4 p-5 bg-card border border-border rounded-lg">
                    <div className={`w-10 h-10 ${item.color} rounded-lg flex items-center justify-center text-white shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-white uppercase text-sm mb-1">{item.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all"
              >
                More About Us <ArrowRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="columns-2 gap-3 [&>img]:mb-3 [&>img]:w-full [&>img]:rounded-lg [&>img]:shadow-xl"
            >
              <img src={crewTeam} alt="A&B Drainage engineers on a railway platform" />
              <img src={crewChain} alt="A&B Drainage engineers setting up a safety cordon at Bath Spa station" />
              <img src={crewManhole} alt="A&B Drainage engineer chaining a manhole chamber" />
              <img src={crewManholeOpen} alt="A&B Drainage engineers carrying out a manhole inspection" />
            </motion.div>
          </div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="hsl(32 98% 50%)" />
      </section>

      {/* ── STATS (orange band — colour pop) ── */}
      <section className="bg-accent py-14">
        <div className="container mx-auto px-4">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((s, i) => (
              <motion.div key={i} variants={fadeUp}>
                <p className="text-4xl md:text-5xl font-display font-bold text-white mb-1">
                  {s.text ? s.text : <CountUp to={s.to!} prefix={s.prefix} suffix={s.suffix} />}
                </p>
                <p className="text-white/80 text-xs uppercase tracking-[0.18em] font-semibold">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── REVIEWS (light) ── */}
      <section className="py-20 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />)}
            </div>
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-2">Customer Reviews</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase text-zinc-900">What Our Customers Say</h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {reviews.map((r, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white border border-zinc-100 rounded-xl p-8 shadow-sm">
                <div className="flex gap-1 mb-4">
                  {[...Array(r.stars)].map((_, si) => <Star key={si} size={16} className="text-yellow-400 fill-yellow-400" />)}
                </div>
                <p className="text-zinc-600 text-sm leading-relaxed mb-6 italic">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-100">
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-zinc-900 text-sm">{r.name}</p>
                    <p className="text-zinc-400 text-xs">{r.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mt-12"
          >
            <a
              href={REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 text-base font-bold uppercase tracking-wider transition-all"
            >
              See All Our Reviews
              <ExternalLink size={18} />
            </a>
            <p className="text-zinc-400 text-xs mt-4 max-w-md mx-auto">
              See verified feedback from Facebook, Checkatrade, Yell, MyBuilder, TrustATrader and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <div className="grid grid-cols-3 h-64 md:h-96 overflow-hidden">
        {[
          { src: workGroundwork, pos: "object-center", alt: "A&B Drainage groundwork excavation with mini-digger on site" },
          { src: heroImg, pos: "object-[center_55%]", alt: "A&B Drainage fleet of vans and tanker" },
          { src: workSurvey, pos: "object-center", alt: "A&B Drainage engineer running a CCTV drain survey" },
        ].map((item, i) => (
          <div key={i} className="overflow-hidden relative">
            <img src={item.src} alt={item.alt} className={`w-full h-full object-cover ${item.pos} hover:scale-105 transition-transform duration-700`} />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
        ))}
      </div>

      {/* ── FINAL CTA (dark) ── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 border-y border-accent/10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">In Need of Expert Advice?</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase mb-6 leading-tight">
              Need a Drainage Expert Right Now?
            </h2>
            <p className="text-lg text-foreground/70 mb-10">
              Don't wait for the problem to get worse. Our rapid response team is standing by.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:01256688650" className="bg-accent hover:bg-accent/90 text-white px-10 py-5 text-xl font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all">
                <Phone size={22} /> 01256 688 650
              </a>
              <a href="tel:07498062710" className="bg-transparent border-2 border-white/30 hover:border-accent hover:text-accent text-white px-10 py-5 text-xl font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all">
                <Phone size={22} /> 07498 062 710
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
