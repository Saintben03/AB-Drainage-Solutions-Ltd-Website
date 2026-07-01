import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Phone, Mail, CheckCircle2, HardHat, Shovel, Layers, Truck, ClipboardList, Building2, ChevronLeft } from "lucide-react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

import imgAbout      from "@assets/construction/const-about.png";
import imgGExcavation from "@assets/construction/const-gallery-excavation.png";
import imgGConcrete   from "@assets/construction/const-gallery-concrete.png";
import imgGRoad       from "@assets/construction/const-gallery-road.png";
import imgGSteel      from "@assets/construction/const-gallery-steelframe.png";
import imgGClearance  from "@assets/construction/const-gallery-clearance.png";
import imgGRetaining  from "@assets/construction/const-gallery-retaining.png";
import imgGHardstand  from "@assets/construction/const-gallery-hardstanding.png";
import imgGBrickwork  from "@assets/construction/const-gallery-brickwork.png";
import imgWhyUs       from "@assets/construction/const-whyus.png";

const heroImg = imgGExcavation;

const BG   = "#1c1c1c";
const DARK = "#09090b";
const ACCENT = "#dc2626";

/* ── Sharp industrial diagonal divider ── */
function DiagonalDivider({ from, to, reverse = false }: { from: string; to: string; reverse?: boolean }) {
  return (
    <div aria-hidden="true" className="relative overflow-hidden h-14 pointer-events-none" style={{ background: from }}>
      <svg viewBox="0 0 1440 56" preserveAspectRatio="none" className="absolute inset-0 w-full h-full">
        {reverse ? (
          <>
            <polygon points="0,56 0,0 1440,38 1440,56" fill={to} />
            <line x1="0" y1="0" x2="1440" y2="38" stroke={ACCENT} strokeWidth="2" strokeOpacity="0.5" />
          </>
        ) : (
          <>
            <polygon points="0,56 0,18 1440,56" fill={to} />
            <line x1="0" y1="18" x2="1440" y2="56" stroke={ACCENT} strokeWidth="2" strokeOpacity="0.5" />
          </>
        )}
      </svg>
    </div>
  );
}

const services = [
  { icon: <Shovel size={26} />, title: "Groundworks & Excavation", desc: "Full site preparation, bulk excavation, trenching and soil management to specification and programme." },
  { icon: <Layers size={26} />, title: "Civil Engineering", desc: "Roads, pathways, retaining structures, drainage networks and concrete works for residential and commercial clients." },
  { icon: <Building2 size={26} />, title: "Structural Works", desc: "Foundation laying, underpinning, concrete frames and structural repair to the highest building regulations standards." },
  { icon: <Truck size={26} />, title: "Site Clearance", desc: "Rapid, responsible clearance of vegetation, demolition material and waste — fully licenced and insured." },
  { icon: <HardHat size={26} />, title: "Concrete Works", desc: "Reinforced slabs, in-situ concrete pours, brickwork and blockwork for a wide range of construction applications." },
  { icon: <ClipboardList size={26} />, title: "Project Management", desc: "End-to-end programme management, sub-contractor coordination and full CDM compliance from start to finish." },
];

const gallery = [
  { src: imgGExcavation, caption: "Excavation and foundation preparation" },
  { src: imgGConcrete,   caption: "Reinforced concrete foundation pour" },
  { src: imgGRoad,       caption: "Tarmac road construction and surfacing" },
  { src: imgGSteel,      caption: "Structural steel frame erection" },
  { src: imgGClearance,  caption: "Site clearance and land preparation" },
  { src: imgGRetaining,  caption: "Retaining wall and blockwork construction" },
  { src: imgGHardstand,  caption: "Completed commercial hardstanding" },
  { src: imgGBrickwork,  caption: "Brick and blockwork cavity wall construction" },
];

const whyUs = [
  { title: "Proven Track Record", desc: "Decades of civil and construction projects across Hampshire and the South East — delivered on time and on budget." },
  { title: "Fully Accredited", desc: "CSCS-carded operatives, full public liability insurance, CDM Principal Contractor capability." },
  { title: "In-House Plant & Labour", desc: "Our own plant fleet and directly employed workforce means no sub-contractor delays and tighter cost control." },
  { title: "Part of The AB Group", desc: "Backed by a multi-discipline group, we can offer seamless drainage, fencing and facilities services alongside construction." },
];

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { show: { transition: { staggerChildren: 0.1 } } };

type FormState = { name: string; email: string; phone: string; service: string; message: string };
const INIT: FormState = { name: "", email: "", phone: "", service: "", message: "" };

