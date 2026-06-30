import { Link } from "wouter";
import { Phone, ArrowRight, Check } from "lucide-react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { useBookNow } from "@/contexts/BookNowContext";
import { FlexiPayForm } from "@/components/FlexiPayForm";
import { WaterWave } from "@/components/WaterWave";

import heroImg from "@assets/site_files_1/AB Drainage background_edited.jpg";
import heroBg from "@assets/Designer_(1)_1782807579036.png";
import work1 from "@assets/site_files_1/369541839_240515012286429_2194496784194718742_n.jpg";
import work2 from "@assets/site_files_1/468849454_17949583832886709_2702370064044539379_n.jpg";
import work3 from "@assets/site_files_1/472171552_560083023662958_8976223963179451031_n.jpg";
import work4 from "@assets/site_files_1/g-01u.jpg";
import work5 from "@assets/site_files_1/g-01w.jpg";
import imgCctv from "@assets/blog/cctv-survey.png";
import imgJetting from "@assets/blog/drain-jetting.png";
import imgSoakaway from "@assets/blog/soakaway-install.png";

const services = [
  {
    id: "emergency",
    title: "24/7 Emergency Drainage",
    img: heroImg,
    features: ["24/7 Rapid Response", "Typically Within 1 Hour", "Sewage & Flooding"],
    desc: "Drainage emergencies don't wait for business hours. Neither do we. Whether it's a blocked toilet at 2am or raw sewage backing up, our fully equipped vans and experienced engineers are ready across Hampshire.",
  },
  {
    id: "blocked-drains",
    title: "Blocked Drains",
    img: work5,
    features: ["High-Pressure Jetting", "Electro-Mechanical Coring", "Full Clearance Guaranteed"],
    desc: "From slow-draining sinks to completely blocked external drains, we use high-pressure water jetting to clear blockages fast. We ensure the pipe is completely clear and flowing freely.",
  },
  {
    id: "cctv-surveys",
    title: "CCTV Drain Surveys",
    img: imgCctv,
    features: ["HD Camera Inspection", "Pre-Purchase Surveys", "Written Report Provided"],
    desc: "Stop guessing what's wrong underground. We use state-of-the-art crawler and push-rod CCTV cameras to inspect the internal condition of your drains with pinpoint accuracy.",
  },
  {
    id: "drain-repairs",
    title: "Drain Repairs",
    img: work2,
    features: ["No-Dig Patch Relining", "Traditional Excavation", "Full Reinstatement"],
    desc: "When a drain is structurally damaged, we fix it. We specialise in both no-dig structural patch relining and traditional excavation for severely collapsed pipes.",
  },
  {
    id: "commercial",
    title: "Commercial & Industrial Drainage",
    img: work1,
    features: ["Grease Trap Cleaning", "Planned Maintenance Contracts", "Heavy-Duty Tanker Units"],
    desc: "Downtime costs money. We partner with restaurants, schools, hospitals, and industrial estates to provide preventative maintenance contracts and rapid reactive response.",
  },
  {
    id: "cleaning-jetting",
    title: "Drain Cleaning & Jetting",
    img: imgJetting,
    features: ["Up to 4,000 PSI", "Grease & Root Clearance", "Restores Pipes to Near-New"],
    desc: "High-pressure water jetting is the most effective way to clean drains. Our van-mounted units obliterate fat, grease, scale, and silt buildup.",
  },
  {
    id: "soakaways",
    title: "Soakaway Installation",
    img: imgSoakaway,
    features: ["Building Regs Compliant", "Soil Percolation Testing", "Modern Crate Systems"],
    desc: "If your property suffers from surface water flooding or you need a new soakaway for an extension, our groundworks team designs and installs high-capacity crate soakaway systems.",
  },
  {
    id: "guttering",
    title: "Guttering & Downpipes",
    img: work3,
    features: ["Full Gutter Clearing", "Downpipe Unblocking", "Repairs & Replacement"],
    desc: "Blocked gutters lead to severe damp problems. We offer comprehensive gutter clearing, unblocking downpipes, and repairs to direct surface water safely away from your property.",
  },
];

