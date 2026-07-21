import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Phone, Mail, CheckCircle2, Wrench, ClipboardCheck, Building, Shield, Zap, BarChart3, ChevronLeft, Scan, Eye, Ruler, Map } from "lucide-react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

import imgMpCommercial from "@assets/Image_(30)_1784642251758.jpg";
import imgMpDollhouse  from "@assets/image_1784642236858.png";

import img13 from "@assets/Image_(13)_1784642358502.jpg";
import img14 from "@assets/Image_(14)_1784642358502.jpg";
import img15 from "@assets/Image_(15)_1784642358502.jpg";
import img16 from "@assets/Image_(16)_1784642358502.jpg";
import img17 from "@assets/Image_(17)_1784642358503.jpg";
import img18 from "@assets/Image_(18)_1784642358503.jpg";
import img19 from "@assets/Image_(19)_1784642358503.jpg";
import img20 from "@assets/Image_(20)_1784642358503.jpg";
import img21 from "@assets/Image_(21)_1784642358503.jpg";
import img22 from "@assets/Image_(22)_1784642358504.jpg";
import img32 from "@assets/Image_(32)_1784642358504.jpg";
import img33 from "@assets/Image_(33)_1784642358504.jpg";
import img34 from "@assets/Image_(34)_1784642358504.jpg";
import img35 from "@assets/Image_(35)_1784642358504.jpg";
import img36 from "@assets/Image_(36)_1784642358505.jpg";
import img37 from "@assets/Image_(37)_1784642358505.jpg";
import img38 from "@assets/Image_(38)_1784642358501.jpg";
import img39 from "@assets/Image_(39)_1784642358501.jpg";

const heroImg  = img38;
const imgAbout = img37;
const imgWhyUs = img39;

const WHITE      = "#ffffff";
const DARK       = "#0c0e10";
const NEAR_BLACK = "#080a0c";
const ACCENT     = "#475569";

const matterportFeatures = [
  { icon: <Eye size={22} />, title: "3D Virtual Walkthroughs", desc: "Clients and stakeholders navigate a fully immersive 3D model of any space — accessible from any device, anywhere in the world." },
  { icon: <Ruler size={22} />, title: "Precise Measurements", desc: "Every room, corridor and ceiling height is captured to millimetre accuracy — eliminating guesswork for contractors and project teams." },
  { icon: <Map size={22} />, title: "Automated Floor Plans", desc: "Accurate, dimensioned floor plans generated automatically from the scan — branded with your project details, no manual drafting required." },
  { icon: <Scan size={22} />, title: "Asset Documentation", desc: "Tag assets, plant and equipment within the model to create a living digital record that supports maintenance planning and compliance." },
];

const matterportUseCases = [
  { title: "Pre-Tenancy Documentation", desc: "Capture a building's condition at lease commencement — a definitive, timestamped record both parties can reference." },
  { title: "Dilapidations Evidence", desc: "Accurate 3D evidence of a building's state at key milestones, supporting dilapidations negotiations with factual data." },
  { title: "Contractor Briefing", desc: "Share the model with contractors remotely so they arrive on site fully prepared — reducing abortive visits and survey costs." },
  { title: "Asset & PPM Planning", desc: "Tag plant, equipment and systems within the model to build a living, navigable asset register linked to your PPM schedule." },
];

/* ── Stepped / battlements geometric divider — corporate feel ── */
function SteppedDivider({ from, to, flip = false }: { from: string; to: string; flip?: boolean }) {
  return (
    <div aria-hidden="true" className="relative overflow-hidden h-14 pointer-events-none" style={{ background: from }}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        {flip ? (
          <>
            <polygon points="0,0 480,56 0,56" fill={to} />
            <polygon points="720,0 1440,56 1440,0" fill={to} />
            <polyline points="0,0 480,56 720,0 1440,56" stroke={ACCENT} strokeWidth="1.5" fill="none" strokeOpacity="0.45" />
          </>
        ) : (
          <>
            <polygon points="0,56 0,28 480,56" fill={to} />
            <polygon points="720,28 1440,56 1440,56" fill={to} />
            <polyline points="0,28 480,56 720,28 1440,56" stroke={ACCENT} strokeWidth="1.5" fill="none" strokeOpacity="0.45" />
          </>
        )}
      </svg>
    </div>
  );
}

