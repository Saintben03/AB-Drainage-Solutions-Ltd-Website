import { motion, useReducedMotion } from "framer-motion";

interface AnimatedDividerProps {
  className?: string;
  lineClass?: string;
}

export function AnimatedDivider({
  className = "",
  lineClass = "to-zinc-200",
}: AnimatedDividerProps) {
  const reduced = useReducedMotion();
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`} aria-hidden="true">
      <motion.span
        initial={reduced ? false : { scaleX: 0, opacity: 0 }}
        whileInView={reduced ? undefined : { scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ transformOrigin: "right" }}
        className={`h-px w-full max-w-xs bg-gradient-to-r from-transparent ${lineClass}`}
      />
      <motion.span
        initial={reduced ? false : { scale: 0, rotate: 45 }}
        whileInView={reduced ? undefined : { scale: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.35, type: "spring", stiffness: 320, damping: 12 }}
        className="h-2 w-2 rotate-45 bg-accent shrink-0"
      />
      <motion.span
        initial={reduced ? false : { scaleX: 0, opacity: 0 }}
        whileInView={reduced ? undefined : { scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ transformOrigin: "left" }}
        className={`h-px w-full max-w-xs bg-gradient-to-l from-transparent ${lineClass}`}
      />
    </div>
  );
}
