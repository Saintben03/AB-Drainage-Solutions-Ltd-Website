import { Link } from "wouter";
import { ArrowRight, Phone, ShieldCheck, Clock, MapPin, Droplets, HardHat, Camera, Wrench } from "lucide-react";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";

// Assets
import heroImg from "@assets/site_files_1/AB Drainage background_edited.jpg";
import work1 from "@assets/site_files_1/369541839_240515012286429_2194496784194718742_n.jpg";
import work2 from "@assets/site_files_1/468849454_17949583832886709_2702370064044539379_n.jpg";
import lanesLogo from "@assets/site_files_1/LanesGroup-1000-px.png";
import nhsLogo from "@assets/site_files_1/National_Health_Service_(England)_logo.svg.png";
import ccLogo from "@assets/site_files_1/CC-Multi-Disciplinary-Strap-White-BG-Full-Col-RGB-Trans.png";

export default function Home() {
  return (
    <>
      <SEO 
        title="Blocked Drain Hampshire | 24/7 Emergency Drainage"
        description="Expert drainage services across Hampshire for domestic, commercial and industrial clients. 24/7 emergency callouts typically within 1 hour. 33+ years experience."
        canonicalUrl="/"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="A&B Drainage Solutions Ltd Fleet" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-background/80 md:bg-background/60 md:bg-gradient-to-r md:from-background md:via-background/90 md:to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-destructive/20 text-destructive border border-destructive/30 rounded-full text-sm font-bold uppercase tracking-wider mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-destructive animate-pulse"></span>
              24/7 Emergency Response
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-white leading-[1.1] mb-6 uppercase"
            >
              The Drain Experts Hampshire Relies On.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-foreground/90 mb-10 max-w-2xl leading-relaxed"
            >
              Blocked drain? Sewage backing up? We answer at 2am and arrive typically within 1 hour. 33 years of solving Hampshire's toughest drainage problems.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a 
                href="tel:01256688650" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-5 rounded text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all"
              >
                <Phone size={24} />
                Call 01256 688 650
              </a>
              <Link 
                href="/services"
                className="bg-secondary border border-border hover:bg-secondary/80 text-foreground px-8 py-5 rounded text-lg font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
              >
                View Services
              </Link>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-6 items-center text-sm font-semibold text-muted-foreground uppercase tracking-widest"
            >
              <span className="flex items-center gap-2"><Clock size={16} className="text-primary" /> 1 Hour ETA</span>
              <span className="flex items-center gap-2"><ShieldCheck size={16} className="text-primary" /> 33+ Yrs Exp</span>
              <span className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> Hampshire Wide</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-[#050B14] py-12 border-y border-white/5">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground uppercase tracking-widest font-semibold mb-8">Trusted by institutions & businesses across the UK</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <img src={nhsLogo} alt="NHS" className="h-10 md:h-14 w-auto object-contain" />
            <img src={lanesLogo} alt="Lanes Group" className="h-12 md:h-16 w-auto object-contain" />
            <img src={ccLogo} alt="CC Multi Disciplinary" className="h-12 md:h-16 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Our Expertise</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white leading-tight">Complete Drainage Solutions</h3>
            </div>
            <Link href="/services" className="text-primary font-bold hover:text-primary/80 flex items-center gap-2 uppercase tracking-widest whitespace-nowrap">
              All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Emergency Blockages", icon: <Clock size={32} />, desc: "24/7 rapid response for domestic and commercial blocked drains." },
              { title: "CCTV Drain Surveys", icon: <Camera size={32} />, desc: "High-tech camera inspections to diagnose hidden drainage issues." },
              { title: "Drain Repairs", icon: <Wrench size={32} />, desc: "Structural repairs, relining, and excavation by certified experts." },
              { title: "Commercial Drainage", icon: <HardHat size={32} />, desc: "Heavy-duty jetting and maintenance for industrial facilities." }
            ].map((service, i) => (
              <Link key={i} href="/services" className="group bg-card border border-white/5 hover:border-primary/50 p-8 rounded-lg transition-all duration-300 block">
                <div className="w-14 h-14 bg-primary/10 text-primary rounded flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h4 className="text-xl font-display font-bold text-white uppercase mb-3">{service.title}</h4>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <span className="text-primary font-bold text-sm uppercase tracking-widest flex items-center gap-2">Read More <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-sm font-bold text-primary uppercase tracking-widest mb-2">Why Choose A&B</h2>
                <h3 className="text-4xl md:text-5xl font-display font-bold uppercase text-white leading-tight">33 Years of Getting It Right.</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We aren't a faceless franchise. We are a dedicated, local team of seasoned drainage engineers. We invest in the best equipment, we turn up when we say we will, and we fix the problem permanently.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "24/7 Emergency Callouts",
                  "Typically 1 Hour ETA",
                  "Domestic & Commercial",
                  "Over 65s Discount",
                  "FlexiPay Payment Plans",
                  "Fully Insured & Accredited"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-medium">
                    <ShieldCheck size={20} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="pt-6">
                <Link href="/about" className="bg-primary text-primary-foreground px-8 py-4 rounded text-sm font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 hover:bg-primary/90 transition-all">
                  More About Us <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src={work1} alt="A&B Drainage at a commercial site" className="rounded-lg object-cover w-full h-[300px] mt-12" />
              <img src={work2} alt="A&B Drainage engineers at work" className="rounded-lg object-cover w-full h-[300px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white uppercase mb-6 leading-tight">Need a drainage expert right now?</h2>
          <p className="text-xl text-white/90 mb-10">Don't wait for the problem to get worse. Our rapid response team is standing by.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:01256688650" className="bg-white text-primary hover:bg-white/90 px-8 py-5 rounded text-xl font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all">
              <Phone size={24} />
              01256 688 650
            </a>
            <a href="tel:07498062710" className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-5 rounded text-xl font-bold uppercase tracking-wider flex items-center justify-center gap-3 transition-all">
              <Phone size={24} />
              07498 062 710
            </a>
          </div>
        </div>
      </section>
    </>
  );
}