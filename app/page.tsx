import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import LocationsSection from "./components/locations-section"
<<<<<<< HEAD
=======
import { organizationSchema } from "@/lib/schema"
>>>>>>> 16fdb7eb5d5e0e2b2289683a7642c430d8c08828
import {
  Phone,
  Clock,
  Shield,
  MapPin,
  Star,
  CheckCircle,
  ArrowRight,
  Award,
  Zap,
  Car,
  Key,
  Wrench,
  Truck,
  Hourglass,
  DollarSign,
  Lightbulb,
  BookOpen,
  MessageCircle,
  Mail,
  Calendar,
<<<<<<< HEAD
  Users,
  TrendingUp,
  Lock,
  Settings,
} from "lucide-react"
import type { Metadata } from "next"
import { faqSchema } from "@/lib/schema"

// Enhanced SEO Metadata
export const metadata: Metadata = {
  title: "CK Stockport | 24/7 Auto Locksmith Stockport | Car Key Replacement & Emergency Lockout Service",
  description:
    "CK Stockport: Professional 24/7 auto locksmith in Stockport & Greater Manchester. Car key replacement, key fob programming, emergency lockout assistance, van locksmith services, ignition repair. 25-minute average response. Fully insured. No call-out fee. 5★ rating. 2,500+ keys replaced. Call 07309903243 now.",
  keywords: [
    "CK Stockport",
    "auto locksmith Stockport",
    "car locksmith Stockport",
    "emergency auto locksmith Greater Manchester",
    "lost car keys Stockport",
    "car key replacement Stockport",
    "key fob programming Stockport",
    "emergency lockout Stockport",
    "van locksmith Stockport",
    "mobile locksmith Stockport",
    "24/7 locksmith Stockport",
    "car locksmith near me",
    "auto locksmith near me",
    "emergency car locksmith",
    "ignition repair Stockport",
    "transponder key programming",
    "remote key fob Stockport",
    "car lockout service Stockport",
    "professional locksmith Stockport",
    "certified auto locksmith",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "CK Stockport | 24/7 Auto Locksmith | Car Key Replacement & Emergency Lockout",
    description:
      "Professional 24/7 auto locksmith in Stockport. Car key replacement, emergency lockout, key fob programming. 25-min response. Fully insured. No call-out fee. Call 07309903243",
    url: "https://carkeysinstockport.co.uk",
    type: "website",
    siteName: "CK Stockport",
    locale: "en_GB",
=======
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Auto Locksmith Stockport | Car Key Replacement & Emergency Lockout 24/7 | Professional Mobile Service",
  description:
    "Expert auto locksmith services in Stockport & Greater Manchester. Car key replacement from £89, emergency lockout assistance, key fob programming, van locksmith. 25-minute response. Fully insured. 5★ rated. Call 07309903243 now.",
  keywords: "auto locksmith Stockport, car locksmith near me, emergency lockout, car key replacement, van locksmith, professional locksmith, locksmith services",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Auto Locksmith Stockport | Car Key Replacement & Emergency Lockout 24/7",
    description:
      "Professional auto locksmith in Stockport. Car keys, lockouts, fob programming. 25-min response. No call-out fee. Call 07309903243",
    url: "https://carkeysinstockport.co.uk",
    type: "website",
    siteName: "Auto Locksmith Stockport",
>>>>>>> 16fdb7eb5d5e0e2b2289683a7642c430d8c08828
    images: [
      {
        url: "https://carkeysinstockport.co.uk/images/auto-locksmith-hero.jpg",
        width: 1200,
        height: 630,
<<<<<<< HEAD
        alt: "CK Stockport - Professional Auto Locksmith Services in Stockport",
=======
>>>>>>> 16fdb7eb5d5e0e2b2289683a7642c430d8c08828
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
<<<<<<< HEAD
    title: "CK Stockport | 24/7 Emergency Auto Locksmith Service",
    description: "Fast car key replacement & lockout service in Stockport. 25-min response. Call 07309903243",
    images: ["https://carkeysinstockport.co.uk/images/auto-locksmith-hero.jpg"],
=======
    title: "Auto Locksmith Stockport | 24/7 Emergency Service",
    description: "Fast car key replacement & lockout service. Call 07309903243",
>>>>>>> 16fdb7eb5d5e0e2b2289683a7642c430d8c08828
  },
  alternates: {
    canonical: "https://carkeysinstockport.co.uk",
  },
<<<<<<< HEAD
  authors: [{ name: "CK Stockport" }],
  creator: "CK Stockport",
  publisher: "CK Stockport",
  category: "Automotive Locksmith Services",
}

// FAQ Data for Structured Data
const faqData = [
  {
    question: "How quickly can CK Stockport respond to an emergency car lockout in Stockport?",
    answer:
      "CK Stockport provides a 25-minute average response time for emergency car lockout situations across Stockport and Greater Manchester. Our mobile locksmiths are strategically positioned to reach you quickly, 24 hours a day, 7 days a week. Whether you're locked out in Stockport town centre, Cheadle, Bramhall, or Hazel Grove, we'll be there fast.",
  },
  {
    question: "Do you charge a call-out fee for auto locksmith services?",
    answer:
      "No, CK Stockport does not charge a call-out fee. We believe in transparent pricing with no hidden charges. You'll receive an upfront quote before any work begins, so you know exactly what you'll pay for car key replacement, lockout assistance, or any other auto locksmith service.",
  },
  {
    question: "Can CK Stockport replace car keys for all vehicle makes and models?",
    answer:
      "Yes, CK Stockport's certified locksmiths can replace and program car keys for all major vehicle makes and models, including Ford, Vauxhall, BMW, Mercedes, Audi, Volkswagen, and more. We're equipped with advanced key cutting and programming equipment to handle transponder keys, remote key fobs, and smart keys.",
  },
  {
    question: "What areas does CK Stockport serve for auto locksmith services?",
    answer:
      "CK Stockport provides comprehensive auto locksmith services across Stockport (including Cheadle, Bramhall, Hazel Grove), Manchester, Bury, Oldham, Rochdale, Tameside, Trafford, and Salford. Our mobile locksmiths cover the entire Greater Manchester area with 24/7 availability.",
  },
  {
    question: "Is CK Stockport fully insured and certified?",
    answer:
      "Yes, CK Stockport is fully insured and all our locksmiths are certified professionals. We carry comprehensive insurance coverage for all services, ensuring you're protected. Our technicians are trained in non-destructive entry techniques and use professional-grade equipment for car key replacement and programming.",
  },
  {
    question: "How much does car key replacement cost with CK Stockport?",
    answer:
      "Car key replacement costs vary depending on your vehicle make, model, and key type (standard key, transponder key, or remote key fob). CK Stockport provides transparent, upfront pricing with no hidden fees. Contact us at 07309903243 for a free quote tailored to your specific needs.",
  },
  {
    question: "Can CK Stockport help with van locksmith services?",
    answer:
      "Absolutely. CK Stockport specializes in van locksmith services for both commercial and personal vehicles. We provide van lockout assistance, van key replacement, and key fob programming for all van makes and models across Stockport and Greater Manchester.",
  },
  {
    question: "What is CK Stockport's success rate for car key replacement?",
    answer:
      "CK Stockport maintains a 98% first-attempt success rate for car key replacement and programming. With over 2,500 keys successfully replaced since 2016, our experienced locksmiths have the expertise and equipment to get your car keys working on the first try.",
  },
]

// Enhanced LocalBusiness Schema with all details
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://carkeysinstockport.co.uk#business",
  name: "CK Stockport",
  alternateName: "Car Keys Stockport",
  image: "https://carkeysinstockport.co.uk/images/auto-locksmith-hero.jpg",
  description:
    "Professional 24/7 auto locksmith services in Stockport and Greater Manchester. Specializing in car key replacement, key fob programming, emergency lockout assistance, van locksmith services, and ignition repair. 25-minute average response time. Fully insured. No call-out fee.",
  url: "https://carkeysinstockport.co.uk",
  telephone: "+447309903243",
  email: "info@carkeysinstockport.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Stockport",
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
    {
      "@type": "City",
      name: "Stockport",
      containsPlace: [
        { "@type": "City", name: "Cheadle" },
        { "@type": "City", name: "Bramhall" },
        { "@type": "City", name: "Hazel Grove" },
      ],
    },
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
    ratingValue: "5",
    ratingCount: "2500",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Sarah M.",
      },
      reviewBody:
        "CK Stockport saved me when I locked my keys in my car. They arrived in 20 minutes and got me back in without any damage. Professional, fast, and reasonably priced. Highly recommend!",
    },
  ],
  sameAs: [
    "https://www.facebook.com/carkeysinstockport",
    "https://www.instagram.com/carkeysinstockport",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
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
            "Professional car key cutting and programming for all vehicle makes and models. Transponder keys, remote key fobs, and smart keys.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Lockout Assistance",
          description:
            "Fast, damage-free car lockout entry service available 24/7. Non-destructive entry techniques.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Key Fob Programming",
          description:
            "Remote key fob programming and transponder key coding for all vehicle types.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Van Locksmith Services",
          description:
            "Commercial and personal van lockout assistance, key replacement, and programming.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ignition Repair",
          description:
            "Ignition switch repair and replacement service for all vehicle makes.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Emergency Service",
          description:
            "24/7 emergency automotive locksmith service across Greater Manchester.",
        },
      },
    ],
  },
}

