// lib/schema.ts — Semantic SEO schema generators

// ── Core entity — used globally ───────────────────────────────────────────────
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Locksmith"],
  "@id": "https://carkeysinstockport.co.uk/#business",
  name: "Car Keys in Stockport",
  alternateName: ["Car Keys Stockport", "Cheshire Car Keys"],
  image: {
    "@type": "ImageObject",
    url: "https://carkeysinstockport.co.uk/images/vikki-heaton-auto-locksmith-stockport.jpg",
    width: 600,
    height: 700,
    caption: "Vikki Heaton — Auto Locksmith, Car Keys in Stockport",
  },
  description:
    "Car Keys in Stockport is a mobile automotive locksmith service founded by Vikki Heaton in 2016. Based in Stockport, Greater Manchester, the business provides 24/7 car key replacement, transponder key programming, van lockout assistance, emergency lockout service, and ignition repair. Average 25-minute response time. No call-out fee. Fully insured.",
  url: "https://carkeysinstockport.co.uk",
  telephone: "+447309903243",
  email: "info@carkeysinstockport.co.uk",
  foundingDate: "2016",
  founder: {
    "@type": "Person",
    "@id": "https://carkeysinstockport.co.uk/about#vikki-heaton",
    name: "Vikki Heaton",
    jobTitle: "Auto Locksmith & Founder",
    gender: "Female",
    url: "https://carkeysinstockport.co.uk/about",
    sameAs: ["https://www.facebook.com/vikki.heaton.5"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stockport",
    addressRegion: "Greater Manchester",
    postalCode: "SK1",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.4106,
    longitude: -2.1575,
  },
  areaServed: [
    { "@type": "City", name: "Stockport" },
    { "@type": "City", name: "Cheadle" },
    { "@type": "City", name: "Bramhall" },
    { "@type": "City", name: "Hazel Grove" },
    { "@type": "City", name: "Manchester" },
    { "@type": "City", name: "Bury" },
    { "@type": "City", name: "Oldham" },
    { "@type": "City", name: "Rochdale" },
    { "@type": "City", name: "Tameside" },
    { "@type": "City", name: "Trafford" },
    { "@type": "City", name: "Salford" },
  ],
  priceRange: "££",
  paymentAccepted: "Cash, Credit Card, Debit Card",
  currenciesAccepted: "GBP",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    reviewCount: 10,
  },
  sameAs: [
    "https://www.facebook.com/carkeysinstockport",
    "https://www.instagram.com/carkeysinstockport",
    "https://www.tiktok.com/@carkeysinstockport",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Locksmith Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Car Key Replacement",
          description:
            "Professional car key cutting and programming for all vehicle makes and models. Transponder keys, smart keys, remote key fobs. On-site service.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Car Lockout Assistance",
          description:
            "Fast, damage-free vehicle entry service available 24/7 using non-destructive techniques. Average 25-minute response across Stockport.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Key Fob Programming",
          description:
            "Remote key fob and transponder key programming for all modern vehicle makes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Van Locksmith Service",
          description:
            "Commercial and personal van lockout assistance and key replacement for all van makes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ignition Repair",
          description:
            "Ignition switch repair and barrel replacement for all vehicle makes.",
        },
      },
    ],
  },
}

// ── Service schema generator ──────────────────────────────────────────────────
interface ServiceSchemaProps {
  name: string
  description: string
  url?: string
  areaServed?: string
  priceMin?: number
  priceMax?: number
}

export const serviceSchema = ({
  name,
  description,
  url = "",
  areaServed = "Greater Manchester",
  priceMin = 59,
  priceMax = 250,
}: ServiceSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://carkeysinstockport.co.uk/#business",
    name: "Car Keys in Stockport",
    url: "https://carkeysinstockport.co.uk",
    telephone: "+447309903243",
  },
  areaServed: {
    "@type": "AdministrativeArea",
    name: areaServed,
  },
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      minPrice: priceMin,
      maxPrice: priceMax,
      priceCurrency: "GBP",
      description: "Fixed upfront price — no call-out fee",
    },
    availability: "https://schema.org/InStock",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://carkeysinstockport.co.uk/contact",
    servicePhone: "+447309903243",
    availableLanguage: "en-GB",
  },
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
})

