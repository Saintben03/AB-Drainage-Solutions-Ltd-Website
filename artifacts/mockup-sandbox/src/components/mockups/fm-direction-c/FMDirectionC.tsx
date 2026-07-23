export default function FMDirectionC() {
  const HERO = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80";
  const IMG1 = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80";
  const IMG2 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";
  const IMG3 = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80";

  const SLATE = "#1C2431";
  const ACCENT = "#0066CC";
  const WARM = "#F9F8F6";

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: WARM, color: SLATE, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 64px", height: 68, background: "rgba(249,248,246,0.96)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(28,36,49,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 2, height: 32, background: ACCENT }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, letterSpacing: "-0.01em", color: SLATE }}>AB Facilities Management</div>
            <div style={{ fontWeight: 400, fontSize: 10, color: "rgba(28,36,49,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Commercial FM · UK-Wide</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 13, fontWeight: 400, color: "rgba(28,36,49,0.55)" }}>
          {["Services", "Matterport", "Areas", "Gallery", "About"].map(l => (
            <a key={l} href="#" style={{ color: "inherit", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: SLATE }}>01256 688 650</span>
          <button style={{ background: SLATE, color: "#fff", border: "none", padding: "10px 24px", fontFamily: "inherit", fontWeight: 500, fontSize: 13, cursor: "pointer" }}>Get a Quote</button>
        </div>
      </nav>

      {/* HERO — full bleed dark */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <img src={HERO} alt="hero" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,36,49,0.92) 0%, rgba(28,36,49,0.35) 45%, rgba(28,36,49,0.1) 100%)" }} />

        <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "0 64px 72px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ maxWidth: 680 }}>
            <p style={{ fontWeight: 500, fontSize: 11, letterSpacing: "0.25em", color: "rgba(255,255,255,0.45)", textTransform: "uppercase", marginBottom: 20 }}>
              AB Facilities Management Ltd
            </p>
            <h1 style={{ fontWeight: 300, fontSize: "clamp(48px, 6.5vw, 88px)", lineHeight: 1.05, letterSpacing: "-0.04em", color: "#fff", marginBottom: 24 }}>
              Buildings that<br />
              <span style={{ fontWeight: 600, color: "#fff" }}>work for you.</span>
            </h1>
            <p style={{ fontWeight: 400, fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: 480, marginBottom: 40 }}>
              UK-wide commercial facilities management. One partner. Complete accountability.
            </p>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              <button style={{ background: ACCENT, color: "#fff", border: "none", padding: "14px 36px", fontFamily: "inherit", fontWeight: 500, fontSize: 14, cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                Get a Quote →
              </button>
              <button style={{ background: "transparent", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.25)", padding: "13px 36px", fontFamily: "inherit", fontWeight: 400, fontSize: 14, cursor: "pointer" }}>
                Our Services
              </button>
            </div>
          </div>

          {/* right — stats */}
          <div style={{ display: "flex", flexDirection: "column", gap: 1, minWidth: 200 }}>
            {[["UK-Wide", "Coverage"], ["24/7", "Reactive cover"], ["20+", "Years"], ["50+", "Sites managed"]].map(([v, l]) => (
              <div key={l} style={{ padding: "16px 24px", background: "rgba(249,248,246,0.06)", backdropFilter: "blur(8px)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ fontWeight: 600, fontSize: 20, color: "#fff", letterSpacing: "-0.02em" }}>{v}</div>
                <div style={{ fontWeight: 400, fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO TEXT BAND */}
      <section style={{ background: WARM, padding: "80px 64px", display: "grid", gridTemplateColumns: "1fr 2fr", gap: 80, alignItems: "start" }}>
        <div>
          <div style={{ width: 32, height: 1, background: ACCENT, marginBottom: 20 }} />
          <p style={{ fontWeight: 500, fontSize: 11, letterSpacing: "0.2em", color: ACCENT, textTransform: "uppercase" }}>Who We Are</p>
        </div>
        <div>
          <h2 style={{ fontWeight: 300, fontSize: 36, lineHeight: 1.25, letterSpacing: "-0.02em", color: SLATE, marginBottom: 20 }}>
            We take the complexity out of running<br />commercial premises — acting as your<br />
            <em style={{ fontStyle: "italic", fontWeight: 400 }}>single, accountable partner.</em>
          </h2>
          <p style={{ fontWeight: 400, fontSize: 15, color: "rgba(28,36,49,0.55)", lineHeight: 1.8, maxWidth: 580 }}>
            From single-site commercial landlords to multi-site portfolio managers, public sector bodies and healthcare providers — we bring structured process, fully vetted operatives and complete transparency.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: "#fff", padding: "80px 64px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 48 }}>
          <h2 style={{ fontWeight: 300, fontSize: 40, letterSpacing: "-0.02em", color: SLATE }}>Our Services</h2>
          <a href="#" style={{ fontWeight: 500, fontSize: 13, color: ACCENT, textDecoration: "none" }}>View all →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(28,36,49,0.08)" }}>
          {[
            { t: "Planned Preventative Maintenance", img: IMG1 },
            { t: "Reactive & Emergency Callouts", img: IMG2 },
            { t: "Compliance & Health and Safety", img: IMG3 },
            { t: "M&E Services", img: IMG1 },
          ].map(({ t, img }, i) => (
            <div key={t} style={{ background: "#fff", padding: "32px 28px" }}>
              <div style={{ width: "100%", height: 160, overflow: "hidden", marginBottom: 24 }}>
                <img src={img} alt={t} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%)" }} />
              </div>
              <div style={{ fontWeight: 400, fontSize: 11, color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>0{i + 1}</div>
              <h3 style={{ fontWeight: 500, fontSize: 15, color: SLATE, lineHeight: 1.4, letterSpacing: "-0.01em" }}>{t}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* MATTERPORT */}
      <section style={{ background: SLATE, color: "#fff", padding: "96px 64px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 80, alignItems: "start" }}>
          <div>
            <p style={{ fontWeight: 500, fontSize: 11, letterSpacing: "0.22em", color: `${ACCENT}cc`, textTransform: "uppercase", marginBottom: 24 }}>Flagship Capability</p>
            <h2 style={{ fontWeight: 300, fontSize: 48, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>
              3D Building Surveys<br />with <span style={{ fontWeight: 600 }}>Matterport.</span>
            </h2>
            <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)", aspectRatio: "16/9", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontSize: 13, color: "rgba(255,255,255,0.2)", fontWeight: 400 }}>
              [Matterport 3D Tour — Live iframe]
            </div>
            <div style={{ display: "flex", gap: 1 }}>
              {["Walkthrough", "Dollhouse", "Floor Plan"].map((v, i) => (
                <button key={v} style={{ flex: 1, padding: "10px", background: i === 0 ? "rgba(0,102,204,0.3)" : "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: i === 0 ? "#fff" : "rgba(255,255,255,0.3)", fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit" }}>{v}</button>
              ))}
            </div>
          </div>
          <div style={{ paddingTop: 60 }}>
            <p style={{ fontWeight: 400, fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, marginBottom: 32 }}>
              A permanent, navigable digital record of every space we manage — transforming how we scope, quote, document and maintain your estate.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {["3D Virtual Building Tours", "Accurate Floor Plans & CAD Export", "Digital Twin Documentation", "Before & After Condition Records", "Remote Scoping & Faster Quoting"].map(pt => (
                <div key={pt} style={{ display: "flex", gap: 14, alignItems: "flex-start", paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ width: 4, height: 4, borderRadius: "50%", background: ACCENT, marginTop: 7, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.5 }}>{pt}</span>
                </div>
              ))}
            </div>
            <button style={{ marginTop: 32, background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", padding: "12px 28px", fontFamily: "inherit", fontWeight: 500, fontSize: 13, cursor: "pointer" }}>Book a Survey →</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section style={{ background: WARM, padding: "32px 64px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(28,36,49,0.08)" }}>
        <div style={{ fontWeight: 500, fontSize: 15, color: SLATE }}>AB Facilities Management</div>
        <div style={{ fontSize: 11, color: "rgba(28,36,49,0.25)", letterSpacing: "0.1em" }}>DIRECTION C — MINIMAL & HIGH-END</div>
        <div style={{ display: "flex", gap: 24 }}>
          {["abdrainage.co.uk", "abfencingsolutions.co.uk"].map(d => (
            <a key={d} href="#" style={{ fontSize: 11, color: "rgba(28,36,49,0.35)", textDecoration: "none" }}>{d} →</a>
          ))}
        </div>
      </section>
    </div>
  );
}
