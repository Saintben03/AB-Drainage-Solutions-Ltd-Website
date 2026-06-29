import { useId } from "react";

interface PipeSceneProps {
  className?: string;
  /** Background colour of the section below — the water body fades to this */
  fill?: string;
  /** Water surface shimmer colour */
  edgeColor?: string;
}

/**
 * Side-on cross-section of a straight drainage pipe cut lengthways.
 *
 * What you see from top to bottom:
 *   ━━━━━━━━━━━━━━━━━  ← TOP PIPE WALL (concrete, ~19% of height)
 *   ░░  interior  ░░   ← OPEN AIR INSIDE (dark, moss/grime, ~40%)
 *   ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈  ← WATER FLOWING L→R (animated, ~22%)
 *   ━━━━━━━━━━━━━━━━━  ← BOTTOM PIPE WALL (concrete, ~19%)
 *
 * Water flows left → right (animate-pipeflow is wavedrift reversed).
 * All heavy decoration is static SVG; only the wave div animates.
 */
export function PipeScene({
  className = "",
  fill = "hsl(0 0% 11%)",
  edgeColor = "#7ec8e3",
}: PipeSceneProps) {
  const id = useId().replace(/:/g, "");

  /* ── Wave path (surface of the water, fills down to viewBox bottom) ── */
  const WAVE =
    "M0,12 C180,2 360,22 540,12 C720,2 900,22 1080,12 C1260,2 1440,20 1440,20 L1440,80 L0,80 Z";

  const SHIMMER_A =
    "M0,10 C160,-1 340,18 520,10 C700,2 880,18 1060,10 C1240,2 1380,15 1440,11 L1440,15 C1380,19 1240,5 1060,14 C880,23 700,5 520,14 C340,23 160,3 0,14 Z";

  const SHIMMER_B =
    "M0,16 C140,8 300,22 460,16 C620,10 780,24 940,16 C1100,8 1280,20 1440,14 L1440,18 C1280,24 1100,12 940,20 C780,28 620,14 460,20 C300,26 140,12 0,20 Z";

  return (
    <div
      className={`pointer-events-none overflow-hidden relative leading-none ${className}`}
      aria-hidden="true"
    >
      {/* ══════════════════════════════════════════════════
          STATIC PIPE CROSS-SECTION
          viewBox 0 0 1440 200
          Top wall:    y 0–38
          Interior:    y 38–122
          Water zone:  y 122–164   ← filled by animated layer
          Bottom wall: y 164–200
      ══════════════════════════════════════════════════ */}
      <svg
        className="absolute top-0 left-0 w-full h-full block"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Top wall: very dark at crown, medium concrete at inner face */}
          <linearGradient id={`${id}-tw`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#0d0804" />
            <stop offset="65%"  stopColor="#2b1c0c" />
            <stop offset="100%" stopColor="#3c2812" />
          </linearGradient>

          {/* Bottom wall: medium concrete at inner face, fades to fill at base */}
          <linearGradient id={`${id}-bw`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#3c2812" />
            <stop offset="35%"  stopColor="#2b1c0c" />
            <stop offset="80%"  stopColor="#0d0804" />
            <stop offset="100%" stopColor={fill} />
          </linearGradient>

          {/* Interior air — dark with a subtle cylindrical highlight near the ceiling */}
          <linearGradient id={`${id}-air`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor="#1c1208" />
            <stop offset="100%" stopColor="#0c0804" />
          </linearGradient>

          {/* Soft radial highlight at interior ceiling (pipe curves toward us at top) */}
          <radialGradient id={`${id}-ceil`} cx="50%" cy="0%" r="55%">
            <stop offset="0%"   stopColor="#6b4a28" stopOpacity="0.28" />
            <stop offset="100%" stopColor="#6b4a28" stopOpacity="0"   />
          </radialGradient>
        </defs>

        {/* ── TOP PIPE WALL ── */}
        <rect x="0" y="0"  width="1440" height="38" fill={`url(#${id}-tw)`} />
        {/* Inner-face edge line (the cut surface of the wall) */}
        <rect x="0" y="36" width="1440" height="3"  fill="#5c3e20" opacity="0.55" />

        {/* ── INTERIOR AIR SPACE ── */}
        <rect x="0" y="38" width="1440" height="84" fill={`url(#${id}-air)`} />
        {/* Ceiling reflection — barrel curve illusion */}
        <rect x="0" y="38" width="1440" height="52" fill={`url(#${id}-ceil)`} />

        {/* ── MOSS PATCHES on interior ceiling / upper wall ── */}
        <ellipse cx="110"  cy="44" rx="30" ry="9"  fill="#1c3e09" opacity="0.9"  />
        <ellipse cx="128"  cy="50" rx="18" ry="7"  fill="#275210" opacity="0.8"  />
        <ellipse cx="93"   cy="49" rx="14" ry="6"  fill="#173008" opacity="0.85" />

        <ellipse cx="360"  cy="43" rx="34" ry="10" fill="#1d4009" opacity="0.9"  />
        <ellipse cx="382"  cy="50" rx="20" ry="8"  fill="#285512" opacity="0.8"  />
        <ellipse cx="340"  cy="49" rx="16" ry="6"  fill="#183608" opacity="0.85" />

        <ellipse cx="620"  cy="44" rx="28" ry="9"  fill="#1b3c09" opacity="0.88" />
        <ellipse cx="638"  cy="51" rx="16" ry="7"  fill="#244e10" opacity="0.78" />

        <ellipse cx="880"  cy="43" rx="32" ry="10" fill="#1d3f09" opacity="0.9"  />
        <ellipse cx="900"  cy="50" rx="19" ry="8"  fill="#275212" opacity="0.8"  />
        <ellipse cx="860"  cy="49" rx="15" ry="6"  fill="#173208" opacity="0.85" />

        <ellipse cx="1150" cy="44" rx="29" ry="9"  fill="#1c3d09" opacity="0.88" />
        <ellipse cx="1168" cy="51" rx="17" ry="7"  fill="#254e10" opacity="0.78" />
        <ellipse cx="1133" cy="50" rx="13" ry="5"  fill="#163208" opacity="0.83" />

        <ellipse cx="1390" cy="43" rx="26" ry="8"  fill="#1b3b09" opacity="0.88" />
        <ellipse cx="1406" cy="50" rx="15" ry="6"  fill="#244c10" opacity="0.78" />

        {/* ── GRIME DRIPS from ceiling ── */}
        <ellipse cx="210"  cy="50" rx="6"  ry="14" fill="#0f0a04" opacity="0.75" />
        <ellipse cx="210"  cy="63" rx="3"  ry="7"  fill="#0c0703" opacity="0.5"  />

        <ellipse cx="500"  cy="49" rx="8"  ry="16" fill="#0d0904" opacity="0.8"  />
        <ellipse cx="500"  cy="64" rx="4"  ry="8"  fill="#0b0703" opacity="0.55" />
        <ellipse cx="502"  cy="71" rx="2"  ry="4"  fill="#090603" opacity="0.4"  />

        <ellipse cx="760"  cy="50" rx="6"  ry="13" fill="#0f0904" opacity="0.72" />
        <ellipse cx="760"  cy="62" rx="3"  ry="6"  fill="#0c0803" opacity="0.5"  />

        <ellipse cx="1025" cy="49" rx="7"  ry="15" fill="#0e0904" opacity="0.76" />
        <ellipse cx="1025" cy="63" rx="3"  ry="7"  fill="#0b0703" opacity="0.52" />

        <ellipse cx="1300" cy="50" rx="6"  ry="12" fill="#0f0a04" opacity="0.72" />

        {/* ── WATERLINE GRIME (brown crust at water surface level) ── */}
        <rect x="0" y="119" width="1440" height="4" fill="#2c1c08" opacity="0.65" />
        <rect x="0" y="122" width="1440" height="2" fill="#1c1006" opacity="0.4"  />

        {/* Water zone left as transparent — filled by the animated layer */}

        {/* ── GRIME ON BOTTOM FLOOR ── */}
        <ellipse cx="140"  cy="166" rx="20" ry="5"  fill="#1c1005" opacity="0.6"  />
        <ellipse cx="420"  cy="165" rx="16" ry="4"  fill="#1c1005" opacity="0.55" />
        <ellipse cx="700"  cy="166" rx="22" ry="6"  fill="#1a0e04" opacity="0.65" />
        <ellipse cx="980"  cy="165" rx="18" ry="5"  fill="#1c1005" opacity="0.6"  />
        <ellipse cx="1260" cy="166" rx="20" ry="5"  fill="#1c1005" opacity="0.58" />

        {/* ── BOTTOM PIPE WALL ── */}
        {/* Inner-face edge line */}
        <rect x="0" y="163" width="1440" height="3"  fill="#5c3e20" opacity="0.5" />
        <rect x="0" y="164" width="1440" height="36" fill={`url(#${id}-bw)`} />
      </svg>

      {/* ══════════════════════════════════════════════════
          ANIMATED WATER LAYER
          Positioned to sit in the water zone of the viewBox:
            top  = 122/200 = 61%
            height = (164-122)/200 = 21%
          Uses animate-pipeflow (wavedrift reversed) so
          the wave scrolls LEFT→RIGHT (water flows right).
      ══════════════════════════════════════════════════ */}
      <div
        className="absolute left-0 w-full overflow-hidden"
        style={{ top: "61%", height: "21%" }}
      >
        <div className="flex w-[200%] h-full animate-pipeflow">
          {[0, 1].map((i) => {
            const gId = `${id}-wg-${i}`;
            return (
              <svg
                key={i}
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                className="w-1/2 h-full"
              >
                <defs>
                  <linearGradient id={gId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%"   stopColor={edgeColor} stopOpacity="0.95" />
                    <stop offset="28%"  stopColor="#142a42" />
                    <stop offset="100%" stopColor="#0c1825" />
                  </linearGradient>
                </defs>

                {/* Water body — fills from wave surface to bottom */}
                <path d={WAVE} fill={`url(#${gId})`} />

                {/* Shimmer ribbon A — brighter highlight on the crest */}
                <path
                  d={SHIMMER_A}
                  fill={edgeColor}
                  fillOpacity={0.55}
                  className="wave-shimmer-a"
                />

                {/* Shimmer ribbon B — subtle white foam */}
                <path
                  d={SHIMMER_B}
                  fill="#ffffff"
                  fillOpacity={0.22}
                  className="wave-shimmer-b"
                />
              </svg>
            );
          })}
        </div>
      </div>
    </div>
  );
}