export default function ABGroupConstruction() {
  const [form, setForm] = useState<FormState>(INIT);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Construction Enquiry — ${form.service || "General"}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:info@abdrainage.co.uk?subject=${subject}&body=${body}`;
    setSent(true);
    setForm(INIT);
  };

  return (
    <>
      <SEO
        title="AB Construction Solutions | Civil Engineering & Groundworks | Hampshire"
        description="AB Construction Solutions — Hampshire's civil engineering and groundworks specialists. Foundation laying, site clearance, pipeline installation and structural works."
        canonicalUrl="/ab-group/construction"
      />

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img src={heroImg} alt="AB Construction Solutions — workers on site" className="w-full h-full object-cover animate-heropan saturate-[1.5] brightness-[1.1] contrast-[1.12]" draggable={false} />
          <div className="absolute inset-0 bg-[#dc2626]/8" style={{ mixBlendMode: "color" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/97 via-background/15 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#dc2626]/12 via-[#dc2626]/2 to-transparent mix-blend-multiply" />
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-8 pb-28 pt-16">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="max-w-3xl">
            <Link href="/ab-group" className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs font-bold uppercase tracking-[0.2em] mb-8 transition-colors">
              <ChevronLeft size={14} /> Other Services
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-12 bg-[#dc2626]" />
              <div>
                <p className="text-[#dc2626] text-xs font-bold uppercase tracking-[0.25em]">Other Services</p>
                <p className="text-white/40 text-xs uppercase tracking-[0.18em]">Civil Engineering Division</p>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl xl:text-8xl font-display font-black uppercase text-white leading-[0.9] mb-6 relative">
              <span className="relative">AB Construction<span className="absolute -inset-x-8 -inset-y-10 bg-black/50 blur-3xl rounded-3xl -z-10" /></span>
              <br /><span className="text-[#dc2626]">Solutions</span>
            </h1>
            <p className="text-xl text-white/70 leading-relaxed mb-10 max-w-xl">
              Hampshire's civil engineering and groundworks specialists. From site preparation to structural works, delivered on time, on budget, to the highest standards.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#enquire" className="inline-flex items-center gap-2 px-10 py-5 text-white font-bold uppercase tracking-wider text-sm transition-all hover:opacity-90" style={{ backgroundColor: ACCENT }}>
                Get a Quote <ArrowRight size={16} />
              </a>
              <a href="#services" className="inline-flex items-center gap-2 px-10 py-5 border border-white/25 text-white font-bold uppercase tracking-wider text-sm hover:border-white/60 transition-all">
                Our Services
              </a>
            </div>
          </motion.div>
        </div>

        {/* Hero → About: sharp industrial diagonal cut */}
        <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none h-20">
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
            <polygon points="0,80 0,80 1440,20 1440,80" fill={DARK} />
            <line x1="0" y1="80" x2="1440" y2="20" stroke={ACCENT} strokeWidth="2.5" strokeOpacity="0.55" />
          </svg>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-[#dc2626] text-xs font-bold uppercase tracking-[0.25em] mb-4">About The Division</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-tight mb-6">Built on Solid<br />Foundations</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                AB Construction Solutions operates as the civil engineering arm of our group — delivering groundworks, civil infrastructure and structural construction projects across Hampshire and the wider South East.
              </p>
              <p className="text-white/60 leading-relaxed mb-10">
                Working across residential, commercial and infrastructure sectors, our directly employed teams bring decades of hands-on expertise to every project, no matter the scale.
              </p>
              <div className="grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
                {[{ val: "30+", label: "Years Experience" }, { val: "500+", label: "Projects Delivered" }, { val: "100%", label: "In-House Teams" }].map((s) => (
                  <div key={s.label}>
                    <p className="text-3xl font-display font-black text-[#dc2626]">{s.val}</p>
                    <p className="text-white/50 text-xs uppercase tracking-[0.15em] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
              <img src={imgAbout} alt="AB Construction civil engineering team on site" className="w-full aspect-[4/3] object-cover" draggable={false} />
              <div className="absolute -bottom-4 -left-4 bg-[#dc2626] text-white p-6 hidden md:block">
                <p className="text-2xl font-display font-black uppercase">CDM</p>
                <p className="text-xs uppercase tracking-[0.15em] text-white/80">Compliant</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <DiagonalDivider from={DARK} to={BG} />

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
            <p className="text-[#dc2626] text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Deliver</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">Our Services</h2>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <motion.div key={s.title} variants={fadeUp} className="bg-zinc-900 border border-zinc-800 p-8 group hover:border-[#dc2626]/40 transition-all duration-300">
                <div className="w-12 h-12 bg-[#dc2626]/10 border border-[#dc2626]/30 flex items-center justify-center text-[#dc2626] mb-6 group-hover:bg-[#dc2626] group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <h3 className="text-white font-display font-bold text-lg uppercase mb-3">{s.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <DiagonalDivider from={BG} to={DARK} reverse />

      {/* ── GALLERY ── */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-14">
            <p className="text-[#dc2626] text-xs font-bold uppercase tracking-[0.25em] mb-3">Project Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase">Our Work</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {gallery.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.07 }} className="relative overflow-hidden group">
                <img src={item.src} alt={item.caption} className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-700" draggable={false} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-xs font-bold uppercase tracking-wide">{item.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <DiagonalDivider from={DARK} to={BG} />

      {/* ── WHY US ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="text-[#dc2626] text-xs font-bold uppercase tracking-[0.25em] mb-4">The Difference</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-tight mb-10">Why Choose<br />AB Construction?</h2>
              <div className="space-y-6">
                {whyUs.map((w, i) => (
                  <motion.div key={w.title} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex gap-4">
                    <CheckCircle2 size={22} className="shrink-0 mt-0.5" style={{ color: ACCENT }} />
                    <div>
                      <h4 className="text-white font-bold uppercase tracking-wide text-sm mb-1">{w.title}</h4>
                      <p className="text-white/55 text-sm leading-relaxed">{w.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <img src={imgWhyUs} alt="Completed commercial development — AB Construction" className="w-full aspect-[4/3] object-cover" draggable={false} />
            </motion.div>
          </div>
        </div>
      </section>

      <DiagonalDivider from={BG} to={DARK} reverse />

      {/* ── ENQUIRY FORM ── */}
      <section id="enquire" className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#dc2626]/5 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <p className="text-[#dc2626] text-xs font-bold uppercase tracking-[0.25em] mb-4">Get Started</p>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white uppercase leading-tight mb-6">Request a<br />Quote</h2>
              <p className="text-white/60 leading-relaxed mb-10">
                Tell us about your project and one of our team will be in touch promptly with expert advice and a competitive quotation.
              </p>
              <div className="space-y-4">
                <a href="tel:01256688650" className="flex items-center gap-3 text-white hover:text-[#dc2626] transition-colors">
                  <div className="w-10 h-10 bg-[#dc2626]/10 border border-[#dc2626]/30 flex items-center justify-center"><Phone size={16} className="text-[#dc2626]" /></div>
                  <span className="font-bold">01256 688 650</span>
                </a>
                <a href="mailto:info@abdrainage.co.uk" className="flex items-center gap-3 text-white hover:text-[#dc2626] transition-colors">
                  <div className="w-10 h-10 bg-[#dc2626]/10 border border-[#dc2626]/30 flex items-center justify-center"><Mail size={16} className="text-[#dc2626]" /></div>
                  <span className="font-bold">info@abdrainage.co.uk</span>
                </a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}>
              {sent ? (
                <div className="bg-zinc-900 border border-[#dc2626]/40 p-12 text-center">
                  <CheckCircle2 size={48} className="text-[#dc2626] mx-auto mb-4" />
                  <h3 className="text-white font-display font-bold text-2xl uppercase mb-3">Enquiry Sent</h3>
                  <p className="text-white/60">Thank you — your email client should have opened. We will be in touch shortly.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-[#dc2626] text-sm font-bold uppercase tracking-wider hover:underline">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 p-8 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-white/60 text-xs uppercase tracking-[0.15em] font-bold mb-2">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#dc2626] transition-colors" placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-white/60 text-xs uppercase tracking-[0.15em] font-bold mb-2">Phone</label>
                      <input name="phone" value={form.phone} onChange={handleChange} className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#dc2626] transition-colors" placeholder="Your number" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-[0.15em] font-bold mb-2">Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#dc2626] transition-colors" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-[0.15em] font-bold mb-2">Service Required</label>
                    <select name="service" value={form.service} onChange={handleChange} className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#dc2626] transition-colors">
                      <option value="">Select a service...</option>
                      <option>Groundworks &amp; Excavation</option>
                      <option>Civil Engineering</option>
                      <option>Structural Works</option>
                      <option>Site Clearance</option>
                      <option>Concrete Works</option>
                      <option>Project Management</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-white/60 text-xs uppercase tracking-[0.15em] font-bold mb-2">Project Details *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full bg-zinc-800 border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#dc2626] transition-colors resize-none" placeholder="Describe your project or requirement..." />
                  </div>
                  <button type="submit" className="w-full py-4 text-white font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all hover:opacity-90" style={{ backgroundColor: ACCENT }}>
                    Send Enquiry <ArrowRight size={16} />
                  </button>
                  <p className="text-white/30 text-xs text-center">Enquiries are sent to info@abdrainage.co.uk</p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <DiagonalDivider from={DARK} to={BG} />

      {/* ── AB GROUP FOOTER BANNER ── */}
      <section className="py-16 bg-background border-t border-zinc-800">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-bold mb-2">Part of The AB Group</p>
              <h3 className="text-2xl font-display font-black text-white uppercase">Multi-Discipline Contractors</h3>
              <p className="text-white/50 text-sm mt-1">Construction, drainage, fencing and facilities — all under one roof</p>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link href="/ab-group/fencing" className="px-6 py-3 border border-zinc-700 text-white/70 text-xs font-bold uppercase tracking-wider hover:border-zinc-500 hover:text-white transition-all">Fencing</Link>
              <Link href="/ab-group/facilities" className="px-6 py-3 border border-zinc-700 text-white/70 text-xs font-bold uppercase tracking-wider hover:border-zinc-500 hover:text-white transition-all">Facilities</Link>
              <Link href="/" className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:opacity-90 transition-all" style={{ backgroundColor: ACCENT }}>AB Drainage</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
