import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { WaterWave } from "@/components/WaterWave";
import heroWorkersMobile from "@assets/hero-workers-mobile.png";

interface PageHeroProps {
  image: string;
  /** Phone-shaped (portrait) version of the hero image so text can sit over it without extreme zoom. */
  mobileImage?: string;
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
  mobileImage = heroWorkersMobile,
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
      {/* Background image — full-bleed behind the text. Mobile uses a portrait crop so the
          text sits over the fleet without cropping down to a single van. A <picture> with a
          media source means the browser downloads only ONE asset per viewport. */}
      <div className="absolute inset-0 z-0">
        <picture className="block w-full h-full">
          <source media="(min-width: 768px)" srcSet={image} />
          <img
            src={mobileImage}
            alt=""
            aria-hidden="true"
            style={objectPosition ? { objectPosition } : undefined}
            className="w-full h-full object-cover object-center saturate-[1.1] brightness-[0.95] contrast-[1.05]"
          />
        </picture>
        {/* Brand-blue filter — slightly heavier on mobile than desktop, but light enough
            that the workers stay clearly visible behind the text */}
        <div className="absolute inset-0 bg-[#0a2c47]/55 md:bg-[#0a2c47]/45" style={{ mixBlendMode: "multiply" }} />
        <div className="absolute inset-0 bg-[#0e4a78]/40 md:bg-[#0e4a78]/35" />
        {/* Scrim so overlaid text stays readable — on mobile the desktop left-gradient would
            cover the whole narrow screen and hide the image, so use a light top wash instead */}
        <div className="absolute inset-0 md:hidden bg-[linear-gradient(to_bottom,rgba(6,24,42,0.55)_0%,rgba(6,24,42,0.30)_40%,rgba(6,24,42,0.12)_70%,rgba(6,24,42,0.05)_100%)]" />
        <div className="absolute inset-0 hidden md:block bg-[linear-gradient(to_right,rgba(6,24,42,0.72)_0%,rgba(6,24,42,0.45)_38%,rgba(6,24,42,0.18)_64%,transparent_88%)]" />
        {/* Soft bottom fade for lower content + blends into the wave */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06182a]/65 via-transparent to-transparent" />
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
              className="text-sky-200 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-4 flex items-center gap-2 [text-shadow:0_1px_6px_rgba(0,0,0,0.7)]"
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