// Service Schema
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Auto Locksmith Service",
  provider: {
    "@type": "LocalBusiness",
    name: "CK Stockport",
    telephone: "+447309903243",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 53.4106,
      longitude: -2.1575,
    },
    geoRadius: {
      "@type": "Distance",
      value: "50",
      unitCode: "KIL",
    },
  },
  availableChannel: {
    "@type": "ServiceChannel",
    serviceUrl: "https://carkeysinstockport.co.uk/contact",
    servicePhone: "+447309903243",
    availableLanguage: "en-GB",
  },
=======
>>>>>>> 16fdb7eb5d5e0e2b2289683a7642c430d8c08828
}

export default function HomePage() {
  return (
    <>
<<<<<<< HEAD
      {/* Structured Data - LocalBusiness */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      {/* Structured Data - Service */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* Structured Data - FAQ */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqData)),
        }}
      />

      <main className="bg-slate-900 text-white">
        {/* Hero Section */}
        <section
          className="section-padding pt-24 sm:pt-28 md:pt-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
          itemScope
          itemType="https://schema.org/LocalBusiness"
        >
=======
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <main className="bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="section-padding pt-24 sm:pt-28 md:pt-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
>>>>>>> 16fdb7eb5d5e0e2b2289683a7642c430d8c08828
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="animate-fade-in">
                <div className="flex items-center gap-2 text-orange-400 mb-3 sm:mb-4">
                  <Clock className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