// ── FAQ schema generator ──────────────────────────────────────────────────────
interface FAQSchemaItem {
  question: string
  answer: string
}

export const faqSchema = (items: FAQSchemaItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
})

// ── Breadcrumb schema generator ───────────────────────────────────────────────
interface BreadcrumbItem {
  name: string
  url: string
}

export const breadcrumbSchema = (items: BreadcrumbItem[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `https://carkeysinstockport.co.uk${item.url}`,
  })),
})

// ── Local area business schema generator ─────────────────────────────────────
export const localBusinessSchema = (location: string, area: string) => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Locksmith"],
  "@id": `https://carkeysinstockport.co.uk/areas/stockport/${location}#business`,
  name: "Car Keys in Stockport",
  description: `Professional mobile auto locksmith services in ${area}. Car key replacement, emergency lockout assistance, van lockout, key fob programming. 24/7 availability. No call-out fee. Fully insured. Operated by Vikki Heaton since 2016.`,
  image: "https://carkeysinstockport.co.uk/images/vikki-heaton-auto-locksmith-stockport.jpg",
  url: `https://carkeysinstockport.co.uk/areas/stockport/${location}`,
  telephone: "+447309903243",
  address: {
    "@type": "PostalAddress",
    addressLocality: area,
    addressRegion: "Greater Manchester",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.4106,
    longitude: -2.1575,
  },
  areaServed: {
    "@type": "City",
    name: area,
  },
  priceRange: "££",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  parentOrganization: {
    "@type": "LocalBusiness",
    "@id": "https://carkeysinstockport.co.uk/#business",
    name: "Car Keys in Stockport",
  },
})

// ── WebPage schema generator ──────────────────────────────────────────────────
// Used for AI Overview eligibility — marks the page as an authoritative web entity
interface WebPageSchemaProps {
  name: string
  description: string
  url: string
  datePublished: string   // ISO date string — STATIC, update manually
  dateModified: string    // ISO date string — STATIC, update manually
  breadcrumb?: BreadcrumbItem[]
}

export const webPageSchema = ({
  name,
  description,
  url,
  datePublished,
  dateModified,
  breadcrumb,
}: WebPageSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `https://carkeysinstockport.co.uk${url}#webpage`,
  name,
  description,
  url: `https://carkeysinstockport.co.uk${url}`,
  datePublished,
  dateModified,
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://carkeysinstockport.co.uk/#website",
    name: "Car Keys in Stockport",
    url: "https://carkeysinstockport.co.uk",
    publisher: {
      "@type": "LocalBusiness",
      "@id": "https://carkeysinstockport.co.uk/#business",
    },
  },
  ...(breadcrumb && {
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumb.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `https://carkeysinstockport.co.uk${item.url}`,
      })),
    },
  }),
})

// ── Speakable schema generator ────────────────────────────────────────────────
// Marks content for voice assistant extraction (Google Assistant, Siri, etc.)
export const speakableSchema = (url: string, cssSelectors: string[]) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `https://carkeysinstockport.co.uk${url}#webpage`,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: cssSelectors,
  },
  url: `https://carkeysinstockport.co.uk${url}`,
})

// ── HowTo schema generator ───────────────────────────────────────────────────
interface HowToStep {
  position: number
  name: string
  text: string
}

export const howToSchema = (name: string, description: string, steps: HowToStep[]) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name,
  description,
  step: steps.map((s) => ({
    "@type": "HowToStep",
    position: s.position,
    name: s.name,
    text: s.text,
  })),
})

