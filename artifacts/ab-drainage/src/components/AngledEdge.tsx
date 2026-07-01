interface AngledEdgeProps {
  /** Which edge of the parent this sits on. */
  position: "top" | "bottom";
  /** Fill colour — must match the adjacent section so the slant reads as a clean transition. */
  fill: string;
  className?: string;
  /** Optional accent hairline running along the diagonal. */
  line?: string;
}

/**
 * A crisp diagonal wedge used to break up otherwise flat section boundaries.
 * Sits absolutely on the top or bottom edge of a `relative` parent; the fill
 * colour should equal the neighbouring section so only the slant is visible.
 */
export function AngledEdge({ position, fill, className = "", line }: AngledEdgeProps) {
  const isTop = position === "top";
  const poly = isTop
    ? "0,0 1440,0 1440,26 0,100"
    : "0,100 1440,100 1440,0 0,74";
  const linePts = isTop ? "0,100 1440,26" : "0,74 1440,0";

  return (
    <div
      className={`pointer-events-none overflow-hidden leading-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="w-full h-10 md:h-16"
      >
        <polygon points={poly} fill={fill} />
        {line && (
          <polyline
            points={linePts}
            fill="none"
            stroke={line}
            strokeWidth={3}
            vectorEffect="non-scaling-stroke"
          />
        )}
      </svg>
    </div>
  );
}
