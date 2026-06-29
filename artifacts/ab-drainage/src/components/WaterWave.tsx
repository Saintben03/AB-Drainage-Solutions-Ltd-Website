interface WaterWaveProps {
  className?: string;
  fill?: string;
}

const WAVE_PATH =
  "M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,120 L0,120 Z";

export function WaterWave({ className = "", fill = "#ffffff" }: WaterWaveProps) {
  return (
    <div
      className={`pointer-events-none overflow-hidden leading-none ${className}`}
      aria-hidden="true"
    >
      <div className="flex w-[200%] animate-wavedrift">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-1/2 h-12 md:h-20"
        >
          <path d={WAVE_PATH} fill={fill} />
        </svg>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-1/2 h-12 md:h-20"
        >
          <path d={WAVE_PATH} fill={fill} />
        </svg>
      </div>
    </div>
  );
}
