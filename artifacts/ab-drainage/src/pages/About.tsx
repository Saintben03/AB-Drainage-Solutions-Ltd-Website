import { Link } from "wouter";
import { ShieldCheck, CheckCircle2, Phone } from "lucide-react";
import { SEO } from "@/components/SEO";

import teamImg from "@assets/site_files_1/495021961_10232376033277003_1967405647606398252_n.jpg";

export default function About() {
  return (
    <>
      <SEO 
        title="About Us | 33+ Years Experience | A&B Drainage"
        description="A&B Drainage Solutions Ltd has been providing expert drainage services across Hampshire for over 33 years. Reliable, honest, and professional."
        canonicalUrl="/about"
      />

      <section className="pt-32 pb-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white uppercase mb-6 leading-tight">About Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over three decades, A&B Drainage Solutions Ltd has been the name Hampshire trusts when things go wrong underground.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-display font-bold text-white uppercase mb-6">Our Story</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Established over 33 years ago, we built this company on a simple premise: answer the phone, turn up quickly, and do the job right the first time.
                  </p>
                  <p>
                    Drainage issues are stressful. Our goal is to remove that stress entirely. We operate a fleet of fully equipped, liveried vans manned by experienced, accredited engineers who have seen and solved every type of drainage disaster imaginable.
                  </p>
                  <p>
                    We handle everything from a blocked domestic toilet to complex industrial drain rehabilitation for major UK institutions like the NHS and Lanes Group. We are big enough to cope with major commercial contracts, yet local enough to care about every residential callout.
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-border">
                <h2 className="text-3xl font-display font-bold text-white uppercase mb-6">The A&B Standard</h2>
                <ul className="space-y-4">
                  {[
                    "Honest, transparent communication—no hidden fees.",
                    "Latest technology including crawler CCTV and high-pressure jetting.",
                    "Fully insured and health & safety compliant.",
                    "Respect for your property—we leave sites clean and tidy.",
                    "Permanent fixes over temporary patches wherever possible."
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground">
                      <CheckCircle2 size={24} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <img src={teamImg} alt="A&B Drainage Team on site" className="rounded-lg w-full object-cover border border-border shadow-2xl" />
              
              <div className="bg-card border border-border p-8 rounded-lg grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display font-bold text-white uppercase mb-2">Over 65s Discount</h3>
                  <p className="text-muted-foreground text-sm">We proudly offer a dedicated discount on our services for all customers aged 65 and over.</p>
                </div>
                <div>
                  <h3 className="font-display font-bold text-white uppercase mb-2">FlexiPay Plans</h3>
                  <p className="text-muted-foreground text-sm">Unexpected major repairs? We offer flexible payment plans to make the cost manageable.</p>
                </div>
              </div>

              <div className="bg-primary/10 border border-primary/20 p-8 rounded-lg text-center">
                <ShieldCheck size={48} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">Need Us Now?</h3>
                <a href="tel:01256688650" className="inline-flex bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded text-lg font-bold uppercase tracking-wider items-center justify-center gap-3 transition-all">
                  <Phone size={24} />
                  01256 688 650
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}