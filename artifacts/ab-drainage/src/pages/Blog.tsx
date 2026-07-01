import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { WaterWave } from "@/components/WaterWave";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

import heroImg from "@assets/Designer_(1)_1782807579036.png";
// Real fleet/job photos
import imgVanSchool from "@assets/site_files_1/369541839_240515012286429_2194496784194718742_n.jpg";
import imgVanResidential from "@assets/site_files_1/468849454_17949583832886709_2702370064044539379_n.jpg";
import imgWorkerManhole from "@assets/site_files_1/472171552_560083023662958_8976223963179451031_n.jpg";
import imgScania from "@assets/site_files_1/g-01u.jpg";
import imgVanManhole from "@assets/site_files_1/g-01w.jpg";
// AI-generated specialist images
import imgCctv from "@assets/blog/cctv-survey.png";
import imgTreeRoots from "@assets/blog/tree-roots-drain.png";
import imgJetting from "@assets/blog/drain-jetting.png";
import imgSoakaway from "@assets/blog/soakaway-install.png";
import imgBlockedDrain from "@assets/blog/blocked-drain.png";

const imageMap: Record<string, string> = {
  unblock: imgWorkerManhole,
  cctv: imgCctv,
  emergency: heroImg,
  commercial: imgVanSchool,
  "tree-roots": imgTreeRoots,
  jetting: imgJetting,
  soakaway: imgSoakaway,
  "blocked-causes": imgVanManhole,
  "drain-repair": imgVanResidential,
  industrial: imgScania,
  fallback: imgBlockedDrain,
};

export default function Blog() {
  const featuredPost = blogPosts[2]; // Emergency drainage
  const otherPosts = blogPosts.filter((post) => post.id !== featuredPost.id);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <>
      <SEO
        title="Drainage Blog | Expert Advice for Hampshire Homeowners and Businesses | A&B Drainage Solutions"
        description="Expert drainage tips, guides and advice from Hampshire's leading drainage specialists. Blocked drains, CCTV surveys, emergency callouts and more."
        canonicalUrl="/blog"
      />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="A&B Drainage fleet" className="w-full h-full object-cover object-center animate-heropan saturate-[1.2] brightness-[1.02] contrast-[1.1]" />
          <div className="absolute inset-0 bg-[#0e4a78]/45" style={{ mixBlendMode: "color" }}></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c3e57_0%,rgba(12,62,87,0.92)_22%,rgba(12,62,87,0.68)_45%,rgba(12,62,87,0.4)_65%,rgba(12,62,87,0.18)_85%,rgba(12,62,87,0.08)_100%)]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#06182a]/45 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_0%_0%,#0b2942_0%,rgba(11,41,66,0.55)_30%,transparent_68%)]"></div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#ffffff" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative max-w-3xl">
            <div className="absolute -inset-x-8 -inset-y-10 bg-black/60 blur-3xl rounded-3xl pointer-events-none -z-10" aria-hidden="true"></div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4"
            >
              Expert Drainage Guides
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-white uppercase tracking-normal leading-[1.1] mb-6 [text-shadow:0_2px_20px_rgba(0,0,0,0.6)]"
            >
              Drainage Advice &amp; <span className="text-accent">Expert Guides</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-lg md:text-xl text-white/85 max-w-2xl leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]"
            >
              Professional insights, preventative tips, and detailed guides from Hampshire's most trusted drainage engineers.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── FEATURED POST (light) ── */}
      <section className="py-16 pb-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:border-accent/40 transition-all flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden min-h-[280px]">
                  <img
                    src={imageMap[featuredPost.imageKey] ?? imageMap.fallback}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center border-t-2 md:border-t-0 md:border-l-2 border-accent">
                  <div className="flex items-center gap-3 mb-5 text-xs font-bold uppercase tracking-[0.2em]">
                    <span className="text-accent">{featuredPost.category}</span>
                    <span className="text-zinc-400">·</span>
                    <span className="flex items-center gap-1.5 text-zinc-500">
                      <Calendar size={11} />
                      {new Date(featuredPost.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 mb-4 uppercase leading-tight group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-zinc-600 mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 mt-auto">
                    <span className="flex items-center gap-1.5 text-xs font-bold text-zinc-500 uppercase tracking-widest">
                      <Clock size={12} /> {featuredPost.readTime}
                    </span>
                    <span className="text-accent font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                      Read Article <ArrowRight size={13} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#fafafa" />
      </section>

      {/* ── BLOG GRID (light) ── */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-zinc-200"
          >
            {otherPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants} className="h-full">
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-white h-full flex flex-col hover:bg-zinc-50 transition-colors">
                    <div className="h-52 w-full relative overflow-hidden">
                      <img
                        src={imageMap[post.imageKey] ?? imageMap.fallback}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        width={600}
                        height={208}
                      />
                      <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="p-7 flex flex-col flex-grow border-t-2 border-t-accent">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-bold text-accent uppercase tracking-[0.15em]">
                          {post.category}
                        </span>
                        <span className="text-xs text-zinc-500 font-semibold flex items-center gap-1">
                          <Clock size={11} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-display font-bold text-zinc-900 mb-3 group-hover:text-accent transition-colors leading-tight uppercase">
                        {post.title}
                      </h3>
                      <p className="text-zinc-600 text-sm mb-6 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto pt-5 border-t border-zinc-200 flex items-center justify-between">
                        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest flex items-center gap-1.5">
                          <Calendar size={11} />
                          {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                        <span className="text-accent font-bold flex items-center gap-1 group-hover:gap-3 transition-all text-xs uppercase tracking-widest">
                          Read <ArrowRight size={13} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