// ── Review schema generator ───────────────────────────────────────────────────
// IMPORTANT: datePublished must be a static string, NOT new Date()
// Dynamic dates flag reviews as synthetic to Google's trust systems
export const reviewSchema = (
  author: string,
  rating: number,
  text: string,
  datePublished: string  // e.g. "2025-11-15" — must be a real date
) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  reviewRating: {
    "@type": "Rating",
    ratingValue: rating,
    bestRating: "5",
    worstRating: "1",
  },
  reviewBody: text,
  author: {
    "@type": "Person",
    name: author,
  },
  datePublished,
  itemReviewed: {
    "@type": "LocalBusiness",
    "@id": "https://carkeysinstockport.co.uk/#business",
    name: "Car Keys in Stockport",
  },
})

// ── Person (Vikki Heaton) schema — E-E-A-T anchor ────────────────────────────
export const vikkiHeatonPersonSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://carkeysinstockport.co.uk/about#vikki-heaton",
  name: "Vikki Heaton",
  jobTitle: "Auto Locksmith & Business Owner",
  gender: "Female",
  description:
    "Vikki Heaton is a female auto locksmith based in Stockport, Greater Manchester. She founded Car Keys in Stockport in 2016 and has completed over 2,500 car key replacements and lockout jobs across Stockport and Greater Manchester. She is fully insured and handles every job personally — no subcontractors.",
  telephone: "+447309903243",
  email: "info@carkeysinstockport.co.uk",
  url: "https://carkeysinstockport.co.uk/about",
  image: {
    "@type": "ImageObject",
    url: "https://carkeysinstockport.co.uk/images/vikki-heaton-auto-locksmith-stockport.jpg",
    width: 600,
    height: 700,
    caption: "Vikki Heaton — Professional Female Auto Locksmith in Stockport",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stockport",
    addressRegion: "Greater Manchester",
    addressCountry: "GB",
  },
  sameAs: [
    "https://carkeysinstockport.co.uk/about",
    "https://www.facebook.com/vikki.heaton.5",
  ],
  knowsAbout: [
    "Automotive Locksmithing",
    "Car Key Replacement",
    "Transponder Key Programming",
    "Smart Key Programming",
    "Van Lockout Assistance",
    "Ignition Repair",
    "Key Fob Programming",
    "Emergency Automotive Locksmith Services",
  ],
  worksFor: {
    "@type": "LocalBusiness",
    "@id": "https://carkeysinstockport.co.uk/#business",
    name: "Car Keys in Stockport",
  },
  hasOccupation: {
    "@type": "Occupation",
    name: "Auto Locksmith",
    occupationLocation: {
      "@type": "City",
      name: "Stockport",
    },
    description:
      "Mobile automotive locksmith specialising in car key replacement, van lockout assistance, transponder key programming, and 24/7 emergency locksmith services across Stockport and Greater Manchester.",
  },
}

// ── WebSite schema — enables Sitelinks Search Box ────────────────────────────
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://carkeysinstockport.co.uk/#website",
  name: "Car Keys in Stockport",
  alternateName: "Car Keys Stockport",
  url: "https://carkeysinstockport.co.uk",
  description:
    "Mobile auto locksmith services in Stockport and Greater Manchester. Car key replacement, emergency lockout, van locksmith, key fob programming. 24/7 service. No call-out fee.",
  publisher: {
    "@type": "LocalBusiness",
    "@id": "https://carkeysinstockport.co.uk/#business",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://carkeysinstockport.co.uk/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-GB",
}

// ── Standalone AggregateRating schema ────────────────────────────────────────
// Use this on hub pages to reinforce the rating signal linked to the business entity
export const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "AggregateRating",
  "@id": "https://carkeysinstockport.co.uk/#aggregate-rating",
  itemReviewed: {
    "@type": "LocalBusiness",
    "@id": "https://carkeysinstockport.co.uk/#business",
    name: "Car Keys in Stockport",
  },
  ratingValue: "5.0",
  bestRating: "5",
  worstRating: "1",
  reviewCount: 10,
}

// ── ItemList schema generator ─────────────────────────────────────────────────
// Used on hub pages (cars, services, areas) to tell Google what entities the page lists
interface ItemListItem {
  name: string
  url: string
  description?: string
  position: number
}

