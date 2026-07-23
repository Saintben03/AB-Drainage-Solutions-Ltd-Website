export default function FMDirectionB() {
  const HERO = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80";
  const IMG1 = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80";
  const IMG2 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";
  const IMG3 = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80";

  const NAVY = "#0D1B2A";
  const BLUE = "#3A7CA5";
  const LIGHT = "#F4F7FB";

  return (
    <div style={{ fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif", background: NAVY, color: "#fff", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=DM+Sans:wght@400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 56px", height: 72, background: "rgba(13,27,42,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(58,124,165,0.2)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 40, height: 40, borderRadius: 4, background: BLUE, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, letterSpacing: 1 }}>AB</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.05em" }}>AB Facilities Management</div>
            <div style={{ fontWeight: 400, fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Commercial FM · UK-Wide</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 36, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.6)" }}>
          {["Services", "Matterport", "Areas Covered", "Gallery", "About"].map(l => (
            <a key={l} href="#" style={{ color: "inherit", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: BLUE }}>01256 688 650</span>
          <button style={{ background: BLUE, color: "#fff", border: "none", padding: "10px 24px", fontFamily: "inherit", fontWeight: 600, fontSize: 13, borderRadius: 4, cursor: "pointer" }}>Get a Quote</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", alignItems: "center" }}>
        <img src={HERO} alt="hero" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", filter: "brightness(0.3)" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${NAVY}ee 0%, rgba(13,27,42,0.5) 60%, transparent 100%)` }} />

        <div style={{ position: "relative", zIndex: 2, padding: "0 56px", maxWidth: 800 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(58,124,165,0.15)", border: "1px solid rgba(58,124,165,0.4)", borderRadius: 100, padding: "6px 18px", marginBottom: 32 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: BLUE }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", color: "rgba(255,255,255,0.75)", textTransform: "uppercase" }}>UK-Wide Commercial Facilities Management</span>
          </div>
          <h1 style={{ fontWeight: 700, fontSize: "clamp(48px, 6vw, 80px)", lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>
            Buildings That<br />Work{" "}
            <span style={{ color: BLUE }}>For You.</span>
          </h1>
          <p style={{ fontWeight: 400, fontSize: 18, color: "rgba(255,255,255,0.65)", lineHeight: 1.7, maxWidth: 500, marginBottom: 40 }}>
            Planned maintenance, reactive callouts, compliance and multi-site management — all under one accountable partner.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <button style={{ background: BLUE, color: "#fff", border: "none", padding: "14px 36px", fontFamily: "inherit", fontWeight: 600, fontSize: 14, borderRadius: 4, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
              Get a Quote <span>→</span>
            </button>
            <button style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "14px 36px", fontFamily: "inherit", fontWeight: 500, fontSize: 14, borderRadius: 4, cursor: "pointer" }}>
              Our Services
            </button>
          </div>
        </div>

        {/* Floating stat card */}
        <div style={{ position: "absolute", right: 56, bottom: 80, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(58,124,165,0.25)", backdropFilter: "blur(16px)", borderRadius: 8, overflow: "hidden" }}>
          {[["UK-Wide", "Coverage"], ["24/7", "Reactive Cover"], ["20+", "Years Exp."], ["50+", "Sites"]].map(([val, label]) => (
            <div key={label} style={{ padding: "20px 28px", background: "rgba(13,27,42,0.6)", textAlign: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 22, color: BLUE, letterSpacing: "-0.02em" }}>{val}</div>
              <div style={{ fontWeight: 500, fontSize: 10, color: "rgba(255,255,255,0.45)", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 4 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: LIGHT, padding: "96px 56px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56 }}>
          <div>
            <div style={{ fontWeight: 600, fontSize: 11, letterSpacing: "0.25em", color: BLUE, textTransform: "uppercase", marginBottom: 12 }}>What We Manage</div>
            <h2 style={{ fontWeight: 700, fontSize: 44, color: NAVY, lineHeight: 1.1, letterSpacing: "-0.02em" }}>Our Services</h2>
          </div>
          <a href="#" style={{ fontWeight: 600, fontSize: 13, color: BLUE, textDecoration: "none" }}>View All Services →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {[
            { t: "Planned Preventative Maintenance", img: IMG1, icon: "🔧" },
            { t: "Reactive & Emergency Callouts", img: IMG2, icon: "⚡" },
            { t: "Compliance & Health and Safety", img: IMG3, icon: "✓" },
            { t: "M&E Services", img: IMG1, icon: "⚙️" },
          ].map(({ t, img, icon }) => (
            <div key={t} style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.08), 0 8px 24px rgba(0,0,0,0.06)" }}>
              <div style={{ height: 180, overflow: "hidden" }}>
                <img src={img} alt={t} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "20px 24px 24px" }}>
                <div style={{ width: 36, height: 36, borderRadius: 8, background: `${BLUE}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, marginBottom: 12 }}>{icon}</div>
                <h3 style={{ fontWeight: 600, fontSize: 15, color: NAVY, lineHeight: 1.3 }}>{t}</h3>
                <div style={{ marginTop: 14, width: 20, height: 2, background: BLUE, borderRadius: 1 }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MATTERPORT */}
      <section style={{ background: NAVY, padding: "96px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(58,124,165,0.12)", border: "1px solid rgba(58,124,165,0.3)", borderRadius: 4, padding: "6px 14px", marginBottom: 28 }}>
              <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", color: BLUE, textTransform: "uppercase" }}>Flagship Capability</span>
            </div>
            <h2 style={{ fontWeight: 700, fontSize: 44, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 20 }}>
              3D Building Surveys<br />with <span style={{ color: BLUE }}>Matterport</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 16, lineHeight: 1.7, marginBottom: 32 }}>
              We use Matterport 3D capture on every building survey — giving you a permanent, navigable digital record of every space.
            </p>
            {["3D Virtual Building Tours", "Accurate Floor Plans & CAD Export", "Digital Twin Documentation", "Before & After Condition Records", "Remote Scoping & Faster Quoting"].map(pt => (
              <div key={pt} style={{ display: "flex", gap: 12, marginBottom: 14, alignItems: "center" }}>
                <div style={{ width: 18, height: 18, borderRadius: "50%", background: `${BLUE}25`, border: `1px solid ${BLUE}60`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: BLUE, fontSize: 10, fontWeight: 700 }}>✓</span>
                </div>
                <span style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>{pt}</span>
              </div>
            ))}
            <button style={{ marginTop: 24, background: BLUE, color: "#fff", border: "none", padding: "13px 32px", fontFamily: "inherit", fontWeight: 600, fontSize: 14, borderRadius: 4, cursor: "pointer" }}>Book a Survey →</button>
          </div>
          <div>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(58,124,165,0.25)", borderRadius: 8, overflow: "hidden" }}>
              <div style={{ aspectRatio: "16/10", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(58,124,165,0.06)", fontSize: 13, color: "rgba(255,255,255,0.25)", fontWeight: 500, letterSpacing: "0.1em" }}>
                [Matterport 3D Tour — Live iframe]
              </div>
              <div style={{ display: "flex", borderTop: "1px solid rgba(58,124,165,0.2)" }}>
                {["Walkthrough", "Dollhouse", "Floor Plan"].map((v, i) => (
                  <button key={v} style={{ flex: 1, padding: "12px", background: i === 0 ? `${BLUE}22` : "transparent", border: "none", borderRight: i < 2 ? "1px solid rgba(58,124,165,0.2)" : "none", color: i === 0 ? BLUE : "rgba(255,255,255,0.35)", fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit" }}>{v}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section style={{ background: "#080e18", padding: "32px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(58,124,165,0.15)" }}>
        <div style={{ fontWeight: 700, fontSize: 16 }}>AB Facilities <span style={{ color: BLUE }}>Management</span></div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em" }}>DIRECTION B — CORPORATE PREMIUM</div>
        <div style={{ display: "flex", gap: 24 }}>
          {["abdrainage.co.uk", "abfencingsolutions.co.uk"].map(d => (
            <a key={d} href="#" style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", textDecoration: "none" }}>{d} →</a>
          ))}
        </div>
      </section>
    </div>
  );
}
