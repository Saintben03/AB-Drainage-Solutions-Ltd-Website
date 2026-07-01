const NAVY_BG =
  "radial-gradient(120% 120% at 20% 0%, #0f3a63 0%, #0a2c47 45%, #06182a 100%)";
const BLUE = "#5392B6";
const TEXT = "#f0f2f5";
const MUTED = "#9fb3c4";

type Candidate = {
  name: string;
  note: string;
  fontFamily: string;
  eyebrowSpacing: string;
  headWeight: number;
  headSpacing: string;
};

const CANDIDATES: Candidate[] = [
  {
    name: "Current (Oswald)",
    note: "What your site uses today — condensed, narrow caps",
    fontFamily: "'Oswald', sans-serif",
    eyebrowSpacing: "0.28em",
    headWeight: 600,
    headSpacing: "0.01em",
  },
  {
    name: "Titillium Web",
    note: "Closest match — clean, slightly technical humanist caps",
    fontFamily: "'Titillium Web', sans-serif",
    eyebrowSpacing: "0.30em",
    headWeight: 700,
    headSpacing: "0.005em",
  },
  {
    name: "Saira",
    note: "Squared, engineered feel — a touch more industrial",
    fontFamily: "'Saira', sans-serif",
    eyebrowSpacing: "0.30em",
    headWeight: 600,
    headSpacing: "0.005em",
  },
  {
    name: "Barlow",
    note: "Grotesk, highway-signage roots — friendly and wide",
    fontFamily: "'Barlow', sans-serif",
    eyebrowSpacing: "0.30em",
    headWeight: 700,
    headSpacing: "0.005em",
  },
  {
    name: "Exo 2",
    note: "Geometric-technical — the most modern / futuristic",
    fontFamily: "'Exo 2', sans-serif",
    eyebrowSpacing: "0.30em",
    headWeight: 600,
    headSpacing: "0.005em",
  },
];

function Specimen({ c }: { c: Candidate }) {
  return (
    <div
      style={{
        borderTop: "1px solid rgba(255,255,255,0.10)",
        padding: "40px 56px 48px",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 26 }}>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: BLUE,
            background: "rgba(83,146,182,0.12)",
            border: "1px solid rgba(83,146,182,0.35)",
            borderRadius: 999,
            padding: "5px 12px",
          }}
        >
          {c.name}
        </span>
        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: MUTED }}>
          {c.note}
        </span>
      </div>

      <div
        style={{
          fontFamily: c.fontFamily,
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: c.eyebrowSpacing,
          textTransform: "uppercase",
          color: MUTED,
          marginBottom: 16,
        }}
      >
        Domestic &amp; Commercial Services Across Hampshire
      </div>

      <h2
        style={{
          fontFamily: c.fontFamily,
          fontSize: 46,
          lineHeight: 1.06,
          fontWeight: c.headWeight,
          letterSpacing: c.headSpacing,
          textTransform: "uppercase",
          color: TEXT,
          margin: 0,
        }}
      >
        Reliable Drainage Specialists Delivering Expert Solutions Across{" "}
        <span style={{ color: BLUE }}>Hampshire</span>
      </h2>

      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 16,
          lineHeight: 1.6,
          color: "#c7d2dc",
          maxWidth: 720,
          margin: "20px 0 0",
        }}
      >
        We carry out <strong style={{ color: TEXT }}>domestic and commercial drain work</strong>{" "}
        across Hampshire, delivering bespoke solutions designed to protect your property.
      </p>
    </div>
  );
}

export function FontMatch() {
  return (
    <div style={{ minHeight: "100vh", background: NAVY_BG, color: TEXT }}>
      <div style={{ padding: "40px 56px 8px" }}>
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#f59a12",
          }}
        >
          Headline font comparison
        </div>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 15,
            color: MUTED,
            margin: "8px 0 0",
            maxWidth: 760,
          }}
        >
          The same hero text set in each candidate. Compare against your reference screenshot
          and tell me which one matches — I'll apply it across the live site.
        </p>
      </div>
      {CANDIDATES.map((c) => (
        <Specimen key={c.name} c={c} />
      ))}
    </div>
  );
}
