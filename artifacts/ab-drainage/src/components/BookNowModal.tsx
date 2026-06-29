import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, X } from "lucide-react";

interface BookNowModalProps {
  open: boolean;
  onClose: () => void;
}

export const BookNowModal = ({ open, onClose }: BookNowModalProps) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            initial={{ scale: 0.55, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.55, opacity: 0, y: 40 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg sm:aspect-square max-h-[92vh] bg-accent text-white flex flex-col items-center justify-center text-center px-8 py-12 shadow-2xl shadow-black/60 overflow-hidden"
          >
            {/* Decorative corner accents */}
            <div className="pointer-events-none absolute -top-16 -right-16 w-48 h-48 rounded-full bg-white/10" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 w-56 h-56 rounded-full bg-black/10" />

            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-10"
            >
              <X size={28} />
            </button>

            {/* Pulsing phone icon */}
            <div className="relative flex items-center justify-center mb-8">
              <motion.span
                className="absolute inline-flex h-20 w-20 rounded-full bg-white/30"
                animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
              />
              <span className="relative flex items-center justify-center h-20 w-20 rounded-full bg-white text-accent">
                <Phone size={34} />
              </span>
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/80 mb-3">
              Need a Drainage Expert?
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase leading-tight mb-2">
              Call Us Now
            </h2>
            <p className="text-sm text-white/85 max-w-xs mb-8">
              24/7 emergency callout — we typically arrive within the hour.
            </p>

            <a
              href="tel:01256688650"
              className="group flex items-center gap-3 bg-white text-accent px-8 py-5 font-display font-bold text-lg md:text-xl uppercase tracking-wide shadow-lg hover:bg-background hover:text-white transition-colors"
            >
              <Phone size={22} className="shrink-0" />
              Call 01256 688 650 Now!
            </a>

            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/70">
              Or mobile / emergency:{" "}
              <a href="tel:07498062710" className="font-bold text-white hover:underline">
                07498 062 710
              </a>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