export const itemListSchema = (name: string, description: string, items: ItemListItem[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  name,
  description,
  numberOfItems: items.length,
  itemListElement: items.map((item) => ({
    "@type": "ListItem",
    position: item.position,
    name: item.name,
    url: `https://carkeysinstockport.co.uk${item.url}`,
    ...(item.description && { description: item.description }),
  })),
})

// ── ContactPage schema ────────────────────────────────────────────────────────
export const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": "https://carkeysinstockport.co.uk/contact#webpage",
  name: "Contact Car Keys in Stockport | Get a Free Quote",
  description:
    "Contact Vikki Heaton at Car Keys in Stockport for car key replacement, emergency lockout, or key fob programming. Call 07309903243 or use the contact form.",
  url: "https://carkeysinstockport.co.uk/contact",
  inLanguage: "en-GB",
  datePublished: "2026-01-01",
  dateModified: "2026-05-01",
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://carkeysinstockport.co.uk/#website",
  },
  about: {
    "@type": "LocalBusiness",
    "@id": "https://carkeysinstockport.co.uk/#business",
    name: "Car Keys in Stockport",
    telephone: "+447309903243",
    email: "info@carkeysinstockport.co.uk",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+447309903243",
      contactType: "customer service",
      areaServed: "GB",
      availableLanguage: "en-GB",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
  },
}

// ── ProfilePage schema ────────────────────────────────────────────────────────
// Signals Vikki Heaton as a named expert entity (E-E-A-T Author identity)
export const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://carkeysinstockport.co.uk/about#profilepage",
  name: "About Vikki Heaton — Auto Locksmith & Founder, Car Keys in Stockport",
  description:
    "Professional profile of Vikki Heaton, founder and sole auto locksmith at Car Keys in Stockport. 9+ years experience, 2,500+ jobs, fully insured. Based in Stockport, Greater Manchester.",
  url: "https://carkeysinstockport.co.uk/about",
  inLanguage: "en-GB",
  datePublished: "2016-01-01",
  dateModified: "2026-04-01",
  mainEntity: {
    "@type": "Person",
    "@id": "https://carkeysinstockport.co.uk/about#vikki-heaton",
    name: "Vikki Heaton",
  },
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://carkeysinstockport.co.uk/#website",
  },
}

// ── BlogPosting schema generator ──────────────────────────────────────────────
// Use on blog pages — links article to Vikki's @id and the business @id
interface ArticleSchemaProps {
  headline: string
  description: string
  url: string
  datePublished: string  // ISO date — STATIC, not new Date()
  dateModified: string   // ISO date — STATIC
  imageUrl?: string
}

export const articleSchema = ({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  imageUrl = "https://carkeysinstockport.co.uk/images/vikki-heaton-auto-locksmith-stockport.jpg",
}: ArticleSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "@id": `https://carkeysinstockport.co.uk${url}#article`,
  headline,
  description,
  url: `https://carkeysinstockport.co.uk${url}`,
  datePublished,
  dateModified,
  image: {
    "@type": "ImageObject",
    url: imageUrl,
    width: 1200,
    height: 630,
  },
  author: {
    "@type": "Person",
    "@id": "https://carkeysinstockport.co.uk/about#vikki-heaton",
    name: "Vikki Heaton",
    url: "https://carkeysinstockport.co.uk/about",
  },
  publisher: {
    "@type": "LocalBusiness",
    "@id": "https://carkeysinstockport.co.uk/#business",
    name: "Car Keys in Stockport",
    logo: {
      "@type": "ImageObject",
      url: "https://carkeysinstockport.co.uk/favicon-192.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://carkeysinstockport.co.uk${url}#webpage`,
  },
  isPartOf: {
    "@type": "WebSite",
    "@id": "https://carkeysinstockport.co.uk/#website",
  },
  about: {
    "@type": "LocalBusiness",
    "@id": "https://carkeysinstockport.co.uk/#business",
  },
  inLanguage: "en-GB",
  articleSection: "Auto Locksmith Services",
})
