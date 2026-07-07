import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FaqItem {
  q: string;
  a: string;
}

interface FaqSectionProps {
  items: FaqItem[];
  heading?: string;
  eyebrow?: string;
  className?: string;
  emitSchema?: boolean;
}

export function FaqSection({
  items,
  heading = "Frequently Asked Questions",
  eyebrow = "Good to Know",
  className = "",
  emitSchema = true,
}: FaqSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  if (!items || items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };

  return (
    <section className={`py-20 bg-white relative ${className}`}>
      {emitSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      )}
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-10">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">{eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 uppercase leading-tight flex items-center gap-3">
            <HelpCircle className="text-accent shrink-0" size={30} />
            {heading}
          </h2>
        </div>

        <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 text-left py-5 group"
                >
                  <span className="font-bold text-zinc-900 text-base md:text-lg group-hover:text-accent transition-colors">
                    {f.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-accent shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="text-zinc-600 leading-relaxed pb-5 pr-8">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
