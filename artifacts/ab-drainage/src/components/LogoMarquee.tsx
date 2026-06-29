interface MarqueeLogo {
  src: string;
  alt: string;
  className?: string;
}

function LogoGroup({ logos, ariaHidden }: { logos: MarqueeLogo[]; ariaHidden?: boolean }) {
  const repeated = [...logos, ...logos, ...logos];
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
          className={`w-auto object-contain shrink-0 drop-shadow-[0_6px_14px_rgba(15,23,42,0.18)] hover:scale-110 transition-transform duration-300 ${logo.className ?? "h-10 md:h-14"}`}
        />
      ))}
    </div>
  );
}

export function LogoMarquee({ logos }: { logos: MarqueeLogo[] }) {
  return (
    <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <LogoGroup logos={logos} />
        <LogoGroup logos={logos} ariaHidden />
      </div>
    </div>
  );
}
