import { useParams, Link } from "wouter";
import { Phone, ArrowRight, Check, Clock, ShieldCheck, MapPin, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { WaterWave } from "@/components/WaterWave";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import { useBookNow } from "@/contexts/BookNowContext";
import { countyBySlug } from "@/data/counties";
import { towns } from "@/data/areas";
import { services } from "@/pages/Services";
import NotFound from "@/pages/not-found";

import heroImg from "@assets/Designer_(1)_1782807579036.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export default function CountyArea() {
  const params = useParams();
  const { openBookNow } = useBookNow();
  const county = params.county ? countyBySlug(params.county) : undefined;

  if (!county) return <NotFound />;

  const stats = [
    { value: "33+", label: "Years' Experience" },
    county.emergency
      ? { value: "24/7", label: "Emergency Coverage" }
      : { value: "HD", label: "CCTV Survey Reports" },
    { value: "6+", label: `Towns Covered in ${county.name}` },
    { value: "100%", label: "Clearance Guaranteed" },
  ];

  const faqs: FaqItem[] = [
    {
      q: `Do you cover ${county.name}?`,
      a: `Yes. A&B Drainage Solutions works throughout ${county.name}, covering ${county.work}. ${county.localNote}`,
    },
    {
      q: `Which towns in ${county.name} do you serve?`,
      a: `We regularly work in ${county.towns.join(", ")} and the surrounding areas across ${county.name}. If your town is not listed, call us — we cover far more of the county than we can list here.`,
    },
    county.emergency
      ? {
          q: `Do you offer emergency drainage in ${county.name}?`,
          a: `Yes. Our line is staffed 24 hours a day, seven days a week, and we run emergency call-outs across ${county.name}. Call 01256 688 650 at any time and our team will advise on the fastest response we can offer to your area.`,
        }
      : {
          q: `How is drainage work in ${county.name} arranged?`,
          a: `In ${county.name} we concentrate on planned commercial contracts, maintenance, and CCTV survey work rather than routine emergency call-outs. Call 01256 688 650 to discuss your project and we will schedule a visit and confirm timings and costs in advance.`,
        },
    {
      q: `Do you carry out CCTV drain surveys across ${county.name}?`,
      a: `Yes. HD CCTV drain surveys are one of the main services we provide in ${county.name}, for pre-purchase house surveys, recurring blockages, and insurance or compliance reports, with a written report typically issued the same day.`,
    },
    {
      q: `Can you take on commercial drainage contracts in ${county.name}?`,
      a: `Absolutely. We handle commercial and planned maintenance contracts across ${county.name}, from restaurants and retail premises to industrial sites, with high-volume jetting and tanker capacity for larger jobs.`,
    },
  ];

  const linkedTowns = county.towns
    .map((name) => ({ name, town: towns.find((t) => t.name === name) }));

  return (
    <>
      <SEO
        title={`Drainage Services in ${county.name} | Blocked Drains, CCTV & Repairs`}
        description={`Trusted drainage services across ${county.name} — blocked drains, CCTV surveys, drain repairs and commercial maintenance. 33+ years' experience${county.emergency ? ", 24/7 emergency cover" : ", planned commercial work"}. Call 01256 688 650.`}
        canonicalUrl={`/areas/county/${county.slug}`}
        keywords={`drainage ${county.name}, blocked drain ${county.name}, drain unblocking ${county.name}, CCTV drain survey ${county.name}, commercial drainage ${county.name}, drainage company ${county.name}`}
      />

      {/* HERO */}
      <PageHero
        image={heroImg}
        imageAlt={`A&B Drainage Solutions serving ${county.name}`}
        eyebrow={`${county.name} · Wider Coverage`}
        title={
          <>
            Drainage Services in <span className="text-accent">{county.name}</span>
          </>
        }
        description={`Reliable drainage across ${county.name} — blocked drains, CCTV surveys, repairs, and commercial maintenance from a team with over 33 years' experience.`}
        waveFill="#5392B6"
        actions={
          <a
            href="tel:01256688650"
            className="inline-flex items-center justify-center gap-3 bg-accent/50 backdrop-blur-md border border-white/30 md:bg-accent md:border-0 md:backdrop-blur-none hover:bg-accent/70 md:hover:bg-accent/90 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all [text-shadow:0_1px_6px_rgba(0,0,0,0.45)] md:[text-shadow:none]"
          >
            <Phone size={18} /> Call 01256 688 650
          </a>
        }
      />

      {/* STATS BAND */}
      <section className="bg-accent pt-14 pb-16 relative overflow-hidden">
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
                <p className="text-4xl md:text-5xl font-display font-bold text-white mb-1">{s.value}</p>
                <p className="text-white/80 text-xs uppercase tracking-[0.16em] font-semibold">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#ffffff" />
      </section>

      {/* INTRO */}
      <section className="py-24 pb-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">
              Drainage Across the County
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 uppercase leading-tight mb-8">
              Drainage Experts Covering {county.name}
            </h2>
            {county.intro.map((p, i) => (
              <p key={i} className="text-zinc-600 leading-relaxed text-lg mb-5">
                {p}
              </p>
            ))}
            <div className="bg-zinc-50 border-l-4 border-accent p-6 mt-8 flex items-start gap-4">
              <MapPin className="text-accent shrink-0 mt-1" size={22} />
              <p className="text-zinc-700 leading-relaxed">{county.localNote}</p>
            </div>
          </motion.div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#fafafa" />
      </section>

      {/* SERVICES */}
      <section className="py-24 pb-28 bg-zinc-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Do Here</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 uppercase leading-tight">
              Our Services in {county.name}
            </h2>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((s) => (
              <motion.div key={s.id} variants={fadeUp} className="h-full">
                <Link
                  href={`/services#${s.id}`}
                  className="group flex flex-col gap-3 h-full p-6 bg-white border border-zinc-200 rounded-xl hover:border-accent hover:shadow-lg hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center gap-2 text-accent">
                    <Wrench size={18} className="shrink-0" />
                    <h3 className="text-base font-display font-bold text-zinc-900 uppercase group-hover:text-accent transition-colors">
                      {s.title}
                    </h3>
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed flex-1">{s.shortDesc}</p>
                  <span className="text-accent text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    Learn More <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="hsl(0 0% 11%)" />
      </section>

      {/* WHY CHOOSE (navy) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">Why Choose A&amp;B in {county.name}</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase leading-tight">
              Fully Equipped, Fully Experienced
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              county.emergency
                ? { icon: Clock, title: "24/7 Availability", desc: `Our emergency line is answered around the clock for drainage problems anywhere in ${county.name}.` }
                : { icon: Clock, title: "Planned & Scheduled", desc: `We arrange commercial and survey work in ${county.name} to suit your site, with timings and costs confirmed up front.` },
              { icon: ShieldCheck, title: "Jetting, CCTV & Repairs", desc: "Every van carries jetting, HD CCTV, and repair equipment, so most jobs are completed on the first visit." },
              { icon: Check, title: "33+ Years' Experience", desc: `Three decades of domestic, commercial, and industrial drainage across ${county.name} and the wider South of England.` },
            ].map((c, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-7 rounded-xl">
                <c.icon className="text-accent mb-4" size={30} />
                <h3 className="text-lg font-display font-bold text-white uppercase mb-2">{c.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOWNS IN COUNTY */}
      <section className="py-20 bg-white border-t border-zinc-200">
        <div className="container mx-auto px-4">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">Towns We Cover in {county.name}</p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-zinc-900 uppercase leading-tight mb-8">
            Local Coverage Across {county.name}
          </h2>
          <div className="flex flex-wrap gap-3">
            {linkedTowns.map(({ name, town }) =>
              town ? (
                <Link
                  key={name}
                  href={`/areas/${town.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-50 border border-zinc-300 text-sm font-bold text-zinc-700 uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
                >
                  <MapPin size={14} /> {name}
                </Link>
              ) : (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-50 border border-zinc-200 text-sm font-bold text-zinc-600 uppercase tracking-wider"
                >
                  <MapPin size={14} /> {name}
                </span>
              )
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection
        items={faqs}
        eyebrow={`${county.name} Drainage`}
        heading={`${county.name} Drainage FAQs`}
      />

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <Phone size={40} className="text-accent shrink-0" />
              <div>
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-1">
                  Need a Drainage Engineer in {county.name}?
                </h3>
                <p className="text-muted-foreground">Call now for advice and availability, or book a convenient appointment online.</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href="tel:01256688650"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all"
              >
                <Phone size={16} /> 01256 688 650
              </a>
              <button
                onClick={openBookNow}
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 transition-all"
              >
                Book Online <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
