import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export default function Blog() {
  const featuredPost = blogPosts[2]; // Emergency drainage
  const otherPosts = blogPosts.filter(post => post.id !== featuredPost.id);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Emergency":
        return "from-accent to-orange-400";
      case "CCTV Surveys":
        return "from-primary to-blue-400";
      case "Drain Repairs":
        return "from-slate-700 to-slate-500";
      case "Commercial":
        return "from-emerald-700 to-emerald-500";
      default:
        return "from-muted-foreground to-slate-400";
    }
  };

  const getBadgeColor = (category: string) => {
    if (category === "Emergency") {
      return "bg-accent/20 text-accent border-accent/30";
    }
    return "bg-primary/20 text-primary border-primary/30";
  };

  return (
    <>
      <SEO 
        title="Drainage Blog | Expert Advice for Hampshire Homeowners and Businesses | A&B Drainage Solutions"
        description="Expert drainage tips, guides and advice from Hampshire's leading drainage specialists. Blocked drains, CCTV surveys, emergency callouts and more."
        canonicalUrl="/blog"
      />

      {/* Hero Section */}
      <section className="bg-card py-20 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white uppercase leading-tight mb-6">
              Drainage Advice and Expert Guides
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professional insights, preventative tips, and detailed guides from Hampshire's most trusted drainage engineers.
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-20"
          >
            <Link href={`/blog/${featuredPost.slug}`} className="group block">
              <div className="bg-background border border-border rounded-xl overflow-hidden hover:border-accent/50 transition-colors flex flex-col md:flex-row">
                <div className={`w-full md:w-1/2 h-64 md:h-auto bg-gradient-to-br ${getCategoryColor(featuredPost.category)} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                </div>
                <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6 text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                    <span className={`px-3 py-1 border rounded-full ${getBadgeColor(featuredPost.category)}`}>
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-2"><Calendar size={14} /> {new Date(featuredPost.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 group-hover:text-accent transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-6 mt-auto">
                    <span className="flex items-center gap-2 text-sm font-semibold text-muted-foreground uppercase tracking-widest">
                      <Clock size={16} /> {featuredPost.readTime}
                    </span>
                    <span className="text-accent font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                      Read Article <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {otherPosts.map((post) => (
              <motion.div key={post.id} variants={itemVariants} className="h-full">
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <div className="bg-card border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-colors h-full flex flex-col hover:-translate-y-2 duration-300">
                    <div className={`h-48 w-full bg-gradient-to-br ${getCategoryColor(post.category)} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20 mix-blend-overlay"></div>
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex items-center justify-between mb-4">
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 border rounded-full ${getBadgeColor(post.category)}`}>
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground font-semibold flex items-center gap-1">
                          <Clock size={12} /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto pt-6 border-t border-border flex items-center justify-between">
                        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                          <Calendar size={14} /> {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                        </span>
                        <span className="text-primary font-bold flex items-center group-hover:translate-x-2 transition-transform">
                          <ArrowRight size={20} />
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