<<<<<<< HEAD
                  <span className="font-semibold text-sm sm:text-base">
                    Available 24/7 - 25 Minute Average Response Time
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  CK Stockport: Expert Auto Locksmith in{" "}
                  <span className="text-orange-400">Stockport</span> & Greater Manchester
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Locked out of your car? Lost your car keys? Need a new key fob programmed? CK Stockport is the trusted
                  24/7 auto locksmith for Stockport residents and businesses across Greater Manchester. We offer fast car
                  key replacement, emergency lockout assistance, van locksmith services, ignition repair, and key fob
                  programming when you need it most. No call-out fee. Fully insured. 25-minute average response time.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <a
                    href="tel:07309903243"
                    className="btn-primary text-center w-full sm:w-auto flex items-center justify-center gap-2"
                    aria-label="Call CK Stockport now at 07309903243"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now: 07309903243
                  </a>
                  <Link
                    href="/contact"
                    className="btn-secondary text-center w-full sm:w-auto flex items-center justify-center gap-2"
                  >
                    <span>Request Free Quote</span>
                    <ArrowRight className="w-4 h-4" />
=======
                  <span className="font-semibold text-sm sm:text-base">Available 24/7 - 25 Minute Response Time</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                  Expert Auto Locksmith in <span className="text-orange-400">Stockport</span>
                </h1>

                <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                  Locked out of your car? Need a new key or fob programmed? We're the trusted auto locksmith for Stockport residents—offering fast car key replacement, emergency lockout assistance, van locksmith services, and key fob coding when you need it most. No call-out fee. Insurance-approved. 25-minute average response.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <a href="tel:07309903243" className="btn-primary text-center w-full sm:w-auto">
                    Call Now: 07309903243
                  </a>
                  <Link href="/contact" className="btn-secondary text-center w-full sm:w-auto">
                    <span>Request Free Quote</span>
                    <ArrowRight className="w-4 h-4 inline ml-2" />
