import { useRef, useState, useEffect } from "react";

/**
 * Seamless, gapless looping background video for the MOBILE hero.
 *
 * Two problems this solves that a plain <video loop> does not:
 *  1. iOS Safari IGNORES `object-fit: cover` on <video> and letterboxes the clip
 *     with black bars (the top bar showed as a "black strip" under the nav). We
 *     size the video with the transform-cover technique (min-w/min-h + centre
 *     translate) instead of object-fit, which every browser honours.
 *  2. A plain `loop` hard-cuts from the last frame back to the first — an obvious
 *     jump. We run TWO copies of the clip and crossfade one into the other just
 *     before the end, so the loop is invisible and never gaps.
 *
 * The still image stays behind (rendered by PageHero) and the video fades IN once
 * it actually starts painting, so there is never a black flash before first paint.
 */

const FADE = 0.9; // seconds of crossfade overlap at the loop boundary

const coverClass =
  "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto max-w-none transition-opacity duration-[900ms] ease-linear";

export function HeroVideoLoop({
  src,
  filterClass = "",
}: {
  src: string;
  /** Tailwind filter classes (saturate/brightness/contrast) to match the still image. */
  filterClass?: string;
}) {
  const vA = useRef<HTMLVideoElement>(null);
  const vB = useRef<HTMLVideoElement>(null);
  const switching = useRef(false); // one handoff per loop cycle, even if timeupdate fires repeatedly
  const [activeA, setActiveA] = useState(true);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Kick off the first clip. Muted + playsInline lets iOS autoplay inline.
    vA.current?.play().catch(() => {});
  }, []);

  const onTime = (self: "A" | "B") => () => {
    const cur = (self === "A" ? vA : vB).current;
    const other = (self === "A" ? vB : vA).current;
    const selfIsActive = (self === "A") === activeA;
    if (!cur || !other || !selfIsActive || !cur.duration) return;
    if (!ready) setReady(true);
    if (cur.currentTime < cur.duration - FADE) {
      switching.current = false; // safely mid-clip — arm the next handoff
      return;
    }
    if (switching.current) return; // handoff already triggered this cycle
    switching.current = true;
    other.currentTime = 0;
    other.play().catch(() => {});
    setActiveA(self !== "A"); // hand the "active" flag to the other clip
  };

  // When a clip finishes its fade-out tail, park it at frame 0 ready for next turn.
  const onEnded = (self: "A" | "B") => () => {
    const cur = (self === "A" ? vA : vB).current;
    if (cur) {
      cur.pause();
      cur.currentTime = 0;
    }
  };

  const shared = {
    src,
    muted: true,
    playsInline: true,
    preload: "auto" as const,
    "aria-hidden": true,
    tabIndex: -1,
  };

  return (
    <>
      <video
        {...shared}
        ref={vA}
        autoPlay
        onTimeUpdate={onTime("A")}
        onEnded={onEnded("A")}
        className={`${coverClass} ${filterClass} ${ready && activeA ? "opacity-100" : "opacity-0"}`}
      />
      <video
        {...shared}
        ref={vB}
        onTimeUpdate={onTime("B")}
        onEnded={onEnded("B")}
        className={`${coverClass} ${filterClass} ${ready && !activeA ? "opacity-100" : "opacity-0"}`}
      />
    </>
  );
}
