import { towns, townBySlug, type TownArea } from "./areas";
import { counties, countyBySlug, type County } from "./counties";
import { servicePages } from "./servicePages";

/** The 9 counties that get county-level service pages (London excluded — planned work only). */
export const serviceCountySlugs = [
  "hampshire",
  "surrey",
  "west-sussex",
  "east-sussex",
  "berkshire",
  "wiltshire",
  "dorset",
  "oxfordshire",
  "kent",
];

export interface PlaceContext {
  kind: "town" | "county";
  name: string;
  slug: string;
  /** link back to the area page */
  areaHref: string;
  /** county name for towns; own name for counties */
  countyName: string;
  emergency: boolean;
  sewerage?: string;
  localNote: string;
}

export function resolvePlace(slug: string): PlaceContext | undefined {
  const town = townBySlug(slug);
  if (town) {
    const county = counties.find((c) => c.name === town.county);
    return {
      kind: "town",
      name: town.name,
      slug: town.slug,
      areaHref: `/areas/${town.slug}`,
      countyName: town.county,
      emergency: county ? county.emergency : true,
      sewerage: town.sewerage,
      localNote: town.localNote,
    };
  }
  if (serviceCountySlugs.includes(slug)) {
    const county = countyBySlug(slug);
    if (county) {
      return {
        kind: "county",
        name: county.name,
        slug: county.slug,
        areaHref: `/areas/county/${county.slug}`,
        countyName: county.name,
        emergency: county.emergency,
        localNote: county.localNote,
      };
    }
  }
  return undefined;
}

export interface LocalService {
  slug: string;
  name: string;
  /** lowercase phrase for mid-sentence use */
  phrase: string;
  /** href of the main service page (dedicated page or /services anchor) */
  serviceHref: string;
  /** service-specific opening description */
  lead: string;
  /** service-specific capability sentence woven into paragraph two */
  capability: string;
  /** service-specific FAQ */
  faqQ: (place: string) => string;
  faqA: (place: string) => string;
}

