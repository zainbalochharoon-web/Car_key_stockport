import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import Breadcrumb from "../../components/breadcrumb"
import { localBusinessSchema, faqSchema } from "@/lib/schema"
import { Phone, Clock, Shield, CheckCircle, MapPin, Star } from "lucide-react"

interface LocationPageProps {
  params: {
    slug: string
  }
}

const locationData: Record<
  string,
  {
    name: string
    fullName: string
    metaTitle: string
    metaDescription: string
    heroDescription: string
    description: string
    areas: string[]
    whyChoose: string
  }
> = {
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
    whyChoose:
      "Serving Tameside with fast response times and professional service. Fully insured and certified technicians available 24/7.",
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
    whyChoose:
      "Local service covering all Trafford areas. Professional technicians, transparent pricing, and 25-minute average response.",
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
    whyChoose:
      "Based locally in Greater Manchester, we understand Salford well. Fast response, professional service, fully insured.",
  },
}

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const slug = (await params).slug
  const location = locationData[slug]

  if (!location) {
    return {
      title: "Location Not Found",
      description: "This location page could not be found.",
    }
  }

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    keywords: `auto locksmith ${location.name}, car locksmith ${location.name}, lockout service, key replacement`,
  }
}

export function generateStaticParams() {
  return Object.keys(locationData).map((slug) => ({
    slug,
  }))
}

export default function LocationPage({ params }: LocationPageProps) {
  const slug = (params as any).slug
  const location = locationData[slug]

  if (!location) {
    return (
      <main className="bg-slate-900 text-white pt-20">
        <div className="container-custom text-center py-20">
          <h1 className="text-3xl font-bold mb-4">Location Not Found</h1>
          <p className="text-gray-300 mb-8">The location you're looking for doesn't exist.</p>
          <Link href="/" className="text-orange-400 hover:text-orange-300 underline">
            Return to Home
          </Link>
        </div>
      </main>
    )
  }

  const faqItems = [
    {
      question: `How fast can you arrive in ${location.name}?`,
      answer: `We aim to arrive within 25 minutes of your call in ${location.name} and surrounding areas.`,
    },
    {
      question: "Will you damage my car getting in?",
      answer: "No. We use damage-free, professional techniques to unlock your vehicle safely.",
    },
    {
      question: "Do you charge a call-out fee?",
      answer: "No hidden fees. The cost shown is what you pay. Transparent pricing always.",
    },
    {
      question: "Are you available at night?",
      answer: "Yes, we're available 24/7, including weekends and bank holidays.",
    },
  ]

  return (
    <>
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema(slug, location.name)),
        }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(faqItems)),
        }}
      />
      <Breadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Service Areas", href: "/#locations" },
          { name: location.name, href: `/areas/${slug}` },
        ]}
      />
      <main className="bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-orange-400 mb-4">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Local Locksmith Service</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Auto Locksmith Services in <span className="text-orange-400">{location.name}</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              {location.heroDescription} Available 24/7 with 25-minute response time across {location.name} and surrounding
              areas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:07309903243" className="btn-primary text-center">
                <Phone className="w-5 h-5 inline mr-2" />
                Call Now: 07309903243
              </a>
              <Link href="/contact" className="btn-secondary text-center">
                Request Service
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="card">
                <MapPin className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="text-sm font-semibold">Local Service</div>
              </div>
              <div className="card">
                <Clock className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="text-sm font-semibold">25 Min Response</div>
              </div>
              <div className="card">
                <Shield className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="text-sm font-semibold">Fully Insured</div>
              </div>
              <div className="card">
                <Star className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <div className="text-sm font-semibold">5★ Rated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Service in Location */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Why Choose Our {location.name} Locksmith Service?</h2>

              <div className="space-y-6">
                <p className="text-gray-300 text-lg">{location.description}</p>

                <h3 className="text-2xl font-bold">What We Offer in {location.name}:</h3>
                <ul className="space-y-3">
                  {[
                    "Car key replacement for all makes and models",
                    "Emergency 24/7 lockout assistance",
                    "Key fob programming and repair",
                    "Van lockout services",
                    "Ignition repair and replacement",
                    "Auto key programming with modern technology",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="text-2xl font-bold mt-8">Service Areas in {location.name}</h3>
                <p className="text-gray-300 mb-4">We cover {location.name} and surrounding areas, including:</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {location.areas.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-gray-300">
                      <MapPin className="w-4 h-4 text-orange-400" />
                      {area}
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mt-8">Local Locksmith You Can Trust</h3>
                <p className="text-gray-300">{location.whyChoose}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li className="flex justify-between">
                    <span>Service Area:</span>
                    <span className="text-orange-400 font-bold">{location.name}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Avg Response:</span>
                    <span className="text-orange-400 font-bold">25 min</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Available:</span>
                    <span className="text-orange-400 font-bold">24/7</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Call-Out Fee:</span>
                    <span className="text-orange-400 font-bold">None</span>
                  </li>
                </ul>
              </div>

              <div className="card p-6 bg-orange-400/10 border border-orange-400/20">
                <h3 className="text-xl font-bold mb-4 text-orange-400">Need Help in {location.name}?</h3>
                <p className="text-gray-300 mb-4">Call us now for immediate assistance.</p>
                <a href="tel:07309903243" className="btn-primary w-full text-center">
                  <Phone className="w-4 h-4 inline mr-2" />
                  07309903243
                </a>
              </div>

              <div className="card p-6">
                <h3 className="text-xl font-bold mb-4">All Services</h3>
                <ul className="space-y-2">
                  {[
                    { name: "Car Lockout", href: "/services/lockout-assistance" },
                    { name: "Key Replacement", href: "/services/car-key-replacement" },
                    { name: "Van Lockout", href: "/services/van-lockout" },
                    { name: "Key Fob Programming", href: "/services/key-fob-programming" },
                    { name: "Emergency Service", href: "/services/emergency-service" },
                  ].map((service) => (
                    <li key={service.name}>
                      <Link href={service.href} className="text-orange-400 hover:text-orange-300 text-sm">
                        → {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">{location.name} Auto Locksmith FAQs</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqItems.map((item, index) => (
              <div key={index} className="card p-6">
                <h3 className="font-bold text-orange-400 mb-2">{item.question}</h3>
                <p className="text-gray-300 text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-orange-600 to-orange-700">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">Need an Auto Locksmith in {location.name}?</h2>
          <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
            We're here to help with car keys, lockouts, and emergency services. Available 24/7 across {location.name}.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:07309903243" className="btn-primary bg-white text-orange-600 hover:bg-gray-100">
              <Phone className="w-5 h-5 inline mr-2" />
              Call Now: 07309903243
            </a>
            <Link href="/contact" className="btn-secondary border-2 border-white text-white hover:bg-white/10">
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Main Location */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom text-center">
          <p className="text-gray-300 mb-6">
            Looking for service in a different area?{" "}
            <Link href="/" className="text-orange-400 hover:text-orange-300 font-semibold">
              View all service areas
            </Link>
          </p>
        </div>
      </section>
    </main>
    </>
  )
}
