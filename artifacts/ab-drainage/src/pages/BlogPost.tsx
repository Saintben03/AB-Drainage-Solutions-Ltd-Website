import { useParams, Link } from "wouter";
import { WaterWave } from "@/components/WaterWave";
import { SEO } from "@/components/SEO";
import { Clock, Calendar, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import NotFound from "@/pages/not-found";

// Real fleet/job photos
import imgFleet from "@assets/site_files_1/AB Drainage background_edited.jpg";
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
  emergency: imgFleet,
  commercial: imgVanSchool,
  "tree-roots": imgTreeRoots,
  jetting: imgJetting,
  soakaway: imgSoakaway,
  "blocked-causes": imgVanManhole,
  "drain-repair": imgVanResidential,
  industrial: imgScania,
  fallback: imgBlockedDrain,
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug;
  
  const post = blogPosts.find(p => p.slug === slug);
  
  if (!post) {
    return <NotFound />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 3);
    
  if (relatedPosts.length < 3) {
    const morePosts = blogPosts
      .filter(p => p.id !== post.id && !relatedPosts.includes(p))
      .slice(0, 3 - relatedPosts.length);
    relatedPosts.push(...morePosts);
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Emergency":
        return "from-accent to-blue-300";
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

  // Convert plain text with double newlines into paragraphs
  const paragraphs = post.content.split('\n\n').filter(p => p.trim() !== '');

  return (
    <>
      <SEO 
        title={post.metaTitle}
        description={post.metaDescription}
        canonicalUrl={`/blog/${post.slug}`}
      />

      {/* Post Header */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={imageMap[post.imageKey] ?? imageMap.fallback}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0a2c47]/22" style={{ mixBlendMode: "multiply" }}></div>
          <div className="absolute inset-0 bg-[#06182a]/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#06182a]/70 via-[#06182a]/30 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold uppercase tracking-widest text-sm mb-12 transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-8 text-sm font-semibold uppercase tracking-widest">
              <span className={`px-4 py-1.5 border rounded-full ${getBadgeColor(post.category)} bg-background`}>
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white uppercase leading-tight mb-8">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-center gap-8 text-white/80 font-semibold uppercase tracking-widest text-sm">
              <span className="flex items-center gap-2"><Calendar size={16} /> {new Date(post.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span className="flex items-center gap-2"><Clock size={16} /> {post.readTime}</span>
            </div>
          </div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#ffffff" />
      </section>

      {/* Post Content & Sidebar (light) */}
      <section className="py-20 pb-28 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 max-w-7xl mx-auto">
            
            {/* Main Content */}
            <div className="w-full lg:w-2/3">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-zinc-800 leading-relaxed font-medium mb-10 pb-10 border-b border-zinc-200">
                  {post.excerpt}
                </p>
                
                {paragraphs.map((para, index) => {
                  // If paragraph starts with a number, treat as a subheading for better formatting
                  if (para.match(/^[0-9]\./) || para.startsWith("Option ")) {
                    const parts = para.split('.');
                    if (parts.length > 1 && parts[0].length < 10) {
                      return (
                        <div key={index} className="mb-8">
                          <h3 className="text-2xl font-display font-bold text-zinc-900 uppercase mt-12 mb-4">{parts[0]}. {parts.slice(1).join('.').trim().split('.')[0]}</h3>
                          <p className="text-zinc-600 leading-relaxed">
                            {parts.slice(1).join('.').replace(parts.slice(1).join('.').trim().split('.')[0], '').replace(/^\./, '').trim()}
                          </p>
                        </div>
                      );
                    }
                  }
                  
                  return (
                    <p key={index} className="text-zinc-600 leading-relaxed mb-8">
                      {para}
                    </p>
                  );
                })}
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32">
                <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-8 shadow-lg">
                  <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mb-6">
                    <Phone size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-zinc-900 uppercase mb-4">Need Help Now?</h3>
                  <p className="text-zinc-600 mb-8">
                    If you are dealing with a drainage emergency or need professional advice, our team is available 24/7.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <a href="tel:01256688650" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full py-4 rounded text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all">
                      <Phone size={18} /> 01256 688 650
                    </a>
                    <a href="tel:07498062710" className="bg-transparent border border-accent text-accent hover:bg-accent/10 w-full py-4 rounded text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all">
                      <Phone size={18} /> 07498 062 710
                    </a>
                  </div>
                  
                  <Link href="/contact" className="text-center block text-sm font-bold text-zinc-900 hover:text-primary uppercase tracking-widest transition-colors">
                    Send us a message
                  </Link>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#fafafa" />
      </section>

      {/* Related Articles (light) */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-zinc-900 uppercase mb-12">Related Articles</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((related) => (
                <Link key={related.id} href={`/blog/${related.slug}`} className="group block h-full">
                  <div className="bg-white border border-zinc-200 shadow-sm rounded-xl overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all h-full flex flex-col hover:-translate-y-2 duration-300">
                    <div className="p-8 flex flex-col flex-grow">
                      <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 border rounded-full self-start mb-4 ${getBadgeColor(related.category)}`}>
                        {related.category}
                      </span>
                      <h3 className="text-xl font-display font-bold text-zinc-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                        {related.title}
                      </h3>
                      <div className="mt-auto pt-6 border-t border-zinc-200 flex items-center justify-between">
                        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                          <Clock size={14} /> {related.readTime}
                        </span>
                        <span className="text-primary font-bold flex items-center group-hover:translate-x-2 transition-transform">
                          <ArrowRight size={20} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}