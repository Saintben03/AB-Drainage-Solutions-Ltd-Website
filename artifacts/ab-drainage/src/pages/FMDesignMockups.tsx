import { useState } from "react";

// Real uploaded photos — via @assets alias → ../../attached_assets
import imgHero from "@assets/Image_(38)_1784642358501.jpg";
import imgWalkthrough from "@assets/Image_(39)_1784642358501.jpg";
import imgDollhouse from "@assets/Image_(30)_1784642251758.jpg";
import imgFloorPlan from "@assets/Image_(33)_1784642358504.jpg";
import imgPPM from "@assets/Image_(13)_1784642358502.jpg";
import imgReactive from "@assets/Image_(17)_1784642358503.jpg";
import imgGrounds from "@assets/Image_(20)_1784642358503.jpg";
import imgExternal from "@assets/Image_(24)_1784642251761.jpg";

// ─── MATTERPORT TAB SWITCHER (shared logic, each direction styles it differently) ─
function useMatterportTab() {
  const [tab, setTab] = useState<"walkthrough" | "dollhouse" | "floorplan">("walkthrough");
  const tabs = [
    { id: "walkthrough" as const, label: "Walkthrough" },
    { id: "dollhouse" as const, label: "Dollhouse" },
    { id: "floorplan" as const, label: "Floor Plan" },
  ];
  const img = tab === "walkthrough" ? imgWalkthrough : tab === "dollhouse" ? imgDollhouse : imgFloorPlan;
  return { tab, setTab, tabs, img };
}

