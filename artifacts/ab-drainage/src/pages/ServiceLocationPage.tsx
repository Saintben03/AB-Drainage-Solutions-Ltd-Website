import { useParams, Link } from "wouter";
import { Phone, Mail, ArrowRight, Check, Clock, ShieldCheck, MapPin, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { WaterWave } from "@/components/WaterWave";
import { FaqSection } from "@/components/FaqSection";
import { useBookNow } from "@/contexts/BookNowContext";
import {
  localServiceBySlug,
  resolvePlace,
  buildIntro,
  buildFaqs,
  localServices,
} from "@/data/serviceLocations";
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

const stats = [
  { value: "1hr", label: "Typical Response" },
  { value: "33+", label: "Years' Experience" },
  { value: "24/7", label: "Emergency Line" },
  { value: "100%", label: "Clearance Guaranteed" },
];

export default function ServiceLocationPage({ serviceSlug }: { serviceSlug: string }) {
  const params = useParams();
  const { openBookNow } = useBookNow();
  const service = localServiceBySlug(serviceSlug);
  const place = params.location ? resolvePlace(params.location) : undefined;

  if (!service || !place) return <NotFound />;

  const intro = buildIntro(service, place);
  const faqs = buildFaqs(service, place);

  return (
    <>
      <SEO
        title={`${service.name} in ${place.name}`}
        description={`${service.name} in ${place.name} from A&B Drainage Solutions — 33+ years' experience, 24/7 emergency line, clearance guaranteed. Call 01256 688 650.`}
        canonicalUrl={`/${service.slug}/${place.slug}`}
        keywords={`${service.name.toLowerCase()} ${place.name}, ${service.phrase} ${place.name}, drainage ${place.name}, drainage company ${place.name}`}
      />

      {/* HERO */}
      <PageHero
        image={heroImg}
        imageAlt={`${service.name} in ${place.name} — A&B Drainage Solutions`}
        eyebrow={`${place.name} · ${place.kind === "county" ? "County Coverage" : place.countyName}`}
        title={
          <>
            {service.name} in <span className="text-accent">{place.name}</span>
          </>
        }
        description={`${service.name} for homes and businesses ${place.kind === "county" ? "across" : "in"} ${place.name} — from a family firm with over 33 years' experience across the South of England.`}
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
              {service.name} Local to You
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 uppercase leading-tight mb-8">
              {service.name} Experts Serving {place.name}
            </h2>
            {intro.map((p, i) => (
              <p key={i} className="text-zinc-600 leading-relaxed text-lg mb-5">
                {p}
              </p>
            ))}
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href={place.areaHref}
                className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-50 border border-zinc-300 text-sm font-bold text-zinc-700 uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
              >
                <MapPin size={14} /> All Services in {place.name}
              </Link>
              <Link
                href={service.serviceHref}
                className="inline-flex items-center gap-2 px-5 py-3 bg-zinc-50 border border-zinc-300 text-sm font-bold text-zinc-700 uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
              >
                <Wrench size={14} /> About Our {service.name} Service
              </Link>
            </div>
          </motion.div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#fafafa" />
      </section>

      {/* OTHER SERVICES HERE */}
      <section className="py-24 pb-28 bg-zinc-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">More Ways We Can Help</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 uppercase leading-tight">
              Other Drainage Services in {place.name}
            </h2>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {localServices
              .filter((s) => s.slug !== service.slug)
              .map((s) => (
                <motion.div key={s.slug} variants={fadeUp} className="h-full">
                  <Link
                    href={`/${s.slug}/${place.slug}`}
                    className="group flex items-center justify-between gap-3 h-full p-5 bg-white border border-zinc-200 rounded-xl hover:border-accent hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Wrench size={17} className="text-accent shrink-0" />
                      <span className="text-sm font-display font-bold text-zinc-900 uppercase group-hover:text-accent transition-colors">
                        {s.name} in {place.name}
                      </span>
                    </div>
                    <ArrowRight size={15} className="text-accent shrink-0 group-hover:translate-x-1 transition-transform" />
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
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">
              Why Choose A&amp;B in {place.name}
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase leading-tight">
              Fully Equipped, Fully Experienced
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              place.emergency
                ? { icon: Clock, title: "24/7 Availability", desc: `Our emergency line is answered around the clock for drainage problems in ${place.name} and the surrounding area.` }
                : { icon: Clock, title: "Planned & Scheduled", desc: `We arrange work in ${place.name} to suit you, with timings and costs confirmed up front.` },
              { icon: ShieldCheck, title: "Jetting, CCTV & Repairs", desc: "Every van carries jetting, HD CCTV, and repair equipment, so most jobs are completed on the first visit." },
              { icon: Check, title: "33+ Years' Experience", desc: "Three decades of domestic, commercial, and industrial drainage across the South of England." },
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

      {/* FAQ */}
      <FaqSection
        items={faqs}
        eyebrow={`${service.name} in ${place.name}`}
        heading={`${service.name} ${place.name} FAQs`}
      />

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <Phone size={40} className="text-accent shrink-0" />
              <div>
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-1">
                  Need {service.name} in {place.name}?
                </h3>
                <p className="text-muted-foreground flex items-center gap-2 flex-wrap">
                  Call 01256 688 650 or email
                  <a href="mailto:info@abdrainage.co.uk" className="text-accent hover:underline inline-flex items-center gap-1">
                    <Mail size={14} /> info@abdrainage.co.uk
                  </a>
                </p>
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
