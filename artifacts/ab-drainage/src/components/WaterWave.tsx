import { useId } from "react";

interface WaterWaveProps {
  className?: string;
  fill?: string;
  /** Colour of the leading "water" edge that fades into `fill`. */
  edgeColor?: string;
  /** Where the water edge sits: "top" (crest, default) or "bottom" (inside base). */
  edgePosition?: "top" | "bottom";
}

const WAVE_PATH =
  "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,120 L0,120 Z";

export function WaterWave({
  className = "",
  fill = "#ffffff",
  edgeColor = "#bae6fd",
  edgePosition = "top",
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
              className="w-1/2 h-12 md:h-20"
            >
              <defs>
                <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                  {edgePosition === "bottom" ? (
                    <>
                      <stop offset="0%" stopColor={fill} />
                      <stop offset="60%" stopColor={fill} />
                      <stop offset="100%" stopColor={edgeColor} />
                    </>
                  ) : (
                    <>
                      <stop offset="0%" stopColor={edgeColor} />
                      <stop offset="45%" stopColor={fill} />
                      <stop offset="100%" stopColor={fill} />
                    </>
                  )}
                </linearGradient>
              </defs>
              <path d={WAVE_PATH} fill={`url(#${gradId})`} />
            </svg>
          );
        })}
      </div>
    </div>
  );
}
