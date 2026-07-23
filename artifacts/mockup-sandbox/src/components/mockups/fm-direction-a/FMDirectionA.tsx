export default function FMDirectionA() {
  const HERO = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80";
  const IMG1 = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80";
  const IMG2 = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80";
  const IMG3 = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80";

  return (
    <div style={{ fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif", background: "#0f0f0f", color: "#fff", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>

      {/* NAV */}
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 48px", height: 64, background: "rgba(15,15,15,0.92)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(255,140,0,0.15)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, background: "#FF8C00", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14, letterSpacing: 1 }}>AB</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, letterSpacing: "0.12em", textTransform: "uppercase" }}>Facilities</div>
            <div style={{ fontWeight: 400, fontSize: 10, letterSpacing: "0.2em", color: "#FF8C00", textTransform: "uppercase" }}>Management Ltd</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 32, fontSize: 12, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          {["Services", "Matterport", "Areas", "Gallery", "About"].map(l => (
            <a key={l} href="#" style={{ color: "rgba(255,255,255,0.65)", textDecoration: "none" }}>{l}</a>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#FF8C00" }}>01256 688 650</span>
          <button style={{ background: "#FF8C00", color: "#fff", border: "none", padding: "10px 24px", fontFamily: "inherit", fontWeight: 800, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", cursor: "pointer" }}>Get a Quote</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <img src={HERO} alt="hero" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%", filter: "brightness(0.35)" }} />
        {/* amber diagonal bar */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", background: "linear-gradient(105deg, rgba(255,140,0,0.18) 0%, transparent 55%)" }} />
        {/* left edge bar */}
        <div style={{ position: "absolute", left: 0, top: "15%", bottom: "15%", width: 5, background: "#FF8C00" }} />

        <div style={{ position: "relative", zIndex: 2, padding: "0 56px 80px", maxWidth: 900 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#FF8C00" }}>AB Facilities Management</span>
            <span style={{ width: 40, height: 1, background: "#FF8C00" }} />
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase" }}>UK-Wide Commercial FM</span>
          </div>
          <h1 style={{ fontFamily: "inherit", fontWeight: 900, fontSize: "clamp(60px, 9vw, 110px)", textTransform: "uppercase", lineHeight: 0.88, letterSpacing: "-0.01em", marginBottom: 28 }}>
            Buildings<br />
            <span style={{ color: "#FF8C00" }}>That Work</span><br />
            For You
          </h1>
          <p style={{ fontFamily: "Barlow, sans-serif", fontWeight: 400, fontSize: 18, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: 520, marginBottom: 40 }}>
            UK-wide commercial facilities management. Planned maintenance, reactive callouts, full compliance and multi-site management — under one roof.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <button style={{ background: "#FF8C00", color: "#fff", border: "none", padding: "16px 40px", fontFamily: "inherit", fontWeight: 800, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
              Get a Quote →
            </button>
            <button style={{ background: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.35)", padding: "16px 40px", fontFamily: "inherit", fontWeight: 800, fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", cursor: "pointer" }}>
              Our Services
            </button>
          </div>
        </div>

        {/* STAT STRIP inside hero bottom */}
        <div style={{ position: "absolute", bottom: 0, right: 0, display: "flex", background: "rgba(255,140,0,0.92)", backdropFilter: "blur(4px)" }}>
          {[["UK-Wide", "Coverage"], ["24/7", "Reactive"], ["20+", "Years"], ["50+", "Sites"]].map(([val, label]) => (
            <div key={label} style={{ padding: "20px 36px", borderLeft: "1px solid rgba(0,0,0,0.15)", textAlign: "center" }}>
              <div style={{ fontWeight: 900, fontSize: 26, letterSpacing: "-0.02em" }}>{val}</div>
              <div style={{ fontWeight: 600, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", opacity: 0.75 }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: "#111", padding: "80px 56px" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48 }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: 11, letterSpacing: "0.3em", color: "#FF8C00", textTransform: "uppercase", marginBottom: 10 }}>What We Manage</div>
            <h2 style={{ fontWeight: 900, fontSize: 52, textTransform: "uppercase", lineHeight: 0.9, letterSpacing: "-0.01em" }}>Our Services</h2>
          </div>
          <a href="#" style={{ fontWeight: 700, fontSize: 12, letterSpacing: "0.2em", color: "#FF8C00", textDecoration: "none", textTransform: "uppercase" }}>View All →</a>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }}>
          {[
            { n: "01", t: "Planned Preventative Maintenance", img: IMG1 },
            { n: "02", t: "Reactive & Emergency Callouts", img: IMG2 },
            { n: "03", t: "Compliance & Health and Safety", img: IMG3 },
            { n: "04", t: "M&E Services", img: IMG1 },
          ].map(({ n, t, img }) => (
            <div key={n} style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden", cursor: "pointer" }}>
              <img src={img} alt={t} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.4)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", top: 20, left: 20, fontWeight: 900, fontSize: 11, color: "#FF8C00", letterSpacing: "0.25em" }}>{n}</div>
              <div style={{ position: "absolute", bottom: 24, left: 20, right: 20 }}>
                <div style={{ fontWeight: 800, fontSize: 18, textTransform: "uppercase", lineHeight: 1.2, letterSpacing: "0.02em" }}>{t}</div>
                <div style={{ marginTop: 12, width: 24, height: 2, background: "#FF8C00" }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MATTERPORT TEASER */}
      <section style={{ background: "#0f0f0f", padding: "80px 56px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(255,140,0,0.12)", border: "1px solid rgba(255,140,0,0.3)", padding: "6px 16px", marginBottom: 24 }}>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#FF8C00" }}>◈ Flagship Capability</span>
          </div>
          <h2 style={{ fontWeight: 900, fontSize: 52, textTransform: "uppercase", lineHeight: 0.88, letterSpacing: "-0.01em", marginBottom: 24 }}>
            3D Building<br />Surveys With<br /><span style={{ color: "#FF8C00" }}>Matterport</span>
          </h2>
          <p style={{ fontFamily: "Barlow, sans-serif", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 32 }}>
            We use Matterport 3D capture on every building survey — giving you a permanent, navigable digital record of every space we manage.
          </p>
          <button style={{ background: "#FF8C00", color: "#fff", border: "none", padding: "14px 36px", fontFamily: "inherit", fontWeight: 800, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", cursor: "pointer" }}>Book a Survey →</button>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ background: "#1a1a1a", border: "1px solid rgba(255,140,0,0.2)", aspectRatio: "16/10", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
            [Matterport 3D Tour — Live iframe]
          </div>
          <div style={{ display: "flex", gap: 3, marginTop: 3 }}>
            {["Walkthrough", "Dollhouse", "Floor Plan"].map((v, i) => (
              <div key={v} style={{ flex: 1, padding: "10px", background: i === 0 ? "#FF8C00" : "#1a1a1a", border: "1px solid rgba(255,140,0,0.2)", textAlign: "center", fontSize: 10, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", color: i === 0 ? "#fff" : "rgba(255,255,255,0.4)", cursor: "pointer" }}>{v}</div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER TASTER */}
      <section style={{ background: "#080808", padding: "40px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,140,0,0.12)" }}>
        <div style={{ fontWeight: 900, fontSize: 20, textTransform: "uppercase", letterSpacing: "0.05em" }}>AB Facilities <span style={{ color: "#FF8C00" }}>Management</span></div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Direction A — Bold & Industrial</div>
        <div style={{ display: "flex", gap: 24 }}>
          {["abdrainage.co.uk", "abfencingsolutions.co.uk"].map(d => (
            <a key={d} href="#" style={{ fontSize: 11, color: "rgba(255,255,255,0.35)", textDecoration: "none", letterSpacing: "0.05em" }}>{d} →</a>
          ))}
        </div>
      </section>
    </div>
  );
}
