// lib/schema.ts
// Schema.org structured data generators for semantic SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Auto Locksmith Stockport",
  image: "https://carkeysinstockport.co.uk/logo.png",
  description: "Professional auto locksmith services in Stockport and Greater Manchester. Car key replacement, emergency lockout, key fob programming, van locksmith services. Available 24/7.",
  url: "https://carkeysinstockport.co.uk",
  telephone: "+447309903243",
  email: "info@carkeysinstockport.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stockport",
    addressLocality: "Stockport",
    addressRegion: "GM",
    postalCode: "SK1",
    addressCountry: "GB",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Stockport",
    },
    {
      "@type": "City",
      name: "Manchester",
    },
    {
      "@type": "City",
      name: "Bury",
    },
    {
      "@type": "City",
      name: "Oldham",
    },
    {
      "@type": "City",
      name: "Rochdale",
    },
    {
      "@type": "City",
      name: "Tameside",
    },
    {
      "@type": "City",
      name: "Trafford",
    },
    {
      "@type": "City",
      name: "Salford",
    },
  ],
  priceRange: "£59-£150",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "247",
    bestRating: "5",
    worstRating: "1",
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
  servicesOffered: [
    {
      "@type": "Service",
      name: "Car Key Replacement",
      description: "Professional car key cutting and programming for all vehicle makes and models",
    },
    {
      "@type": "Service",
      name: "Emergency Lockout Assistance",
      description: "Fast damage-free car lockout entry service available 24/7",
    },
    {
      "@type": "Service",
      name: "Key Fob Programming",
      description: "Remote key fob and transponder key programming service",
    },
    {
      "@type": "Service",
      name: "Van Locksmith",
      description: "Commercial and personal van lockout and key services",
    },
    {
      "@type": "Service",
      name: "Ignition Repair",
      description: "Ignition switch repair and replacement service",
    },
  ],
}

interface ServiceSchemaProps {
  name: string
  description: string
  areaServed?: string
  priceMin?: number
  priceMax?: number
}

export const serviceSchema = ({
  name,
  description,
  areaServed = "Greater Manchester",
  priceMin = 59,
  priceMax = 150,
}: ServiceSchemaProps) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "LocalBusiness",
    name: "Auto Locksmith Stockport",
    url: "https://carkeysinstockport.co.uk",
    telephone: "+447309903243",
  },
  areaServed: {
    "@type": "City",
    name: areaServed,
  },
  priceRange: `£${priceMin}-£${priceMax}`,
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "247",
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://carkeysinstockport.co.uk/contact",
    servicePhone: "+447309903243",
  },
})

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

export const localBusinessSchema = (location: string, area: string) => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `https://carkeysinstockport.co.uk/areas/${location}`,
  name: `Auto Locksmith ${area}`,
  description: `Professional auto locksmith services in ${area}. Car key replacement, emergency lockout, key fob programming. 24/7 service.`,
  image: "https://carkeysinstockport.co.uk/images/auto-locksmith-hero.jpg",
  url: `https://carkeysinstockport.co.uk/areas/${location}`,
  telephone: "+447309903243",
  areaServed: {
    "@type": "City",
    name: area,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "247",
  },
  priceRange: "£59-£150",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
})

export const reviewSchema = (author: string, rating: number, text: string) => ({
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
  datePublished: new Date().toISOString().split("T")[0],
})