export const localServices: LocalService[] = [
  {
    slug: "blocked-drains",
    name: "Blocked Drains",
    phrase: "blocked drain clearance",
    serviceHref: "/blocked-drains",
    lead: "A blocked drain brings slow-draining sinks, gurgling toilets, foul smells, and eventually sewage backup — problems that only get worse the longer they are left.",
    capability:
      "We clear blockages with high-pressure jetting up to 4,000 PSI, electro-mechanical coring, and rodding, then flow-test the drain before we leave — clearance guaranteed.",
    faqQ: (p) => `What causes blocked drains in ${p}?`,
    faqA: (p) =>
      `The most common causes we find in ${p} are wet wipes, fat and grease build-up, scale, and tree-root intrusion in older clay pipes. Whatever the cause, we clear it and jet the pipe walls clean so the blockage doesn't quickly return.`,
  },
  {
    slug: "drain-unblocking",
    name: "Drain Unblocking",
    phrase: "professional drain unblocking",
    serviceHref: "/drain-unblocking",
    lead: "Professional drain unblocking means using the correct method for the cause — not just punching a hole through the blockage and leaving the debris behind.",
    capability:
      "Our engineers choose between high-pressure jetting, electro-mechanical coring, and manual rodding based on what the blockage actually is, so it's cleared right first time.",
    faqQ: (p) => `Can't I just unblock the drain myself in ${p}?`,
    faqA: () =>
      `Plungers and chemical unblockers can shift minor sink blockages, but anything in the underground pipework needs proper equipment. DIY attempts often compact the blockage and make professional clearance harder — if in doubt, call us on 01256 688 650 for advice first.`,
  },
  {
    slug: "cctv-drain-survey",
    name: "CCTV Drain Survey",
    phrase: "HD CCTV drain surveys",
    serviceHref: "/cctv-drain-survey",
    lead: "An HD CCTV drain survey shows exactly what's happening inside your pipes — the condition, any defects, and the precise location of problems — without any digging.",
    capability:
      "We provide full written reports with footage, typically issued the same day, suitable for pre-purchase house surveys, recurring blockage diagnosis, and insurance or compliance purposes.",
    faqQ: (p) => `How much does a CCTV drain survey cost in ${p}?`,
    faqA: (p) =>
      `Survey cost depends on the size and accessibility of the drainage system. Call 01256 688 650 with your ${p} postcode and a few details and we'll give you a clear price before booking — no obligation.`,
  },
  {
    slug: "drain-jetting",
    name: "Drain Jetting",
    phrase: "high-pressure drain jetting",
    serviceHref: "/drain-jetting",
    lead: "High-pressure water jetting is the most effective way to clear blockages and restore pipes to full bore — cutting through fat, scale, roots, and compacted debris.",
    capability:
      "Our jetting units deliver up to 4,000 PSI with a range of specialist nozzles, handling everything from domestic kitchen runs to large-diameter commercial sewers.",
    faqQ: () => `Is drain jetting safe for older pipes?`,
    faqA: () =>
      `Yes, in experienced hands. Our engineers adjust pressure and nozzle choice to suit the pipe material and condition, and where a pipe looks fragile we camera-inspect first. Jetting is far less invasive than excavation and safe for the vast majority of drains.`,
  },
  {
    slug: "drain-lining-repair",
    name: "Drain Lining & Repair",
    phrase: "no-dig drain lining and repair",
    serviceHref: "/drain-lining-repair",
    lead: "Cracked, root-damaged, or displaced drains don't always need excavation — no-dig lining repairs the pipe from the inside, creating a new structural pipe within the old one.",
    capability:
      "We install cured-in-place liners and localised patch repairs that carry a long service life, avoiding the cost and disruption of digging up driveways, gardens, and floors.",
    faqQ: (p) => `Do you need to dig up my garden or driveway in ${p}?`,
    faqA: () =>
      `Usually not. Most structural drain repairs can now be completed with no-dig lining or patch repairs installed through existing access points. Where excavation genuinely is the better option, we'll explain why and agree everything with you first.`,
  },
  {
    slug: "emergency-drainage",
    name: "Emergency Drainage",
    phrase: "emergency drainage response",
    serviceHref: "/emergency-drainage-services",
    lead: "Sewage backing up, a flooded property, or a completely blocked main drain can't wait for office hours — you need an engineer on site fast, whatever the time.",
    capability:
      "Our emergency line is answered by a real person 24 hours a day, 365 days a year, and our fully equipped vans mean most emergencies are resolved on the first visit.",
    faqQ: (p) => `What counts as a drainage emergency in ${p}?`,
    faqA: () =>
      `Sewage backing up into the property, flooding, a completely blocked toilet or main drain, or foul water escaping where it shouldn't. If it can't safely wait until tomorrow, call 01256 688 650 now — we'll advise immediately and get an engineer moving.`,
  },
  {
    slug: "drain-repairs",
    name: "Drain Repairs",
    phrase: "structural drain repairs",
    serviceHref: "/services#drain-repairs",
    lead: "Collapsed sections, fractured pipes, displaced joints, and root damage all need proper structural repair — patching over the symptoms just means the problem returns.",
    capability:
      "We diagnose with HD CCTV first, then repair using the least disruptive effective method — no-dig lining and patching where possible, precise excavation where necessary.",
    faqQ: (p) => `How do I know if my drain in ${p} needs repair rather than just clearing?`,
    faqA: () =>
      `Recurring blockages in the same spot, sinking ground or damp patches above the drain line, and rat activity are all signs of structural damage. A CCTV survey confirms it definitively — we'll show you the footage and explain the options before any repair work.`,
  },
  {
    slug: "commercial-drainage",
    name: "Commercial & Industrial Drainage",
    phrase: "commercial and industrial drainage",
    serviceHref: "/services#commercial",
    lead: "Commercial premises can't afford drainage downtime — a blocked kitchen line, a flooded yard, or a failed interceptor stops trade and creates compliance risk.",
    capability:
      "We provide planned maintenance contracts, high-volume jetting, tanker services, and rapid reactive response for restaurants, retail, industrial sites, schools, and property managers.",
    faqQ: (p) => `Do you offer drainage maintenance contracts in ${p}?`,
    faqA: (p) =>
      `Yes. Planned maintenance is the most cost-effective way to avoid emergency downtime — we schedule regular jetting and inspection visits for commercial sites across ${p}, with documentation for your compliance records.`,
  },
  {
    slug: "soakaway-installation",
    name: "Soakaway Installation",
    phrase: "soakaway installation and repair",
    serviceHref: "/services#soakaways",
    lead: "A failed or undersized soakaway shows up as standing water, boggy ground, and overflowing gullies — and properly designed replacement is the only lasting fix.",
    capability:
      "We design and install soakaways sized to your ground conditions and rainfall, including percolation testing, crate systems, and full reinstatement — plus repairs to existing systems.",
    faqQ: (p) => `Do I need planning permission for a soakaway in ${p}?`,
    faqA: () =>
      `Most domestic surface-water soakaways don't need planning permission, though building regulations apply to new installations and there are rules on distance from buildings and boundaries. We handle the design details and advise on any approvals as part of the job.`,
  },
  {
    slug: "septic-tanks",
    name: "Septic Tanks",
    phrase: "septic tank services",
    serviceHref: "/services#septic-tanks",
    lead: "Properties off the mains sewer depend entirely on their septic tank or treatment plant — and neglect leads to backups, odours, ground contamination, and regulatory trouble.",
    capability:
      "We provide septic tank emptying, maintenance, fault diagnosis, and repairs, plus advice on the general binding rules that now apply to older tanks discharging to watercourses.",
    faqQ: (p) => `How often should a septic tank be emptied in ${p}?`,
    faqA: () =>
      `Most domestic septic tanks should be emptied every 12 months, though it varies with tank size and household occupancy. Regular emptying prevents solids carrying over into the soakaway — the most common cause of complete system failure.`,
  },
  {
    slug: "guttering-downpipes",
    name: "Guttering & Downpipes",
    phrase: "gutter and downpipe services",
    serviceHref: "/services#guttering",
    lead: "Blocked or damaged gutters and downpipes send rainwater down walls and into foundations — causing damp, erosion, and drainage overload that's far costlier than the fix.",
    capability:
      "We clear, repair, and replace guttering and downpipes, and trace where downpipes discharge to resolve overloaded gullies and surface-water problems at the same visit.",
    faqQ: (p) => `Can you clear gutters on taller buildings in ${p}?`,
    faqA: () =>
      `Yes. We work on domestic and commercial buildings, using appropriate access equipment for taller properties. We'll also check the downpipes and gullies below, since a blocked gutter is often only part of the problem.`,
  },
];

