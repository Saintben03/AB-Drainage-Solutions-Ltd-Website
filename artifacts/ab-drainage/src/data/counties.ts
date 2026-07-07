export interface County {
  name: string;
  slug: string;
  intro: string[];
  towns: string[];
  work: string;
  localNote: string;
  /** true = we run emergency call-outs here; false = planned/commercial work only */
  emergency: boolean;
}

export const counties: County[] = [
  {
    name: "Berkshire",
    slug: "berkshire",
    intro: [
      "Berkshire sits directly on the northern edge of our Hampshire base, which makes it one of the easiest counties for us to reach. A&B Drainage Solutions works throughout Berkshire on domestic call-outs, commercial contracts, and CCTV survey work, from the towns bordering Basingstoke right across to the Thames Valley.",
      "The county mixes dense modern development around Reading and Bracknell with older properties and rural villages further out, so drainage problems range from fatberg blockages in busy commercial kitchens to root ingress and collapsed clay pipes in period homes. We carry the jetting, CCTV, and repair equipment to handle all of it.",
    ],
    towns: ["Reading", "Newbury", "Bracknell", "Wokingham", "Thatcham", "Sandhurst"],
    work: "domestic and commercial drainage, high-pressure jetting, and CCTV surveys",
    localNote:
      "Because Berkshire borders our Basingstoke base, response times here are among the fastest of any county outside Hampshire.",
    emergency: true,
  },
  {
    name: "Surrey",
    slug: "surrey",
    intro: [
      "Surrey borders east Hampshire, and our engineers regularly cross into the county for both emergency call-outs and planned commercial work. A&B Drainage Solutions covers Surrey for blocked drains, drainage repairs, CCTV surveys, and scheduled maintenance for businesses and property managers.",
      "Much of Surrey is characterised by mature, leafy suburbs and established housing, which brings a high rate of tree-root ingress and autumn leaf blockages, alongside the commercial demands of its busy towns and business parks. Our no-dig repair techniques are particularly well suited to the county's landscaped gardens and driveways.",
    ],
    towns: ["Guildford", "Woking", "Camberley", "Farnham", "Godalming", "Frimley"],
    work: "emergency drain unblocking, no-dig repairs, and commercial maintenance contracts",
    localNote:
      "Surrey's leafy, well-established neighbourhoods make CCTV surveys and root-cutting a large part of the work we do here.",
    emergency: true,
  },
  {
    name: "Sussex",
    slug: "sussex",
    intro: [
      "A&B Drainage Solutions covers both West and East Sussex, primarily for larger commercial contracts, planned maintenance, and CCTV survey work, as well as domestic drainage where our schedule allows. We travel across the county from the South Downs to the coast.",
      "Sussex combines historic town centres, extensive coastal development, and rural estates, each with distinct drainage needs, from surface-water management on the coast to ageing pipework in older inland properties. Our tanker and jetting capacity means we are equipped for both domestic and large-scale commercial jobs.",
    ],
    towns: ["Chichester", "Crawley", "Horsham", "Worthing", "Bognor Regis", "Haywards Heath"],
    work: "commercial drainage, planned maintenance, and CCTV drain surveys",
    localNote:
      "Sussex is mainly commercial and survey territory for us, with the capacity to take on larger contracts across the county.",
    emergency: false,
  },
  {
    name: "Kent",
    slug: "kent",
    intro: [
      "Kent is one of the wider counties we serve, principally for larger commercial drainage contracts, industrial sites, and CCTV survey work where clients value our experience and equipment. A&B Drainage Solutions takes on planned projects across the county.",
      "As the Garden of England, Kent has significant agricultural, commercial, and residential drainage infrastructure. We bring high-volume jetting units, tanker capacity, and HD CCTV survey equipment capable of inspecting large-diameter and long pipe runs, making us a strong fit for commercial and estate-scale work.",
    ],
    towns: ["Maidstone", "Ashford", "Tonbridge", "Sevenoaks", "Tunbridge Wells", "Dartford"],
    work: "commercial and industrial drainage, tanker services, and CCTV surveys",
    localNote:
      "In Kent we focus on planned commercial and CCTV survey work rather than routine domestic call-outs.",
    emergency: false,
  },
  {
    name: "London",
    slug: "london",
    intro: [
      "A&B Drainage Solutions takes on drainage work across Greater London, concentrating on commercial contracts, CCTV drain surveys, and larger planned projects for businesses, developers, and property managers. Our team travels into the capital regularly for scheduled work.",
      "London's drainage is a complex mix of Victorian sewers, dense commercial premises, and continual new development, which places heavy demands on the network. Our HD CCTV surveys and high-pressure jetting are well suited to diagnosing and clearing problems in older, heavily used systems, and we provide detailed written reports for pre-purchase, insurance, and compliance purposes.",
    ],
    towns: ["Greater London", "South London", "West London", "Croydon", "Kingston", "Richmond"],
    work: "commercial drainage, CCTV surveys, and planned maintenance",
    localNote:
      "London work is arranged as planned commercial and survey projects, so we recommend calling ahead to schedule.",
    emergency: false,
  },
  {
    name: "Dorset",
    slug: "dorset",
    intro: [
      "A&B Drainage Solutions serves Dorset for domestic and commercial drainage, with a particular focus on the busy conurbation around Bournemouth, Poole, and Christchurch, as well as planned work further into the county. We cover blocked drains, repairs, CCTV surveys, and maintenance.",
      "Dorset's mix of dense coastal housing, holiday lets, and rural properties creates varied drainage challenges, from high-turnover seasonal demand on the coast to soakaway and septic issues inland. Our engineers are equipped to handle everything from a single blocked drain to a commercial maintenance schedule.",
    ],
    towns: ["Bournemouth", "Poole", "Christchurch", "Dorchester", "Ferndown", "Wimborne"],
    work: "domestic and commercial drainage, CCTV surveys, and soakaway work",
    localNote:
      "The Bournemouth and Poole conurbation is our main focus in Dorset, with the widest range of services offered there.",
    emergency: true,
  },
  {
    name: "Wiltshire",
    slug: "wiltshire",
    intro: [
      "Wiltshire borders west Hampshire near Andover and Salisbury, keeping much of the county within comfortable reach of our team. A&B Drainage Solutions covers Wiltshire for domestic call-outs, commercial contracts, and CCTV survey work.",
      "The county's rural character means many properties rely on private drainage such as septic tanks, soakaways, and older clay pipe runs, which are prone to root ingress and collapse. We provide the CCTV diagnostics, jetting, and no-dig repairs needed to keep these systems working, alongside commercial maintenance for the county's towns and business premises.",
    ],
    towns: ["Salisbury", "Amesbury", "Marlborough", "Devizes", "Tidworth", "Ludgershall"],
    work: "domestic and commercial drainage, septic and soakaway work, and CCTV surveys",
    localNote:
      "The area around Salisbury and Amesbury borders our Hampshire patch, so response times to that part of Wiltshire are quick.",
    emergency: true,
  },
];

export function countyBySlug(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug);
}
