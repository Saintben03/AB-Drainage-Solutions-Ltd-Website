export interface TownArea {
  name: string;
  slug: string;
  county: string;
  sewerage: string;
  tag?: string;
  intro: string[];
  nearby: string[];
  localNote: string;
}

export const towns: TownArea[] = [
  {
    name: "Basingstoke",
    slug: "basingstoke",
    county: "Hampshire",
    sewerage: "Thames Water",
    tag: "HQ Area",
    intro: [
      "Basingstoke is home turf for A&B Drainage Solutions. Based centrally in the area, our engineers reach most Basingstoke addresses within the hour, day or night, making us the fastest choice for emergency blockages, flooding, and drain failures across the town and its surrounding villages.",
      "From the older terraced streets around the town centre to the modern housing estates at Chineham, Brighton Hill, and Popley, we know the local drainage infrastructure inside out — including which runs connect to Thames Water sewers and where recurring problems tend to occur.",
    ],
    nearby: ["Andover", "Alton", "Reading"],
    localNote:
      "As our headquarters area, Basingstoke gets priority response and the shortest arrival times of anywhere we cover.",
  },
  {
    name: "Southampton",
    slug: "southampton",
    county: "Hampshire",
    sewerage: "Southern Water",
    tag: "Major Hub",
    intro: [
      "Southampton is one of our busiest coverage areas, with a mix of Victorian terraces, student housing, city-centre commercial premises, and modern waterside developments — each with its own drainage quirks. A&B Drainage Solutions handles domestic, commercial, and industrial drainage right across the city.",
      "Older properties around Portswood, Shirley, and Bevois Valley often suffer from clay pipe failures and root intrusion, while the docks and industrial estates need heavy-duty jetting and tanker capacity. We are equipped for both.",
    ],
    nearby: ["Eastleigh", "Winchester", "Fareham"],
    localNote:
      "We carry high-capacity jetting and tanker units suited to Southampton's commercial and industrial drainage as well as domestic work.",
  },
  {
    name: "Winchester",
    slug: "winchester",
    county: "Hampshire",
    sewerage: "Southern Water",
    intro: [
      "Winchester's historic character brings unique drainage challenges — many period and listed properties around the city centre and St Cross still run on original clay or even brick drainage that needs careful, experienced handling. A&B Drainage Solutions has 33 years of experience working sensitively on older Hampshire properties.",
      "We provide CCTV surveys, no-dig repairs, and blockage clearance throughout Winchester and surrounding villages, using methods that protect period features and minimise disruption to historic surfaces.",
    ],
    nearby: ["Eastleigh", "Andover", "Southampton"],
    localNote:
      "No-dig relining is especially valuable in Winchester, where excavation around period and listed properties is best avoided.",
  },
  {
    name: "Aldershot",
    slug: "aldershot",
    county: "Hampshire",
    sewerage: "Thames Water",
    intro: [
      "Aldershot and the surrounding military and residential areas are well within our rapid-response zone. A&B Drainage Solutions covers everything from blocked domestic drains to larger commercial and estate drainage across the town.",
      "The mix of older garrison-era housing and newer developments means a wide range of pipe ages and materials — our engineers arrive equipped to diagnose and resolve whatever they find on the first visit.",
    ],
    nearby: ["Farnborough", "Fleet", "Reading"],
    localNote:
      "Aldershot sits within our fast north-east Hampshire response corridor alongside Farnborough and Fleet.",
  },
  {
    name: "Reading",
    slug: "reading",
    county: "Berkshire",
    sewerage: "Thames Water",
    intro: [
      "A&B Drainage Solutions regularly works across Reading and the wider Berkshire border, handling domestic call-outs, commercial contracts, and CCTV survey work. Our central Hampshire base keeps us within comfortable reach of the town.",
      "From the terraced streets of central Reading to the business parks and newer estates on the outskirts, we bring the same rapid, fully-equipped response we're known for across Hampshire.",
    ],
    nearby: ["Basingstoke", "Aldershot", "Farnborough"],
    localNote:
      "Reading is part of our regular Berkshire border coverage, particularly for commercial and CCTV survey work.",
  },
  {
    name: "Farnborough",
    slug: "farnborough",
    county: "Hampshire",
    sewerage: "Thames Water",
    intro: [
      "Farnborough is firmly within our core coverage area, and our engineers respond quickly to blocked drains, flooding, and drainage emergencies throughout the town and its business parks.",
      "With a strong mix of residential streets and commercial and aviation-related sites, Farnborough needs a drainage firm equipped for both — and A&B Drainage Solutions carries the full range of jetting, CCTV, and repair equipment on every van.",
    ],
    nearby: ["Aldershot", "Fleet", "Reading"],
    localNote:
      "Farnborough's business parks are well suited to our planned commercial maintenance contracts.",
  },
  {
    name: "Andover",
    slug: "andover",
    county: "Hampshire",
    sewerage: "Southern Water",
    intro: [
      "Andover and the surrounding rural Test Valley are part of our regular coverage, where drainage often extends beyond mains sewers to septic tanks, soakaways, and private treatment systems. A&B Drainage Solutions handles all of these.",
      "From town-centre homes to outlying farms and rural properties, we provide blockage clearance, CCTV surveys, soakaway installation, and repairs tailored to Andover's mix of mains and off-mains drainage.",
    ],
    nearby: ["Basingstoke", "Winchester", "Southampton"],
    localNote:
      "Rural Andover properties often rely on soakaways and private drainage — an area where our groundworks experience matters.",
  },
  {
    name: "Fleet",
    slug: "fleet",
    county: "Hampshire",
    sewerage: "Thames Water",
    intro: [
      "Fleet and Church Crookham fall within our fast north-east Hampshire response area. A&B Drainage Solutions provides rapid clearance of blocked drains along with CCTV surveys and repairs across the town.",
      "Fleet's largely modern housing stock still suffers the usual culprits — wet wipes, fat build-up, and root intrusion — and our engineers arrive equipped to clear and camera-inspect in a single visit.",
    ],
    nearby: ["Farnborough", "Aldershot", "Basingstoke"],
    localNote:
      "Fleet is covered from the same corridor as Farnborough and Aldershot, keeping response times short.",
  },
  {
    name: "Alton",
    slug: "alton",
    county: "Hampshire",
    sewerage: "Southern Water",
    intro: [
      "Alton and the surrounding East Hampshire villages are part of our regular coverage, with a mix of period town-centre properties and rural homes on private drainage systems. A&B Drainage Solutions is experienced with both.",
      "We provide drain clearance, CCTV surveys, soakaway and septic-related work, and structural repairs throughout Alton and its outlying areas.",
    ],
    nearby: ["Basingstoke", "Petersfield", "Winchester"],
    localNote:
      "Alton's rural surroundings mean plenty of off-mains drainage work alongside standard town call-outs.",
  },
  {
    name: "Petersfield",
    slug: "petersfield",
    county: "Hampshire",
    sewerage: "Southern Water",
    intro: [
      "Petersfield and the surrounding South Downs villages are within our coverage area for both mains and private drainage work. A&B Drainage Solutions handles blockages, surveys, and repairs across the town.",
      "Many properties around Petersfield sit on older or private drainage, so CCTV diagnosis and no-dig repair are frequently the right approach — both of which we provide.",
    ],
    nearby: ["Alton", "Havant", "Portsmouth"],
    localNote:
      "The rural South Downs setting around Petersfield often calls for CCTV diagnosis before any repair.",
  },
  {
    name: "Portsmouth",
    slug: "portsmouth",
    county: "Hampshire",
    sewerage: "Southern Water",
    intro: [
      "Portsmouth's dense, low-lying island geography and older housing stock make reliable drainage essential — and surface water and sewer issues are common. A&B Drainage Solutions covers the city and Portsea Island for domestic, commercial, and emergency drainage.",
      "From Victorian terraces in Southsea to commercial premises across the city, we provide rapid blockage clearance, CCTV surveys, and repairs with equipment suited to Portsmouth's demanding drainage network.",
    ],
    nearby: ["Havant", "Fareham", "Gosport"],
    localNote:
      "Portsmouth's low-lying, densely built layout makes fast blockage clearance and CCTV diagnosis particularly important.",
  },
  {
    name: "Eastleigh",
    slug: "eastleigh",
    county: "Hampshire",
    sewerage: "Southern Water",
    intro: [
      "Eastleigh sits at the heart of our southern coverage, between Southampton and Winchester, and our engineers respond quickly across the town and its surrounding areas.",
      "A&B Drainage Solutions provides the full range of services in Eastleigh — from emergency blockage clearance and CCTV surveys to drain repairs and commercial maintenance.",
    ],
    nearby: ["Southampton", "Winchester", "Fareham"],
    localNote:
      "Eastleigh's central southern location keeps it within fast reach of our engineers day and night.",
  },
  {
    name: "Fareham",
    slug: "fareham",
    county: "Hampshire",
    sewerage: "Southern Water",
    intro: [
      "Fareham, between Southampton and Portsmouth, is a core part of our southern Hampshire coverage. A&B Drainage Solutions handles domestic, commercial, and emergency drainage throughout the town and surrounding areas.",
      "Whether it's a blocked drain in a residential street or planned maintenance for a commercial site, our engineers arrive fully equipped to resolve the problem on the first visit.",
    ],
    nearby: ["Portsmouth", "Gosport", "Southampton"],
    localNote:
      "Fareham's position between the two cities makes it a natural hub in our southern coverage.",
  },
  {
    name: "Gosport",
    slug: "gosport",
    county: "Hampshire",
    sewerage: "Southern Water",
    intro: [
      "Gosport's peninsula location and older housing stock mean drainage issues need a firm that can respond quickly and diagnose accurately. A&B Drainage Solutions covers the town for domestic, commercial, and emergency drainage.",
      "From blocked drains and CCTV surveys to structural repairs, we bring the full range of drainage equipment to Gosport on every call-out.",
    ],
    nearby: ["Fareham", "Portsmouth", "Havant"],
    localNote:
      "Gosport's peninsula setting makes a fast, fully-equipped first visit especially valuable.",
  },
  {
    name: "Havant",
    slug: "havant",
    county: "Hampshire",
    sewerage: "Southern Water",
    intro: [
      "Havant and the surrounding areas of Waterlooville, Emsworth, and Hayling Island fall within our south-east Hampshire coverage. A&B Drainage Solutions provides fast, reliable drainage services across the district.",
      "Low-lying areas near the coast can be prone to surface water and drainage problems — our engineers are equipped for blockage clearance, CCTV surveys, soakaways, and repairs throughout the Havant area.",
    ],
    nearby: ["Portsmouth", "Petersfield", "Fareham"],
    localNote:
      "Coastal, low-lying parts of the Havant area often need soakaway and surface-water expertise, which we provide.",
  },
];

export const townBySlug = (slug: string): TownArea | undefined =>
  towns.find((t) => t.slug === slug);