export const localServiceBySlug = (slug: string): LocalService | undefined =>
  localServices.find((s) => s.slug === slug);

/** Two unique paragraphs of local context for a service + place combination. */
export function buildIntro(service: LocalService, place: PlaceContext): string[] {
  const inPlace = place.kind === "county" ? `across ${place.name}` : `in ${place.name}`;
  const responseSentence = place.emergency
    ? `Our line is answered around the clock, and ${
        place.kind === "county"
          ? `we run emergency call-outs throughout ${place.name}`
          : `we typically reach ${place.name} addresses quickly — day or night`
      }.`
    : `Work ${inPlace} is usually planned in advance — call 01256 688 650 and we'll schedule a visit with timings and costs confirmed up front.`;

  const para1 = `${service.lead} A&B Drainage Solutions provides ${service.phrase} ${inPlace}, backed by over 33 years' experience and fully equipped vans on every job. ${responseSentence}`;

  const sewerSentence =
    place.kind === "town" && place.sewerage
      ? `${place.name} sits in ${place.countyName}, where the public sewers are managed by ${place.sewerage} — if a problem turns out to be on the public side, we'll tell you honestly and point you in the right direction.`
      : `As one of the counties we know best, ${place.name} gets the same standard of work, reporting, and honest advice we're known for across the South of England.`;

  const para2 = `${service.capability} ${sewerSentence} ${place.localNote}`;

  return [para1, para2];
}

/** Three FAQs for a service + place combination. */
export function buildFaqs(service: LocalService, place: PlaceContext): { q: string; a: string }[] {
  const inPlace = place.kind === "county" ? `across ${place.name}` : `in ${place.name}`;
  return [
    {
      q: `Do you offer ${service.name.toLowerCase()} ${inPlace}?`,
      a: `Yes. A&B Drainage Solutions provides ${service.phrase} ${inPlace} for homes and businesses. ${place.localNote} Call 01256 688 650 or email info@abdrainage.co.uk to book.`,
    },
    {
      q: service.faqQ(place.name),
      a: service.faqA(place.name),
    },
    place.emergency
      ? {
          q: `How quickly can you get to ${place.name}?`,
          a: `Our emergency line is staffed 24/7 and we aim to be on site within the hour across our core coverage area. Call 01256 688 650 at any time and we'll confirm the fastest response we can offer to your ${place.name} address.`,
        }
      : {
          q: `How is work in ${place.name} arranged?`,
          a: `${place.name} work is scheduled in advance rather than run as routine emergency call-outs. Call 01256 688 650 to discuss your requirements and we'll book a convenient visit with the price agreed before we start.`,
        },
  ];
}

/** All service-location route paths, for prerendering and the sitemap. */
export const serviceLocationRoutes: string[] = localServices.flatMap((s) => [
  ...towns.map((t: TownArea) => `/${s.slug}/${t.slug}`),
  ...serviceCountySlugs.map((c) => `/${s.slug}/${c}`),
]);

export { towns, counties };
export type { TownArea, County };
