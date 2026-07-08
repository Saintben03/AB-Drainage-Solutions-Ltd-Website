import imgEmergency from "@assets/blog/emergency-response.png";
import imgBlocked from "@assets/blog/blocked-drain.png";
import imgRepair from "@assets/blog/drain-repair.png";
import imgCctv from "@assets/blog/cctv-survey.png";
import imgJetting from "@assets/blog/drain-jetting.png";

export interface ServicePageData {
  slug: string;
  /** id of the matching service in the Services page array, for cross-linking */
  serviceId: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string;
  img: string;
  /** 40-60 word standalone intro that answers the query directly */
  intro: string;
  body: string[];
  process: { step: string; desc: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
  stat?: { value: string; label: string };
}

export const servicePages: ServicePageData[] = [
  {
    slug: "blocked-drains",
    serviceId: "blocked-drains",
    name: "Blocked Drains",
    h1: "Blocked Drains? Fast, Reliable Clearance Across Hampshire & Surrounding Areas",
    metaTitle: "Blocked Drains | Fast Clearance Across Hampshire",
    metaDescription:
      "Blocked drain? A&B Drainage Solutions clears blocked drains across Hampshire 24/7 — high-pressure jetting, coring and rodding, clearance guaranteed. Call 01256 688 650.",
    keywords:
      "blocked drains, blocked drain Hampshire, drain clearance, blocked toilet, blocked sink drain, emergency blocked drain",
    img: imgBlocked,
    intro:
      "A blocked drain causes slow-draining sinks, gurgling toilets, foul smells, and eventually sewage backup. A&B Drainage Solutions clears blocked drains for homes and businesses across Hampshire, using high-pressure jetting up to 4,000 PSI and electro-mechanical coring — with clearance guaranteed and a flow test before we leave.",
    body: [
      "We clear everything from domestic kitchen sinks and toilets to large-bore commercial sewer pipes. Rather than just punching a hole through the blockage, we jet the pipe walls clean so the problem doesn't quickly return.",
      "If a blockage keeps recurring, we can combine the visit with a CCTV drain survey to find the underlying cause — roots, scale, a displaced joint, or structural damage — and recommend a permanent fix.",
    ],
    process: [
      { step: "Locate the blockage", desc: "We use drain rods or a camera to confirm the location and nature of the blockage." },
      { step: "Choose the method", desc: "We select the right tool for the job — jetting, coring, or rodding — to clear it efficiently without unnecessary excavation." },
      { step: "Clear and clean", desc: "We don't just break through the blockage — we jet the pipe walls clean to prevent rapid recurrence from built-up debris." },
      { step: "Test and leave clean", desc: "A full flow test is carried out. We leave your property clean and tidy." },
    ],
    faqs: [
      {
        q: "What should I do if I have a blocked drain?",
        a: "Stop running water into the affected drain, avoid chemical unblockers on severe blockages, and call a professional. A&B Drainage Solutions answers 24/7 on 01256 688 650 and typically reaches Hampshire addresses within the hour.",
      },
      {
        q: "Is the clearance guaranteed?",
        a: "Yes. We guarantee the drain will be fully clear and flowing freely when we leave. If the blockage recurs within a reasonable period due to the same cause, call us — we'll come back.",
      },
      {
        q: "How long does clearing a blocked drain take?",
        a: "Most domestic drain clearances take 30–90 minutes depending on severity. Commercial or multiple blockages may take longer.",
      },
    ],
    related: ["drain-unblocking", "drain-jetting", "cctv-drain-survey"],
    stat: { value: "100%", label: "Clearance guaranteed" },
  },
  {
    slug: "drain-unblocking",
    serviceId: "blocked-drains",
    name: "Drain Unblocking",
    h1: "Drain Unblocking — Jetting, Coring & Rodding, Done Right First Time",
    metaTitle: "Drain Unblocking | Jetting, Coring & Rodding Hampshire",
    metaDescription:
      "Professional drain unblocking across Hampshire. High-pressure jetting, electro-mechanical coring and rodding — the right method for every blockage. Call 01256 688 650.",
    keywords:
      "drain unblocking, unblock drain, drain unblocking Hampshire, drain clearance service, unblock outside drain",
    img: imgJetting,
    intro:
      "Drain unblocking is the professional clearance of a blocked pipe using the correct method for the cause — high-pressure water jetting, electro-mechanical coring for compacted debris and roots, or manual rodding. A&B Drainage Solutions unblocks domestic and commercial drains across Hampshire, with 33 years' experience and fully equipped vans on every job.",
    body: [
      "Off-the-shelf chemicals and plungers rarely fix anything beyond the trap. A proper unblock clears the full pipe run and removes the build-up on the pipe walls that caused the blockage in the first place.",
      "Every van carries jetting equipment, rods, coring machines, and CCTV cameras, so the engineer who arrives can diagnose and resolve the problem on the first visit rather than just assess it.",
    ],
    process: [
      { step: "Diagnose the cause", desc: "Fat, scale, roots, wipes, or a structural defect — the cause determines the method." },
      { step: "Select the right tool", desc: "Jetting for grease and silt, coring for compacted obstructions and roots, rodding for simple accessible blockages." },
      { step: "Clear the full run", desc: "We clear the whole pipe length and clean the walls, not just the point of blockage." },
      { step: "Flow test", desc: "We confirm the drain is flowing freely before we leave, and explain what caused the problem." },
    ],
    faqs: [
      {
        q: "How much does drain unblocking cost?",
        a: "Cost depends on the nature and severity of the blockage. Most domestic blockages are cleared at a straightforward call-out rate, and we always confirm charges before starting work so there are no surprises. Call 01256 688 650 for a quote.",
      },
      {
        q: "Can you unblock drains without digging?",
        a: "Almost always, yes. Jetting, coring, and rodding all work through existing access points. Excavation is only needed when a pipe has structurally failed — and even then, no-dig relining is often possible.",
      },
      {
        q: "Do I need to be home for a drain unblock?",
        a: "For external drains we often don't need internal access. For internal blockages, someone will need to be present.",
      },
    ],
    related: ["blocked-drains", "drain-jetting", "emergency-drainage-services"],
    stat: { value: "4,000 PSI", label: "Jetting on every van" },
  },
  {
    slug: "cctv-drain-survey",
    serviceId: "cctv-surveys",
    name: "CCTV Drain Survey",
    h1: "CCTV Drain Surveys — HD Inspection, Written Report, Typically Same Day",
    metaTitle: "CCTV Drain Survey | HD Inspection & Same-Day Reports",
    metaDescription:
      "HD CCTV drain surveys across Hampshire and the wider South East — pre-purchase surveys, recurring blockages, insurance reports. WRc/MSCC5 grading, report typically same day.",
    keywords:
      "CCTV drain survey, drain survey, pre-purchase drain survey, homebuyer drain survey, drain camera inspection, CCTV survey Hampshire",
    img: imgCctv,
    intro:
      "A CCTV drain survey uses an HD camera to inspect the inside of your drainage system without digging — identifying cracks, roots, displaced joints, and blockages. A&B Drainage Solutions surveys drains from 4-inch domestic pipes to large commercial sewers, with a written WRc/MSCC5-graded report typically issued the same day.",
    body: [
      "Our reports include photographs, defect descriptions, condition grading, location references, and recommendations, and are accepted by solicitors, mortgage lenders, insurers, and housing surveyors. Full footage is provided so you have a permanent record.",
      "CCTV surveys are one of the services we take across our widest coverage area — alongside Hampshire's towns, we regularly carry out survey and larger commercial work across Berkshire, Surrey, Sussex, Kent, London, Dorset, and Wiltshire.",
    ],
    process: [
      { step: "Access manholes", desc: "We identify and access the relevant inspection chambers and drain runs around the property." },
      { step: "Insert camera", desc: "A push-rod or tracked crawler camera is driven through the full length of each drain." },
      { step: "Record and identify", desc: "The camera records the full inspection and our engineer identifies any defects, breaks, roots, or displaced joints." },
      { step: "Issue the report", desc: "You receive a full written report with images, footage, condition ratings, and clear recommendations — typically the same day." },
    ],
    faqs: [
      {
        q: "What is a CCTV drain survey and when do I need one?",
        a: "A CCTV drain survey is an internal camera inspection of your drains that shows their exact condition without excavation. You need one when buying a property, when blockages keep recurring, before building work near drain runs, or when an insurer requires evidence of drain condition.",
      },
      {
        q: "Will the report be accepted by my solicitor or mortgage lender?",
        a: "Yes. Our reports follow industry WRc/MSCC5 standards and are accepted by solicitors, mortgage lenders, insurers, and housing surveyors.",
      },
      {
        q: "How quickly can I get the report?",
        a: "We work to conveyancing timescales and will usually issue the written report the same day as the survey.",
      },
    ],
    related: ["drain-lining-repair", "blocked-drains", "drain-jetting"],
    stat: { value: "Same day", label: "Report turnaround" },
  },
  {
    slug: "drain-jetting",
    serviceId: "cleaning-jetting",
    name: "Drain Jetting",
    h1: "Drain Jetting — High-Pressure Cleaning Up to 4,000 PSI",
    metaTitle: "Drain Jetting | High-Pressure Drain Cleaning Hampshire",
    metaDescription:
      "Van-mounted high-pressure drain jetting up to 4,000 PSI across Hampshire — grease, scale, silt and root clearance for homes and businesses. Call 01256 688 650.",
    keywords:
      "drain jetting, high pressure drain jetting, drain cleaning, water jetting drains, drain jetting Hampshire, commercial drain jetting",
    img: imgJetting,
    intro:
      "Drain jetting cleans pipes with high-pressure water — removing fat, grease, scale, silt, and tree roots that rods and chemicals leave behind. A&B Drainage Solutions runs van-mounted jetting units up to 4,000 PSI with specialist nozzles for root-cutting, degreasing, and heavy blockages, serving homes and businesses across Hampshire.",
    body: [
      "Jetting doesn't just clear the blockage — it restores the pipe's full bore by cleaning the internal walls, which is why it dramatically reduces recurrence compared with rodding alone.",
      "Regular preventative jetting is especially valuable for commercial kitchens and restaurants, where fat, oil, and grease build-up creates both blockage risk and compliance risk.",
    ],
    process: [
      { step: "Assess the drain", desc: "We check pipe diameter, material, and access points before selecting the right nozzle and pressure." },
      { step: "Insert the jetting hose", desc: "The hose is fed in through the nearest access point — manhole, rodding eye, or gulley." },
      { step: "Jet in both directions", desc: "Downstream first to push debris to the next manhole, then back to clean the pipe walls." },
      { step: "Confirm and report", desc: "Flow is confirmed with a water test and we report on the pipe's condition." },
    ],
    faqs: [
      {
        q: "Can jetting damage old clay or cast-iron pipes?",
        a: "Our engineers select appropriate pressures for the pipe material — starting lower for older or fragile pipes and adjusting carefully.",
      },
      {
        q: "How often should drains be jetted?",
        a: "For domestic properties, every 2–3 years is a good preventative measure. For commercial kitchens, every 3–6 months is recommended to stay compliant with environmental regulations.",
      },
      {
        q: "Will jetting fix a collapsed pipe?",
        a: "No — jetting clears and cleans, but structural damage needs a repair. If we find evidence of collapse, we'll recommend a CCTV survey and explain the repair options.",
      },
    ],
    related: ["blocked-drains", "drain-unblocking", "cctv-drain-survey"],
    stat: { value: "4,000 PSI", label: "Maximum jetting pressure" },
  },
  {
    slug: "drain-lining-repair",
    serviceId: "drain-repairs",
    name: "Drain Lining & Repair",
    h1: "Drain Lining & Repair — No-Dig Relining With a 12-Month Guarantee",
    metaTitle: "Drain Lining & Repair | No-Dig Relining Hampshire",
    metaDescription:
      "Cracked or collapsed drain? No-dig patch relining and full excavation repairs across Hampshire, verified by post-repair CCTV, with a 12-month workmanship guarantee.",
    keywords:
      "drain lining, drain repair, no dig drain repair, patch lining, drain relining Hampshire, collapsed drain repair",
    img: imgRepair,
    intro:
      "Drain lining repairs cracked, fractured, or root-damaged pipes from the inside — a fibreglass-reinforced resin liner is cured in place, restoring the pipe without excavation. A&B Drainage Solutions offers no-dig patch and full-length relining plus traditional excavation where needed, every repair verified by CCTV and covered by a 12-month workmanship guarantee.",
    body: [
      "Damaged drains worsen over time: groundwater gets in, soil washes away, and the ground around the pipe deteriorates. Catching a defect early usually means a simple patch line rather than a dig.",
      "Where relining isn't viable — for example a fully collapsed pipe — our groundworks team excavates, replaces the failed section to current Building Regulations standards, and fully reinstates surfaces including tarmac, concrete, and block paving.",
    ],
    process: [
      { step: "Survey and diagnose", desc: "CCTV inspection confirms the exact defect type, length, and location." },
      { step: "Present options", desc: "We recommend the most appropriate solution — no-dig relining vs excavation — with honest costs and timescales for both." },
      { step: "Complete the repair", desc: "Repair carried out by experienced engineers using high-quality materials." },
      { step: "Verify and sign off", desc: "Post-repair CCTV confirms the repair is successful. We provide documentation and a 12-month guarantee." },
    ],
    faqs: [
      {
        q: "Is no-dig relining as strong as a new pipe?",
        a: "Quality structural patch liners are structurally equivalent to a new pipe. They resist root intrusion, corrosion, and ground movement for decades.",
      },
      {
        q: "Does the repair come with a guarantee?",
        a: "Yes. All our repair work is guaranteed for 12 months, covering workmanship — not damage caused by third parties or subsequent misuse.",
      },
      {
        q: "How do I know if my drain needs lining or replacing?",
        a: "A CCTV survey tells us definitively. Cracks, fractures, and root ingress can usually be lined; a fully collapsed or badly deformed pipe generally needs excavation and replacement. We present both options with costs before any work starts.",
      },
    ],
    related: ["cctv-drain-survey", "blocked-drains", "emergency-drainage-services"],
    stat: { value: "12 months", label: "Workmanship guarantee" },
  },
  {
    slug: "emergency-drainage-services",
    serviceId: "emergency",
    name: "Emergency Drainage Services",
    h1: "Emergency Drainage Services — 24/7 Response, Typically Within 1 Hour",
    metaTitle: "Emergency Drainage Services | 24/7 Rapid Response",
    metaDescription:
      "24/7 emergency drainage across Hampshire — sewage backup, flooding, total blockages. Fully equipped vans, typically on site within 1 hour. Call 01256 688 650 now.",
    keywords:
      "emergency drainage, emergency drain unblocking, 24 hour drainage, emergency plumber drains, sewage backup, emergency drainage Hampshire",
    img: imgEmergency,
    intro:
      "Emergency drainage means help now — sewage backing up, floodwater rising, or a drain completely blocked. A&B Drainage Solutions runs a fully staffed 24/7 emergency line, 365 days a year, and typically arrives within 1 hour across Hampshire with jetting, CCTV, and pumping equipment on board to resolve the problem on the first visit.",
    body: [
      "Our engineers arrive ready to fix, not just assess. Every emergency van carries high-pressure jetting machines, drain rods, CCTV cameras, and pumping equipment.",
      "Where a full repair can't be completed in one visit, we make the drain safe and functional before scheduling the follow-up — you're never left with an open problem overnight.",
    ],
    process: [
      { step: "Call us", desc: "Phone 01256 688 650 or 07498 062 710. Our team answers immediately — no waiting for a callback." },
      { step: "We confirm ETA", desc: "Our nearest available engineer is dispatched. Typical arrival time is within 1 hour across Hampshire." },
      { step: "Assess & action", desc: "We assess the problem and begin resolving it immediately — no lengthy paperwork before we start." },
      { step: "Resolve & confirm", desc: "We confirm the drain is clear and flowing freely before we leave, and explain what caused the issue." },
    ],
    faqs: [
      {
        q: "How quickly can you respond to an emergency drainage callout?",
        a: "We typically arrive within 1 hour of your call across Hampshire, 24 hours a day, 365 days a year including bank holidays. Call 01256 688 650 and our team answers immediately.",
      },
      {
        q: "Do you charge extra for nights and weekends?",
        a: "Out-of-hours and weekend call-outs may carry a supplement. We'll confirm any additional charges before work begins so there are no surprises.",
      },
      {
        q: "Can you deal with sewage flooding inside the property?",
        a: "Yes. We carry pumping equipment and can assist with removal of sewage water. We'd also recommend contacting your insurance company to document the damage.",
      },
    ],
    related: ["blocked-drains", "drain-unblocking", "drain-lining-repair"],
    stat: { value: "<1hr", label: "Typical arrival time" },
  },
];

export const servicePageBySlug = (slug: string) =>
  servicePages.find((s) => s.slug === slug);

/** First dedicated page matching a Services-page service id, if one exists */
export const servicePageByServiceId = (serviceId: string) =>
  servicePages.find((s) => s.serviceId === serviceId);

/** Human-readable content freshness date shown on key SEO pages */
export const CONTENT_UPDATED = "8 July 2026";
export const CONTENT_UPDATED_ISO = "2026-07-08";
