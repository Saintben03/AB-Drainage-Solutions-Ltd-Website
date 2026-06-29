import { Link } from "wouter";
import { Phone, ArrowRight, ShieldCheck } from "lucide-react";
import { SEO } from "@/components/SEO";

import vanImg from "@assets/site_files_1/g-01f.jpg";
import work3 from "@assets/site_files_1/472171552_560083023662958_8976223963179451031_n.jpg";

export default function Services() {
  const services = [
    {
      id: "emergency",
      title: "24/7 Emergency Drainage",
      desc: "Drainage emergencies don't wait for business hours. Neither do we. We provide rapid response emergency callouts across Hampshire, typically arriving within 1 hour of your call. Whether it's a blocked toilet at 2am or a burst pipe flooding your property, our fully equipped vans and experienced engineers are ready."
    },
    {
      id: "blocked-drains",
      title: "Blocked Drains",
      desc: "From slow-draining sinks to completely blocked external drains, we use high-pressure water jetting and electro-mechanical coring to clear blockages fast. We don't just push the blockage further down; we ensure the pipe is completely clear and flowing freely to prevent rapid recurrence."
    },
    {
      id: "cctv-surveys",
      title: "CCTV Drain Surveys",
      desc: "Stop guessing what's wrong underground. We use state-of-the-art crawler and push-rod CCTV cameras to inspect the internal condition of your drains. Essential for home buyers (pre-purchase surveys), diagnosing persistent blockages, and identifying structural defects like root ingress or collapsed pipes."
    },
    {
      id: "drain-repairs",
      title: "Drain Repairs",
      desc: "When a drain is structurally damaged, we fix it. We specialise in both no-dig structural patch relining (repairing the pipe from the inside without excavation) and traditional excavation for severely collapsed pipes. We handle everything from the initial diagnosis to the final reinstatement of the ground."
    },
    {
      id: "commercial",
      title: "Commercial & Industrial Drainage",
      desc: "Downtime costs money. We partner with restaurants, schools, hospitals, industrial estates, and facility managers to provide preventative maintenance contracts and rapid reactive response. Our heavy-duty tanker and jetting units can handle grease traps, large-diameter pipes, and heavy industrial waste."
    },
    {
      id: "cleaning-jetting",
      title: "Drain Cleaning & Jetting",
      desc: "High-pressure water jetting is the most effective way to clean drains. Our van-mounted units blast water at up to 4000 PSI, obliterating fat, grease, scale, and silt buildup, restoring your pipes to near-new condition."
    },
    {
      id: "soakaways",
      title: "Soakaway Installation",
      desc: "If your property suffers from surface water flooding or you need a new soakaway for an extension, our groundworks team designs and installs high-capacity crate soakaway systems compliant with modern building regulations."
    },
    {
      id: "guttering",
      title: "Guttering & Downpipes",
      desc: "Blocked gutters lead to severe damp problems. We offer comprehensive gutter clearing, unblocking downpipes, and repairs. We ensure surface water is directed safely away from your property's foundations."
    }
  ];

  return (
    <>
      <SEO 
        title="Drainage Services Hampshire | CCTV Surveys & Repairs"
        description="Comprehensive drainage solutions: blocked drains, CCTV surveys, structural repairs, and commercial maintenance across Hampshire."
        canonicalUrl="/services"
      />

      <section className="pt-32 pb-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white uppercase mb-6 leading-tight">Expert Drainage Services</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We have the equipment, the experience, and the manpower to tackle any drainage issue, from a domestic blocked sink to industrial site maintenance.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            <div className="lg:col-span-2 space-y-16">
              {services.map((service, i) => (
                <div key={service.id} id={service.id} className="scroll-mt-32">
                  <h2 className="text-3xl font-display font-bold text-white uppercase mb-4 flex items-center gap-4">
                    <span className="text-primary">{(i + 1).toString().padStart(2, '0')}.</span> {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {service.desc}
                  </p>
                  <div className="h-px w-full bg-border mt-8"></div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-1 space-y-8">
              <div className="sticky top-32 space-y-8">
                <div className="bg-card border border-border p-8 rounded-lg">
                  <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">Book a Service</h3>
                  <p className="text-muted-foreground mb-6">Contact our team directly to discuss your requirements or request an emergency callout.</p>
                  <a href="tel:01256688650" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4 rounded text-center font-bold uppercase tracking-wider flex items-center justify-center gap-2 mb-4 transition-all">
                    <Phone size={20} /> 01256 688 650
                  </a>
                  <Link href="/contact" className="w-full bg-secondary hover:bg-secondary/80 text-foreground py-4 rounded text-center font-bold uppercase tracking-wider flex items-center justify-center transition-all">
                    Send a Message
                  </Link>
                </div>

                <img src={vanImg} alt="A&B Drainage Van" className="rounded-lg w-full h-auto object-cover border border-border" />
                <img src={work3} alt="A&B Drainage Operations" className="rounded-lg w-full h-auto object-cover border border-border" />
                
                <div className="bg-primary/10 border border-primary/20 p-6 rounded-lg">
                  <h4 className="font-bold text-white mb-2 flex items-center gap-2"><ShieldCheck className="text-primary" size={20} /> FlexiPay Available</h4>
                  <p className="text-sm text-muted-foreground">We offer flexible payment plans to help spread the cost of major drainage repairs and installations.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}