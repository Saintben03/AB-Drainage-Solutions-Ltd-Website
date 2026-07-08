import { useParams, Link } from "wouter";
import { Helmet } from "react-helmet-async";
import { Phone, ArrowRight, MapPin, Wrench, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { WaterWave } from "@/components/WaterWave";
import { FaqSection } from "@/components/FaqSection";
import { useBookNow } from "@/contexts/BookNowContext";
import { servicePages, servicePageBySlug, CONTENT_UPDATED, CONTENT_UPDATED_ISO } from "@/data/servicePages";
import { towns } from "@/data/areas";
import { counties } from "@/data/counties";
import NotFound from "@/pages/not-found";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export default function ServicePage({ slug }: { slug?: string }) {
  const params = useParams();
  const { openBookNow } = useBookNow();
  const page = servicePageBySlug(slug ?? params.slug ?? "");

  if (!page) return <NotFound />;

  const related = page.related
    .map((r) => servicePages.find((s) => s.slug === r))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.name,
    serviceType: page.name,
    description: page.intro,
    url: `https://www.abdrainage.co.uk/${page.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "A&B Drainage Solutions Ltd",
      telephone: "01256 688 650",
      url: "https://www.abdrainage.co.uk",
    },
    areaServed: [
      ...towns.map((t) => ({ "@type": "City", name: t.name })),
      ...counties.map((c) => ({ "@type": "AdministrativeArea", name: c.name })),
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: `https://www.abdrainage.co.uk/${page.slug}`,
    name: page.metaTitle,
    dateModified: CONTENT_UPDATED_ISO,
  };

  return (
    <>
      <SEO
        title={page.metaTitle}
        description={page.metaDescription}
        canonicalUrl={`/${page.slug}`}
        keywords={page.keywords}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
      </Helmet>

      {/* HERO */}
      <PageHero
        image={page.img}
        imageAlt={`${page.name} — A&B Drainage Solutions`}
        eyebrow="Drainage Services"
        title={page.h1}
        description={page.intro}
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
            {[
              page.stat ?? { value: "1hr", label: "Typical Response" },
              { value: "24/7", label: "Emergency Coverage" },
              { value: "33+", label: "Years Serving Hampshire" },
              { value: "100%", label: "Clearance Guaranteed" },
            ].map((s, i) => (
                <motion.div key={i} variants={fadeUp}>
                  <p className="text-4xl md:text-5xl font-display font-bold text-white mb-1">{s.value}</p>
                  <p className="text-white/80 text-xs uppercase tracking-[0.16em] font-semibold">{s.label}</p>
                </motion.div>
              ))}
          </motion.div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#ffffff" />
      </section>

      {/* BODY */}
      <section className="py-24 pb-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">About This Service</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 uppercase leading-tight mb-8">
              {page.name} From the Team South England Relies On
            </h2>
            {page.body.map((p, i) => (
              <p key={i} className="text-zinc-600 leading-relaxed text-lg mb-5">
                {p}
              </p>
            ))}
            <Link
              href={`/services#${page.serviceId}`}
              className="inline-flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm mt-2 hover:gap-3 transition-all"
            >
              Full service details <ArrowRight size={15} />
            </Link>
            <p className="text-zinc-400 text-xs mt-8">
              Page last updated: <time dateTime={CONTENT_UPDATED_ISO}>{CONTENT_UPDATED}</time>
            </p>
          </motion.div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#fafafa" />
      </section>

      {/* OUR PROCESS — numbered, extractable */}
      <section className="py-24 pb-28 bg-zinc-50 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-12">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">How It Works</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 uppercase leading-tight flex items-center gap-3">
              <ClipboardList className="text-accent shrink-0" size={30} />
              Our Process
            </h2>
          </div>
          <ol className="space-y-6 list-none">
            {page.process.map((p, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-5 bg-white border border-zinc-200 rounded-xl p-6"
              >
                <span className="w-10 h-10 shrink-0 bg-accent text-white font-display font-bold text-lg flex items-center justify-center rounded-full">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display font-bold text-zinc-900 uppercase text-lg mb-1">{p.step}</h3>
                  <p className="text-zinc-600 leading-relaxed">{p.desc}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#ffffff" />
      </section>

      {/* AREAS WE COVER */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="mb-10">
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">Where We Work</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 uppercase leading-tight flex items-center gap-3">
              <MapPin className="text-accent shrink-0" size={30} />
              Areas We Cover
            </h2>
          </div>
          <p className="text-zinc-600 leading-relaxed text-lg mb-6">
            {page.name} is available across our core Hampshire and border-town coverage area, where we run rapid
            call-outs day and night:
          </p>
          <div className="flex flex-wrap gap-2.5 mb-10">
            {towns.map((t) => (
              <Link
                key={t.slug}
                href={`/areas/${t.slug}`}
                className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-zinc-50 border border-zinc-300 text-sm font-bold text-zinc-700 uppercase tracking-wide hover:border-accent hover:text-accent transition-colors"
              >
                <MapPin size={13} /> {t.name}
              </Link>
            ))}
          </div>
          <div className="bg-zinc-50 border-l-4 border-accent p-6">
            <p className="text-zinc-700 leading-relaxed">
              We also frequently take on projects across neighbouring counties — particularly larger commercial and
              CCTV survey work — including{" "}
              {counties.map((c, i) => (
                <span key={c.slug}>
                  <Link href={`/areas/county/${c.slug}`} className="text-accent font-semibold hover:underline">
                    {c.name}
                  </Link>
                  {i < counties.length - 2 ? ", " : i === counties.length - 2 ? " and " : ""}
                </span>
              ))}
              . County-level coverage focuses on planned and commercial work rather than routine call-outs.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection items={page.faqs} eyebrow={page.name} heading={`${page.name} FAQs`} />

      {/* RELATED SERVICES */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto px-4">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">Related Services</p>
          <div className="flex flex-wrap gap-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${r.slug}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-zinc-300 text-sm font-bold text-zinc-700 uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
              >
                <Wrench size={14} /> {r.name}
              </Link>
            ))}
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-zinc-300 text-sm font-bold text-zinc-700 uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
            >
              All Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-start gap-5">
              <Phone size={40} className="text-accent shrink-0" />
              <div>
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-1">
                  Need {page.name}?
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
