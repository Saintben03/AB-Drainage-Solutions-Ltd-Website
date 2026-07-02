import { Link } from "wouter";
import { ArrowRight, Phone, Clock, MapPin, ShieldCheck, Star, ThumbsUp, ExternalLink, Siren, Video, Droplets, Wrench, Building2, Layers } from "lucide-react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { CountUp } from "@/components/CountUp";
import { LogoMarquee } from "@/components/LogoMarquee";
import { WaterWave } from "@/components/WaterWave";
import { PageHero } from "@/components/PageHero";
import { AngledEdge } from "@/components/AngledEdge";
import { useBookNow } from "@/contexts/BookNowContext";
import { SOCIALS } from "@/components/SocialLinks";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

import heroImg from "@assets/Designer_(1)_1782807579036.png";
import scheduleBg from "@assets/ab-mark-trimmed_1782919186057.webp";
import crewTeam from "@assets/ab_group_gallery/worker-9.33.16.jpeg";
import crewManhole from "@assets/ab_group_gallery/worker-9.33.30.jpeg";
import crewChain from "@assets/ab_group_gallery/worker-9.33.26.jpeg";
import crewManholeOpen from "@assets/ab_group_gallery/worker-9.33.28.jpeg";
import workGroundwork from "@assets/site_files_1/groundwork-01a.jpg";
import workSurvey from "@assets/site_files_1/survey-01a.jpg";
import lanesLogo from "@assets/site_files_1/LanesGroup-1000-px.png";
import nhsLogo from "@assets/site_files_1/National_Health_Service_(England)_logo.svg.png";
import ccLogo from "@assets/site_files_1/CC-Multi-Disciplinary-Strap-White-BG-Full-Col-RGB-Trans.png";
import divConstruction from "@assets/construction/const-about.png";
import divFencing from "@assets/fencing/fence-hero.png";
import divFacilities from "@assets/facilities/fac-gallery-lobby.png";

const services = [
  { icon: <Siren size={32} />, title: "Emergency Drainage", tagline: "24/7 Rapid Response", href: "/services#emergency" },
  { icon: <Video size={32} />, title: "CCTV Drain Surveys", tagline: "Pinpoint Accuracy", href: "/services#cctv-surveys" },
  { icon: <Droplets size={32} />, title: "Cleaning & Jetting", tagline: "Powerful Clearance", href: "/services#cleaning-jetting" },
  { icon: <Wrench size={32} />, title: "Drain Repairs", tagline: "No-Dig Solutions", href: "/services#drain-repairs" },
  { icon: <Building2 size={32} />, title: "Commercial Drainage", tagline: "Trusted Professional", href: "/services#commercial" },
  { icon: <Layers size={32} />, title: "Soakaway Installation", tagline: "Building-Regs Compliant", href: "/services#soakaways" },
];

const faqs = [
  { q: "How quickly can you reach me in an emergency?", a: "We aim to be on site typically within the hour, 24/7 — including evenings, weekends and bank holidays, right across Hampshire." },
  { q: "Do you charge a call-out fee?", a: "No hidden fees. We give you a clear, upfront price before any work begins, so there are never any surprises on the final bill." },
  { q: "Which areas do you cover?", a: "We're based centrally and cover all of Hampshire — Basingstoke, Winchester, Southampton, Portsmouth, Andover, Eastleigh and everywhere in between." },
  { q: "Can you tell me exactly what's wrong with my drains?", a: "Yes. Our HD CCTV surveys pinpoint the precise problem and its location, and we'll explain the findings and your options in plain English." },
  { q: "Do you handle both domestic and commercial work?", a: "Absolutely. From a single blocked household drain to planned maintenance contracts for large commercial sites, our team handles it all." },
  { q: "Are you fully insured and accredited?", a: "Yes. We're fully insured, health & safety compliant, and approved to work for the NHS and major UK contractors." },
];

const REVIEWS_URL = "https://www.google.com/search?q=A%26B+Drainage+Solutions+Ltd+Basingstoke+Reviews";

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

