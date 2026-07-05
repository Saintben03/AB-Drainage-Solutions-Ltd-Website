import { useId } from "react";

interface WaterWaveProps {
  className?: string;
  fill?: string;
  /** Colour of the leading "water" edge that fades into `fill`. */
  edgeColor?: string;
  /** Render the light shimmer/foam ribbons. Set false for a perfectly flat transition. */
  shimmer?: boolean;
  /** Tailwind height classes for the wave SVG. Taller waves cover more of the
      section above them — useful for hiding a misty/gradient background edge. */
  heightClass?: string;
}

const WAVE_PATH =
  "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,120 L0,120 Z";

/**
 * Thin closed-path ribbons that sit along the wave crest.
 * They scroll with the main wave but shimmer in opacity independently,
 * simulating light catching on a water surface.
 * Being thin strips (not filled to the bottom) they cannot stack into
 * a solid band — they only add a subtle highlight over the gradient.
 */
const SHIMMER_A =
  "M0,37 C210,73 450,3 690,39 C930,75 1170,3 1410,39 L1410,44 C1170,8 930,80 690,44 C450,8 210,78 0,42 Z";

const SHIMMER_B =
  "M0,44 C180,18 380,64 580,42 C780,20 980,66 1180,44 C1300,34 1380,40 1440,38 L1440,42 C1380,44 1300,38 1180,48 C980,70 780,24 580,46 C380,68 180,22 0,48 Z";

export function WaterWave({
  className = "",
  fill = "#ffffff",
  edgeColor = "#bae6fd",
  shimmer = true,
  heightClass = "h-12 md:h-20",
}: WaterWaveProps) {
  const rawId = useId().replace(/:/g, "");

  return (
    <div
      className={`pointer-events-none overflow-hidden leading-none ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-[200%] animate-wavedrift">
        {[0, 1].map((i) => {
          const gradId = `${rawId}-wave-${i}`;
          return (
            <svg
              key={i}
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              className={`w-1/2 ${heightClass}`}
            >
              <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={edgeColor} />
                  <stop offset="45%" stopColor={fill} />
                  <stop offset="100%" stopColor={fill} />
                </linearGradient>
              </defs>

              {/* Base wave body — gradient from edge colour to destination fill */}
              <path d={WAVE_PATH} fill={`url(#${gradId})`} />

              {shimmer && (
                <>
                  {/* Shimmer ribbon A — light blue highlight running along the crest */}
                  <path
                    d={SHIMMER_A}
                    fill={edgeColor}
                    fillOpacity={0.45}
                    className="wave-shimmer-a"
                  />

                  {/* Shimmer ribbon B — near-white foam stripe slightly lower */}
                  <path
                    d={SHIMMER_B}
                    fill="#ffffff"
                    fillOpacity={0.28}
                    className="wave-shimmer-b"
                  />
                </>
              )}
            </svg>
          );
        })}
      </div>
    </div>
  );
}
