import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { WaterWave } from "@/components/WaterWave";

interface PageHeroProps {
  image: string;
  imageAlt?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  /** Colour the base wave blends into — should match the next section's background. */
  waveFill?: string;
  /** Optional separate wave colour for mobile when the following section differs by breakpoint. */
  waveFillMobile?: string;
  /** CSS object-position for the background image (e.g. "center", "50% 40%") to control fleet framing. */
  objectPosition?: string;
}

export function PageHero({
  image,
  imageAlt = "A&B Drainage Solutions Ltd fleet",
  eyebrow,
  title,
  description,
  actions,
  children,
  waveFill = "#5392B6",
  waveFillMobile,
  objectPosition,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden min-h-[72vh] md:min-h-[64vh] flex items-center pt-24 md:pt-16 pb-20 md:pb-16 bg-background">
      {/* Background image — kept bright so the whole fleet is clearly visible */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={imageAlt}
          style={objectPosition ? { objectPosition } : undefined}
          className="w-full h-full object-cover object-center animate-heropan saturate-[1.15] brightness-[1.04] contrast-[1.05]"
        />
        {/* Subtle brand-blue hue — a light wash, not a heavy overlay */}
        <div className="absolute inset-0 bg-[#0e4a78]/22" style={{ mixBlendMode: "multiply" }} />
        {/* Gentle left scrim so overlaid text stays readable while the fleet still shows through */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(6,24,42,0.6)_0%,rgba(6,24,42,0.34)_34%,rgba(6,24,42,0.12)_58%,transparent_80%)]" />
        {/* Soft bottom fade for lower content + blends into the wave */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06182a]/60 via-transparent to-transparent" />
      </div>

      {waveFillMobile ? (
        <>
          <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px md:hidden" fill={waveFillMobile} />
          <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px hidden md:block" fill={waveFill} />
        </>
      ) : (
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill={waveFill} />
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative max-w-3xl">
          {/* Localised soft scrim — legibility without darkening the whole image */}
          <div className="absolute -inset-x-8 -inset-y-10 bg-black/40 blur-3xl rounded-3xl pointer-events-none -z-10" aria-hidden="true" />

          {eyebrow ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-accent text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-4 flex items-center gap-2"
            >
              {eyebrow}
            </motion.div>
          ) : null}

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-white uppercase tracking-normal mb-6 leading-[1.1] [text-shadow:0_2px_20px_rgba(0,0,0,0.6)]"
          >
            {title}
          </motion.h1>

          {description ? (
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-xl text-white/90 max-w-xl leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.85)]"
            >
              {description}
            </motion.p>
          ) : null}

          {actions ? (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              {actions}
            </motion.div>
          ) : null}

          {children}
        </div>
      </div>
    </section>
  );
}
