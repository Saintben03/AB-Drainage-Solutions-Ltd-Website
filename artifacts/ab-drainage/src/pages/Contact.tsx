import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { SEO } from "@/components/SEO";
import { ContactForm } from "@/components/ContactForm";
import { motion } from "framer-motion";

import heroImg from "@assets/site_files_1/g-01u.jpg";

const contactItems = [
  {
    icon: <Phone size={22} />,
    label: "Office Line",
    value: "01256 688 650",
    href: "tel:01256688650",
    isLink: true,
  },
  {
    icon: <Phone size={22} />,
    label: "Mobile / Emergency",
    value: "07498 062 710",
    href: "tel:07498062710",
    isLink: true,
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "info@abdrainage.co.uk",
    href: "mailto:info@abdrainage.co.uk",
    isLink: true,
  },
  {
    icon: <Clock size={22} />,
    label: "Hours",
    value: "24 Hours / 7 Days a Week",
    href: null,
    isLink: false,
  },
  {
    icon: <MapPin size={22} />,
    label: "Head Office Area",
    value: "Basingstoke, Hampshire",
    href: null,
    isLink: false,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us | A&B Drainage Solutions Ltd"
        description="Contact Hampshire's leading drainage experts. Available 24/7 for emergency callouts. Call 01256 688 650 or 07498 062 710."
        canonicalUrl="/contact"
      />

      {/* ── HERO ── */}
      <section className="pt-36 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="A&B Drainage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/97 via-background/85 to-background/40"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4"
          >
            Available 24/7 — Emergency or Planned Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-5xl md:text-7xl font-display font-bold text-white uppercase mb-6 leading-tight"
          >
            Get In <span className="text-accent">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="text-xl text-foreground/70 max-w-xl leading-relaxed"
          >
            We are available 24 hours a day, 7 days a week. For emergencies, call us directly — we aim to be on-site within the hour.
          </motion.p>
        </div>
      </section>

      {/* ── EMERGENCY STRIP ── */}
      <section className="bg-accent py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] mb-1">For Emergency Callouts</p>
              <p className="text-white font-display font-bold text-2xl md:text-3xl uppercase">Available Right Now — Typically 1 Hour ETA</p>
            </div>
            <a
              href="tel:07498062710"
              className="shrink-0 bg-white hover:bg-white/90 text-accent px-8 py-4 font-bold uppercase tracking-wider flex items-center gap-2 text-sm transition-all"
            >
              <Phone size={16} /> 07498 062 710
            </a>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Contact details */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">Direct Contact</p>
                <h2 className="text-3xl font-display font-bold text-white uppercase mb-10">
                  Reach Our Team
                </h2>
              </motion.div>

              <div className="space-y-0 bg-border flex flex-col gap-0.5">
                {contactItems.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-card p-6 flex items-center gap-5 border-l-4 border-l-accent"
                  >
                    <div className="w-11 h-11 bg-accent flex items-center justify-center text-white shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-[0.18em] mb-1">{item.label}</p>
                      {item.isLink && item.href ? (
                        <a href={item.href} className="text-xl font-display font-bold text-white hover:text-accent transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-xl font-display font-bold text-white">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-8 p-7 bg-card border-t-2 border-accent"
              >
                <p className="text-accent font-bold uppercase tracking-widest text-xs mb-2">FlexiPay Available</p>
                <p className="text-muted-foreground text-sm leading-relaxed">We offer flexible payment plans to help spread the cost of major drainage repairs. Ask our team for details.</p>
              </motion.div>
            </div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <ContactForm />
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}
