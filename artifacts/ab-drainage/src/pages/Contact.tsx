import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <>
      <SEO 
        title="Contact Us | A&B Drainage Solutions Ltd"
        description="Contact Hampshire's leading drainage experts. Available 24/7 for emergency callouts. Call 01256 688 650 or 07498 062 710."
        canonicalUrl="/contact"
      />

      <section className="pt-32 pb-16 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white uppercase mb-6 leading-tight">Contact Us</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are available 24 hours a day, 7 days a week. For emergencies, please call us immediately.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-display font-bold text-white uppercase mb-8 pb-4 border-b border-white/10">Direct Contact</h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold uppercase tracking-widest mb-1">Office Line</p>
                      <a href="tel:01256688650" className="text-2xl font-display font-bold text-white hover:text-primary transition-colors">01256 688 650</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center shrink-0">
                      <Phone className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold uppercase tracking-widest mb-1">Mobile / Emergency</p>
                      <a href="tel:07498062710" className="text-2xl font-display font-bold text-white hover:text-primary transition-colors">07498 062 710</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center shrink-0">
                      <Mail className="text-foreground" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold uppercase tracking-widest mb-1">Email</p>
                      <a href="mailto:info@abdrainage.co.uk" className="text-lg font-bold text-white hover:text-primary transition-colors">info@abdrainage.co.uk</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center shrink-0">
                      <Clock className="text-foreground" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold uppercase tracking-widest mb-1">Hours</p>
                      <p className="text-lg font-bold text-white">24 Hours / 7 Days a Week</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary rounded flex items-center justify-center shrink-0">
                      <MapPin className="text-foreground" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-semibold uppercase tracking-widest mb-1">Head Office Area</p>
                      <p className="text-lg font-bold text-white">Basingstoke, Hampshire</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}