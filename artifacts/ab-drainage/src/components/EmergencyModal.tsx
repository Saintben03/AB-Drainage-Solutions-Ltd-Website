import { motion, AnimatePresence } from "framer-motion";
import { X, Phone } from "lucide-react";
import { useEffect } from "react";
import { SocialLinks } from "./SocialLinks";

interface EmergencyModalProps {
  open: boolean;
  onClose: () => void;
}

export const EmergencyModal = ({ open, onClose }: EmergencyModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="emergency-modal"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ backgroundColor: "hsl(32 98% 50%)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Emergency contact"
        >
          {/* Decorative circles */}
          <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full opacity-20 pointer-events-none"
            style={{ backgroundColor: "hsl(32 98% 35%)" }} />
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full opacity-20 pointer-events-none"
            style={{ backgroundColor: "hsl(32 98% 35%)" }} />
          <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full opacity-10 pointer-events-none"
            style={{ backgroundColor: "hsl(32 98% 35%)" }} />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-11 h-11 rounded-md border-2 border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close emergency panel"
          >
            <X size={22} strokeWidth={2.5} />
          </button>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-sm w-full mx-auto px-4">

            {/* Phone icon circle */}
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-6 shadow-lg">
              <Phone size={34} style={{ color: "hsl(32 98% 50%)" }} strokeWidth={2} />
            </div>

            {/* Eyebrow */}
            <p className="text-white/80 text-xs font-bold uppercase tracking-[0.22em] mb-3">
              Need a Drainage Expert?
            </p>

            {/* Hero heading */}
            <h2 className="text-white font-display font-extrabold uppercase leading-none mb-4"
              style={{ fontSize: "clamp(2.6rem, 10vw, 4.5rem)" }}>
              Call Us Now
            </h2>

            {/* Subtext */}
            <p className="text-white/85 text-sm sm:text-base mb-8 leading-relaxed">
              24/7 emergency callout — we typically arrive<br className="hidden sm:block" /> within the hour.
            </p>

            {/* Primary CTA */}
            <a
              href="tel:01256688650"
              className="w-full flex items-center justify-center gap-3 bg-white rounded-full py-4 px-6 font-bold uppercase tracking-wider text-sm sm:text-base transition-all hover:bg-white/90 active:scale-[0.98] shadow-xl"
              style={{ color: "hsl(32 98% 50%)" }}
            >
              <Phone size={20} strokeWidth={2.5} />
              Call 01256 688 650 Now!
            </a>

            {/* Secondary number */}
            <a
              href="tel:07498062710"
              className="mt-5 text-white/90 text-xs sm:text-sm font-bold uppercase tracking-[0.15em] hover:text-white transition-colors"
            >
              Or Mobile / Emergency: <span className="text-white">07498 062 710</span>
            </a>

            {/* Divider */}
            <div className="w-16 h-px bg-white/30 my-6" />

            {/* Social */}
            <p className="text-white/70 text-xs font-bold uppercase tracking-[0.22em] mb-3">
              Follow Us
            </p>
            <SocialLinks
              iconSize={22}
              itemClassName="text-white hover:text-white/70 transition-colors [&_svg]:w-6 [&_svg]:h-6 border border-white/30 rounded-full p-2 hover:border-white/60 hover:bg-white/10 transition-all"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
