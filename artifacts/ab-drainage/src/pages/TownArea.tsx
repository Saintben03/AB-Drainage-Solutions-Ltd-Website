import { useParams, Link } from "wouter";
import { Phone, ArrowRight, Check, Clock, ShieldCheck, MapPin, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { WaterWave } from "@/components/WaterWave";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import { useBookNow } from "@/contexts/BookNowContext";
import { towns, townBySlug } from "@/data/areas";
import { services } from "@/pages/Services";
import { servicePageByServiceId } from "@/data/servicePages";
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

export default function TownArea() {
  const params = useParams();
  const { openBookNow } = useBookNow();
  const town = params.town ? townBySlug(params.town) : undefined;

  if (!town) return <NotFound />;

  const nearbyTowns = town.nearby
    .map((n) => towns.find((t) => t.name === n))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  const stats = [
    { value: "1hr", label: `Typical Response to ${town.name}` },
    { value: "33+", label: "Years Serving Hampshire" },
    { value: "24/7", label: "Emergency Coverage" },
    { value: "100%", label: "Clearance Guaranteed" },
  ];

  const faqs: FaqItem[] = [
    {
      q: `How quickly can you reach ${town.name}?`,
      a: `${town.name} is within our regular coverage area and we typically arrive within one hour of your call for emergencies. ${town.localNote}`,
    },
    {
      q: `Do you offer 24/7 emergency drainage in ${town.name}?`,
      a: `Yes. We operate a fully staffed 24/7 emergency service across ${town.name} and the surrounding area, including nights, weekends, and bank holidays. Call 01256 688 650 at any hour and our team will answer immediately.`,
    },
    {
      q: `Which areas around ${town.name} do you cover?`,
      a: `As well as ${town.name} itself, we regularly work in nearby ${town.nearby.join(", ")} and the surrounding villages. If you are unsure whether we reach your address, call us — we will always do our best.`,
    },
    {
      q: `What does drain unblocking in ${town.name} cost?`,
      a: `Cost depends on the nature and severity of the problem. Most domestic blockages are cleared at a straightforward call-out rate, and we always confirm any charges before starting work so there are no surprises. Call us for a quote.`,
    },
    {
      q: `Who is responsible for the sewers in ${town.name}?`,
      a: `Public sewers in the ${town.name} area are maintained by ${town.sewerage}, while the private drains within your property boundary are the homeowner's responsibility. We can advise on where responsibility lies and, where needed, liaise with ${town.sewerage} on your behalf.`,
    },
    {
      q: `Do you carry out CCTV drain surveys in ${town.name}?`,
      a: `Yes. We provide HD CCTV drain surveys throughout ${town.name} for pre-purchase house surveys, recurring blockages, and insurance reports, with a written report typically issued the same day.`,
    },
  ];

  return (
    <>
      <SEO
        title={`Drainage Services in ${town.name} | Blocked Drains, CCTV & Repairs`}
        description={`Trusted drainage services in ${town.name}, ${town.county}. 24/7 emergency blocked drains, CCTV surveys, drain repairs and jetting — typically on site within the hour. 33+ years' experience. Call 01256 688 650.`}
        canonicalUrl={`/areas/${town.slug}`}
        keywords={`blocked drain ${town.name}, drain unblocking ${town.name}, CCTV drain survey ${town.name}, emergency drainage ${town.name}, drain repair ${town.name}, drainage company ${town.name}`}
      />

      {/* HERO */}
      <PageHero
        image={heroImg}
        imageAlt={`A&B Drainage Solutions serving ${town.name}`}
        eyebrow={`${town.county} · Rapid Local Response`}
        title={
          <>
            Drainage Services in <span className="text-accent">{town.name}</span>
          </>
        }
        description={`Fast, reliable drainage across ${town.name} — 24/7 emergency call-outs, blocked drains, CCTV surveys, and repairs from a team that has served Hampshire for over 33 years.`}
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

      {/* LOCAL INTRO */}
      <section className="py-24 pb-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">
              Your Local Drainage Team
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 uppercase leading-tight mb-8">
              Drainage Experts Covering {town.name}
            </h2>
            {town.intro.map((p, i) => (
              <p key={i} className="text-zinc-600 leading-relaxed text-lg mb-5">
                {p}
              </p>
            ))}
            <div className="bg-zinc-50 border-l-4 border-accent p-6 mt-8 flex items-start gap-4">
              <MapPin className="text-accent shrink-0 mt-1" size={22} />
              <p className="text-zinc-700 leading-relaxed">{town.localNote}</p>
            </div>
          </motion.div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#fafafa" />
      </section>

      {/* SERVICES IN THIS TOWN */}
      <section className="py-24 pb-28 bg-zinc-50 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">What We Do Here</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 uppercase leading-tight">
              Our Services in {town.name}
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
                  href={servicePageByServiceId(s.id) ? `/${servicePageByServiceId(s.id)!.slug}` : `/services#${s.id}`}
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

      {/* WHY LOCAL (navy) */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">Why Choose A&amp;B in {town.name}</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase leading-tight">
              Local Knowledge, Rapid Response
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "On Site Within the Hour", desc: `We aim to reach ${town.name} emergencies within one hour, day or night.` },
              { icon: ShieldCheck, title: "Fully Equipped Vans", desc: "Jetting, CCTV, and repair equipment on every van — problems fixed on the first visit." },
              { icon: Check, title: "33+ Years' Experience", desc: `Three decades of drainage work across ${town.county} and the wider region.` },
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
        eyebrow={`${town.name} Drainage`}
        heading={`${town.name} Drainage FAQs`}
      />

      {/* NEARBY AREAS */}
      {nearbyTowns.length > 0 && (
        <section className="py-16 bg-zinc-50 border-t border-zinc-200">
          <div className="container mx-auto px-4">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">Nearby Areas We Cover</p>
            <div className="flex flex-wrap gap-3">
              {nearbyTowns.map((t) => (
                <Link
                  key={t.slug}
                  href={`/areas/${t.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-zinc-300 text-sm font-bold text-zinc-700 uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
                >
                  <MapPin size={14} /> Drainage in {t.name}
                </Link>
              ))}
              <Link
                href="/areas"
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-zinc-300 text-sm font-bold text-zinc-700 uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
              >
                All Areas <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <Phone size={40} className="text-accent shrink-0" />
              <div>
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-1">
                  Need a Drainage Engineer in {town.name}?
                </h3>
                <p className="text-muted-foreground">Call now for a rapid response, or book a convenient appointment online.</p>
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
