import { Link } from "wouter";
import { Phone, ArrowRight, Wrench } from "lucide-react";
import { SEO } from "@/components/SEO";
import { PageHero } from "@/components/PageHero";
import { FaqSection, type FaqItem } from "@/components/FaqSection";
import { useBookNow } from "@/contexts/BookNowContext";
import { servicePages } from "@/data/servicePages";

import heroImg from "@assets/Designer_(1)_1782807579036.png";

const faqs: FaqItem[] = [
  {
    q: "What should I do if I have a blocked drain?",
    a: "Stop running water into the affected drain, avoid pouring chemical unblockers into severe blockages, and call a professional. A&B Drainage Solutions answers 24/7 on 01256 688 650 and typically reaches Hampshire addresses within the hour, with jetting, rodding, and CCTV equipment on every van.",
  },
  {
    q: "How much does drain unblocking cost?",
    a: "Cost depends on the nature and severity of the blockage. Most domestic blockages are cleared at a straightforward call-out rate, and we always confirm any charges before starting work so there are no surprises. Call 01256 688 650 for a quote for your specific situation.",
  },
  {
    q: "What is a CCTV drain survey and when do I need one?",
    a: "A CCTV drain survey is an internal HD camera inspection of your drains that shows their exact condition without any digging. You need one when buying a property, when blockages keep recurring, before building work near drain runs, or when an insurer requires evidence of drain condition. Our written reports are graded to WRc/MSCC5 standards and typically issued the same day.",
  },
  {
    q: "How quickly can you respond to an emergency drainage callout?",
    a: "We typically arrive within 1 hour of your call across Hampshire, 24 hours a day, 365 days a year including weekends and bank holidays. Call 01256 688 650 at any hour and our team answers immediately.",
  },
  {
    q: "What areas does AB Drainage Solutions cover?",
    a: "Our core coverage area for routine and emergency call-outs is Hampshire — over 30 towns from Basingstoke (our HQ) and Andover down to Southampton, Portsmouth, and the New Forest. Beyond that, we cover towns across Surrey, West Sussex, East Sussex, Berkshire, Wiltshire, Dorset, Oxfordshire, Kent, and London — with larger commercial and CCTV survey work making up much of the furthest-out coverage.",
  },
];

export default function Faq() {
  const { openBookNow } = useBookNow();

  return (
    <>
      <SEO
        title="Drainage FAQs | Blocked Drains, CCTV Surveys & Emergency Call-Outs"
        description="Answers to the most common drainage questions — what to do about a blocked drain, drain unblocking costs, CCTV surveys, emergency response times, and the areas A&B Drainage Solutions covers."
        canonicalUrl="/faq"
        keywords="drainage FAQ, blocked drain advice, drain unblocking cost, CCTV drain survey explained, emergency drainage response time"
      />

      <PageHero
        image={heroImg}
        imageAlt="A&B Drainage Solutions — frequently asked questions"
        eyebrow="Help & Advice"
        title="Frequently Asked Questions"
        description="Straight answers to the questions we're asked most — from blocked drains and costs to CCTV surveys and coverage areas."
        waveFill="#ffffff"
      />

      <FaqSection items={faqs} eyebrow="Drainage Advice" heading="Common Drainage Questions" />

      {/* SERVICE LINKS */}
      <section className="py-16 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto px-4">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">Explore Our Services</p>
          <div className="flex flex-wrap gap-3">
            {servicePages.map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-zinc-300 text-sm font-bold text-zinc-700 uppercase tracking-wider hover:border-accent hover:text-accent transition-colors"
              >
                <Wrench size={14} /> {s.name}
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
                  Still Have a Question?
                </h3>
                <p className="text-muted-foreground">Call us any time — our line is answered 24/7.</p>
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