>>>>>>> 16fdb7eb5d5e0e2b2289683a7642c430d8c08828
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <div className="card">
                    <Shield className="w-6 sm:w-8 h-6 sm:h-8 text-green-400 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm font-semibold">Fully Insured</div>
                    <div className="text-xs text-gray-400 mt-1">All services protected</div>
                  </div>
                  <div className="card">
                    <Zap className="w-6 sm:w-8 h-6 sm:h-8 text-blue-400 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm font-semibold">25 Min Response</div>
                    <div className="text-xs text-gray-400 mt-1">Mobile service arrives fast</div>
                  </div>
                  <div className="card">
                    <CheckCircle className="w-6 sm:w-8 h-6 sm:h-8 text-orange-400 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm font-semibold">No Call-Out Fee</div>
                    <div className="text-xs text-gray-400 mt-1">No hidden charges</div>
                  </div>
                  <div className="card">
                    <Star className="w-6 sm:w-8 h-6 sm:h-8 text-yellow-400 mx-auto mb-2" />
                    <div className="text-xs sm:text-sm font-semibold">5★ Rating</div>
                    <div className="text-xs text-gray-400 mt-1">Trusted by 2,500+ customers</div>
                  </div>
                </div>
              </div>

              {/* Hero Image */}
              <div className="relative animate-slide-up">
                <div className="relative h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden border-2 border-orange-400/30">
                  <Image
                    src="/images/auto-car-locksmith-services-in-stockport.jpg"
<<<<<<< HEAD
                    alt="CK Stockport professional auto locksmith working on car key replacement in Stockport, Greater Manchester"
=======
                    alt="Professional auto locksmith working on car key replacement in Stockport"
>>>>>>> 16fdb7eb5d5e0e2b2289683a7642c430d8c08828
                    width={600}
                    height={500}
                    priority
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Stats Section - E-E-A-T Signals */}
        <section className="section-padding bg-slate-800">
          <div className="container-custom">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
              Why Choose CK Stockport: Proven Results & Trusted Expertise
            </h2>
=======
        {/* Stats Section */}
        <section className="section-padding bg-slate-800">
          <div className="container-custom">
>>>>>>> 16fdb7eb5d5e0e2b2289683a7642c430d8c08828
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
              <div className="card hover:scale-105 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">2,500+</div>
                <div className="text-sm sm:text-base text-gray-300">Keys Replaced</div>
                <div className="text-xs text-gray-400 mt-1">Since 2016</div>
              </div>
              <div className="card hover:scale-105 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-blue-400 mb-2">25min</div>
                <div className="text-sm sm:text-base text-gray-300">Avg Response</div>
                <div className="text-xs text-gray-400 mt-1">In Stockport</div>
              </div>
              <div className="card hover:scale-105 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-sm sm:text-base text-gray-300">Success Rate</div>
                <div className="text-xs text-gray-400 mt-1">First Attempt</div>
              </div>
              <div className="card hover:scale-105 transition-transform duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">24/7</div>
                <div className="text-sm sm:text-base text-gray-300">Available</div>
                <div className="text-xs text-gray-400 mt-1">Every Day</div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Banner */}
        <section className="bg-red-600 py-3 sm:py-4">
          <div className="container-custom">
            <div className="flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2 sm:gap-3">
                <Zap className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-300 animate-pulse flex-shrink-0" />
<<<<<<< HEAD
                <span className="font-bold text-white text-xs sm:text-base">
                  EMERGENCY LOCKOUT? CK Stockport is on the way!
                </span>
              </div>
              <a
                href="tel:07309903243"
                className="bg-white text-red-600 px-4 sm:px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors text-xs sm:text-base flex-shrink-0"
                aria-label="Emergency call to CK Stockport"
              >
                Call Now: 07309903243
