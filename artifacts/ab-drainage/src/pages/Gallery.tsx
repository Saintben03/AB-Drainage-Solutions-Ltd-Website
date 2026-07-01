import { Link } from "wouter";
import { Phone, ArrowRight, Camera } from "lucide-react";
import { SEO } from "@/components/SEO";
import { WaterWave } from "@/components/WaterWave";
import { motion } from "framer-motion";

import heroImg from "@assets/Designer_(1)_1782807579036.png";

// Team
import crew1 from "@assets/ab_group_gallery/worker-9.33.16.jpeg";
import crew2 from "@assets/ab_group_gallery/worker-9.33.26.jpeg";
import crew3 from "@assets/ab_group_gallery/worker-9.33.28.jpeg";
import crew4 from "@assets/ab_group_gallery/worker-9.33.30.jpeg";
import crew5 from "@assets/ab_group_gallery/worker-9.33.34.jpeg";
import crew6 from "@assets/ab_group_gallery/worker-9.33.36.jpeg";

// Fleet
import vanBlue from "@assets/site_files_1/g-01f.jpg";
import vanG from "@assets/site_files_1/g-01g.jpg";
import vanH from "@assets/site_files_1/g-01h.jpg";
import vanM from "@assets/site_files_1/g-01m.jpg";
import vanT from "@assets/site_files_1/g-01t.jpg";
import vanU from "@assets/site_files_1/g-01u.jpg";
import vanW from "@assets/site_files_1/g-01w.jpg";

// Surveys
import survey1 from "@assets/site_files_1/survey-01a.jpg";
import survey2 from "@assets/site_files_1/survey-01b.jpg";

// Drainage / platform works
import drainage1 from "@assets/site_files_1/drainage-01a.jpg";

// Blocked drains
import blocked1 from "@assets/site_files_1/blocked-drain-01a.jpg";
import blocked2 from "@assets/site_files_1/blocked-drain-01b.jpg";
import blocked3 from "@assets/site_files_1/blocked-drain-01c.jpg";

// Groundworks
import ground1 from "@assets/site_files_1/groundwork-01a.jpg";
import ground2 from "@assets/site_files_1/groundwork-01b.jpg";
import ground3 from "@assets/site_files_1/groundwork-01c.jpg";

// Pipeline
import pipe1 from "@assets/site_files_1/pipeline-01a.jpg";
import pipe2 from "@assets/site_files_1/pipeline-01b.jpg";

// On the job (social media originals)
import job1 from "@assets/site_files_1/369541839_240515012286429_2194496784194718742_n.jpg";
import job2 from "@assets/site_files_1/468849454_17949583832886709_2702370064044539379_n.jpg";
import job3 from "@assets/site_files_1/472171552_560083023662958_8976223963179451031_n.jpg";
import job4 from "@assets/site_files_1/495021961_10232376033277003_1967405647606398252_n.jpg";

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
  // Work — blocked drains
  { src: blocked1, caption: "Locating and clearing a severe blockage", tag: "Blocked Drains" },
  { src: blocked2, caption: "High-pressure jetting to restore full flow", tag: "Blocked Drains" },
  { src: blocked3, caption: "Drain clearance completed — pipe running free", tag: "Blocked Drains" },
  // Surveys
  { src: survey1, caption: "CCTV survey equipment ready for deployment", tag: "Surveys" },
  { src: survey2, caption: "Heading out to a CCTV drainage survey", tag: "Surveys" },
  // Groundworks
  { src: ground1, caption: "Precision groundworks on a Hampshire site", tag: "Groundworks" },
  { src: ground2, caption: "Excavation and pipe installation underway", tag: "Groundworks" },
  { src: ground3, caption: "Reinstatement following drain repair", tag: "Groundworks" },
  // Pipeline
  { src: pipe1, caption: "Pipeline inspection and maintenance works", tag: "Pipeline Works" },
  { src: pipe2, caption: "Specialist pipeline works — full reinstatement", tag: "Pipeline Works" },
  // Major / platform
  { src: drainage1, caption: "Specialist drainage works on the rail network", tag: "Major Works" },
  // On the job
  { src: job1, caption: "The A&B crew — always ready for the next callout", tag: "Our Team" },
  { src: job2, caption: "Commercial drainage maintenance in progress", tag: "On the Job" },
  { src: job3, caption: "Industrial site — tanker and team on standby", tag: "On the Job" },
  { src: job4, caption: "Reactive callout handled swiftly and professionally", tag: "On the Job" },
  // Fleet
  { src: crew2, caption: "The A&B crew, ready to mobilise", tag: "Our Team" },
  { src: vanBlue, caption: "Part of our fully-equipped A&B fleet", tag: "Our Fleet" },
  { src: vanG, caption: "A&B van — one of many across Hampshire", tag: "Our Fleet" },
  { src: vanH, caption: "Fully-stocked service van ready for deployment", tag: "Our Fleet" },
  { src: vanM, caption: "Fleet vehicle at a Hampshire site", tag: "Our Fleet" },
  { src: vanT, caption: "A&B on the road — rapid response coverage", tag: "Our Fleet" },
  { src: vanU, caption: "Our tanker fleet — for high-capacity work", tag: "Our Fleet" },
  { src: vanW, caption: "A&B fleet lined up — Hampshire's drain experts", tag: "Our Fleet" },
  // More team
  { src: crew3, caption: "Experienced engineers you can rely on", tag: "Our Team" },
  { src: crew5, caption: "Mobilising across Hampshire, day or night", tag: "Our Team" },
  { src: crew6, caption: "33+ years of experience on every job", tag: "Our Team" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery | A&B Drainage Solutions Hampshire"
        description="See A&B Drainage Solutions in action across Hampshire — our engineers, fleet and drainage projects, from blocked drains to major groundworks and rail-network works."
        canonicalUrl="/gallery"
      />

      {/* ── HERO (dark) ── */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="A&B Drainage fleet and engineers" className="w-full h-full object-cover object-center animate-heropan saturate-[1.6] brightness-[1.12] contrast-[1.15]" />
          <div className="absolute inset-0 bg-[#0a2c47]/22" style={{ mixBlendMode: "multiply" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#06182a]/85 via-[#06182a]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#06182a]/55 via-transparent to-transparent"></div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#ffffff" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative max-w-3xl">
            <div className="absolute -inset-x-8 -inset-y-10 bg-black/60 blur-3xl rounded-3xl pointer-events-none -z-10" aria-hidden="true"></div>
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
              className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white uppercase mb-6 leading-tight [text-shadow:0_2px_20px_rgba(0,0,0,0.9),0_1px_4px_rgba(0,0,0,0.7)]"
            >
              Our <span className="text-accent">Gallery</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-xl text-white/85 max-w-xl leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]"
            >
              Real photos of our team, our fleet and our work across Hampshire — no stock images, just three decades of drainage expertise on the ground.
            </motion.p>
          </div>
        </div>
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
              The People &amp; Work Behind the Name
            </h2>
          </motion.div>

          {/* Featured pair — shown large */}
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

          {/* Masonry grid — all work images */}
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
