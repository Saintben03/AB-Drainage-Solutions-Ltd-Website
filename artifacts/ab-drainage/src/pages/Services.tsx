import { Link } from "wouter";
import { Phone, ArrowRight, Check, Clock, ShieldCheck, Wrench, AlertCircle, X } from "lucide-react";
import { SEO } from "@/components/SEO";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useBookNow } from "@/contexts/BookNowContext";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/utils";
import { FlexiPayForm } from "@/components/FlexiPayForm";
import { WaterWave } from "@/components/WaterWave";

import heroBg from "@assets/Designer_(1)_1782807579036.png";
import imgEmergency from "@assets/blog/emergency-response.png";
import imgBlocked from "@assets/blog/blocked-drain.png";
import imgRepair from "@assets/blog/drain-repair.png";
import imgCommercial from "@assets/blog/commercial-drainage.png";
import imgGuttering from "@assets/blog/guttering.png";
import imgCctv from "@assets/blog/cctv-survey.png";
import imgJetting from "@assets/blog/drain-jetting.png";
import imgSoakaway from "@assets/blog/soakaway-install.png";

interface Service {
  id: string;
  title: string;
  shortDesc: string;
  img: string;
  features: string[];
  detail: {
    intro: string[];
    signs: string[];
    included: { label: string; desc: string }[];
    process: { step: string; desc: string }[];
    faq: { q: string; a: string }[];
    stat?: { value: string; label: string };
  };
}