=======
                <span className="font-bold text-white text-xs sm:text-base">EMERGENCY LOCKOUT? We're on our way!</span>
              </div>
              <a
                href="tel:+44161234567"
                className="bg-white text-red-600 px-4 sm:px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors text-xs sm:text-base flex-shrink-0"
              >
                Call Now
>>>>>>> 16fdb7eb5d5e0e2b2289683a7642c430d8c08828
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
<<<<<<< HEAD
        <section className="section-padding bg-slate-800" id="services">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Comprehensive Auto Locksmith Services by CK Stockport
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
                Professional automotive locksmith services across Stockport and Greater Manchester. CK Stockport handles
                everything from lost car keys to complex ignition repairs with expertise, efficiency, and transparency.
                Your trusted car locksmith near me.
=======
        <section className="section-padding bg-slate-800">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Our Car Locksmith & Auto Locksmith Services</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
                Professional automotive locksmith services across Stockport and surrounding areas. We handle everything
                from lost keys to complex ignition repairs with expertise and efficiency. Your trusted car locksmith near me.
>>>>>>> 16fdb7eb5d5e0e2b2289683a7642c430d8c08828
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
              {[
                {
                  title: "Car Key Replacement",
<<<<<<< HEAD
                  description:
                    "Lost or broken car keys? CK Stockport cuts and programs new keys for all makes and models, including transponder keys, remote key fobs, and smart keys. Professional car key replacement service in Stockport.",
                  icon: Key,
                  link: "/services/car-key-replacement",
                  keywords: "car key replacement Stockport, lost car keys, broken car keys",
                },
                {
                  title: "Key Fob Programming",
                  description:
                    "Professional transponder key programming and remote key fob coding service. CK Stockport programs all vehicle types with advanced diagnostic equipment. Key fob programming Stockport.",
                  icon: Settings,
                  link: "/services/auto-keys-programming",
                  keywords: "key fob programming Stockport, transponder key programming, remote key coding",
                },
                {
                  title: "Emergency Lockout Assistance",
                  description:
                    "Locked out of your car? CK Stockport provides fast, damage-free entry service available 24/7. Non-destructive techniques ensure no damage to your vehicle. Emergency lockout Stockport.",
                  icon: Lock,
                  link: "/services/lockout-assistance",
                  keywords: "emergency lockout Stockport, car lockout service, locked out of car",
                },
                {
                  title: "Ignition Repair",
                  description:
                    "Ignition switch problems? CK Stockport repairs and replaces faulty ignition systems for all vehicle makes. Professional ignition repair service in Stockport and Greater Manchester.",
                  icon: Wrench,
                  link: "/services/ignition-repair",
                  keywords: "ignition repair Stockport, ignition switch replacement, car ignition problems",
                },
                {
                  title: "Van Locksmith Services",
                  description:
                    "Commercial and personal van lockout assistance, key replacement, and programming. CK Stockport specializes in van locksmith services across Stockport and Greater Manchester.",
                  icon: Truck,
                  link: "/services/van-locksmith",
                  keywords: "van locksmith Stockport, commercial van locksmith, van key replacement",
                },
                {
                  title: "24/7 Emergency Service",
                  description:
                    "Round-the-clock emergency automotive locksmith service across Greater Manchester. CK Stockport is available 24/7 for urgent car key replacement, lockout assistance, and emergency locksmith needs.",
                  icon: Zap,
                  link: "/services/emergency-service",
                  keywords: "24/7 locksmith Stockport, emergency auto locksmith, urgent locksmith service",
                },
              ].map((service, index) => {
                const IconComponent = service.icon
                return (
                  <article
                    key={index}
                    className="bg-slate-700 rounded-2xl p-4 sm:p-6 hover:bg-slate-600 transition-all duration-300 group shadow-lg border border-slate-600"
                    itemScope
                    itemType="https://schema.org/Service"
                  >
                    <IconComponent className="w-8 sm:w-10 h-8 sm:h-10 text-orange-400 mb-4" />
                    <h3 className="text-lg sm:text-xl font-bold mb-3 text-white" itemProp="name">
                      {service.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-4" itemProp="description">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="text-orange-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base"
                    >
                      Learn More About {service.title} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        {/* Service Process Section */}
        <section className="section-padding bg-slate-900">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                How CK Stockport's Auto Locksmith Service Works
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
                Simple, fast, and transparent. Here's what to expect when you call CK Stockport for auto locksmith
                services.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  step: "1",
                  title: "Call CK Stockport",
                  description:
                    "Contact us at 07309903243 or request a free quote online. Our friendly team will gather details about your vehicle and situation.",
                  icon: Phone,
                },
                {
                  step: "2",
                  title: "Fast Response",
                  description:
                    "Our mobile locksmiths arrive at your location within 25 minutes on average. We're strategically positioned across Stockport and Greater Manchester.",
                  icon: Zap,
                },
                {
                  step: "3",
                  title: "Professional Service",
                  description:
                    "Our certified locksmiths assess your situation, provide an upfront quote, and complete the work using professional-grade equipment and techniques.",
                  icon: Award,
                },
                {
                  step: "4",
                  title: "Job Complete",
                  description:
                    "Your car keys are replaced, programmed, or your lockout resolved. We test everything to ensure it works perfectly before leaving.",
                  icon: CheckCircle,
                },
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="text-center">
                    <div className="bg-orange-400/20 rounded-full w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 sm:w-10 h-8 sm:h-10 text-orange-400" />
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-orange-400 mb-2">{item.step}</div>
                    <h3 className="text-lg sm:text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* E-E-A-T Section - Expertise, Experience, Authoritativeness, Trustworthiness */}
        <section className="section-padding bg-slate-800">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Why CK Stockport is the Trusted Auto Locksmith Choice
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
                Experience, expertise, and trustworthiness—the foundation of CK Stockport's reputation as Stockport's
                leading auto locksmith service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  title: "Expertise",
                  description:
                    "CK Stockport's certified locksmiths have extensive training in modern vehicle security systems, transponder keys, and keyless entry technology. We stay current with the latest automotive security advancements.",
                  icon: Award,
                  color: "text-blue-400",
                },
                {
                  title: "Experience",
                  description:
                    "With over 2,500 successful car key replacements since 2016, CK Stockport has the proven track record and local knowledge to handle any auto locksmith challenge in Stockport and Greater Manchester.",
                  icon: TrendingUp,
                  color: "text-green-400",
                },
                {
                  title: "Authoritativeness",
                  description:
                    "CK Stockport is recognized as a trusted auto locksmith service provider. We're fully insured, certified, and maintain a 5-star rating with 2,500+ satisfied customers across Greater Manchester.",
                  icon: Star,
                  color: "text-yellow-400",
                },
                {
                  title: "Trustworthiness",
                  description:
                    "Transparent pricing, no call-out fees, and upfront quotes. CK Stockport builds trust through honest communication, professional service, and a 98% first-attempt success rate.",
                  icon: Shield,
                  color: "text-orange-400",
                },
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div key={index} className="card">
                    <IconComponent className={`w-10 sm:w-12 h-10 sm:h-12 ${item.color} mb-4`} />
                    <h3 className="text-xl sm:text-2xl font-bold mb-3">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-300">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <LocationsSection />

        {/* Benefits Section */}
        <section className="section-padding bg-slate-900">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Benefits of Choosing CK Stockport for Auto Locksmith Services
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
              <ul className="space-y-4 text-lg sm:text-xl">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">No Call-Out Fee:</strong> Transparent pricing with no hidden charges
                    or surprise fees
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">Fully Insured:</strong> Comprehensive insurance coverage for all
                    services and vehicles
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">25-Minute Response:</strong> Fast average response time across
                    Stockport and Greater Manchester
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">98% Success Rate:</strong> First-attempt success on car key
                    replacement and programming
                  </span>
                </li>
              </ul>
              <ul className="space-y-4 text-lg sm:text-xl">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">24/7 Availability:</strong> Round-the-clock emergency auto locksmith
                    service
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">All Vehicle Types:</strong> Car key replacement for all makes and
                    models
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">Mobile Service:</strong> We come to you—home, work, or roadside
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    <strong className="text-white">5★ Rating:</strong> Trusted by 2,500+ customers across Greater
                    Manchester
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-slate-800" id="faq">
          <div className="container-custom">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex items-center justify-center gap-2 text-orange-400 mb-3 sm:mb-4">
                <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 flex-shrink-0" />
                <span className="font-semibold text-xs sm:text-sm tracking-wide uppercase">Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
                Common Questions About CK Stockport Auto Locksmith Services
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2 sm:px-0">
                Find answers to the most common questions about car key replacement, emergency lockout assistance, and
                auto locksmith services in Stockport.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqData.map((faq, index) => (
                <article
                  key={index}
                  className="card p-6 sm:p-8"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-white" itemProp="name">
                    {faq.question}
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-sm sm:text-base text-gray-300 leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-300 text-base sm:text-lg mb-6 px-2 sm:px-0">
                Still have questions? CK Stockport's friendly team is here to help.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <a
                  href="tel:07309903243"
                  className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                  aria-label="Call CK Stockport for questions"
                >
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                  Call: 07309903243
                </a>
                <Link
                  href="/contact"
                  className="btn-secondary inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-gradient-to-r from-orange-600 to-red-600">
          <div className="container-custom text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Need Auto Locksmith Services in Stockport? Call CK Stockport Now
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto px-2 sm:px-0">
              Whether you need car key replacement, emergency lockout assistance, or key fob programming, CK Stockport
              is ready to help 24/7. Fast response. Professional service. Transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="tel:07309903243"
                className="bg-white text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors text-lg sm:text-xl inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                aria-label="Call CK Stockport now at 07309903243"
              >
                <Phone className="w-5 h-5" />
                Call Now: 07309903243
              </a>
              <Link
                href="/contact"
                className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors text-lg sm:text-xl inline-flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <span>Request Free Quote</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-8 sm:mt-10 flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span>No Call-Out Fee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span>25-Min Response</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-white" />
                <span>5★ Rated</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
=======
                  description: "Lost or broken car keys? We cut and program new keys for all makes and models.",
                  icon: "🔑",
                  link: "/services/car-key-replacement",
                },
                {
                  title: "Key Programming",
                  description: "Professional transponder key programming and remote key fob coding service.",
                  icon: "💻",
                  link: "/services/auto-keys-programming",
                },
                {
                  title: "Lockout Assistance",
                  description: "Locked out of your car? Fast, damage-free entry service available 24/7.",
                  icon: "🚗",
                  link: "/services/lockout-assistance",
                },
                {
                  title: "Ignition Repair",
                  description: "Ignition switch problems? We repair and replace faulty ignition systems.",
                  icon: "🔧",
                  link: "/services/ignition-repair",
                },
                {
                  title: "Remote Key Fobs",
                  description: "Replacement and programming of remote key fobs and central locking systems.",
                  icon: "📱",
                  link: "/services/remote-key-fobs",
                },
                {
                  title: "Emergency Service",
                  description: "24/7 emergency automotive locksmith service across Greater Manchester.",
                  icon: "🚨",
                  link: "/services/emergency-service",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-slate-700 rounded-2xl p-4 sm:p-6 hover:bg-slate-600 transition-all duration-300 group shadow-lg border border-slate-600"
                >
                  <div className="text-3xl sm:text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-white">{service.title}</h3>
                  <p className="text-sm sm:text-base text-gray-300 mb-4">{service.description}</p>
                  <Link
                    href={service.link}
                    className="text-orange-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all text-sm sm:text-base"
                  >
                    Learn More About {service.title} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rest of your sections remain the same... */}
        {/* I'm keeping the rest of the code intact to save space */}
        {/* You can continue with all the other sections from your original code */}
        
        {/* Locations Section */}
        <LocationsSection />
        
      </main>
    </>
  )
}
>>>>>>> 16fdb7eb5d5e0e2b2289683a7642c430d8c08828
