export type AreaLocation = {
  name: string
  fullName: string
  metaTitle: string
  metaDescription: string
  heroDescription: string
  description: string
  areas: string[]
  whyChoose: string
}

export const areaLocationData: Record<string, AreaLocation> = {
  manchester: {
    name: "Manchester",
    fullName: "Auto Locksmith Services in Manchester",
    metaTitle: "Auto Locksmith Manchester | Car Key Replacement & Emergency Service 24/7",
    metaDescription:
      "Professional auto locksmith services in Manchester and surrounding areas. Car key replacement, emergency lockout assistance, key fob programming. 25-min response. Call 07309903243",
    heroDescription: "Expert auto locksmith services throughout Manchester and the surrounding areas.",
    description:
      "Manchester residents and businesses rely on our professional auto locksmith services. From the city centre to outer regions, our mobile locksmiths provide fast car key replacement, emergency lockout assistance, and professional key programming. Whether you're locked out of your car, need a new key, or require key fob programming, we're available 24/7.",
    areas: ["City Centre", "Salford", "Trafford", "Tameside", "Oldham", "Rochdale", "Bury"],
    whyChoose:
      "Based in the Greater Manchester area, we understand Manchester's traffic patterns and geography. Our mobile locksmiths arrive within 25 minutes on average. We serve all of Manchester with transparent pricing and professional, fully insured service.",
  },
  bury: {
    name: "Bury",
    fullName: "Auto Locksmith Services in Bury",
    metaTitle: "Auto Locksmith Bury | Car Key Replacement & Emergency Lockout Service 24/7",
    metaDescription:
      "Professional auto locksmith services in Bury, Greater Manchester. Car key replacement, emergency lockout, key fob programming. Fast response. Fully insured. Call 07309903243",
    heroDescription: "Professional car locksmith and auto key services in Bury.",
    description:
      "Locked out of your car in Bury? Need a new key? Our certified locksmiths provide damage-free entry, rapid response times, and transparent pricing. We handle all vehicle types and modern security systems. Whether it's an emergency lockout or planned key replacement, we're ready to help.",
    areas: ["Bury Town Centre", "Radcliffe", "Whitefield", "Prestwich", "Heywood"],
    whyChoose:
      "We're local to Bury and know the area well. Fast response times, professional service, and no hidden charges. Available 24/7 for emergencies including evenings, weekends, and bank holidays.",
  },
  oldham: {
    name: "Oldham",
    fullName: "Auto Locksmith Services in Oldham",
    metaTitle: "Auto Locksmith Oldham | Car Key & Van Locksmith Emergency Service 24/7",
    metaDescription:
      "Trusted auto locksmith services in Oldham. Car lockout, van locksmith, key replacement, key fob programming. 25-min response. Fully insured. Call 07309903243",
    heroDescription: "Trusted auto locksmith services in Oldham, offering comprehensive solutions for car and van lockouts.",
    description:
      "Oldham's trusted auto locksmith service for all your car and van locksmith needs. Our experienced technicians are equipped to handle all makes and models with professional, non-destructive techniques. From emergency lockouts to key replacement and programming, we provide fast, reliable service.",
    areas: ["Oldham Town Centre", "Chadderton", "Failsworth", "Lees", "Royton"],
    whyChoose:
      "We understand Oldham's busy streets and can reach you quickly. Professional, certified locksmiths with modern equipment. Transparent pricing with no surprises.",
  },
  rochdale: {
    name: "Rochdale",
    fullName: "Auto Locksmith Services in Rochdale",
    metaTitle: "Auto Locksmith Rochdale | Car Key Replacement & Emergency Service 24/7",
    metaDescription:
      "Fast, reliable auto locksmith services in Rochdale. Car key replacement, emergency lockout, key fob programming. 24/7 service. Call 07309903243",
    heroDescription: "Fast, reliable locksmith services for Rochdale residents and businesses.",
    description:
      "Rochdale's trusted auto locksmith service. Specializing in car key replacement, emergency lockout assistance, and key fob programming. Available 24/7 for urgent situations. Our mobile locksmiths bring the solution directly to you with no call-out fee.",
    areas: ["Rochdale Town Centre", "Middleton", "Littleborough", "Milnrow", "Heywood"],
    whyChoose:
      "Local knowledge of Rochdale and fast response times. Professional, fully insured technicians. Same-day service available for emergencies.",
  },
  tameside: {
    name: "Tameside",
    fullName: "Auto Locksmith Services in Tameside",
    metaTitle: "Auto Locksmith Tameside | Car Key & Emergency Lockout Service 24/7",
    metaDescription:
      "Professional auto locksmith services in Tameside including Ashton-under-Lyne and Denton. Car key replacement, emergency lockout, key fob programming. Call 07309903243",
    heroDescription: "Professional auto locksmith services across Tameside, including Ashton-under-Lyne and Denton.",
    description:
      "Tameside's professional auto locksmith service. Whether you need emergency car lockout help or car key replacement, our mobile locksmiths provide fast, professional service with transparent pricing. We handle all vehicle types and security systems.",
    areas: ["Ashton-under-Lyne", "Denton", "Dukinfield", "Mossley", "Stalybridge"],
    whyChoose: "Serving Tameside with fast response times and professional service. Fully insured and certified technicians available 24/7.",
  },
  trafford: {
    name: "Trafford",
    fullName: "Auto Locksmith Services in Trafford",
    metaTitle: "Auto Locksmith Trafford | Car Key Replacement & Emergency Service 24/7",
    metaDescription:
      "Expert auto locksmith services in Trafford including Sale and Altrincham. Car key replacement, emergency lockout, key fob programming. Call 07309903243",
    heroDescription: "Expert auto locksmith and car key services throughout Trafford.",
    description:
      "Serving Trafford with professional auto locksmith services. From Sale to Altrincham, we provide emergency lockout assistance, professional key replacement, and advanced key fob programming. Fast response times, fully insured service.",
    areas: ["Sale", "Altrincham", "Stretford", "Urmston", "Partington"],
    whyChoose: "Local service covering all Trafford areas. Professional technicians, transparent pricing, and 25-minute average response.",
  },
  salford: {
    name: "Salford",
    fullName: "Auto Locksmith Services in Salford",
    metaTitle: "Auto Locksmith Salford | Car Key Replacement & Emergency Lockout 24/7",
    metaDescription:
      "Comprehensive auto locksmith services in Salford. Car key replacement, emergency lockout, key programming. Available 24/7. Call 07309903243",
    heroDescription: "Comprehensive auto locksmith services for Salford and surrounding areas.",
    description:
      "Salford's auto locksmith service for all your automotive key and lockout needs. Our mobile locksmiths specialize in car key replacement, emergency lockout solutions, and professional key coding. Available around the clock for urgent locksmith emergencies.",
    areas: ["Salford City Centre", "Eccles", "Worsley", "Irlam", "Pendlebury"],
    whyChoose: "Based locally in Greater Manchester, we understand Salford well. Fast response, professional service, fully insured.",
  },
}

export const areaSlugs = Object.keys(areaLocationData)