const services = [
  { icon: <Wrench size={26} />, title: "Planned Maintenance", desc: "Structured PPM programmes ensuring all building systems and assets are maintained to schedule — maximising lifespan and minimising downtime." },
  { icon: <Zap size={26} />, title: "Reactive Callouts", desc: "Rapid response to unexpected failures and emergencies — our technicians are dispatched promptly to restore normality with minimum disruption." },
  { icon: <ClipboardCheck size={26} />, title: "Compliance & Safety", desc: "Fire safety, legionella risk, electrical testing, asbestos management and statutory inspections — all tracked and documented for full compliance." },
  { icon: <Building size={26} />, title: "Multi-Site Management", desc: "Centralised facilities management across multiple premises, with consistent service delivery, a single point of contact and transparent reporting." },
  { icon: <Shield size={26} />, title: "Security & Access", desc: "Access control systems, CCTV monitoring, security lighting and physical security reviews to protect your people, premises and assets." },
  { icon: <BarChart3 size={26} />, title: "Reporting & Audits", desc: "Detailed condition surveys, asset registers, lifecycle planning and management reporting — giving you full visibility and budget confidence." },
];

const mainGallery = [
  { src: img37, caption: "Commercial Fit-Out — Reception",   pos: "center 40%", cls: "brightness-[1.08] contrast-[1.12] saturate-[1.15]" },
  { src: img38, caption: "Commercial Fit-Out — Open Plan",   pos: "center 40%", cls: "brightness-[1.08] contrast-[1.12] saturate-[1.15]" },
  { src: img39, caption: "Commercial Fit-Out — Corridor",    pos: "center 40%", cls: "brightness-[1.08] contrast-[1.12] saturate-[1.15]" },
  { src: img16, caption: "Decoration & Preparation",         pos: "center 40%", cls: "brightness-[1.08] contrast-[1.12] saturate-[1.15]" },
  { src: img17, caption: "Herringbone Floor Install",        pos: "center 40%", cls: "brightness-[1.08] contrast-[1.12] saturate-[1.15]" },
  { src: img18, caption: "Treatment Room — Complete",        pos: "center 40%", cls: "brightness-[1.08] contrast-[1.12] saturate-[1.15]" },
  { src: img35, caption: "3D Space Scan — Defurnished",      pos: "center 40%", cls: "brightness-[1.08] contrast-[1.12] saturate-[1.15]" },
  { src: img36, caption: "3D Space Scan — Furnished",        pos: "center 40%", cls: "brightness-[1.08] contrast-[1.12] saturate-[1.15]" },
];

const floorPlans = [
  { src: img32, caption: "Floor Plan — Layout A" },
  { src: img33, caption: "Floor Plan — Layout B" },
  { src: img34, caption: "Floor Plan — Layout C" },
];

const groundsGallery = [
  { src: img19, caption: "Raised Lawn & Gravel Border",      pos: "center 30%", cls: "brightness-[1.05] saturate-[1.15]" },
  { src: img20, caption: "Striped Turf — Grounds Upkeep",   pos: "center 40%", cls: "brightness-[1.05] saturate-[1.15]" },
  { src: img21, caption: "Patio & Perimeter Fencing",        pos: "center 30%", cls: "brightness-[1.05] saturate-[1.15]" },
  { src: img22, caption: "Timber Sleeper Raised Beds",       pos: "center 25%", cls: "brightness-[1.05] saturate-[1.15]" },
];

const buildingGallery = [
  { src: img13, caption: "Flat Roof Deck Installation",      pos: "center 40%", cls: "brightness-[1.1] contrast-[1.15] saturate-[0.9]" },
  { src: img14, caption: "Felt Overlay — Complete",          pos: "center 35%", cls: "brightness-[1.1] contrast-[1.15] saturate-[0.9]" },
  { src: img15, caption: "Scaffolded Roof Works",            pos: "center 50%", cls: "brightness-[1.1] contrast-[1.15] saturate-[0.9]" },
];

