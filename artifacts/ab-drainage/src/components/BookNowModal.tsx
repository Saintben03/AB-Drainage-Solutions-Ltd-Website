import { useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Phone, X } from "lucide-react";
import { SocialLinks } from "./SocialLinks";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/utils";

interface BookNowModalProps {
  open: boolean;
  onClose: () => void;
}

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 260, damping: 22 },
  },
};

export const BookNowModal = ({ open, onClose }: BookNowModalProps) => {
  const reduced = useReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    lockBodyScroll();
    return () => {
      document.removeEventListener("keydown", onKey);
      unlockBodyScroll();
      previouslyFocused?.focus?.();
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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-lg p-4"
          aria-modal="true"
          role="dialog"
          aria-label="Book a drainage callout"
        >
          <motion.div
            ref={dialogRef}
            initial={reduced ? { opacity: 0 } : { scale: 0.5, opacity: 0, y: 60, rotate: -2 }}
            animate={reduced ? { opacity: 1 } : { scale: 1, opacity: 1, y: 0, rotate: 0 }}
            exit={reduced ? { opacity: 0 } : { scale: 0.5, opacity: 0, y: 60 }}
            transition={reduced ? { duration: 0.2 } : { type: "spring", stiffness: 220, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl sm:aspect-square max-h-[94vh] bg-accent text-white flex flex-col items-center justify-center text-center px-8 sm:px-14 py-14 shadow-2xl shadow-black/60 overflow-y-auto rounded-2xl"
          >
            {/* Animated decorative blobs (clipped to rounded corners) */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl" aria-hidden="true">
              <motion.div
                className="absolute -top-16 -right-16 w-60 h-60 rounded-full bg-white/10"
                animate={reduced ? undefined : { scale: [1, 1.18, 1], x: [0, 12, 0], y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-black/10"
                animate={reduced ? undefined : { scale: [1, 1.22, 1], x: [0, -14, 0] }}
                transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
              />
            </div>

            <button
              ref={closeBtnRef}
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 text-white/80 hover:text-white hover:rotate-90 transition-all duration-300 z-10"
            >
              <X size={30} />
            </button>

            <motion.div
              variants={reduced ? undefined : container}
              initial={reduced ? false : "hidden"}
              animate={reduced ? false : "show"}
              className="relative z-[1] flex flex-col items-center"
            >
              {/* Pulsing phone icon */}
              <motion.div variants={reduced ? undefined : item} className="relative flex items-center justify-center mb-8">
                <motion.span
                  className="absolute inline-flex h-24 w-24 rounded-full bg-white/30"
                  animate={reduced ? undefined : { scale: [1, 1.9], opacity: [0.6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeOut" }}
                />
                <motion.span
                  className="relative flex items-center justify-center h-24 w-24 rounded-full bg-white text-accent"
                  animate={reduced ? undefined : { rotate: [0, -12, 12, -12, 0] }}
                  transition={{ repeat: Infinity, repeatDelay: 2.2, duration: 0.9, ease: "easeInOut" }}
                >
                  <Phone size={40} />
                </motion.span>
              </motion.div>

              <motion.p
                variants={reduced ? undefined : item}
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-white/80 mb-3"
              >
                Need a Drainage Expert?
              </motion.p>
              <motion.h2
                variants={reduced ? undefined : item}
                className="text-4xl md:text-5xl font-display font-bold uppercase leading-tight mb-3"
              >
                Call Us Now
              </motion.h2>
              <motion.p
                variants={reduced ? undefined : item}
                className="text-sm sm:text-base text-white/85 max-w-sm mb-8"
              >
                24/7 emergency callout — we typically arrive within the hour.
              </motion.p>

              <motion.a
                variants={reduced ? undefined : item}
                whileHover={reduced ? undefined : { scale: 1.04 }}
                whileTap={reduced ? undefined : { scale: 0.97 }}
                href="tel:01256688650"
                className="flex items-center gap-3 bg-white text-accent px-8 sm:px-10 py-5 font-display font-bold text-lg md:text-2xl uppercase tracking-wide shadow-lg rounded-md hover:bg-background hover:text-white transition-colors"
              >
                <Phone size={24} className="shrink-0" />
                Call 01256 688 650 Now!
              </motion.a>

              <motion.p
                variants={reduced ? undefined : item}
                className="mt-6 text-xs sm:text-sm uppercase tracking-[0.2em] text-white/70"
              >
                Or mobile / emergency:{" "}
                <a href="tel:07498062710" className="font-bold text-white hover:underline">
                  07498 062 710
                </a>
              </motion.p>

              {/* Social links */}
              <motion.div variants={reduced ? undefined : item} className="mt-8 flex flex-col items-center gap-3">
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-white/70">Follow Us</span>
                <SocialLinks
                  iconSize={22}
                  itemClassName="w-12 h-12 rounded-full border border-white/40 bg-white/10 flex items-center justify-center hover:bg-white hover:text-accent hover:-translate-y-1 hover:scale-110"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