const abGroupDivisions = [
  {
    img: divConstruction,
    alt: "AB Construction Solutions Ltd — site work",
    title: ["Construction", "Solutions"],
    desc: "Reliable construction across residential, commercial and infrastructure sites — strong project oversight, skilled workmanship, clear communication from start to finish.",
    href: "/ab-group/construction",
    features: ["Commercial Construction", "Residential Projects", "Project Management", "Specialist Labour Supply", "Site RAMS & Method Statements", "Health & Safety Advice"],
    bar: "bg-red-600",
    tint: "from-red-900/80",
    badge: "bg-red-500/15 text-red-300 ring-1 ring-red-400/30",
    dot: "bg-red-400",
    button: "bg-red-600 hover:bg-red-500 shadow-red-950/50",
    ringHover: "hover:ring-red-400/60",
    glowHover: "hover:shadow-red-900/40",
  },
  {
    img: divFencing,
    alt: "AB Fencing Solutions Ltd — installed fencing",
    title: ["Fencing", "Solutions"],
    desc: "Expert fencing and landscaping tailored to homes and businesses — durable, well-crafted, designed to enhance outdoor spaces with a practical no-nonsense approach.",
    href: "/ab-group/fencing",
    features: ["Secure Fencing Installations", "Garden Landscaping", "Pathway & Patio Laying", "Boundary Solutions", "Outdoor Design & Planning", "Nationwide Coverage"],
    bar: "bg-green-600",
    tint: "from-green-900/80",
    badge: "bg-green-500/15 text-green-300 ring-1 ring-green-400/30",
    dot: "bg-green-400",
    button: "bg-green-700 hover:bg-green-600 shadow-green-950/50",
    ringHover: "hover:ring-green-400/60",
    glowHover: "hover:shadow-green-900/40",
  },
  {
    img: divFacilities,
    alt: "AB Facilities Management Ltd — commercial building",
    title: ["Facilities", "Management"],
    desc: "Keeping commercial buildings operating safely and efficiently — from planned maintenance programmes to rapid reactive support and ongoing compliance.",
    href: "/ab-group/facilities",
    features: ["Planned Maintenance", "Reactive Callouts", "Compliance & Safety Checks", "Multi-Site Management", "Efficiency Monitoring", "Reporting & Transparency"],
    bar: "bg-[#5392B6]",
    tint: "from-[#0e3a5c]/85",
    badge: "bg-[#5392B6]/20 text-[#8fc0dc] ring-1 ring-[#5392B6]/40",
    dot: "bg-[#5392B6]",
    button: "bg-[#5392B6] hover:bg-[#4a82a4] shadow-blue-950/50",
    ringHover: "hover:ring-[#5392B6]/60",
    glowHover: "hover:shadow-[#5392B6]/40",
  },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Home() {
  const { openBookNow } = useBookNow();
  return (
    <>
      <SEO
        title="Blocked Drain Hampshire | 24/7 Emergency Drainage"
        description="Expert drainage services across Hampshire for domestic, commercial and industrial clients. 24/7 emergency callouts typically within 1 hour. 33+ years experience."
        canonicalUrl="/"
      />

      {/* ── HERO ── */}
      <PageHero
        image={heroImg}
        imageAlt="A&B Drainage Solutions Ltd fleet of vans"
        waveFill="#01618E"
        waveFillMobile="#e0f2fe"
        eyebrow={
          <>
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block"></span>
            South England's Drainage Specialists — 33 Years Experience
          </>
        }
        title={
          <>
            The Drain Experts <span className="text-sky-300">South England</span> Relies On.
          </>
        }
        description="Blocked drain? Sewage backing up? We answer at 2am and arrive typically within 1 hour. 33 years solving South England's toughest drainage problems."
      >
        <motion.a
          href={REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-8 inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 px-5 py-3 rounded-lg transition-all"
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="text-white font-bold text-sm">Rated Excellent</span>
          <span className="hidden sm:inline text-white/60 text-sm">· See our reviews</span>
          <ExternalLink size={14} className="text-white/60" />
        </motion.a>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="tel:01256688650"
            className="w-full sm:w-auto bg-accent/50 backdrop-blur-md border border-white/30 md:bg-accent md:border-0 md:backdrop-blur-none hover:bg-accent/70 md:hover:bg-accent/90 text-white px-8 py-4 text-base font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all [text-shadow:0_1px_6px_rgba(0,0,0,0.45)] md:[text-shadow:none]"
          >
            <Phone size={20} /> Call 01256 688 650
          </a>
          <Link
            href="/services"
            className="w-full sm:w-auto bg-transparent border-2 border-white/30 hover:border-white text-white px-8 py-4 text-base font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
          >
            Our Services <ArrowRight size={20} />
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-6 sm:gap-8 text-xs sm:text-sm font-bold text-white/75 uppercase tracking-widest"
        >
          <span className="flex items-center gap-2"><Clock size={15} className="text-[#5392B6]" /> 1 Hour ETA</span>
          <span className="flex items-center gap-2"><ShieldCheck size={15} className="text-[#5392B6]" /> 33+ Yrs Exp</span>
          <span className="flex items-center gap-2"><MapPin size={15} className="text-[#5392B6]" /> Across South England</span>
        </motion.div>
      </PageHero>

      {/* ── SCHEDULE STRIP (brand-blue band, reference-style — hidden on mobile) ── */}
      <section className="relative bg-[#01618E] overflow-hidden hidden md:block">
        <img
          src={scheduleBg}
          alt=""
          aria-hidden="true"
          className="hidden sm:block absolute right-4 md:right-16 top-1/2 -translate-y-1/2 h-[80%] md:h-[96%] w-auto max-w-none opacity-90 pointer-events-none select-none"
        />
        <div className="container mx-auto px-4 py-12 md:pt-8 md:pb-24 relative z-10 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6">
          <p className="text-white font-display font-bold uppercase tracking-wide text-xl md:text-3xl text-center sm:text-left leading-tight">
            Need Drainage Support?{" "}
            <span className="text-[#06182a]">Schedule Your Service</span>
          </p>
          <button
            onClick={openBookNow}
            className="bg-white text-[#06182a] px-8 py-4 font-bold uppercase tracking-wider text-sm flex items-center gap-2 shrink-0 transition-all"
          >
            Book Now <ArrowRight size={16} />
          </button>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#e0f2fe" />
      </section>

      {/* ── TRUSTED BY (light band, animated wave at its base) ── */}
      <section className="relative bg-sky-100 pt-4 pb-28 overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-center text-xs text-zinc-500 uppercase tracking-[0.2em] font-semibold mb-10">
            Trusted by institutions &amp; businesses across the UK
          </p>
          <LogoMarquee logos={trustLogos} />
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="hsl(0 0% 11%)" />
      </section>

      {/* ── SERVICES (dark, flat blue cards — reference style) ── */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-14"
          >
            <p className="text-[#5392B6] text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Do</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-white leading-tight mb-4">
              Complete Drainage Solutions
            </h2>
            <p className="text-foreground/60 text-lg leading-relaxed">
              From emergency blockages to full installations — one expert team covering every drainage need across Hampshire, domestic and commercial.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {services.map((s, i) => (
              <motion.div key={i} variants={fadeUp} className="h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 320, damping: 22 }}
                  className="h-full"
                >
                  <Link
                    href={s.href}
                    className="group relative flex flex-col h-full min-h-[220px] overflow-hidden rounded-xl p-8 bg-gradient-to-br from-[#4d8bb0] via-[#2c6188] to-[#123f61] ring-1 ring-white/10 hover:ring-white/25 shadow-lg shadow-black/30 hover:shadow-2xl hover:shadow-[#5392B6]/25 transition-shadow duration-300"
                  >
                    {/* hover brighten wash */}
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#5fa2c8] via-[#377bab] to-[#164f79] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                    {/* diagonal shine sweep on hover */}
                    <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                      <span className="absolute top-0 -left-2/3 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-[320%] transition-transform duration-[900ms] ease-out"></span>
                    </span>

                    <div className="relative z-[1] flex flex-col h-full">
                      <div className="mb-8 text-white/90 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                        {s.icon}
                      </div>
                      <h3 className="text-2xl md:text-[1.7rem] font-display font-bold text-white uppercase leading-none mb-3">{s.title}</h3>
                      <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-white/55">{s.tagline}</p>
                      <span className="mt-auto pt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
                        Learn More <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
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
            <Link href="/services" className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all">
              View All Services <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>

        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#0f2a44" />
      </section>

      {/* ── WHY CHOOSE US (deep navy — differentiated from the services section above) ── */}
      <section className="relative pt-24 pb-40 bg-gradient-to-b from-[#0f2a44] via-[#0b1e30] to-[#0a1622] overflow-hidden">
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
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-4 p-5 bg-white/[0.05] border border-white/10 rounded-lg backdrop-blur-sm">
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
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#5392B6" />
      </section>

      {/* ── STATS (orange band — colour pop) ── */}
      <section className="bg-accent pt-14 pb-28 relative overflow-hidden">
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
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#fafafa" />
      </section>

      {/* ── REVIEWS (light) ── */}
      <section className="py-20 bg-zinc-50">
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

      {/* ── TRUSTED ADVICE / FAQ (light) ── */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <p className="text-[#5392B6] text-xs font-bold uppercase tracking-[0.25em] mb-3">Trusted Advice</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-zinc-900 leading-tight mb-5">
                Answers For Your Drainage Needs
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-8 text-lg">
                Not sure where to start? Here are the questions we're asked most. Still stuck? Pick up the phone — honest advice, no obligation.
              </p>
              <div className="flex items-center gap-3 mb-8 p-4 bg-zinc-50 border border-zinc-100 rounded-xl">
                <div className="flex gap-0.5 shrink-0">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm font-bold text-zinc-900">Highly rated with 5-star reviews right across Hampshire</p>
              </div>
              <a
                href="tel:01256688650"
                className="inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all"
              >
                <Phone size={18} /> Call 01256 688 650
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-zinc-200">
                    <AccordionTrigger className="text-lg font-display font-bold uppercase text-zinc-900 hover:no-underline py-5 text-left gap-4">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-600 text-base leading-relaxed pb-5 pr-6">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <div className="relative grid grid-cols-3 h-64 md:h-96 overflow-hidden">
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
        {/* Diagonal transitions blending the white FAQ above and the dark AB Group below */}
        <AngledEdge position="top" fill="#ffffff" line="#5392B6" className="absolute top-0 left-0 w-full z-20 -mt-px" />
        <AngledEdge position="bottom" fill="#09090b" line="#5392B6" className="absolute bottom-0 left-0 w-full z-20 -mb-px" />
      </div>

      {/* ── THE AB GROUP ── */}
      <section id="ab-group" className="py-24 bg-zinc-950 relative overflow-hidden">
        {/* Subtle grid lines */}
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.6) 1px,transparent 1px)", backgroundSize: "72px 72px" }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 relative z-10">

          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">More From The AB Group</p>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase leading-tight mb-5">
              Other <span className="text-accent">Services</span> We Offer
            </h2>
            <p className="text-lg text-white/55 max-w-2xl mx-auto">
              Alongside drainage, our group brings 33 years of combined expertise across construction, fencing and facilities management — all under one roof.
            </p>
          </motion.div>

          {/* Cinematic image cards */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
          >
            {abGroupDivisions.map((d) => (
              <motion.div
                key={d.href}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
                className={`relative overflow-hidden rounded-2xl group min-h-[580px] flex flex-col ring-1 ring-white/10 shadow-xl shadow-black/40 transition-all duration-500 hover:-translate-y-2 hover:ring-2 ${d.ringHover} hover:shadow-2xl ${d.glowHover}`}
              >
                <img
                  src={d.img}
                  alt={d.alt}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Base dark gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/25 transition-all duration-500" />
                {/* Division colour wash from the bottom */}
                <div className={`absolute inset-0 bg-gradient-to-t ${d.tint} via-transparent to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-500`} />
                {/* Shine sweep on hover */}
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
                  <span className="absolute top-0 -left-1/2 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-[420%] transition-transform duration-[1100ms] ease-out" />
                </span>
                {/* Accent bar top */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${d.bar} z-10`} />

                <div className="relative z-10 flex flex-col h-full p-7 pt-9">
                  <span className={`self-start inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.22em] mb-4 ${d.badge}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${d.dot}`} />
                    Division
                  </span>
                  <h3 className="text-white font-display font-bold text-2xl uppercase leading-tight mb-4">
                    {d.title[0]}<br />{d.title[1]}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-7">
                    {d.desc}
                  </p>
                  <ul className="space-y-2.5 mb-auto">
                    {d.features.map((s) => (
                      <li key={s} className="flex items-center gap-2.5 text-sm text-white/85">
                        <span className={`w-1.5 h-1.5 rounded-full ${d.dot} shrink-0`} />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={d.href}
                    className={`group/btn mt-8 flex items-center justify-center gap-2 ${d.button} text-white text-xs font-bold uppercase tracking-[0.18em] py-4 rounded-lg transition-all duration-300 shadow-lg`}
                  >
                    Learn More <ArrowRight size={14} className="transition-transform duration-300 group-hover/btn:translate-x-1.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* AB Group footer banner */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 border border-zinc-800 bg-zinc-900/60 backdrop-blur-sm p-7 flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <p className="text-[#5392B6] text-[10px] font-bold uppercase tracking-[0.22em] mb-1">Currently Viewing</p>
              <h4 className="text-white font-display font-bold text-lg uppercase">Our Other Services</h4>
              <p className="text-white/45 text-sm mt-1">Hampshire's leading drainage specialists for over 33 years. Rapid response, 24/7.</p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link href="/ab-group/construction" className="inline-flex items-center gap-2 border-l-2 border-l-red-600 border border-zinc-700 hover:border-red-600/60 bg-zinc-800/60 hover:bg-red-950/30 text-white/70 hover:text-red-300 px-5 py-3 font-bold uppercase tracking-wider text-xs rounded-lg transition-all duration-200">
                Construction <ArrowRight size={13} />
              </Link>
              <Link href="/ab-group/fencing" className="inline-flex items-center gap-2 border-l-2 border-l-green-600 border border-zinc-700 hover:border-green-600/60 bg-zinc-800/60 hover:bg-green-950/30 text-white/70 hover:text-green-300 px-5 py-3 font-bold uppercase tracking-wider text-xs rounded-lg transition-all duration-200">
                Fencing <ArrowRight size={13} />
              </Link>
              <Link href="/ab-group/facilities" className="inline-flex items-center gap-2 border-l-2 border-l-[#5392B6] border border-zinc-700 hover:border-[#5392B6]/60 bg-zinc-800/60 hover:bg-blue-950/30 text-white/70 hover:text-[#5392B6] px-5 py-3 font-bold uppercase tracking-wider text-xs rounded-lg transition-all duration-200">
                Facilities <ArrowRight size={13} />
              </Link>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── FOLLOW US (social) ── */}
      <section className="py-24 md:py-28 bg-[#01618E] relative overflow-hidden">
        {/* Diagonal wedges blending the dark AB Group above and the dark Final CTA below */}
        <AngledEdge position="top" fill="#09090b" line="#5392B6" className="absolute top-0 left-0 w-full z-[6] -mt-px" />
        <AngledEdge position="bottom" fill="#1c1c1c" line="#5392B6" className="absolute bottom-0 left-0 w-full z-[6] -mb-px" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <p className="text-white/70 text-xs font-bold uppercase tracking-[0.25em] mb-4">Stay Connected</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-tight mb-5">
              Follow Us On <span className="text-[#06182a]">Socials</span>
            </h2>
            <p className="text-lg text-white/85 max-w-2xl mx-auto mb-10">
              Catch our latest jobs, before-and-after transformations, handy drainage tips and behind-the-scenes from the A&amp;B crew. Give us a follow and stay in the loop.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {SOCIALS.map(({ name, href, Icon }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow A&B Drainage Solutions on ${name}`}
                  className="group flex items-center gap-3 bg-white text-[#06182a] px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all hover:bg-[#06182a] hover:text-white"
                >
                  <Icon size={22} />
                  {name}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA (dark) ── */}
      <section className="py-24 bg-background relative overflow-hidden">
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
