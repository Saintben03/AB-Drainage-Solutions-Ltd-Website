import { Link } from "wouter";
import { Phone, ArrowRight, Camera } from "lucide-react";
import { SEO } from "@/components/SEO";
import { WaterWave } from "@/components/WaterWave";
import { motion } from "framer-motion";

import heroImg from "@assets/site_files_1/AB Drainage background_edited.jpg";
import crew1 from "@assets/ab_group_gallery/worker-9.33.16.jpeg";
import crew2 from "@assets/ab_group_gallery/worker-9.33.26.jpeg";
import crew3 from "@assets/ab_group_gallery/worker-9.33.28.jpeg";
import crew4 from "@assets/ab_group_gallery/worker-9.33.30.jpeg";
import crew5 from "@assets/ab_group_gallery/worker-9.33.34.jpeg";
import crew6 from "@assets/ab_group_gallery/worker-9.33.36.jpeg";
import vanBlue from "@assets/site_files_1/g-01f.jpg";
import surveyWalk from "@assets/site_files_1/survey-01b.jpg";
import platformWorks from "@assets/site_files_1/drainage-01a.jpg";

interface GalleryItem {
  src: string;
  caption: string;
  tag: string;
}

const featured: GalleryItem[] = [
  { src: crew1, caption: "Our engineers on site in full hi-vis", tag: "Our Team" },
  { src: crew4, caption: "Hands-on drainage work, done properly", tag: "On the Job" },
];

const items: GalleryItem[] = [
  { src: surveyWalk, caption: "Heading out to a CCTV drainage survey", tag: "Surveys" },
  { src: crew2, caption: "The A&B crew, ready for the next callout", tag: "Our Team" },
  { src: vanBlue, caption: "Part of our fully-equipped A&B fleet", tag: "Our Fleet" },
  { src: crew3, caption: "Experienced engineers you can rely on", tag: "Our Team" },
  { src: crew5, caption: "Mobilising across Hampshire, day or night", tag: "Our Team" },
  { src: platformWorks, caption: "Specialist drainage works on the rail network", tag: "Major Works" },
  { src: crew6, caption: "33+ years of experience on every job", tag: "Our Team" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery | A&B Drainage Solutions Hampshire"
        description="See A&B Drainage Solutions in action across Hampshire — our engineers, fleet and drainage projects, from CCTV surveys to major rail-network works."
        canonicalUrl="/gallery"
      />

      {/* ── HERO (dark) ── */}
      <section className="pt-36 pb-28 relative overflow-hidden min-h-[58vh] flex items-start">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="A&B Drainage fleet and engineers" className="w-full h-full object-cover object-bottom" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4 flex items-center gap-2"
          >
            <Camera size={15} aria-hidden="true" /> A&B In Action
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-5xl md:text-7xl font-display font-bold text-white uppercase mb-6 leading-tight"
          >
            Our <span className="text-accent">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-xl text-foreground/70 max-w-xl leading-relaxed"
          >
            Real photos of our team, our fleet and our work across Hampshire — no stock images, just three decades of drainage expertise on the ground.
          </motion.p>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#ffffff" />
      </section>

      {/* ── GALLERY GRID (light) ── */}
      <section className="py-24 pb-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">On the Tools</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-zinc-900 uppercase leading-tight">
              The People Behind the Work
            </h2>
          </motion.div>

          {/* Featured pair — shown large, near full-width */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4"
          >
            {featured.map((item, i) => (
              <motion.figure
                key={i}
                variants={fadeUp}
                className="group relative overflow-hidden bg-zinc-100"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  className="w-full h-auto block transition duration-500 group-hover:brightness-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90"></div>
                <figcaption className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <span className="inline-block bg-accent text-white text-[11px] font-bold uppercase tracking-[0.2em] px-3 py-1 mb-3">
                    {item.tag}
                  </span>
                  <p className="text-white font-bold text-lg md:text-2xl leading-snug">{item.caption}</p>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="columns-1 sm:columns-2 lg:columns-3 gap-4"
          >
            {items.map((item, i) => (
              <motion.figure
                key={i}
                variants={fadeUp}
                className="group relative overflow-hidden bg-zinc-100 break-inside-avoid mb-4"
              >
                <img
                  src={item.src}
                  alt={item.caption}
                  loading="lazy"
                  className="w-full h-auto block transition duration-500 group-hover:brightness-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-90"></div>
                <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                  <span className="inline-block bg-accent text-white text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 mb-2">
                    {item.tag}
                  </span>
                  <p className="text-white font-bold text-sm md:text-base leading-snug">{item.caption}</p>
                </figcaption>
              </motion.figure>
            ))}
          </motion.div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="hsl(0 0% 11%)" />
      </section>

      {/* ── CTA (dark) ── */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">Ready When You Are</p>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white uppercase leading-tight">
                Put Our Team to Work
              </h3>
              <p className="text-muted-foreground mt-3 max-w-xl">
                From a blocked drain to a major groundwork project, the same experienced crew you see here is ready to help — typically on-site within one hour.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href="tel:01256688650"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all"
              >
                <Phone size={16} /> 01256 688 650
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-accent text-white hover:text-accent px-8 py-4 font-bold uppercase tracking-wider text-sm transition-all"
              >
                Request a Callout <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