export default function Services() {
  const { openBookNow } = useBookNow();
  return (
    <>
      <SEO
        title="Drainage Services Hampshire | CCTV Surveys & Repairs"
        description="Comprehensive drainage solutions: blocked drains, CCTV surveys, structural repairs, and commercial maintenance across Hampshire."
        canonicalUrl="/services"
      />

      {/* Page Header */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="A&B Drainage fleet" className="w-full h-full object-cover object-center animate-heropan saturate-[1.45] brightness-[1.08] contrast-[1.12]" />
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
            Industry Experts for 33 Years
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-5xl md:text-7xl font-display font-bold text-white uppercase mb-6 leading-tight"
          >
            Our <span className="text-accent">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-xl text-foreground/70 max-w-2xl leading-relaxed"
          >
            We have the equipment, the experience, and the manpower to tackle any drainage issue — from a domestic blocked sink to full industrial site maintenance.
          </motion.p>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-20 -mb-px" fill="#e0f2fe" />
      </section>

      {/* Jump nav */}
      <section className="relative pt-8 pb-28 bg-sky-100 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {services.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-zinc-600 hover:text-accent hover:border-accent border border-transparent transition-all whitespace-nowrap"
              >
                {s.title}
              </a>
            ))}
          </div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#ffffff" />
      </section>

      {/* Services grid (light) */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Shared card renderer */}
          {(() => {
            const renderCard = (service: typeof services[0], i: number) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="scroll-mt-28 h-full"
              >
                <div className="bg-white border border-zinc-200 rounded-xl overflow-hidden h-full flex flex-col group shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                  <div className="overflow-hidden h-52 relative">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-8 border-t-4 border-t-accent flex flex-col flex-grow">
                    <h2 className="text-2xl font-display font-bold text-zinc-900 uppercase mb-4 leading-tight group-hover:text-accent transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <ul className="space-y-2 mb-8">
                      {service.features.map((f, fi) => (
                        <li key={fi} className="flex items-center gap-3 text-sm text-zinc-700 font-semibold uppercase tracking-wide">
                          <Check size={14} className="text-accent shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <button
                        type="button"
                        onClick={openBookNow}
                        className="w-full bg-accent hover:bg-accent/90 text-white py-3.5 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-sm"
                      >
                        Book This Service
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
            return (
              <div className="flex flex-col gap-6">
                {/* First 6 — full 3-column grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {services.slice(0, 6).map((s, i) => renderCard(s, i))}
                </div>
                {/* Last 2 — centred, each one-third wide */}
                <div className="flex flex-col md:flex-row justify-center gap-6">
                  {services.slice(6).map((s, i) => (
                    <div key={s.id} className="w-full md:w-1/2 lg:w-1/3">
                      {renderCard(s, i + 6)}
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="hsl(0 0% 11%)" />
      </section>

      {/* Committed banner (dark) */}
      <section className="bg-background pt-8 pb-28 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 justify-between">
            <div className="max-w-2xl">
              <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">Highly Rated Team of Professionals</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase leading-tight">
                Committed to Providing a <span className="text-accent">Stress-Free</span> Service
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={openBookNow}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                Book Now <ArrowRight size={18} />
              </button>
              <a href="tel:01256688650" className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-sm">
                <Phone size={16} /> 01256 688 650
              </a>
              <Link href="/contact" className="bg-transparent border border-white/20 hover:border-white/50 text-white px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-sm">
                Send a Message
              </Link>
            </div>
          </div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#fafafa" />
      </section>

      {/* FlexiPay enquiry */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">FlexiPay</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase text-zinc-900 leading-tight mb-6">
                Spread the Cost With a <span className="text-accent">Stress-Free</span> Payment Plan
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                At A&amp;B, we understand that essential works can't always wait — and having flexible payment options can make all the difference. That's why we offer <strong className="text-zinc-900">FlexiPay</strong>, in partnership with Mayfair Southern, providing a simple way to spread the cost of your project.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-8">
                Just complete the enquiry form and our friendly team will get in touch to arrange a payment plan that suits you. Get the service you need now and pay in a way that works for you.
              </p>
              <a
                href="tel:01256688650"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 font-bold uppercase tracking-wider transition-all text-sm"
              >
                <Phone size={18} /> Talk to Our Team
              </a>
            </div>

            <FlexiPayForm />
          </div>

          <p className="text-zinc-400 text-[11px] leading-relaxed text-center max-w-4xl mx-auto mt-12">
            FlexiPay in association with Mayfair Southern. Mayfair Southern Ltd is an Appointed Representative of Business Asset Finance Ltd who are authorised and regulated by the Financial Conduct Authority, Licence No. 804369 and Data Protection Licence No. ZA439871.
          </p>
        </div>
      </section>
    </>
  );
}