// ═══════════════════════════════════════════════════════════════
// DIRECTION A — Bold & Industrial (dark / amber)
// ═══════════════════════════════════════════════════════════════
function DirectionA() {
  const mp = useMatterportTab();
  const AMBER = "#FF8C00";

  return (
    <div style={{ fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif", background: "#0f0f0f", color: "#fff" }}>

      {/* NAV */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 48px", height: 64, background: "#0f0f0f", borderBottom: "1px solid rgba(255,140,0,0.15)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, background: AMBER, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 13 }}>AB</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase" }}>Facilities Management</div>
            <div style={{ fontWeight: 400, fontSize: 10, letterSpacing: "0.2em", color: AMBER, textTransform: "uppercase" }}>Commercial FM · UK-Wide</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.55)" }}>
          {["Services", "Matterport", "Areas", "Gallery", "About"].map(l => <span key={l}>{l}</span>)}
        </div>
        <div style={{ background: AMBER, color: "#fff", padding: "10px 22px", fontWeight: 800, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Get a Quote</div>
      </div>

      {/* HERO */}
      <div style={{ position: "relative", height: 560, overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <img src={imgHero} alt="Commercial interior" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.3)" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(105deg, rgba(255,140,0,0.15) 0%, transparent 55%)` }} />
        <div style={{ position: "absolute", left: 0, top: "15%", bottom: "15%", width: 5, background: AMBER }} />
        <div style={{ position: "relative", zIndex: 2, padding: "0 56px 64px", maxWidth: 800 }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: AMBER, marginBottom: 20 }}>AB Facilities Management · UK-Wide Commercial FM</div>
          <div style={{ fontWeight: 900, fontSize: 80, textTransform: "uppercase", lineHeight: 0.88, letterSpacing: "-0.01em", marginBottom: 24 }}>
            Buildings<br /><span style={{ color: AMBER }}>That Work</span><br />For You
          </div>
          <div style={{ fontFamily: "sans-serif", fontSize: 17, color: "rgba(255,255,255,0.65)", lineHeight: 1.6, maxWidth: 480, marginBottom: 36 }}>
            UK-wide commercial facilities management. Planned maintenance, reactive callouts, full compliance and multi-site management.
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            <div style={{ background: AMBER, color: "#fff", padding: "15px 38px", fontWeight: 800, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>Get a Quote →</div>
            <div style={{ border: "2px solid rgba(255,255,255,0.3)", color: "#fff", padding: "15px 38px", fontWeight: 800, fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>Our Services</div>
          </div>
        </div>
        <div style={{ position: "absolute", right: 0, bottom: 0, display: "flex", background: `rgba(255,140,0,0.92)` }}>
          {[["UK-Wide", "Coverage"], ["24/7", "Reactive"], ["20+", "Years"], ["50+", "Sites"]].map(([v, l]) => (
            <div key={l} style={{ padding: "16px 28px", borderLeft: "1px solid rgba(0,0,0,0.12)", textAlign: "center" }}>
              <div style={{ fontWeight: 900, fontSize: 22 }}>{v}</div>
              <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.75 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <div style={{ padding: "64px 56px", background: "#111" }}>
        <div style={{ fontWeight: 900, fontSize: 13, letterSpacing: "0.25em", color: AMBER, textTransform: "uppercase", marginBottom: 8 }}>What We Manage</div>
        <div style={{ fontWeight: 900, fontSize: 48, textTransform: "uppercase", lineHeight: 0.9, marginBottom: 40 }}>Our Services</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 3 }}>
          {[
            ["01", "Planned Preventative Maintenance", imgPPM],
            ["02", "Reactive & Emergency Callouts", imgReactive],
            ["03", "Grounds & External Maintenance", imgGrounds],
            ["04", "Building Fabric & External Works", imgExternal],
          ].map(([n, t, img]) => (
            <div key={n as string} style={{ position: "relative", aspectRatio: "3/4", overflow: "hidden" }}>
              <img src={img as string} alt={t as string} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.35)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", top: 16, left: 16, fontWeight: 900, fontSize: 10, color: AMBER, letterSpacing: "0.25em" }}>{n}</div>
              <div style={{ position: "absolute", bottom: 20, left: 16, right: 16 }}>
                <div style={{ fontWeight: 800, fontSize: 16, textTransform: "uppercase", lineHeight: 1.15 }}>{t}</div>
                <div style={{ marginTop: 10, width: 20, height: 2, background: AMBER }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MATTERPORT */}
      <div style={{ padding: "64px 56px", background: "#0f0f0f", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-flex", background: "rgba(255,140,0,0.1)", border: "1px solid rgba(255,140,0,0.3)", padding: "6px 14px", marginBottom: 20, fontSize: 10, fontWeight: 700, letterSpacing: "0.25em", color: AMBER, textTransform: "uppercase" }}>◈ Flagship Capability</div>
          <div style={{ fontWeight: 900, fontSize: 44, textTransform: "uppercase", lineHeight: 0.88, marginBottom: 20 }}>3D Building<br />Surveys<br /><span style={{ color: AMBER }}>Matterport</span></div>
          <div style={{ fontFamily: "sans-serif", fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 28 }}>
            We use Matterport 3D capture on every building survey — giving you a permanent, navigable digital record of every space we manage. Switch between views below.
          </div>
          <div style={{ fontFamily: "sans-serif", display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
            {["3D Virtual Building Tours", "Accurate Floor Plans & CAD Export", "Digital Twin Documentation", "Before & After Condition Records"].map(pt => (
              <div key={pt} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <div style={{ width: 4, height: 4, background: AMBER, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{pt}</span>
              </div>
            ))}
          </div>
          <div style={{ background: AMBER, color: "#fff", display: "inline-block", padding: "13px 32px", fontWeight: 800, fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase" }}>Book a Survey →</div>
        </div>
        <div>
          <div style={{ border: "1px solid rgba(255,140,0,0.2)", overflow: "hidden" }}>
            <img src={mp.img} alt={mp.tab} style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block", objectPosition: mp.tab === "floorplan" ? "center" : "center top" }} />
            <div style={{ display: "flex", borderTop: "1px solid rgba(255,140,0,0.2)" }}>
              {mp.tabs.map(t => (
                <button key={t.id} onClick={() => mp.setTab(t.id)}
                  style={{ flex: 1, padding: "10px", background: mp.tab === t.id ? AMBER : "#1a1a1a", border: "none", borderRight: "1px solid rgba(255,140,0,0.2)", color: mp.tab === t.id ? "#fff" : "rgba(255,255,255,0.35)", fontSize: 9, fontWeight: 800, letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit" }}>{t.label}</button>
              ))}
            </div>
          </div>
          <div style={{ fontFamily: "sans-serif", marginTop: 8, fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            {mp.tab === "walkthrough" && "First-person walkthrough — captured with Matterport Pro3"}
            {mp.tab === "dollhouse" && "Dollhouse view — full 3D spatial model of the building"}
            {mp.tab === "floorplan" && "Schematic floor plan — auto-generated from the 3D capture"}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DIRECTION B — Corporate Premium (navy + blue)
// ═══════════════════════════════════════════════════════════════
function DirectionB() {
  const mp = useMatterportTab();
  const NAVY = "#0D1B2A", BLUE = "#3A7CA5", LIGHT = "#F4F7FB";

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: NAVY, color: "#fff" }}>

      {/* NAV */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 56px", height: 72, background: "rgba(13,27,42,0.98)", borderBottom: "1px solid rgba(58,124,165,0.2)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 40, height: 40, borderRadius: 4, background: BLUE, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13 }}>AB</div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.03em" }}>AB Facilities Management</div>
            <div style={{ fontWeight: 400, fontSize: 10, color: "rgba(255,255,255,0.35)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Commercial FM · UK-Wide</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 36, fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.55)" }}>
          {["Services", "Matterport", "Areas Covered", "Gallery", "About"].map(l => <span key={l}>{l}</span>)}
        </div>
        <div style={{ background: BLUE, color: "#fff", padding: "10px 24px", fontWeight: 600, fontSize: 13, borderRadius: 4 }}>Get a Quote</div>
      </div>

      {/* HERO */}
      <div style={{ position: "relative", height: 560, overflow: "hidden", display: "flex", alignItems: "center" }}>
        <img src={imgHero} alt="Commercial interior" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "brightness(0.28)" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${NAVY}ee 0%, rgba(13,27,42,0.5) 60%, transparent 100%)` }} />
        <div style={{ position: "relative", zIndex: 2, padding: "0 56px", maxWidth: 740 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(58,124,165,0.15)", border: "1px solid rgba(58,124,165,0.4)", borderRadius: 100, padding: "6px 18px", marginBottom: 28 }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: BLUE }} />
            <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", color: "rgba(255,255,255,0.7)", textTransform: "uppercase" }}>UK-Wide Commercial Facilities Management</span>
          </div>
          <div style={{ fontWeight: 700, fontSize: 68, lineHeight: 1.08, letterSpacing: "-0.03em", marginBottom: 20 }}>
            Buildings That<br />Work <span style={{ color: BLUE }}>For You.</span>
          </div>
          <div style={{ fontWeight: 400, fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 480, marginBottom: 36 }}>
            Planned maintenance, reactive callouts, compliance and multi-site management — all under one accountable partner.
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            <div style={{ background: BLUE, color: "#fff", padding: "13px 34px", fontWeight: 600, fontSize: 14, borderRadius: 4 }}>Get a Quote →</div>
            <div style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff", padding: "13px 34px", fontWeight: 500, fontSize: 14, borderRadius: 4 }}>Our Services</div>
          </div>
        </div>
        <div style={{ position: "absolute", right: 56, bottom: 56, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "rgba(255,255,255,0.04)", border: `1px solid rgba(58,124,165,0.25)`, borderRadius: 8, overflow: "hidden" }}>
          {[["UK-Wide", "Coverage"], ["24/7", "Reactive"], ["20+", "Years"], ["50+", "Sites"]].map(([v, l]) => (
            <div key={l} style={{ padding: "18px 26px", background: "rgba(13,27,42,0.7)", textAlign: "center" }}>
              <div style={{ fontWeight: 700, fontSize: 20, color: BLUE }}>{v}</div>
              <div style={{ fontWeight: 400, fontSize: 9, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: 3 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <div style={{ background: LIGHT, padding: "72px 56px" }}>
        <div style={{ fontWeight: 600, fontSize: 11, letterSpacing: "0.25em", color: BLUE, textTransform: "uppercase", marginBottom: 10 }}>What We Manage</div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 40 }}>
          <div style={{ fontWeight: 700, fontSize: 40, color: NAVY, letterSpacing: "-0.02em" }}>Our Services</div>
          <span style={{ fontWeight: 600, fontSize: 13, color: BLUE }}>View All Services →</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {[
            ["Planned Preventative Maintenance", imgPPM, "🔧"],
            ["Reactive & Emergency Callouts", imgReactive, "⚡"],
            ["Grounds & External Maintenance", imgGrounds, "🌿"],
            ["Building Fabric & External Works", imgExternal, "🏗️"],
          ].map(([t, img, icon]) => (
            <div key={t as string} style={{ background: "#fff", borderRadius: 8, overflow: "hidden", boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 6px 20px rgba(0,0,0,0.05)" }}>
              <div style={{ height: 160, overflow: "hidden" }}>
                <img src={img as string} alt={t as string} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "18px 20px 22px" }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${BLUE}18`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, marginBottom: 10 }}>{icon}</div>
                <div style={{ fontWeight: 600, fontSize: 14, color: NAVY, lineHeight: 1.35 }}>{t}</div>
                <div style={{ marginTop: 12, width: 18, height: 2, background: BLUE, borderRadius: 1 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MATTERPORT */}
      <div style={{ padding: "72px 56px", background: NAVY, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
        <div>
          <div style={{ display: "inline-flex", background: "rgba(58,124,165,0.12)", border: "1px solid rgba(58,124,165,0.3)", borderRadius: 4, padding: "6px 14px", marginBottom: 24, fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", color: BLUE, textTransform: "uppercase" }}>Flagship Capability</div>
          <div style={{ fontWeight: 700, fontSize: 40, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: 18 }}>3D Building Surveys<br />with <span style={{ color: BLUE }}>Matterport</span></div>
          <div style={{ color: "rgba(255,255,255,0.55)", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>We use Matterport 3D capture on every building survey — giving you a permanent, navigable digital record of every space. Switch between views on the right.</div>
          {["3D Virtual Building Tours", "Accurate Floor Plans & CAD Export", "Digital Twin Documentation", "Before & After Condition Records", "Remote Scoping & Faster Quoting"].map(pt => (
            <div key={pt} style={{ display: "flex", gap: 10, marginBottom: 12, alignItems: "center" }}>
              <div style={{ width: 16, height: 16, borderRadius: "50%", background: `${BLUE}25`, border: `1px solid ${BLUE}60`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, color: BLUE, fontSize: 9, fontWeight: 700 }}>✓</div>
              <span style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", fontWeight: 500 }}>{pt}</span>
            </div>
          ))}
          <div style={{ marginTop: 20, background: BLUE, color: "#fff", display: "inline-block", padding: "12px 30px", fontWeight: 600, fontSize: 13, borderRadius: 4 }}>Book a Survey →</div>
        </div>
        <div>
          <div style={{ background: "rgba(255,255,255,0.04)", border: `1px solid rgba(58,124,165,0.25)`, borderRadius: 8, overflow: "hidden" }}>
            <img src={mp.img} alt={mp.tab} style={{ width: "100%", aspectRatio: "16/10", objectFit: "cover", display: "block", objectPosition: mp.tab === "floorplan" ? "center" : "center top" }} />
            <div style={{ display: "flex", borderTop: `1px solid rgba(58,124,165,0.2)` }}>
              {mp.tabs.map((t, i) => (
                <button key={t.id} onClick={() => mp.setTab(t.id)}
                  style={{ flex: 1, padding: "11px", background: mp.tab === t.id ? `${BLUE}22` : "transparent", border: "none", borderRight: i < 2 ? `1px solid rgba(58,124,165,0.2)` : "none", color: mp.tab === t.id ? BLUE : "rgba(255,255,255,0.3)", fontSize: 10, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit" }}>{t.label}</button>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 8, fontSize: 10, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {mp.tab === "walkthrough" && "First-person walkthrough — Matterport Pro3 capture"}
            {mp.tab === "dollhouse" && "Dollhouse view — full 3D spatial model"}
            {mp.tab === "floorplan" && "Schematic floor plan — auto-generated from 3D scan"}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// DIRECTION C — Minimal & High-End (warm white / slate)
// ═══════════════════════════════════════════════════════════════
function DirectionC() {
  const mp = useMatterportTab();
  const SLATE = "#1C2431", ACCENT = "#0066CC", WARM = "#F9F8F6";

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: WARM, color: SLATE }}>

      {/* NAV */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 64px", height: 68, background: "rgba(249,248,246,0.98)", borderBottom: "1px solid rgba(28,36,49,0.08)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 2, height: 32, background: ACCENT }} />
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, letterSpacing: "-0.01em", color: SLATE }}>AB Facilities Management</div>
            <div style={{ fontWeight: 400, fontSize: 10, color: "rgba(28,36,49,0.35)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Commercial FM · UK-Wide</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 40, fontSize: 13, fontWeight: 400, color: "rgba(28,36,49,0.5)" }}>
          {["Services", "Matterport", "Areas", "Gallery", "About"].map(l => <span key={l}>{l}</span>)}
        </div>
        <div style={{ background: SLATE, color: "#fff", padding: "10px 24px", fontWeight: 500, fontSize: 13 }}>Get a Quote</div>
      </div>

      {/* HERO */}
      <div style={{ position: "relative", height: 560, overflow: "hidden", display: "flex", alignItems: "flex-end" }}>
        <img src={imgHero} alt="Commercial interior" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,36,49,0.92) 0%, rgba(28,36,49,0.3) 45%, rgba(28,36,49,0.08) 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, width: "100%", padding: "0 64px 64px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ maxWidth: 640 }}>
            <div style={{ fontWeight: 400, fontSize: 11, letterSpacing: "0.25em", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", marginBottom: 18 }}>AB Facilities Management Ltd</div>
            <div style={{ fontWeight: 300, fontSize: 76, lineHeight: 1.05, letterSpacing: "-0.04em", color: "#fff", marginBottom: 20 }}>
              Buildings that<br /><span style={{ fontWeight: 600 }}>work for you.</span>
            </div>
            <div style={{ fontWeight: 400, fontSize: 16, color: "rgba(255,255,255,0.55)", lineHeight: 1.75, maxWidth: 440, marginBottom: 36 }}>
              UK-wide commercial facilities management. One partner. Complete accountability.
            </div>
            <div style={{ display: "flex", gap: 14 }}>
              <div style={{ background: ACCENT, color: "#fff", padding: "13px 34px", fontWeight: 500, fontSize: 14 }}>Get a Quote →</div>
              <div style={{ border: "1px solid rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.7)", padding: "13px 34px", fontWeight: 400, fontSize: 14 }}>Our Services</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 1, minWidth: 190 }}>
            {[["UK-Wide", "Coverage"], ["24/7", "Reactive"], ["20+", "Years"], ["50+", "Sites"]].map(([v, l]) => (
              <div key={l} style={{ padding: "14px 22px", background: "rgba(249,248,246,0.06)", backdropFilter: "blur(8px)", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <div style={{ fontWeight: 600, fontSize: 18, color: "#fff", letterSpacing: "-0.02em" }}>{v}</div>
                <div style={{ fontWeight: 400, fontSize: 9, color: "rgba(255,255,255,0.38)", letterSpacing: "0.18em", textTransform: "uppercase" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* INTRO */}
      <div style={{ background: WARM, padding: "72px 64px", display: "grid", gridTemplateColumns: "200px 1fr", gap: 72 }}>
        <div>
          <div style={{ width: 28, height: 1, background: ACCENT, marginBottom: 16 }} />
          <div style={{ fontWeight: 500, fontSize: 11, letterSpacing: "0.2em", color: ACCENT, textTransform: "uppercase" }}>Who We Are</div>
        </div>
        <div>
          <div style={{ fontWeight: 300, fontSize: 34, lineHeight: 1.3, letterSpacing: "-0.02em", color: SLATE, marginBottom: 18 }}>
            We take the complexity out of running commercial premises — acting as your <em style={{ fontStyle: "italic" }}>single, accountable partner.</em>
          </div>
          <div style={{ fontWeight: 400, fontSize: 15, color: "rgba(28,36,49,0.5)", lineHeight: 1.8, maxWidth: 580 }}>
            From single-site landlords to multi-site portfolio managers, public sector and healthcare providers — structured process, fully vetted operatives, complete transparency.
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <div style={{ background: "#fff", padding: "72px 64px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 40 }}>
          <div style={{ fontWeight: 300, fontSize: 38, letterSpacing: "-0.02em", color: SLATE }}>Our Services</div>
          <span style={{ fontWeight: 500, fontSize: 13, color: ACCENT }}>View all →</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(28,36,49,0.07)" }}>
          {[
            ["Planned Preventative Maintenance", imgPPM, 0],
            ["Reactive & Emergency Callouts", imgReactive, 1],
            ["Grounds & External Maintenance", imgGrounds, 2],
            ["Building Fabric & External Works", imgExternal, 3],
          ].map(([t, img, i]) => (
            <div key={t as string} style={{ background: "#fff", padding: "28px 24px" }}>
              <div style={{ height: 140, overflow: "hidden", marginBottom: 20 }}>
                <img src={img as string} alt={t as string} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(25%)" }} />
              </div>
              <div style={{ fontWeight: 400, fontSize: 10, color: ACCENT, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 8 }}>0{(i as number) + 1}</div>
              <div style={{ fontWeight: 500, fontSize: 14, color: SLATE, lineHeight: 1.4, letterSpacing: "-0.01em" }}>{t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* MATTERPORT */}
      <div style={{ background: SLATE, color: "#fff", padding: "80px 64px", display: "grid", gridTemplateColumns: "3fr 2fr", gap: 72 }}>
        <div>
          <div style={{ fontWeight: 400, fontSize: 11, letterSpacing: "0.22em", color: `${ACCENT}cc`, textTransform: "uppercase", marginBottom: 20 }}>Flagship Capability</div>
          <div style={{ fontWeight: 300, fontSize: 46, lineHeight: 1.1, letterSpacing: "-0.03em", marginBottom: 24 }}>
            3D Building Surveys<br />with <span style={{ fontWeight: 600 }}>Matterport.</span>
          </div>
          <div style={{ overflow: "hidden", marginBottom: 0 }}>
            <img src={mp.img} alt={mp.tab} style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", display: "block", objectPosition: mp.tab === "floorplan" ? "center" : "center top" }} />
          </div>
          <div style={{ display: "flex", marginBottom: 12 }}>
            {mp.tabs.map((t, i) => (
              <button key={t.id} onClick={() => mp.setTab(t.id)}
                style={{ flex: 1, padding: "9px", background: mp.tab === t.id ? `rgba(0,102,204,0.28)` : "rgba(255,255,255,0.04)", border: "none", borderTop: `1px solid rgba(255,255,255,0.07)`, borderRight: i < 2 ? "1px solid rgba(255,255,255,0.07)" : "none", color: mp.tab === t.id ? "#fff" : "rgba(255,255,255,0.25)", fontSize: 10, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit" }}>{t.label}</button>
            ))}
          </div>
          <div style={{ fontSize: 10, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            {mp.tab === "walkthrough" && "First-person walkthrough — Matterport Pro3 capture"}
            {mp.tab === "dollhouse" && "Dollhouse view — full 3D spatial model"}
            {mp.tab === "floorplan" && "Schematic floor plan — auto-generated from 3D scan"}
          </div>
        </div>
        <div style={{ paddingTop: 48 }}>
          <div style={{ fontWeight: 400, fontSize: 15, color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 28 }}>A permanent, navigable digital record of every space — transforming how we scope, quote, document and maintain your estate.</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {["3D Virtual Building Tours", "Accurate Floor Plans & CAD Export", "Digital Twin Documentation", "Before & After Condition Records", "Remote Scoping & Faster Quoting"].map(pt => (
              <div key={pt} style={{ display: "flex", gap: 12, alignItems: "flex-start", paddingBottom: 16, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div style={{ width: 4, height: 4, borderRadius: "50%", background: ACCENT, marginTop: 7, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.58)", lineHeight: 1.5 }}>{pt}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 28, border: "1px solid rgba(255,255,255,0.25)", color: "#fff", display: "inline-block", padding: "11px 26px", fontSize: 13, fontWeight: 500 }}>Book a Survey →</div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// SWITCHER SHELL
// ═══════════════════════════════════════════════════════════════
export default function FMDesignMockups() {
  const [active, setActive] = useState<"a" | "b" | "c">("a");

  const tabs = [
    { id: "a" as const, label: "A — Bold & Industrial", color: "#FF8C00" },
    { id: "b" as const, label: "B — Corporate Premium", color: "#3A7CA5" },
    { id: "c" as const, label: "C — Minimal & High-End", color: "#0066CC" },
  ];

  return (
    <div style={{ minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>
      {/* STICKY DIRECTION SWITCHER */}
      <div style={{ position: "sticky", top: 0, zIndex: 9999, background: "#18181b", borderBottom: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", gap: 0, padding: "0 24px" }}>
        <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.3)", letterSpacing: "0.15em", textTransform: "uppercase", marginRight: 24, whiteSpace: "nowrap" }}>FM Design Directions</span>
        {tabs.map(t => (
          <button key={t.id} onClick={() => setActive(t.id)}
            style={{ padding: "14px 24px", background: active === t.id ? "rgba(255,255,255,0.07)" : "transparent", border: "none", borderBottom: active === t.id ? `2px solid ${t.color}` : "2px solid transparent", color: active === t.id ? "#fff" : "rgba(255,255,255,0.4)", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", fontFamily: "inherit" }}>
            {t.label}
          </button>
        ))}
        <span style={{ marginLeft: "auto", fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>Tell me which direction to build ↗</span>
      </div>

      {/* DIRECTION CONTENT */}
      {active === "a" && <DirectionA />}
      {active === "b" && <DirectionB />}
      {active === "c" && <DirectionC />}
    </div>
  );
}
