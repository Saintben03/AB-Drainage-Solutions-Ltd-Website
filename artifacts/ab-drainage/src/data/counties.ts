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
    name: "Hampshire",
    slug: "hampshire",
    intro: [
      "Hampshire is home turf for A&B Drainage Solutions. With our headquarters in Basingstoke and coverage stretching from the Berkshire border to the Solent coast and the New Forest, we provide the county's fastest, most complete drainage service — emergency call-outs, CCTV surveys, jetting, repairs, and planned commercial maintenance.",
      "The county's variety keeps our engineers busy: Victorian terraces in Portsmouth and Southampton, listed properties in Winchester, modern estates around Basingstoke, and rural New Forest and Test Valley homes on private drainage. Whatever the property, we arrive equipped to diagnose and fix on the first visit — typically within the hour.",
    ],
    towns: [
      "Basingstoke", "Hook", "Southampton", "Winchester", "Aldershot", "Farnborough",
      "Fleet", "Alton", "Petersfield", "Andover", "Romsey", "Eastleigh",
      "Chandler's Ford", "Hedge End", "Bishops Waltham", "Whitchurch", "Tadley",
      "Overton", "Liphook", "Bordon", "Yateley", "Totton", "Hythe", "Lymington",
      "New Milton", "Ringwood", "Fordingbridge", "Waterlooville", "Portsmouth",
      "Fareham", "Gosport", "Havant", "Emsworth",
    ],
    work: "24/7 emergency call-outs, drain unblocking, CCTV surveys, jetting, repairs, and commercial maintenance",
    localNote:
      "Hampshire is our home county — priority response, the shortest arrival times, and our full range of services everywhere in the county.",
    emergency: true,
  },
  {
    name: "Surrey",
    slug: "surrey",
    intro: [
      "Surrey borders east Hampshire, and our engineers regularly cross into the county for both emergency call-outs and planned commercial work. A&B Drainage Solutions covers Surrey for blocked drains, drainage repairs, CCTV surveys, and scheduled maintenance for businesses and property managers.",
      "Much of Surrey is characterised by mature, leafy suburbs and established housing, which brings a high rate of tree-root ingress and autumn leaf blockages, alongside the commercial demands of its busy towns and business parks. Our no-dig repair techniques are particularly well suited to the county's landscaped gardens and driveways.",
    ],
    towns: [
      "Guildford", "Woking", "Farnham", "Godalming", "Camberley", "Haslemere",
      "Cranleigh", "Reigate", "Redhill", "Epsom", "Leatherhead", "Dorking",
    ],
    work: "emergency drain unblocking, no-dig repairs, and commercial maintenance contracts",
    localNote:
      "Surrey's leafy, well-established neighbourhoods make CCTV surveys and root-cutting a large part of the work we do here.",
    emergency: true,
  },
  {
    name: "West Sussex",
    slug: "west-sussex",
    intro: [
      "West Sussex sits directly east of our south Hampshire coverage, with Chichester and the coastal towns reached quickly via the A27 corridor. A&B Drainage Solutions covers the county for domestic and commercial drainage, CCTV surveys, and planned maintenance.",
      "The county combines historic centres like Chichester and Horsham, extensive coastal development along the Worthing and Bognor seafronts, and fast-growing inland towns such as Crawley and Burgess Hill — each with distinct drainage needs, from coastal surface-water management to ageing Victorian pipework.",
    ],
    towns: [
      "Chichester", "Worthing", "Horsham", "Crawley", "Bognor Regis",
      "Littlehampton", "Burgess Hill", "Haywards Heath", "Shoreham-by-Sea",
    ],
    work: "domestic and commercial drainage, CCTV surveys, and planned maintenance",
    localNote:
      "Chichester and the western coastal towns border our south-east Hampshire corridor, keeping response times short for West Sussex.",
    emergency: true,
  },
  {
    name: "East Sussex",
    slug: "east-sussex",
    intro: [
      "A&B Drainage Solutions works from two base locations — one in Hampshire and one in East Sussex — so the county is a core part of our coverage rather than an outpost. We serve East Sussex for domestic and commercial drainage, CCTV surveys, repairs, and planned maintenance.",
      "From Brighton and Hove's dense Regency and Victorian terraces to Eastbourne's seafront hotels and the historic streets of Lewes, the county's older housing stock places heavy demands on ageing drainage. Our jetting, HD CCTV, and no-dig repair capability is well matched to it.",
    ],
    towns: ["Brighton", "Hove", "Eastbourne", "Lewes", "Newhaven"],
    work: "domestic and commercial drainage, CCTV surveys, no-dig repairs, and planned maintenance",
    localNote:
      "Our East Sussex base keeps Brighton, Hove, and the surrounding coast within fast, regular reach of our engineers.",
    emergency: true,
  },
  {
    name: "Berkshire",
    slug: "berkshire",
    intro: [
      "Berkshire sits directly on the northern edge of our Hampshire base, which makes it one of the easiest counties for us to reach. A&B Drainage Solutions works throughout Berkshire on domestic call-outs, commercial contracts, and CCTV survey work, from the towns bordering Basingstoke right across to the Thames Valley.",
      "The county mixes dense modern development around Reading and Bracknell with older properties and rural villages further out, so drainage problems range from fatberg blockages in busy commercial kitchens to root ingress and collapsed clay pipes in period homes. We carry the jetting, CCTV, and repair equipment to handle all of it.",
    ],
    towns: ["Reading", "Newbury", "Bracknell", "Wokingham", "Thatcham", "Windsor", "Maidenhead"],
    work: "domestic and commercial drainage, high-pressure jetting, and CCTV surveys",
    localNote:
      "Because Berkshire borders our Basingstoke base, response times here are among the fastest of any county outside Hampshire.",
    emergency: true,
  },
  {
    name: "Wiltshire",
    slug: "wiltshire",
    intro: [
      "Wiltshire borders west Hampshire near Andover and Salisbury, keeping much of the county within comfortable reach of our team. A&B Drainage Solutions covers Wiltshire for domestic call-outs, commercial contracts, and CCTV survey work.",
      "The county's rural character means many properties rely on private drainage such as septic tanks, soakaways, and older clay pipe runs, which are prone to root ingress and collapse. We provide the CCTV diagnostics, jetting, and no-dig repairs needed to keep these systems working, alongside commercial maintenance for the county's towns and business premises.",
    ],
    towns: ["Salisbury", "Swindon", "Chippenham", "Marlborough", "Devizes"],
    work: "domestic and commercial drainage, septic and soakaway work, and CCTV surveys",
    localNote:
      "The area around Salisbury borders our Hampshire patch, so response times to that part of Wiltshire are quick.",
    emergency: true,
  },
  {
    name: "Dorset",
    slug: "dorset",
    intro: [
      "A&B Drainage Solutions serves Dorset for domestic and commercial drainage, with a particular focus on the busy conurbation around Bournemouth, Poole, and Christchurch, as well as planned work further into the county. We cover blocked drains, repairs, CCTV surveys, and maintenance.",
      "Dorset's mix of dense coastal housing, holiday lets, and rural properties creates varied drainage challenges, from high-turnover seasonal demand on the coast to soakaway and septic issues inland. Our engineers are equipped to handle everything from a single blocked drain to a commercial maintenance schedule.",
    ],
    towns: ["Bournemouth", "Poole", "Christchurch", "Dorchester", "Weymouth"],
    work: "domestic and commercial drainage, CCTV surveys, and soakaway work",
    localNote:
      "The Bournemouth and Poole conurbation is our main focus in Dorset, with the widest range of services offered there.",
    emergency: true,
  },
  {
    name: "Oxfordshire",
    slug: "oxfordshire",
    intro: [
      "Oxfordshire is reached easily from our north Hampshire base via the Newbury and Reading corridors. A&B Drainage Solutions covers the county for CCTV surveys, drainage repairs, and planned commercial work, alongside domestic call-outs where our schedule allows.",
      "The county pairs Oxford's historic colleges and dense Victorian suburbs with fast-growing towns like Didcot and the rural villages of the Cotswold fringe — bringing everything from conservation-area no-dig repairs to new-development drainage verification.",
    ],
    towns: ["Oxford", "Abingdon", "Didcot", "Henley-on-Thames", "Witney"],
    work: "CCTV surveys, drainage repairs, and planned commercial maintenance",
    localNote:
      "Oxfordshire work is often planned commercial and survey projects, so we recommend calling ahead to schedule.",
    emergency: false,
  },
  {
    name: "Kent",
    slug: "kent",
    intro: [
      "Kent is one of the wider counties we serve, principally for larger commercial drainage contracts, industrial sites, and CCTV survey work where clients value our experience and equipment. A&B Drainage Solutions takes on planned projects across the county.",
      "As the Garden of England, Kent has significant agricultural, commercial, and residential drainage infrastructure. We bring high-volume jetting units, tanker capacity, and HD CCTV survey equipment capable of inspecting large-diameter and long pipe runs, making us a strong fit for commercial and estate-scale work.",
    ],
    towns: ["Maidstone", "Tunbridge Wells", "Sevenoaks", "Tonbridge"],
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
];

export function countyBySlug(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug);
}