const whyUs = [
  { title: "Single Point of Contact", desc: "One account manager, one phone number, complete responsibility. We make facilities management simple for our clients." },
  { title: "Fully Compliant", desc: "All operatives DBS checked, fully insured, and working within stringent Health & Safety and statutory compliance frameworks." },
  { title: "Transparent Reporting", desc: "Monthly dashboards, real-time work order tracking and full audit trails so you always know exactly what has been done and when." },
  { title: "Part of The AB Group", desc: "We bring in drainage, construction and fencing expertise from our sister companies at cost, rather than sending you to an unknown third party." },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

type FormState = { name: string; email: string; phone: string; service: string; message: string };
const INIT: FormState = { name: "", email: "", phone: "", service: "", message: "" };

export default function ABGroupFacilities() {
  const [form, setForm] = useState<FormState>(INIT);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "1fff1011-7ce5-4637-a911-a8636db20080",
          subject: `Facilities Enquiry — ${form.service || "General"}`,
          from_name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: form.message,
          source_site: window.location.hostname,
        }),
      });
      const json = await res.json();
      if (json.success) { setSent(true); setForm(INIT); }
      else setError(true);
    } catch { setError(true); }
    finally { setSending(false); }
  };

  return (
    <>
      <SEO
        title="AB Facilities Management | Building & Facilities Management | South England"
        description="AB Facilities Management — South England's facilities management specialists. Planned maintenance, reactive callouts, compliance, multi-site management and Matterport 3D building surveys."
        canonicalUrl="/ab-group/facilities"
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Modern optician commercial fit-out — reception and slatted ceiling" className="w-full h-full object-cover object-[center_40%] animate-heropan brightness-[1.08] contrast-[1.12] saturate-[1.15]" draggable={false} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-500/40 via-slate-500/5 to-transparent" style={{ mixBlendMode: "color" }} />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-28 pt-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="max-w-3xl">
            <Link href="/ab-group" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 transition-colors">
              <ChevronLeft size={14} /> Other Services
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-12 bg-slate-400" />
              <div>
                <p className="text-slate-300 text-xs font-bold uppercase tracking-[0.25em]">Other Services</p>
                <p className="text-white/50 text-xs uppercase tracking-[0.18em]">Facilities Division</p>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-black uppercase text-white leading-[0.9] mb-6 relative">
              <span className="relative">AB Facilities<span className="absolute -inset-x-8 -inset-y-10 bg-black/50 blur-3xl rounded-3xl -z-10" /></span>
              <br /><span className="text-slate-300">Management</span>
            </h1>
            <p className="text-xl text-white/85 leading-relaxed mb-10 max-w-xl">
              South England's trusted facilities management partner — keeping commercial buildings safe, compliant and operating at their best, every day.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#enquire" className="inline-flex items-center gap-2 px-10 py-5 bg-slate-600 hover:bg-slate-500 text-white font-bold uppercase tracking-wider text-sm transition-all">
                Get a Quote <ArrowRight size={16} />
              </a>
              <a href="#matterport" className="inline-flex items-center gap-2 px-10 py-5 border border-white/40 text-white font-bold uppercase tracking-wider text-sm hover:border-white/70 hover:bg-white/10 transition-all">
                3D Building Surveys
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero → About: stepped geometric cut */}
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none h-20">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
            <polygon points="0,80 0,55 360,80" fill={WHITE} />
            <polygon points="480,40 960,80 960,80 480,80" fill={WHITE} />
            <polygon points="1080,55 1440,80 1440,80 1080,80" fill={WHITE} />
            <polyline points="0,55 360,80 480,40 960,80 1080,55 1440,80" stroke={ACCENT} strokeWidth="1.5" fill="none" strokeOpacity="0.5" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.25em] mb-4">About The Division</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 uppercase leading-tight mb-6">Buildings That<br />Work Better</h2>
              <p className="text-zinc-600 leading-relaxed mb-6">
                AB Facilities Management delivers comprehensive building and facilities management services to commercial, public sector and multi-site clients across South England.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-10">
                We take the complexity out of running and maintaining commercial premises, acting as your dedicated partner from day-to-day reactive works through to long-term strategic asset planning.
              </p>
              <div className="grid grid-cols-3 gap-6 border-t border-zinc-200 pt-8">
                {[{ val: "20+", label: "Years Experience" }, { val: "50+", label: "Managed Sites" }, { val: "24/7", label: "Reactive Cover" }].map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-display font-black text-slate-600">{s.val}</p>
                    <p className="text-zinc-500 text-xs uppercase tracking-[0.15em] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <img src={imgAbout} alt="Commercial fit-out — optician front-of-house" className="w-full aspect-[4/3] object-cover object-[center_40%] shadow-xl brightness-[1.08] contrast-[1.12] saturate-[1.15]" draggable={false} />
              <div className="absolute -bottom-4 -left-4 bg-slate-600 text-white p-6 hidden md:block shadow-lg">
                <p className="text-2xl font-display font-black uppercase">ISO</p>
                <p className="text-xs uppercase tracking-[0.15em] text-white/80">Standards</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <SteppedDivider from={WHITE} to={DARK} flip />

      {/* ── SERVICES ── */}
      <section id="services" className="py-24" style={{ backgroundColor: DARK }}>
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Manage</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">Our Services</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="bg-zinc-900 border border-zinc-800 p-8 group hover:border-slate-400/60 transition-all duration-300">
                <div className="w-12 h-12 bg-slate-500/10 border border-slate-500/30 flex items-center justify-center text-slate-400 mb-6 group-hover:bg-slate-600 group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-white font-display font-bold text-lg uppercase mb-3">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <SteppedDivider from={DARK} to={NEAR_BLACK} />

      {/* ── MATTERPORT 3D SHOWCASE ── */}
      <section id="matterport" className="py-28" style={{ backgroundColor: NEAR_BLACK }}>
        <div className="container mx-auto px-4 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 border border-slate-500/40 px-4 py-1.5 mb-6">
              <Scan size={13} className="text-slate-400" />
              <span className="text-slate-400 text-xs font-bold uppercase tracking-[0.2em]">Powered by Matterport</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase leading-tight mb-6">
              3D Building<br /><span className="text-slate-400">Surveys & Digital Twins</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed max-w-3xl mx-auto">
              AB Facilities Management is a certified Matterport partner. We capture photorealistic 3D scans of commercial buildings, creating immersive digital twins that transform how you manage, plan and document your estate.
            </p>
          </motion.div>

          {/* Feature: large image + feature list */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="relative"
            >
              <div className="relative overflow-hidden">
                <img
                  src={imgMpCommercial}
                  alt="Matterport 3D scan of a commercial multi-floor building"
                  className="w-full aspect-video object-cover"
                  draggable={false}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white/50 text-xs uppercase tracking-[0.2em]">Commercial Building — 3D Scan</p>
                  <p className="text-white font-bold text-sm">Multi-floor exterior &amp; interior capture</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 hidden md:block">
                <div className="bg-slate-600 text-white px-4 py-2 text-xs font-bold uppercase tracking-wider">
                  Matterport Certified
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
            >
              <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">What You Get</p>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white uppercase leading-tight mb-8">
                A Complete Digital<br />Record of Your Building
              </h3>
              <div className="space-y-5">
                {matterportFeatures.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex gap-4 border-b border-zinc-800 pb-5 last:border-0 last:pb-0"
                  >
                    <div className="w-10 h-10 shrink-0 bg-slate-500/15 border border-slate-500/30 flex items-center justify-center text-slate-400">
                      {f.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-1">{f.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Showcase grid: dollhouse + interior + floor plan */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-center"
          >
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.25em] mb-2">Scan Gallery</p>
            <h3 className="text-2xl font-display font-bold text-white uppercase mb-10">Recent Surveys</h3>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
            {([
              { src: img35,           caption: "3D dollhouse — optician",          label: "Defurnished View" },
              { src: img36,           caption: "3D dollhouse — dental practice",   label: "Furnished View" },
              { src: imgMpDollhouse,  caption: "Residential property survey",      label: "Dollhouse View" },
              { src: img32,           caption: "Dimensioned floor plan",           label: "Floor Plan" },
            ] as { src: string; caption: string; label: string }[]).map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="relative overflow-hidden group"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-700"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-3">
                  <span className="text-slate-300 text-[10px] font-bold uppercase tracking-wider mb-0.5">{item.label}</span>
                  <span className="text-white text-xs">{item.caption}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Use-cases strip */}
          <div className="border border-zinc-800 p-8 md:p-10 mb-12">
            <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.25em] mb-6 text-center">Use Cases</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {matterportUseCases.map((u) => (
                <div key={u.title} className="border-l-2 border-slate-600 pl-4">
                  <h4 className="text-white font-bold text-sm uppercase tracking-wide mb-2">{u.title}</h4>
                  <p className="text-white/45 text-xs leading-relaxed">{u.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <a
              href="#enquire"
              className="inline-flex items-center gap-2 px-10 py-5 bg-slate-600 hover:bg-slate-500 text-white font-bold uppercase tracking-wider text-sm transition-all"
            >
              Enquire About a 3D Survey <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <SteppedDivider from={NEAR_BLACK} to={WHITE} />

      {/* ── PORTFOLIO / GALLERY ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">

          {/* Main fit-out gallery */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.25em] mb-3">Project Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 uppercase">Our Work</h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
            {mainGallery.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }} className="relative overflow-hidden group shadow-sm">
                <img
                  src={item.src}
                  alt={item.caption}
                  className={`w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700 ${item.cls}`}
                  style={{ objectPosition: item.pos }}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-bold uppercase tracking-wide">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Space Planning — floor plans on light background */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.25em] mb-2">Space Planning</p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-zinc-900 uppercase">Floor Plans & Layouts</h3>
            <p className="text-zinc-500 text-sm mt-2 max-w-xl">We produce detailed space planning and floor layout drawings to help clients visualise and optimise every square metre.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {floorPlans.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="border-2 border-slate-200 bg-white p-3 shadow-sm">
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full aspect-[4/3] object-contain"
                  draggable={false}
                />
                <p className="text-zinc-600 text-xs font-bold uppercase tracking-[0.15em] text-center mt-3 pb-1">{item.caption}</p>
              </motion.div>
            ))}
          </div>

          {/* Grounds & Exterior */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.25em] mb-2">Grounds Management</p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-zinc-900 uppercase">Grounds & Exterior</h3>
            <p className="text-zinc-500 text-sm mt-2 max-w-xl">From manicured lawns and gravel borders to timber landscaping and perimeter fencing — we manage every aspect of your exterior.</p>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-16">
            {groundsGallery.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }} className="relative overflow-hidden group shadow-sm">
                <img
                  src={item.src}
                  alt={item.caption}
                  className={`w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700 ${item.cls}`}
                  style={{ objectPosition: item.pos }}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-bold uppercase tracking-wide">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Building & Maintenance */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-8">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.25em] mb-2">Building Works</p>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-zinc-900 uppercase">Building & Maintenance</h3>
            <p className="text-zinc-500 text-sm mt-2 max-w-xl">Roofing, structural repairs, and fabric maintenance — keeping your building's envelope watertight and compliant.</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {buildingGallery.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }} className="relative overflow-hidden group shadow-sm">
                <img
                  src={item.src}
                  alt={item.caption}
                  className={`w-full h-full object-cover aspect-[4/3] group-hover:scale-105 transition-transform duration-700 ${item.cls}`}
                  style={{ objectPosition: item.pos }}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-bold uppercase tracking-wide">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <SteppedDivider from={WHITE} to={DARK} flip />

      {/* ── WHY US ── */}
      <section className="py-24" style={{ backgroundColor: DARK }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-[0.25em] mb-4">The Difference</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-tight mb-10">Why Choose<br />AB Facilities?</h2>
              <div className="space-y-6">
                {whyUs.map((w, i) => (
                  <motion.div key={w.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex gap-4">
                    <CheckCircle2 size={22} className="shrink-0 mt-0.5 text-slate-400" />
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-1">{w.title}</h4>
                      <p className="text-white/55 text-sm leading-relaxed">{w.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={imgWhyUs} alt="Sleek commercial corridor — optician fit-out" className="w-full aspect-[4/3] object-cover object-[center_40%] shadow-xl brightness-[1.08] contrast-[1.12] saturate-[1.15]" draggable={false} />
            </motion.div>
          </div>
        </div>
      </section>

      <SteppedDivider from={DARK} to={WHITE} />

      {/* ── ENQUIRY FORM ── */}
      <section id="enquire" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.25em] mb-4">Get Started</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 uppercase leading-tight mb-6">Request a<br />Quote</h2>
              <p className="text-zinc-600 leading-relaxed mb-10">
                Tell us about your building or portfolio and we will be in touch promptly with expert advice and a tailored service proposal.
              </p>
              <div className="space-y-4">
                <a href="tel:01256688650" className="flex items-center gap-3 text-zinc-800 hover:text-slate-600 transition-colors">
                  <div className="w-10 h-10 bg-slate-500/10 border border-slate-500/30 flex items-center justify-center"><Phone size={16} className="text-slate-500" /></div>
                  <span className="font-bold">01256 688 650</span>
                </a>
                <a href="mailto:info@abdrainage.co.uk" className="flex items-center gap-3 text-zinc-800 hover:text-slate-600 transition-colors">
                  <div className="w-10 h-10 bg-slate-500/10 border border-slate-500/30 flex items-center justify-center"><Mail size={16} className="text-slate-500" /></div>
                  <span className="font-bold">info@abdrainage.co.uk</span>
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
              {sent ? (
                <div className="bg-white border border-slate-400/50 shadow-lg p-12 text-center">
                  <CheckCircle2 size={48} className="text-slate-500 mx-auto mb-4" />
                  <h3 className="text-zinc-900 font-display font-bold text-2xl uppercase mb-3">Enquiry Sent</h3>
                  <p className="text-zinc-600">Thank you — we have received your enquiry and will be in touch shortly.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-slate-600 text-sm font-bold uppercase tracking-wider hover:underline">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white border border-zinc-200 shadow-lg p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-zinc-600 text-xs uppercase tracking-[0.15em] font-bold mb-2">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required className="w-full bg-white border border-zinc-300 text-zinc-900 px-4 py-3 text-sm focus:outline-none focus:border-slate-500 transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-zinc-600 text-xs uppercase tracking-[0.15em] font-bold mb-2">Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} className="w-full bg-white border border-zinc-300 text-zinc-900 px-4 py-3 text-sm focus:outline-none focus:border-slate-500 transition-colors" placeholder="Your number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-zinc-600 text-xs uppercase tracking-[0.15em] font-bold mb-2">Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full bg-white border border-zinc-300 text-zinc-900 px-4 py-3 text-sm focus:outline-none focus:border-slate-500 transition-colors" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-zinc-600 text-xs uppercase tracking-[0.15em] font-bold mb-2">Service Required</label>
                    <select name="service" value={form.service} onChange={handleChange} className="w-full bg-white border border-zinc-300 text-zinc-900 px-4 py-3 text-sm focus:outline-none focus:border-slate-500 transition-colors">
                      <option value="">Select a service...</option>
                      <option>Planned Maintenance</option>
                      <option>Reactive Callouts</option>
                      <option>Compliance &amp; Safety</option>
                      <option>Multi-Site Management</option>
                      <option>Security &amp; Access</option>
                      <option>Reporting &amp; Audits</option>
                      <option>Matterport 3D Survey</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-zinc-600 text-xs uppercase tracking-[0.15em] font-bold mb-2">Project Details *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full bg-white border border-zinc-300 text-zinc-900 px-4 py-3 text-sm focus:outline-none focus:border-slate-500 transition-colors resize-none" placeholder="Describe your building, portfolio or requirement..." />
                  </div>
                  <button type="submit" disabled={sending} className="w-full py-4 bg-slate-600 hover:bg-slate-500 text-white font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all disabled:opacity-60">
                    {sending ? "Sending..." : <><span>Send Enquiry</span><ArrowRight size={16} /></>}
                  </button>
                  {error && <p className="text-red-500 text-xs text-center mt-2">Something went wrong — please call us on 01256 688 650</p>}
                  <p className="text-zinc-400 text-xs text-center">Enquiries are sent to info@abdrainage.co.uk</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── AB GROUP FOOTER BANNER (solid accent) ── */}
      <section className="py-16 bg-slate-600">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-white/70 text-xs uppercase tracking-[0.2em] font-bold mb-2">Part of The AB Group</p>
              <h3 className="text-2xl font-display font-black text-white uppercase">Multi-Discipline Contractors</h3>
              <p className="text-white/80 text-sm mt-1">Facilities, drainage, construction and fencing — all under one roof</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <a href="https://abconstructionsolutions.co.uk" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/40 text-white text-xs font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all">Construction</a>
              <a href="https://abfencingsolutions.co.uk" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/40 text-white text-xs font-bold uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all">Fencing</a>
              <a href="https://www.abdrainage.co.uk" target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-slate-700 bg-white hover:opacity-90 transition-all">AB Drainage</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
