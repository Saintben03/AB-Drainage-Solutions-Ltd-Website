import { useId } from "react";

interface WaterWaveProps {
  className?: string;
  fill?: string;
  /** Colour of the water surface — defaults to the brand light blue. */
  edgeColor?: string;
}

/**
 * Four stacked SVG wave layers scrolling at different speeds and opposite
 * directions. The interference between layers creates a convincing "flowing
 * water" look without any extra libraries.
 *
 * Layer order (back → front):
 *   0 · deep swell   22 s  →   low opacity
 *   1 · mid swell    16 s  ←   medium opacity (reverse)
 *   2 · surface chop  9 s  →   full opacity (main visible wave)
 *   3 · foam ribbon   5 s  ←   thin highlight ribbon (reverse)
 */

// Natural-looking wave shapes in a 1440×120 viewBox (y=0 top, y=120 bottom).
// Each has a different peak distribution so the layers produce interference.
const PATHS = [
  // Layer 0 — long, gentle deep swells
  "M0,65 C280,88 540,42 800,66 C1060,90 1240,48 1440,65 L1440,120 L0,120 Z",
  // Layer 1 — mid ocean chop (peaks offset from layer 0)
  "M0,52 C190,72 410,28 650,54 C890,80 1110,26 1350,54 C1395,59 1420,57 1440,52 L1440,120 L0,120 Z",
  // Layer 2 — choppy surface (most visible)
  "M0,56 C110,40 230,68 390,50 C550,32 710,76 870,54 C1030,32 1190,72 1330,52 C1380,44 1415,60 1440,56 L1440,120 L0,120 Z",
  // Layer 3 — foam ribbon (closed thin path running along layer-2 crests)
  "M0,55 C110,38 230,67 390,48 C550,30 710,74 870,52 C1030,30 1190,70 1330,50 C1380,42 1415,58 1440,55 L1440,60 C1415,64 1380,48 1330,56 C1190,76 1030,36 870,58 C710,80 550,36 390,54 C230,72 110,44 0,60 Z",
] as const;

type LayerCfg = {
  pathIdx: 0 | 1 | 2 | 3;
  duration: number;
  reverse: boolean;
  /** gradient top-stop opacity (0–1) — null = no gradient, use solid foam fill */
  surfaceOp: number | null;
  midOp: number;
};

const LAYERS: LayerCfg[] = [
  { pathIdx: 0, duration: 22, reverse: false, surfaceOp: 0.28, midOp: 0.10 },
  { pathIdx: 1, duration: 16, reverse: true,  surfaceOp: 0.60, midOp: 0.22 },
  { pathIdx: 2, duration: 9,  reverse: false,  surfaceOp: 1.00, midOp: 0.50 },
  { pathIdx: 3, duration: 5,  reverse: true,   surfaceOp: null, midOp: 0    },
];

const FOAM_COLOR = "#cceeff";

export function WaterWave({
  className = "",
  fill = "#ffffff",
  edgeColor = "#bae6fd",
}: WaterWaveProps) {
  const rawId = useId().replace(/:/g, "");

  return (
    <div
      className={`pointer-events-none overflow-hidden leading-none relative h-14 md:h-24 ${className}`}
      aria-hidden="true"
    >
      {LAYERS.map((layer, li) => {
        const isFoam = layer.surfaceOp === null;
        const animClass = layer.reverse ? "animate-wavedriftrev" : "animate-wavedrift";

        return (
          <div
            key={li}
            className="absolute inset-0"
            style={{ zIndex: li + 1 }}
          >
            <div
              className={`flex w-[200%] h-full ${animClass}`}
              style={{ animationDuration: `${layer.duration}s` }}
            >
              {([0, 1] as const).map((i) => {
                const gradId = `${rawId}-l${li}-${i}`;
                return (
                  <svg
                    key={i}
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    className="w-1/2 h-full"
                  >
                    {!isFoam && (
                      <defs>
                        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%"   stopColor={edgeColor} stopOpacity={layer.surfaceOp!} />
                          <stop offset="42%"  stopColor={edgeColor} stopOpacity={layer.midOp} />
                          <stop offset="100%" stopColor={fill}      stopOpacity={1} />
                        </linearGradient>
                      </defs>
                    )}
                    <path
                      d={PATHS[layer.pathIdx]}
                      fill={isFoam ? FOAM_COLOR : `url(#${gradId})`}
                      fillOpacity={isFoam ? 0.55 : 1}
                    />
                  </svg>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
