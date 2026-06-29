import { useId } from "react";

interface PipeSceneProps {
  className?: string;
  /** Colour of the section immediately below — fills the water body */
  fill?: string;
  /** Colour of the water surface shimmer edge */
  edgeColor?: string;
}

const WAVE_PATH =
  "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,120 L0,120 Z";

const SHIMMER_A =
  "M0,37 C210,73 450,3 690,39 C930,75 1170,3 1410,39 L1410,44 C1170,8 930,80 690,44 C450,8 210,78 0,42 Z";

const SHIMMER_B =
  "M0,44 C180,18 380,64 580,42 C780,20 980,66 1180,44 C1300,34 1380,40 1440,38 L1440,42 C1380,44 1300,38 1180,48 C980,70 780,24 580,46 C380,68 180,22 0,48 Z";

/**
 * Side-view of the inside of a drainage pipe.
 *
 * - Top portion: dark concrete wall with organic rough edge, grime drips,
 *   and moss clusters — all static SVG, zero JS overhead.
 * - Bottom portion: the same drifting wave + shimmer ribbons as WaterWave.
 *
 * Drop-in replacement for WaterWave wherever the section above is dark.
 */
export function PipeScene({
  className = "",
  fill = "#ffffff",
  edgeColor = "#bae6fd",
}: PipeSceneProps) {
  const id = useId().replace(/:/g, "");

  return (
    <div
      className={`pointer-events-none overflow-hidden relative leading-none ${className}`}
      aria-hidden="true"
    >
      {/* ────────────────────────────────────────────
          Static pipe interior illustration
          viewBox 0 0 1440 220 — wall zone y0-120,
          open air y120-160, water body y160-220
      ──────────────────────────────────────────── */}
      <svg
        className="absolute top-0 left-0 w-full h-full block"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Concrete wall — darkens toward top (barrel curves away) */}
          <linearGradient id={`${id}-wall`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#110d07" />
            <stop offset="35%" stopColor="#221608" />
            <stop offset="100%" stopColor="#3a2610" />
          </linearGradient>

          {/* Top highlight — pipe curves away from viewer at the crown */}
          <linearGradient id={`${id}-arc`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5c3e22" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#5c3e22" stopOpacity="0" />
          </linearGradient>

          {/* Wet sheen at wall/air boundary */}
          <linearGradient id={`${id}-sheen`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#4a6e8a" stopOpacity="0" />
            <stop offset="100%" stopColor="#4a6e8a" stopOpacity="0.18" />
          </linearGradient>

          {/* Wave gradient for animated layer */}
          <linearGradient id={`${id}-wv`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={edgeColor} />
            <stop offset="45%" stopColor={fill} />
            <stop offset="100%" stopColor={fill} />
          </linearGradient>
        </defs>

        {/* ── PIPE WALL — organic rough-bottom edge ── */}
        <path
          d={
            "M0,0 L1440,0 L1440,98 " +
            "Q1400,106 1358,96 Q1315,86 1272,98 Q1228,110 1184,97 " +
            "Q1140,84 1095,97 Q1048,110 1002,97 Q958,84 912,98 " +
            "Q866,112 820,98 Q773,84 728,98 Q682,112 635,98 " +
            "Q588,84 542,98 Q496,112 448,98 Q402,84 356,98 " +
            "Q310,112 263,98 Q216,84 170,98 Q123,112 80,99 " +
            "Q40,90 0,96 Z"
          }
          fill={`url(#${id}-wall)`}
        />

        {/* Barrel-curve highlight at crown */}
        <rect x="0" y="0" width="1440" height="24" fill={`url(#${id}-arc)`} />

        {/* Wet sheen at wall base */}
        <rect x="0" y="72" width="1440" height="40" fill={`url(#${id}-sheen)`} />

        {/* ── GRIME DEPOSITS — dark tarry blobs at random x positions ── */}
        {/* Each cluster: a large blob + smaller drip below */}
        <ellipse cx="70"   cy="102" rx="13" ry="20" fill="#0d0804" opacity="0.85" />
        <ellipse cx="72"   cy="119" rx="5"  ry="9"  fill="#090602" opacity="0.6" />

        <ellipse cx="248"  cy="100" rx="10" ry="16" fill="#110b04" opacity="0.8" />
        <ellipse cx="249"  cy="113" rx="4"  ry="7"  fill="#0c0804" opacity="0.55" />

        <ellipse cx="408"  cy="104" rx="15" ry="22" fill="#0e0903" opacity="0.88" />
        <ellipse cx="406"  cy="122" rx="6"  ry="10" fill="#090603" opacity="0.65" />
        <ellipse cx="409"  cy="130" rx="3"  ry="5"  fill="#060402" opacity="0.45" />

        <ellipse cx="575"  cy="101" rx="9"  ry="14" fill="#130e05" opacity="0.78" />
        <ellipse cx="576"  cy="113" rx="4"  ry="6"  fill="#0f0a04" opacity="0.55" />

        <ellipse cx="725"  cy="106" rx="18" ry="26" fill="#0c0803" opacity="0.92" />
        <ellipse cx="722"  cy="128" rx="7"  ry="12" fill="#080603" opacity="0.7" />
        <ellipse cx="726"  cy="137" rx="3"  ry="6"  fill="#060402" opacity="0.5" />

        <ellipse cx="885"  cy="102" rx="12" ry="18" fill="#100c04" opacity="0.82" />
        <ellipse cx="883"  cy="117" rx="5"  ry="9"  fill="#0c0904" opacity="0.62" />

        <ellipse cx="1048" cy="105" rx="14" ry="21" fill="#0f0a03" opacity="0.87" />
        <ellipse cx="1045" cy="122" rx="6"  ry="10" fill="#0b0803" opacity="0.65" />

        <ellipse cx="1215" cy="101" rx="10" ry="15" fill="#130e05" opacity="0.8" />
        <ellipse cx="1216" cy="113" rx="4"  ry="7"  fill="#0e0b04" opacity="0.58" />

        <ellipse cx="1378" cy="103" rx="13" ry="19" fill="#0e0a04" opacity="0.84" />
        <ellipse cx="1380" cy="119" rx="5"  ry="8"  fill="#0a0703" opacity="0.62" />

        {/* ── MOSS CLUSTERS — dark green organic blobs ── */}
        {/* Cluster 1 ~x=155 */}
        <ellipse cx="155"  cy="97"  rx="36" ry="12" fill="#1b380a" opacity="0.92" />
        <ellipse cx="175"  cy="104" rx="21" ry="8"  fill="#254e10" opacity="0.82" />
        <ellipse cx="136"  cy="103" rx="17" ry="7"  fill="#173008" opacity="0.87" />
        <ellipse cx="158"  cy="110" rx="13" ry="5"  fill="#2e601a" opacity="0.72" />

        {/* Cluster 2 ~x=470 */}
        <ellipse cx="470"  cy="96"  rx="42" ry="13" fill="#1c3c09" opacity="0.93" />
        <ellipse cx="495"  cy="105" rx="24" ry="9"  fill="#275213" opacity="0.83" />
        <ellipse cx="447"  cy="104" rx="19" ry="8"  fill="#183608" opacity="0.88" />
        <ellipse cx="472"  cy="113" rx="15" ry="5"  fill="#336819" opacity="0.73" />

        {/* Cluster 3 ~x=800 */}
        <ellipse cx="800"  cy="99"  rx="33" ry="12" fill="#1a3a08" opacity="0.9" />
        <ellipse cx="820"  cy="107" rx="19" ry="8"  fill="#244e10" opacity="0.8" />
        <ellipse cx="781"  cy="106" rx="16" ry="7"  fill="#163208" opacity="0.85" />
        <ellipse cx="802"  cy="114" rx="12" ry="5"  fill="#2f6218" opacity="0.7" />

        {/* Cluster 4 ~x=1120 */}
        <ellipse cx="1120" cy="97"  rx="38" ry="13" fill="#1c3e09" opacity="0.92" />
        <ellipse cx="1143" cy="106" rx="22" ry="8"  fill="#265512" opacity="0.82" />
        <ellipse cx="1098" cy="105" rx="18" ry="7"  fill="#183608" opacity="0.87" />
        <ellipse cx="1122" cy="113" rx="14" ry="5"  fill="#326519" opacity="0.72" />

        {/* Cluster 5 near right ~x=1360 */}
        <ellipse cx="1360" cy="98"  rx="30" ry="11" fill="#1b3c08" opacity="0.9" />
        <ellipse cx="1376" cy="106" rx="17" ry="7"  fill="#244e10" opacity="0.8" />
        <ellipse cx="1344" cy="105" rx="14" ry="6"  fill="#163208" opacity="0.85" />

        {/* ── WATER STAIN STREAKS — thin dark drips from wall ── */}
        <rect x="298"  y="92"  width="3" height="45" rx="1" fill="#0c0905" opacity="0.38" />
        <rect x="300"  y="128" width="2" height="20" rx="1" fill="#0c0905" opacity="0.22" />

        <rect x="648"  y="90"  width="3" height="42" rx="1" fill="#0a0804" opacity="0.42" />
        <rect x="650"  y="124" width="2" height="16" rx="1" fill="#0a0804" opacity="0.28" />

        <rect x="988"  y="93"  width="3" height="46" rx="1" fill="#0b0905" opacity="0.38" />

        <rect x="1290" y="91"  width="3" height="40" rx="1" fill="#0c0904" opacity="0.4" />
        <rect x="1292" y="122" width="2" height="18" rx="1" fill="#0c0904" opacity="0.24" />

        {/* ── Flat fill below the wave for seamless colour join ── */}
        <rect x="0" y="170" width="1440" height="50" fill={fill} />
      </svg>

      {/* ────────────────────────────────────────────
          Animated water — same drift + shimmer as WaterWave
          Sits as an absolute layer at the bottom of the component
      ──────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <div className="flex w-[200%] animate-wavedrift">
          {[0, 1].map((i) => {
            const wvId = `${id}-wv2-${i}`;
            return (
              <svg
                key={i}
                viewBox="0 0 1440 120"
                preserveAspectRatio="none"
                className="w-1/2 h-12 md:h-[4.5rem]"
              >
                <defs>
                  <linearGradient id={wvId} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={edgeColor} />
                    <stop offset="45%" stopColor={fill} />
                    <stop offset="100%" stopColor={fill} />
                  </linearGradient>
                </defs>

                <path d={WAVE_PATH} fill={`url(#${wvId})`} />

                <path
                  d={SHIMMER_A}
                  fill={edgeColor}
                  fillOpacity={0.45}
                  className="wave-shimmer-a"
                />
                <path
                  d={SHIMMER_B}
                  fill="#ffffff"
                  fillOpacity={0.28}
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
