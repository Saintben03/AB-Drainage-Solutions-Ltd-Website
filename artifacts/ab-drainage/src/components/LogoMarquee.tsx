interface MarqueeLogo {
  src: string;
  alt: string;
  className?: string;
}

function LogoGroup({ logos, ariaHidden }: { logos: MarqueeLogo[]; ariaHidden?: boolean }) {
  const repeated = [...logos, ...logos, ...logos, ...logos];
  return (
    <div
      className="flex shrink-0 items-center gap-14 md:gap-24 pr-14 md:pr-24"
      aria-hidden={ariaHidden}
    >
      {repeated.map((logo, i) => (
        <img
          key={i}
          src={logo.src}
          alt={logo.alt}
          loading="eager"
          decoding="async"
          className={`w-auto object-contain shrink-0 drop-shadow-[0_6px_14px_rgba(15,23,42,0.18)] hover:scale-110 transition-transform duration-300 ${logo.className ?? "h-10 md:h-14"}`}
        />
      ))}
    </div>
  );
}

export function LogoMarquee({ logos, fadeColor = "#e0f2fe" }: { logos: MarqueeLogo[]; fadeColor?: string }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex w-max animate-marquee will-change-transform hover:[animation-play-state:paused]">
        <LogoGroup logos={logos} />
        <LogoGroup logos={logos} ariaHidden />
      </div>
      {/* Edge fades (gradient overlays instead of mask-image — avoids iOS Safari mask+transform glitch) */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-12 md:w-20 z-10"
        style={{ background: `linear-gradient(to right, ${fadeColor}, transparent)` }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-12 md:w-20 z-10"
        style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }}
      />
    </div>
  );
}
