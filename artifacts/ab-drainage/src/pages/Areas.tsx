import { Link } from "wouter";
import { MapPin, Phone } from "lucide-react";
import { SEO } from "@/components/SEO";

export default function Areas() {
  const mainAreas = [
    "Basingstoke",
    "Southampton",
    "Winchester",
    "Aldershot",
    "Reading",
    "Farnborough",
    "Andover",
    "Fleet",
    "Alton",
    "Petersfield",
    "Portsmouth",
    "Eastleigh",
    "Fareham",
    "Gosport",
    "Havant"
  ];

  return (
    <>
      <SEO 
        title="Areas We Cover | Drainage Solutions Hampshire"
        description="A&B Drainage Solutions covers all of Hampshire and surrounding areas including Basingstoke, Southampton, Winchester, Aldershot and Reading."
        canonicalUrl="/areas"
      />

      <section className="pt-32 pb-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white uppercase mb-6 leading-tight">Areas We Cover</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Based centrally, we provide rapid response drainage services across the entirety of Hampshire and into surrounding counties.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-display font-bold text-white uppercase mb-6">Hampshire Wide Coverage</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  When you have a drainage emergency, speed is essential. Our fleet of fully equipped vans are strategically distributed to ensure we can reach most locations within our coverage area in under an hour. Whether you are in a city centre commercial unit or a rural domestic property, A&B Drainage Solutions Ltd will get to you.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {mainAreas.map((area, i) => (
                    <div key={i} className="flex items-center gap-2 text-foreground font-medium p-3 bg-card border border-border rounded">
                      <MapPin size={18} className="text-primary" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-card border border-border rounded-lg">
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">Not listed above?</h3>
                <p className="text-muted-foreground mb-6">
                  We frequently operate in towns and villages bordering Hampshire, including parts of Berkshire, Surrey, and West Sussex. If you are unsure whether we cover your area, please give us a call.
                </p>
                <a href="tel:01256688650" className="text-primary font-bold text-lg hover:underline flex items-center gap-2">
                  <Phone size={20} /> Call 01256 688 650 to check coverage
                </a>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-primary p-8 rounded-lg text-center">
                <h3 className="text-2xl font-display font-bold text-white uppercase mb-4">Local Experts</h3>
                <p className="text-white/90 mb-8">
                  Being local means we understand the specific drainage infrastructure and common issues found in Hampshire's diverse properties, from historic Winchester townhouses to modern Southampton developments.
                </p>
                <Link href="/contact" className="w-full bg-white text-primary hover:bg-white/90 py-4 rounded text-center font-bold uppercase tracking-wider flex items-center justify-center transition-all">
                  Request Callout
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}