const services: Service[] = [
  {
    id: "emergency",
    title: "24/7 Emergency Drainage",
    shortDesc: "We answer at any hour — day, night, weekend, or bank holiday.",
    img: imgEmergency,
    features: ["24/7 Rapid Response", "Typically Within 1 Hour", "Sewage & Flooding"],
    detail: {
      intro: [
        "Drainage emergencies don't wait for business hours — and neither do we. Whether it's a blocked toilet at 2am, raw sewage backing up through your floor, or floodwater rising around your property, A&B Drainage Solutions Ltd operates a fully staffed 24/7 emergency response across Hampshire.",
        "Our fully equipped vans carry high-pressure jetting machines, drain rods, CCTV cameras, and pumping equipment, meaning our engineers arrive ready to resolve the problem on the first visit — not just assess it. We typically arrive within 1 hour of your call.",
        "Don't risk property damage or health hazards by waiting. One call to our emergency line and help is on the way.",
      ],
      signs: [
        "Sewage or foul water backing up into sinks, baths, or toilets",
        "A drain that is completely blocked and cannot clear",
        "Flooding around inspection chambers or manholes",
        "Strong sewage smell inside the property",
        "Gurgling sounds from multiple drains simultaneously",
        "Water pooling rapidly on driveways or gardens",
      ],
      included: [
        { label: "Emergency call-out", desc: "We answer 24/7/365 including Christmas Day and bank holidays." },
        { label: "High-pressure jetting", desc: "Van-mounted units up to 4,000 PSI to blast through the most severe blockages." },
        { label: "Drain rodding", desc: "Manual rodding for accessible blockages as a fast first-response option." },
        { label: "CCTV assessment", desc: "If the blockage cannot be cleared by jetting alone, we'll inspect with a camera to diagnose the root cause." },
        { label: "Sewage pumping", desc: "Pump out and remove standing sewage water where required." },
        { label: "Temporary measures", desc: "Where a repair cannot be completed in one visit, we'll make the drain safe before returning to complete the work." },
      ],
      process: [
        { step: "Call us", desc: "Phone 01256 688 650 or 07498 062 710. Our team answers immediately — no waiting for a callback." },
        { step: "We confirm ETA", desc: "Our nearest available engineer is dispatched. Typical arrival time is within 1 hour across Hampshire." },
        { step: "Assess & action", desc: "We assess the problem and begin resolving it immediately — no lengthy paperwork before we start." },
        { step: "Resolve & confirm", desc: "We confirm the drain is clear and flowing freely before we leave, and explain what caused the issue." },
      ],
      faq: [
        { q: "Do you charge extra for nights and weekends?", a: "Out-of-hours and weekend call-outs may carry a supplement. We'll confirm any additional charges before work begins so there are no surprises." },
        { q: "What if the blockage is my neighbour's responsibility?", a: "We can advise on shared drain responsibility and, where required, liaise with Thames Water or Southern Water to confirm ownership before proceeding." },
        { q: "Can you deal with sewage flooding inside the property?", a: "Yes. We carry pumping equipment and can assist with removal of sewage water. We'd recommend you also contact your insurance company to document the damage." },
      ],
      stat: { value: "<1hr", label: "Typical arrival time" },
    },
  },
  {
    id: "blocked-drains",
    title: "Blocked Drains",
    shortDesc: "Fast, guaranteed clearance for domestic and commercial blocked drains.",
    img: imgBlocked,
    features: ["High-Pressure Jetting", "Electro-Mechanical Coring", "Full Clearance Guaranteed"],
    detail: {
      intro: [
        "A blocked drain left untreated can quickly become a serious problem — from sewage backup and surface flooding to structural damage and damp. A&B Drainage Solutions clears blocked drains of all sizes, from domestic kitchen sinks to large-bore commercial sewer pipes.",
        "We use a combination of high-pressure water jetting (up to 4,000 PSI), electro-mechanical coring machines, and specialist drain rods depending on the nature and severity of the blockage. Our method always ensures the pipe is not just partially cleared but fully open and flowing freely.",
        "We carry out a post-clearance flow test before leaving, and can combine the visit with a CCTV survey if you want to understand what caused the blockage and whether there is any underlying structural damage.",
      ],
      signs: [
        "Water draining slowly from sinks, showers, or baths",
        "Gurgling sounds from plug holes or toilets",
        "Toilets that won't flush properly or require multiple flushes",
        "Water rising in the inspection chamber outside",
        "Foul odours coming from drains inside or outside the property",
        "Multiple fixtures backing up at the same time",
      ],
      included: [
        { label: "Drain survey & diagnosis", desc: "We locate the blockage before committing to the right clearance method." },
        { label: "High-pressure jetting", desc: "Removes fat, grease, silt, scale, and debris from drain walls as well as the blockage itself." },
        { label: "Electro-mechanical coring", desc: "For compacted blockages or where roots have infiltrated the drain — cuts through solid obstructions." },
        { label: "Manual drain rodding", desc: "Traditional method for accessible, straightforward blockages." },
        { label: "Flow test & confirmation", desc: "We confirm full flow is restored before leaving your site." },
        { label: "Clearance report", desc: "Where required for insurance or landlord purposes, a written clearance certificate is available." },
      ],
      process: [
        { step: "Locate the blockage", desc: "We use drain rods or a camera to confirm the location and nature of the blockage." },
        { step: "Choose the method", desc: "We select the right tool for the job — jetting, coring, or rodding — to clear it efficiently without unnecessary excavation." },
        { step: "Clear and clean", desc: "We don't just break through the blockage — we jet the pipe walls clean to prevent rapid recurrence from built-up debris." },
        { step: "Test and leave clean", desc: "A full flow test is carried out. We leave your property clean and tidy." },
      ],
      faq: [
        { q: "Is the clearance guaranteed?", a: "Yes. We guarantee the drain will be fully clear and flowing freely when we leave. If the blockage recurs within a reasonable period due to the same cause, call us — we'll come back." },
        { q: "How long does it take?", a: "Most domestic drain clearances take 30–90 minutes depending on the severity. Commercial or multiple blockages may take longer." },
        { q: "Do I need to be home?", a: "For external drain clearances, we often don't need internal access. For internal blockages, someone will need to be present." },
      ],
      stat: { value: "100%", label: "Clearance guaranteed" },
    },
  },
  {
    id: "cctv-surveys",
    title: "CCTV Drain Surveys",
    shortDesc: "HD camera inspection for accurate diagnosis, pre-purchase surveys, and insurance reports.",
    img: imgCctv,
    features: ["HD Camera Inspection", "Pre-Purchase Surveys", "Written Report Provided"],
    detail: {
      intro: [
        "A CCTV drain survey is the most accurate and cost-effective way to understand the condition of your drainage system without digging. A&B Drainage Solutions uses both push-rod and tracked crawler CCTV cameras to inspect drains from 4\" domestic pipes up to large-diameter commercial sewers.",
        "Our surveys produce a detailed written report with condition grading, defect locations, and recommendations — fully accepted by solicitors, insurers, mortgage lenders, and housing surveyors. We can issue the report the same day in most cases.",
        "Whether you're buying a new home, investigating repeat blockages, planning an extension, or dealing with an insurance claim, a CCTV survey gives you the evidence you need to act with confidence.",
      ],
      signs: [
        "Persistent or recurring blockages that keep coming back",
        "Buying a new property and want the drains checked before exchange",
        "Suspected root intrusion or pipe damage after tree work",
        "Planning an extension or new drain connection",
        "Insurance claim requiring evidence of drain condition",
        "Unexplained damp, subsidence, or soft ground in the garden",
      ],
      included: [
        { label: "Full CCTV inspection", desc: "HD camera survey of all accessible drainage runs, with live viewing on site." },
        { label: "Condition grading", desc: "Defects are graded to WRc/MSCC5 standards — the industry standard used by water companies and surveyors." },
        { label: "Written report", desc: "Detailed report with photographs, defect descriptions, location references, and recommendations." },
        { label: "DVD/USB recording", desc: "Full footage provided so you have a permanent record and can share with contractors, solicitors, or insurers." },
        { label: "Recommendations", desc: "We explain exactly what, if anything, needs to be done — and give you an honest opinion on urgency." },
        { label: "Pre-purchase surveys", desc: "Prioritised turnaround to meet conveyancing deadlines — report typically issued same day." },
      ],
      process: [
        { step: "Access manholes", desc: "We identify and access the relevant inspection chambers and drain runs around the property." },
        { step: "Insert camera", desc: "A push-rod or tracked crawler camera is inserted and driven through the full length of each drain." },
        { step: "Record and identify", desc: "The camera records the full inspection and our engineer identifies any defects, breaks, roots, or displaced joints." },
        { step: "Issue the report", desc: "You receive a full written report with images, footage, condition ratings, and clear recommendations — typically the same day." },
      ],
      faq: [
        { q: "Can I get a CCTV survey for a house purchase?", a: "Absolutely — this is one of the most common reasons customers contact us. We work to conveyancing timescales and will usually issue the report the same day." },
        { q: "Will the report be accepted by my solicitor or mortgage lender?", a: "Yes. Our reports follow industry standards and are accepted by solicitors, mortgage lenders, insurers, and housing surveyors." },
        { q: "What if the camera finds a problem?", a: "We'll explain exactly what the issue is, what options you have, and provide a no-obligation quotation for any repair work recommended." },
      ],
      stat: { value: "Same day", label: "Report turnaround" },
    },
  },
  {
    id: "drain-repairs",
    title: "Drain Repairs",
    shortDesc: "Structural repairs using no-dig relining or traditional excavation — with a 12-month guarantee.",
    img: imgRepair,
    features: ["No-Dig Patch Relining", "Traditional Excavation", "Full Reinstatement"],
    detail: {
      intro: [
        "Damaged drains don't fix themselves. Cracked, collapsed, or displaced pipes will worsen over time — allowing ground water to enter, soil to wash away, and the structural integrity of surrounding ground to deteriorate. A&B Drainage Solutions repairs all types of drain defects with a 12-month workmanship guarantee on all repairs.",
        "Where possible, we use no-dig structural patch relining — inserting a fibreglass-reinforced resin liner into the damaged section without excavation. This dramatically reduces disruption, cost, and reinstatement work. For severely collapsed pipes or defects where relining isn't viable, our groundworks team carries out full excavation and replacement.",
        "All repair work is verified by a post-repair CCTV inspection before we leave site, giving you the assurance that the repair has been completed correctly.",
      ],
      signs: [
        "A CCTV survey has identified cracks, fractures, or displaced joints",
        "Persistent leaks or damp patches near drain runs",
        "Sinkholes or soft areas appearing in the garden",
        "Root intrusion visible in CCTV footage",
        "Drain inspection chamber that has cracked or is subsiding",
        "Smell of sewage without a visible blockage",
      ],
      included: [
        { label: "Pre-repair CCTV survey", desc: "We confirm the extent and nature of the defect before beginning any repair work." },
        { label: "No-dig patch relining", desc: "Structural fibreglass-reinforced resin liner inserted and cured in place — restores the pipe to like-new strength without excavation." },
        { label: "Full pipe relining", desc: "For longer sections of deteriorated pipe, a full-length liner is installed through existing access points." },
        { label: "Excavation and replacement", desc: "Where no-dig isn't viable, our team excavates, removes the failed pipe, and installs new pipework to current Building Regs standards." },
        { label: "Manhole repairs", desc: "Repair or replacement of damaged inspection chambers, benching, and frame/cover units." },
        { label: "Post-repair CCTV verification", desc: "Every repair is verified by camera before we leave to confirm the work is complete and correct." },
      ],
      process: [
        { step: "Survey and diagnose", desc: "CCTV inspection to confirm the exact defect type, length, and location." },
        { step: "Present options", desc: "We'll recommend the most appropriate solution — no-dig relining vs excavation — with honest costs and timescales for both." },
        { step: "Complete the repair", desc: "Repair carried out by experienced engineers using high-quality materials." },
        { step: "Verify and sign off", desc: "Post-repair CCTV confirms the repair is successful. We provide documentation and a 12-month guarantee." },
      ],
      faq: [
        { q: "How much disruption will excavation cause?", a: "We minimise disruption wherever possible — cutting precisely, protecting surrounding areas, and fully reinstating surfaces including tarmac, concrete, or block paving." },
        { q: "Is no-dig relining as strong as a new pipe?", a: "Quality structural patch liners are structurally equivalent to a new pipe. They resist root intrusion, corrosion, and ground movement for decades." },
        { q: "Does the repair come with a guarantee?", a: "Yes. All our repair work is guaranteed for 12 months. This covers the workmanship — not damage caused by third parties or subsequent misuse." },
      ],
      stat: { value: "12 months", label: "Workmanship guarantee" },
    },
  },
  {
    id: "commercial",
    title: "Commercial & Industrial Drainage",
    shortDesc: "Planned maintenance contracts and rapid reactive response for businesses across Hampshire.",
    img: imgCommercial,
    features: ["Grease Trap Cleaning", "Planned Maintenance Contracts", "Heavy-Duty Tanker Units"],
    detail: {
      intro: [
        "Drainage failure in a commercial or industrial setting is far more than an inconvenience — it can mean regulatory breaches, failed health inspections, business closure, and significant financial loss. A&B Drainage Solutions provides dedicated commercial and industrial drainage services across Hampshire, working with restaurants, hotels, schools, hospitals, industrial estates, housing associations, and local authorities.",
        "We offer both planned preventative maintenance contracts — scheduled visits to keep your drainage system in good working order — and rapid reactive response when things go wrong outside of regular hours. Our heavy-duty tankers, jetting units, and CCTV equipment are sized for commercial-grade drain systems.",
        "All commercial work is carried out with full method statements and risk assessments. We work around your operational hours wherever possible to minimise disruption to your business.",
      ],
      signs: [
        "Recurring grease trap overflows or odours in a food-service environment",
        "Slow or blocked drains affecting multiple units in a commercial building",
        "Fat, oil, and grease (FOG) compliance risk or Environmental Health concern",
        "Regular reactive callouts that a maintenance contract would prevent",
        "Industrial site with heavy-duty drainage requirements",
        "New building or development requiring drainage commissioning",
      ],
      included: [
        { label: "Planned maintenance contracts", desc: "Regular scheduled visits — monthly, quarterly, or annually — to jet, clean, and inspect your full drainage network." },
        { label: "Grease trap servicing", desc: "Emptying, cleaning, and inspection of grease interceptors to comply with environmental regulations and prevent FOG blockages." },
        { label: "High-capacity jetting", desc: "Our commercial-grade jetting units handle large-bore pipes and heavy industrial deposits that lighter domestic units cannot touch." },
        { label: "Tanker hire & pump-out", desc: "We operate heavy-duty tankers for large-volume pump-out of septic tanks, interceptors, and settlement tanks." },
        { label: "CCTV surveys and reports", desc: "Full drain network surveys with detailed reports suitable for compliance, insurance, and asset management purposes." },
        { label: "Reactive emergency response", desc: "Priority response for contract clients — we'll always aim to reach you within the hour." },
      ],
      process: [
        { step: "Site survey", desc: "We visit your site to assess the full drainage network and understand your operational requirements and sensitivities." },
        { step: "Agree a plan", desc: "We design a maintenance schedule or reactive-only agreement that fits your budget and risk profile." },
        { step: "Ongoing service", desc: "Our engineers carry out all works to the agreed schedule, always producing a job sheet and report for your records." },
        { step: "Annual review", desc: "We review the drainage system condition annually and advise on any capital works needed before they become emergencies." },
      ],
      faq: [
        { q: "Can you work outside of business hours?", a: "Yes. We regularly carry out commercial drainage work overnight or at weekends to avoid disruption during trading hours." },
        { q: "Do you issue method statements and risk assessments?", a: "Yes, for all commercial contracts. We can also attend site induction, provide CHAS/SSIP documentation, and meet specific client compliance requirements." },
        { q: "Can a maintenance contract reduce our reactive callout costs?", a: "Almost always, yes. Planned maintenance catches problems early and prevents emergency callouts, which typically cost significantly more than regular servicing." },
      ],
      stat: { value: "33 yrs", label: "Commercial experience" },
    },
  },
  {
    id: "cleaning-jetting",
    title: "Drain Cleaning & Jetting",
    shortDesc: "Van-mounted high-pressure jetting up to 4,000 PSI — the most effective drain cleaning available.",
    img: imgJetting,
    features: ["Up to 4,000 PSI", "Grease & Root Clearance", "Restores Pipes to Near-New"],
    detail: {
      intro: [
        "High-pressure water jetting is the gold standard for drain cleaning. Unlike drain rods or chemical treatments — which only break through blockages — jetting cleans the internal walls of the pipe as well, removing years of built-up fat, grease, scale, silt, and biofilm that would otherwise cause recurring problems.",
        "Our van-mounted jetting units deliver water at up to 4,000 PSI through specialist nozzles designed for different applications: rotary root-cutting nozzles for tree root intrusion, degreasing nozzles for fat and grease build-up, and high-impact clearing nozzles for solid blockages.",
        "Regular high-pressure jetting as part of a maintenance programme dramatically reduces the frequency and cost of emergency callouts and keeps your drainage running freely year-round.",
      ],
      signs: [
        "Slow-running drains that haven't responded to over-the-counter products",
        "Recurring blockages in the same drain",
        "Fat or grease build-up in kitchen drain lines (domestic or commercial)",
        "Scale or mineral deposits restricting flow in older pipe systems",
        "Root intrusion detected by CCTV survey",
        "Pre-survey cleaning required before a CCTV inspection",
      ],
      included: [
        { label: "Root-cutting jetting", desc: "Specialist rotating nozzles cut through root systems that have infiltrated the drain, restoring full bore." },
        { label: "Degreasing jetting", desc: "High-temperature and high-pressure jetting to emulsify and remove fat, oil, and grease deposits — essential for food service businesses." },
        { label: "Scale and silt removal", desc: "Breaks up mineral scale and flushes accumulated silt from low-gradient drain runs." },
        { label: "Pre-CCTV cleaning", desc: "Jetting the drain before a camera survey gives a clear view and accurate condition assessment." },
        { label: "Preventative maintenance jetting", desc: "Scheduled annual or bi-annual jetting to keep drains clean and flowing — particularly valuable for commercial kitchens and restaurants." },
        { label: "Post-jetting inspection", desc: "We inspect by camera after jetting to confirm the pipe is clean and identify any structural issues exposed after cleaning." },
      ],
      process: [
        { step: "Assess the drain", desc: "We check the pipe diameter, material, and access points before selecting the right nozzle and pressure for the job." },
        { step: "Insert the jetting hose", desc: "The hose is fed into the drain through the nearest access point — manhole, rodding eye, or gulley." },
        { step: "Jet in both directions", desc: "We jet downstream first to push debris to the next manhole, then pull the nozzle back to clean pipe walls." },
        { step: "Confirm and report", desc: "Flow is confirmed with a water test. We report back on the condition of the pipe and any observations made during the clean." },
      ],
      faq: [
        { q: "Can jetting damage old clay or cast-iron pipes?", a: "Our engineers are trained to select appropriate pressures for the pipe material. We start at lower pressures for older or more fragile pipe materials and adjust accordingly." },
        { q: "How often should I have my drains jetted?", a: "For domestic properties, every 2–3 years is a good preventative measure. For commercial kitchens, every 3–6 months is recommended to stay compliant with environmental regulations." },
        { q: "Will jetting fix a collapsed pipe?", a: "No. Jetting resolves blockages and cleans pipes — but structural damage requires a repair. If we find evidence of collapse during jetting, we'll recommend a CCTV survey." },
      ],
      stat: { value: "4,000 PSI", label: "Maximum jetting pressure" },
    },
  },
  {
    id: "soakaways",
    title: "Soakaway Installation",
    shortDesc: "Building Regs compliant soakaway design and installation for surface water management.",
    img: imgSoakaway,
    features: ["Building Regs Compliant", "Soil Percolation Testing", "Modern Crate Systems"],
    detail: {
      intro: [
        "A soakaway is a below-ground structure that collects surface water — from roofs, driveways, patios, and drainage systems — and allows it to disperse gradually into the surrounding soil. When a soakaway fails or becomes overloaded, surface water flooding is the result.",
        "A&B Drainage Solutions designs and installs high-capacity plastic crate soakaway systems to current Building Regulations and BRE 365 standards. Our groundworks team carries out the required soil percolation testing to confirm the ground's absorption capacity and sizes the system correctly — ensuring it performs for decades.",
        "We install soakaways for new extensions, new build properties, replacement of failed existing soakaways, and as part of sustainable drainage schemes (SuDS) for planning applications.",
      ],
      signs: [
        "Surface water flooding on the drive or garden after heavy rain",
        "An existing soakaway that has failed or is overflowing",
        "Planning permission for an extension requires surface water disposal",
        "New build or barn conversion requiring Building Regs drainage sign-off",
        "Standing water that is slow to disperse after rainfall",
        "A French drain that is no longer performing adequately",
      ],
      included: [
        { label: "Soil percolation test", desc: "The BRE 365 percolation test determines the absorption rate of the ground, essential for correctly sizing the system." },
        { label: "System design", desc: "We design the soakaway to the correct capacity for your roof/driveway area and local rainfall data." },
        { label: "Plastic crate installation", desc: "Modern polypropylene crate soakaways have a higher void ratio than traditional rubble fills, making better use of the excavated volume." },
        { label: "Inlet pipework", desc: "Installation of the connecting pipework from downpipes, gullies, or existing drainage to the soakaway inlet." },
        { label: "Geotextile wrapping", desc: "The crate system is wrapped in geotextile membrane to prevent soil ingress while allowing water through." },
        { label: "Reinstatement", desc: "We fully reinstate the ground surface after installation — lawn turf, gravel, or paving as required." },
      ],
      process: [
        { step: "Site assessment", desc: "We visit to assess the area, identify the most suitable location (minimum 5m from buildings), and check for underground services." },
        { step: "Percolation test", desc: "Soil absorption rate is measured to confirm suitability and calculate the required soakaway volume." },
        { step: "Excavation and installation", desc: "We excavate to the required depth, install the crate system with geotextile and inlet pipe, and backfill carefully." },
        { step: "Reinstatement and sign-off", desc: "Surface reinstated to match the surroundings. We provide documentation for Building Control sign-off where required." },
      ],
      faq: [
        { q: "Can any ground take a soakaway?", a: "Clay-heavy ground absorbs water slowly and may not be suitable for a soakaway. The percolation test will confirm this — and if a soakaway isn't viable, we'll suggest alternatives such as attenuation tanks or connection to a surface water sewer." },
        { q: "How big does a soakaway need to be?", a: "Size depends on the area draining to it, local rainfall intensity, and the soil percolation rate. We calculate this to BRE 365 standards and size accordingly." },
        { q: "Do I need planning permission for a soakaway?", a: "Generally no for a domestic replacement, but extensions and new builds will typically require Building Control sign-off. We provide the documentation needed." },
      ],
      stat: { value: "BRE 365", label: "Compliant design standard" },
    },
  },
  {
    id: "guttering",
    title: "Guttering & Downpipes",
    shortDesc: "Gutter clearing, downpipe unblocking, and repairs to protect your property from water damage.",
    img: imgGuttering,
    features: ["Full Gutter Clearing", "Downpipe Unblocking", "Repairs & Replacement"],
    detail: {
      intro: [
        "Blocked gutters and downpipes are one of the most common and most ignored causes of property damage in the UK. When gutters overflow, water runs down the face of the building — causing damp, staining, erosion of pointing, and potentially penetrating the wall cavity. It's a problem that compounds silently until the damage is severe.",
        "A&B Drainage Solutions clears gutters and downpipes as part of our complete surface water drainage service. We remove all accumulated debris — leaves, moss, compacted silt — and flush the system through to confirm free flow. Where gutters or joints are damaged, we carry out repairs or replacements on the same visit where possible.",
        "We recommend having gutters cleared at least once a year, ideally in late autumn after leaf fall. Properties surrounded by trees may benefit from twice-yearly clearing.",
      ],
      signs: [
        "Water visibly overflowing from gutters during rain",
        "Damp patches on interior walls, especially at upper floor level",
        "Moss or plant growth in the guttering",
        "Staining down the face of the building below gutters or downpipes",
        "Sagging gutter sections caused by debris weight",
        "Downpipes that are blocked or disconnected at the base",
      ],
      included: [
        { label: "Full gutter clear", desc: "All debris removed from gutters by hand and by flush — we don't just push it into the downpipe." },
        { label: "Downpipe unblocking", desc: "Rods and flush to clear compacted debris in downpipes, including underground connections to gullies." },
        { label: "Gutter flush test", desc: "We confirm free flow through the full system before leaving." },
        { label: "Joint and seal repairs", desc: "Leaking gutter joints, brackets, and end caps repaired or replaced where accessible." },
        { label: "Section replacement", desc: "Cracked or damaged gutter sections replaced like-for-like to match the existing profile." },
        { label: "Fascia check", desc: "We advise on any signs of fascia or soffit deterioration noticed during the work." },
      ],
      process: [
        { step: "Access the guttering", desc: "We access gutters safely using appropriate equipment — ladders, scaffolding, or reach equipment depending on height and access." },
        { step: "Remove debris", desc: "All debris is removed from gutter channels by hand and collected — not flushed into the downpipe." },
        { step: "Flush through", desc: "Each downpipe run is flushed through with water to confirm it is clear to the underground connection." },
        { step: "Inspect and report", desc: "We inspect gutter condition and advise on any repairs required, completing straightforward repairs on the same visit." },
      ],
      faq: [
        { q: "How often should gutters be cleared?", a: "Once a year for most properties, ideally late autumn. Twice a year if you are surrounded by deciduous trees or have a history of blockages." },
        { q: "Can you clear gutters on a three-storey building?", a: "Yes — we use appropriate access equipment for all building heights. For complex or high-access situations, we'll confirm in advance what equipment is required." },
        { q: "What if the underground gulley is also blocked?", a: "We can clear underground gulley connections as part of the same visit, using drain rods or jetting through the downpipe outlet." },
      ],
      stat: { value: "1/yr", label: "Recommended clearing frequency" },
    },
  },
];

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const { openBookNow } = useBookNow();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    lockBodyScroll();
    return () => {
      document.removeEventListener("keydown", onKey);
      unlockBodyScroll();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-start sm:items-center justify-center sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={service.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-[#06182a]/80 backdrop-blur-sm" onClick={onClose} />

      <motion.div
        className="relative bg-white w-full sm:max-w-6xl h-full sm:h-auto sm:max-h-[94vh] overflow-y-auto sm:rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.25 }}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-30 w-9 h-9 flex items-center justify-center bg-black/40 hover:bg-black/70 text-white rounded-full transition-colors"
        >
          <X size={18} />
        </button>

        {/* Compact header banner */}
        <div className="relative h-28 sm:h-32">
          <img src={service.img} alt={service.title} className="w-full h-full object-cover object-[center_30%]" />
          <div className="absolute inset-0 bg-[#0a2c47]/45" style={{ mixBlendMode: "multiply" }} />
          <div className="absolute inset-0 bg-[#0e4a78]/38" style={{ mixBlendMode: "color" }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#06182a] via-[#06182a]/70 to-[#06182a]/25" />
          <div className="absolute inset-0 flex items-center justify-between px-6 sm:px-8">
            <div>
              <p className="text-accent text-[11px] font-bold uppercase tracking-[0.2em] mb-1">A&amp;B Drainage Solutions</p>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white uppercase leading-tight">{service.title}</h2>
            </div>
            {service.detail.stat && (
              <div className="hidden sm:block text-center bg-accent px-5 py-2.5 rounded-lg shrink-0 mr-10">
                <p className="text-2xl font-display font-bold text-white leading-none">{service.detail.stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-white/85 mt-1">{service.detail.stat.label}</p>
              </div>
            )}
          </div>
        </div>

        {/* Body — every section visible in a single tile, no scroll on desktop */}
        <div className="p-5 sm:p-7 space-y-5">
          {/* Overview */}
          <div className="sm:columns-2 sm:gap-8">
            {service.detail.intro.map((p, i) => (
              <p key={i} className="text-zinc-600 leading-relaxed text-[13px] mb-3 break-inside-avoid">{p}</p>
            ))}
          </div>

          {/* Signs | What's Included | How It Works */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertCircle size={16} className="text-accent shrink-0" />
                <h3 className="font-display font-bold text-zinc-900 uppercase text-[13px] tracking-wide">Signs You Need This</h3>
              </div>
              <ul className="space-y-2">
                {service.detail.signs.map((sign, i) => (
                  <li key={i} className="flex items-start gap-2 text-[12px] text-zinc-600 leading-snug">
                    <Check size={13} className="text-accent shrink-0 mt-0.5" />
                    {sign}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-900 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Wrench size={16} className="text-accent shrink-0" />
                <h3 className="font-display font-bold text-white uppercase text-[13px] tracking-wide">What's Included</h3>
              </div>
              <ul className="space-y-2.5">
                {service.detail.included.map((item, i) => (
                  <li key={i}>
                    <p className="text-accent text-[11px] font-bold uppercase tracking-wide flex items-center gap-1.5">
                      <Check size={11} className="shrink-0" /> {item.label}
                    </p>
                    <p className="text-zinc-400 text-[11px] leading-snug">{item.desc}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Clock size={16} className="text-accent shrink-0" />
                <h3 className="font-display font-bold text-zinc-900 uppercase text-[13px] tracking-wide">How It Works</h3>
              </div>
              <ol className="space-y-2.5">
                {service.detail.process.map((step, i) => (
                  <li key={i} className="flex gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-accent text-white text-[11px] font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                    <div>
                      <p className="font-bold text-zinc-900 text-[12px] uppercase tracking-wide">{step.step}</p>
                      <p className="text-zinc-500 text-[11px] leading-snug">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* FAQ — all answers shown, no accordion */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck size={16} className="text-accent shrink-0" />
              <h3 className="font-display font-bold text-zinc-900 uppercase text-[13px] tracking-wide">Frequently Asked Questions</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {service.detail.faq.map((f, i) => (
                <div key={i} className="bg-zinc-50 border border-zinc-200 rounded-xl p-4">
                  <p className="font-bold text-zinc-900 text-[12px] mb-1.5 leading-snug">{f.q}</p>
                  <p className="text-zinc-600 text-[11px] leading-snug">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-zinc-100">
            <button
              onClick={() => {
                onClose();
                openBookNow();
              }}
              className="flex-1 bg-accent hover:bg-accent/90 text-white px-8 py-3.5 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-sm rounded-lg"
            >
              Book This Service <ArrowRight size={16} />
            </button>
            <a
              href="tel:01256688650"
              className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white px-8 py-3.5 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-sm rounded-lg"
            >
              <Phone size={16} /> 01256 688 650
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Services() {
  const { openBookNow } = useBookNow();
  const [active, setActive] = useState<Service | null>(null);

  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;
      const match = services.find((s) => s.id === hash);
      if (match) setActive(match);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, []);

  return (
    <>
      <SEO
        title="Drainage Services Hampshire | CCTV Surveys, Repairs & Emergency"
        description="Comprehensive drainage services across Hampshire: blocked drains, CCTV surveys, structural repairs, soakaway installation, and 24/7 emergency response."
        canonicalUrl="https://www.abdrainage.co.uk/services"
      />

      {/* Hero */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center pt-28 pb-20">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="A&B Drainage fleet" className="w-full h-full object-cover object-center animate-heropan saturate-[1.6] brightness-[1.12] contrast-[1.15]" />
          <div className="absolute inset-0 bg-[#0a2c47]/45" style={{ mixBlendMode: "multiply" }}></div>
          <div className="absolute inset-0 bg-[#0e4a78]/38" style={{ mixBlendMode: "color" }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#06182a]/85 via-[#06182a]/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#06182a]/55 via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative max-w-3xl">
            <div className="absolute -inset-x-8 -inset-y-10 bg-black/60 blur-3xl rounded-3xl pointer-events-none" aria-hidden="true"></div>
            <div className="relative z-10">
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-4">
                Industry Experts for 33 Years
              </motion.p>
              <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.08 }}
                className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white uppercase mb-6 leading-tight [text-shadow:0_2px_20px_rgba(0,0,0,0.9),0_1px_4px_rgba(0,0,0,0.7)]">
                Our <span className="text-accent">Services</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.16 }}
                className="text-base sm:text-xl text-white/85 max-w-2xl leading-relaxed [text-shadow:0_1px_8px_rgba(0,0,0,0.8)]">
                We have the equipment, the experience, and the manpower to tackle any drainage issue — from a domestic blocked sink to full industrial site maintenance.
              </motion.p>
            </div>
          </div>
        </div>
        <WaterWave className="absolute bottom-0 left-0 w-full z-20 -mb-px" fill="#ffffff" />
      </section>

      {/* Services grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-2">What We Do</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-zinc-900 uppercase mb-3">Complete Drainage Solutions</h2>
          <p className="text-zinc-500 text-sm max-w-2xl mb-10">Select any service below to open the full details — what's included, how it works, and answers to common questions.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {services.map((s) => (
              <button key={s.id} onClick={() => setActive(s)}
                className="group text-left flex flex-col gap-4 p-6 border border-zinc-200 rounded-xl hover:border-accent hover:shadow-xl hover:-translate-y-1 transition-all bg-white">
                <div className="relative overflow-hidden h-52 rounded-lg">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-[#0a2c47]/40 mix-blend-multiply" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06182a]/75 via-[#06182a]/15 to-transparent" />
                </div>
                <h3 className="text-lg font-display font-bold text-zinc-900 uppercase group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed flex-1">{s.shortDesc}</p>
                <span className="text-accent text-sm font-bold uppercase tracking-wider flex items-center gap-1.5">
                  View Full Details <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service detail modal */}
      <AnimatePresence>
        {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
      </AnimatePresence>

      {/* CTA Banner */}
      <section className="bg-background py-20 relative overflow-hidden">
        <WaterWave className="absolute bottom-0 left-0 w-full z-[5] -mb-px" fill="#fafafa" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 justify-between">
            <div className="max-w-2xl">
              <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">Highly Rated Team of Professionals</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white uppercase leading-tight">
                Committed to Providing a <span className="text-accent">Stress-Free</span> Service
              </h2>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <button onClick={openBookNow}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all">
                Book Now <ArrowRight size={18} />
              </button>
              <a href="tel:01256688650"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-sm">
                <Phone size={16} /> 01256 688 650
              </a>
              <Link href="/contact"
                className="bg-transparent border border-white/20 hover:border-white/50 text-white px-8 py-4 font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all text-sm">
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FlexiPay */}
      <section className="py-20 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <p className="text-accent text-xs font-bold uppercase tracking-[0.25em] mb-3">FlexiPay</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold uppercase text-zinc-900 leading-tight mb-6">
                Spread the Cost With a <span className="text-accent">Stress-Free</span> Payment Plan
              </h2>
              <p className="text-zinc-600 leading-relaxed mb-4">
                At A&amp;B, we understand that essential works can't always wait. That's why we offer <strong className="text-zinc-900">FlexiPay</strong> — a simple way to spread the cost of your project without delay.
              </p>
              <p className="text-zinc-600 leading-relaxed mb-8">
                Complete the enquiry form and our team will arrange a payment plan that suits you. Get the service you need now — and pay in a way that works for your budget.
              </p>
              <a href="tel:01256688650"
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-4 font-bold uppercase tracking-wider transition-all text-sm">
                <Phone size={18} /> Talk to Our Team
              </a>
            </div>
            <FlexiPayForm />
          </div>
          <p className="text-zinc-400 text-[11px] leading-relaxed text-center max-w-4xl mx-auto mt-12">
            FlexiPay in association with Mayfair Southern. Mayfair Southern Ltd is an Appointed Representative of Business Asset Finance Ltd who are authorised and regulated by the Financial Conduct Authority, Licence No. 804369 and Data Protection Licence No. ZA439871.
          </p>
        </div>
      </section>
    </>
  );
}
