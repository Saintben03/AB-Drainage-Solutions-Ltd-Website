import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { WaterWave } from "@/components/WaterWave";
import { HeroVideoLoop } from "@/components/HeroVideoLoop";
import heroBurstMobile from "@assets/hero-burst-mobile.png";
import heroBurstVideo from "@assets/generated_videos/drain_water_burst_loop.mp4";

interface PageHeroProps {
  image: string;
  /** Phone-shaped (portrait) version of the hero image so text can sit over it without extreme zoom. */
  mobileImage?: string;
  /** Looping background video for the MOBILE hero only. Pass null to fall back to mobileImage. */
  mobileVideo?: string | null;
  /** Looping background video for the DESKTOP hero only (landscape). Omit to keep the still `image`. */
  desktopVideo?: string | null;
  imageAlt?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  /** Colour the base wave blends into — should match the next section's background. */
  waveFill?: string;
  /** Home-only flag: when set, the hero renders ONLY the desktop base wave and skips a
      mobile hero wave — on mobile the flowing divider instead lives at the TOP of the
      following section (see Home.tsx), so the hero ends cleanly on the dark photo. */
  waveFillMobile?: string;
  /** CSS object-position for the background image (e.g. "center", "50% 40%") to control fleet framing. */
  objectPosition?: string;
}

/** True only on phone viewports where the user allows motion — gates mounting the hero video. */
function useMobileVideoEnabled() {
  const [enabled, setEnabled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mqMobile = window.matchMedia("(max-width: 767px)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(mqMobile.matches && !mqReduce.matches);
    update();
    mqMobile.addEventListener("change", update);
    mqReduce.addEventListener("change", update);
    return () => {
      mqMobile.removeEventListener("change", update);
      mqReduce.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}

/** True only on desktop/tablet viewports where the user allows motion — gates mounting the desktop hero video. */
function useDesktopVideoEnabled() {
  const [enabled, setEnabled] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 768px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const mqDesktop = window.matchMedia("(min-width: 768px)");
    const mqReduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(mqDesktop.matches && !mqReduce.matches);
    update();
    mqDesktop.addEventListener("change", update);
    mqReduce.addEventListener("change", update);
    return () => {
      mqDesktop.removeEventListener("change", update);
      mqReduce.removeEventListener("change", update);
    };
  }, []);

  return enabled;
}

export function PageHero({
  image,
  mobileImage = heroBurstMobile,
  mobileVideo = heroBurstVideo,
  desktopVideo = null,
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
  // Only mount the <video> on phone viewports with motion allowed — CSS-hiding it on
  // desktop would still download the ~5MB clip. Everyone else gets the still image.
  const videoEnabled = useMobileVideoEnabled();
  const showVideo = Boolean(mobileVideo) && videoEnabled;
  const desktopVideoEnabled = useDesktopVideoEnabled();
  const showDesktopVideo = Boolean(desktopVideo) && desktopVideoEnabled;

  return (
    <section className="relative overflow-hidden min-h-[92vh] md:min-h-[64vh] flex items-end md:items-center pt-24 md:pt-16 pb-24 md:pb-16 bg-background">
      {/* Screen-reader-only description of the hero visual — the background image/video are
          decorative (aria-hidden), so this is the one place the scene is described for a11y. */}
      <span className="sr-only">{imageAlt}</span>
      {/* Background image — full-bleed behind the text. Mobile uses a portrait crop so the
          text sits over the fleet without cropping down to a single van. A <picture> with a
          media source means the browser downloads only ONE asset per viewport. */}
      <div className="absolute inset-0 z-0">
        {/* The still image ALWAYS renders — on mobile it sits underneath the video as a
            hand-rolled poster. iOS Safari letterboxes the native poster attribute (it
            ignores object-fit on posters), which showed as a black strip under the nav. */}
        <picture className="block w-full h-full">
          <source media="(min-width: 768px)" srcSet={image} />
          <img
            src={mobileImage}
            alt=""
            aria-hidden="true"
            style={objectPosition ? { objectPosition } : undefined}
            className={`w-full h-full object-cover object-center saturate-[1.35] brightness-[1.08] contrast-[1.1] md:saturate-[1.1] md:brightness-[0.95] md:contrast-[1.05]${showVideo ? "" : " animate-heropan-mobile"}`}
          />
        </picture>
        {/* MOBILE ONLY — looping background video of water bursting from the drain.
            Rendered only on phone viewports with motion allowed (reduced-motion users
            keep the still image). Poster shows instantly while the clip buffers. */}
        {showVideo && mobileVideo ? (
          <div className="md:hidden absolute inset-0 overflow-hidden">
            <HeroVideoLoop
              src={mobileVideo}
              filterClass="saturate-[1.35] brightness-[1.08] contrast-[1.1]"
            />
          </div>
        ) : null}
        {/* DESKTOP ONLY — landscape looping background video (e.g. a burst street main).
            Mounted only on tablet/desktop with motion allowed; the still `image` above acts
            as the poster while it buffers and for reduced-motion users. */}
        {showDesktopVideo && desktopVideo ? (
          <div className="hidden md:block absolute inset-0 overflow-hidden">
            <HeroVideoLoop
              src={desktopVideo}
              filterClass="saturate-[1.1] brightness-[0.95] contrast-[1.05]"
            />
          </div>
        ) : null}
        {/* MOBILE — fencing-division-style hero: bright dramatic image, text anchored at the
            bottom over dark gradients + a soft brand-blue colour cast. No heavy tint. */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
        <div className="absolute inset-0 md:hidden bg-gradient-to-r from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-0 md:hidden bg-gradient-to-r from-[#01618E]/40 via-[#01618E]/5 to-transparent" style={{ mixBlendMode: "color" }} />
        {/* DESKTOP — unchanged brand-blue filter stack */}
        <div className="absolute inset-0 hidden md:block bg-[#0a2c47]/45" style={{ mixBlendMode: "multiply" }} />
        <div className="absolute inset-0 hidden md:block bg-[#0e4a78]/35" />
        <div className="absolute inset-0 hidden md:block bg-[linear-gradient(to_right,rgba(6,24,42,0.72)_0%,rgba(6,24,42,0.45)_38%,rgba(6,24,42,0.18)_64%,transparent_88%)]" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-t from-[#06182a]/65 via-transparent to-transparent" />
      </div>

      {waveFillMobile ? (
        /* Home: on mobile the flowing divider lives at the TOP of the next (Trusted By)
           section — see Home.tsx — so the hero ends cleanly on the dark photo. On DESKTOP
           the hero → schedule-strip transition is a SMOOTH curved cut (soft S-wave, no sharp
           angles) instead of an animated wave. Fill matches the schedule strip; a subtle
           brand hairline traces the crest. */
        <div
          aria-hidden="true"
          className="hidden md:block absolute bottom-0 left-0 w-full z-[5] -mb-px h-16 lg:h-20 overflow-hidden pointer-events-none leading-none"
        >
          <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full">
            <path d="M0,46 C240,14 480,14 720,40 C960,66 1200,66 1440,38 L1440,80 L0,80 Z" fill={waveFill} />
            <path
              d="M0,46 C240,14 480,14 720,40 C960,66 1200,66 1440,38"
              fill="none"
              stroke="#5392B6"
              strokeWidth={2}
              strokeOpacity={0.55}
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
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
