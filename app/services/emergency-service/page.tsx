import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Phone, Clock, Shield, CheckCircle, Zap, ArrowRight, MapPin, MessageCircle } from "lucide-react"
import { faqSchema } from "@/lib/schema"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "24/7 Emergency Car Locksmith Stockport | 25-Min Response – No Call-Out Fee",
  description:
    "Locked out or lost car keys in Stockport? Vikki Heaton arrives in 25 minutes, 24/7. Emergency car key replacement & lockout service. Fully insured, no call-out fee. Call 07309903243.",
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/services/emergency-service",
  },
  openGraph: {
    title: "24/7 Emergency Car Locksmith Stockport | 25-Min Response",
    description:
      "Emergency auto locksmith in Stockport. 25-minute response. Car key replacement & lockout assistance 24/7. No call-out fee. Call 07309903243.",
    url: "https://carkeysinstockport.co.uk/services/emergency-service",
    type: "website",
  },
}

const faqData = [
  {
    question: "What should I do if I'm locked out of my car in Stockport?",
    answer:
      "Call Car Keys in Stockport immediately on 07309903243. Do not attempt to force entry — this causes expensive lock damage. Vikki Heaton will arrive at your location in Stockport or Greater Manchester within 25 minutes on average and gain access using professional non-destructive techniques. The service is available 24 hours a day, 7 days a week.",
  },
  {
    question: "Can police help if I'm locked out of my car?",
    answer:
      "UK police do not assist with vehicle lockouts unless there is an immediate danger to life — for example, a child or pet trapped inside. For a standard lockout, a 24/7 mobile auto locksmith is the correct and fastest solution. Car Keys in Stockport operates around the clock for exactly this situation.",
  },
  {
    question: "How much does emergency locksmith call-out cost in Stockport?",
    answer:
      "Car Keys in Stockport charges no call-out fee. You receive a fixed, upfront price before any work begins. Emergency lockout assistance typically costs £60–£150 depending on vehicle type and the entry method required. This is significantly cheaper than a broken window (£100–£500 plus labour) and leaves your vehicle undamaged.",
  },
  {
    question: "How fast does an emergency locksmith arrive in Stockport?",
    answer:
      "Car Keys in Stockport maintains an average 25-minute response time across Stockport and Greater Manchester. Vikki Heaton operates as a mobile locksmith, travelling directly to your location whether you're at home, at work, in a car park, or at the roadside.",
  },
  {
    question: "Is it safe to use an emergency locksmith at night?",
    answer:
      "Yes. Car Keys in Stockport is a fully insured, female-owned business operated by Vikki Heaton, who has provided trusted locksmith services in Stockport since 2016. All work is backed by public liability insurance. You can verify the business at 07309903243 and request a quote before anyone arrives.",
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://carkeysinstockport.co.uk/services/emergency-service#service",
  name: "24/7 Emergency Car Locksmith Service Stockport",
  description:
    "Car Keys in Stockport provides 24/7 emergency car key replacement and lockout assistance across Stockport and Greater Manchester. Mobile auto locksmith Vikki Heaton averages a 25-minute response time. No call-out fee. Fully insured since 2016.",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://carkeysinstockport.co.uk/#business",
    name: "Car Keys in Stockport",
    telephone: "+447309903243",
  },
  serviceType: "Emergency Automotive Locksmith",
  areaServed: [
    { "@type": "City", name: "Stockport" },
    { "@type": "City", name: "Greater Manchester" },
    { "@type": "City", name: "Cheadle" },
    { "@type": "City", name: "Bramhall" },
    { "@type": "City", name: "Hazel Grove" },
    { "@type": "City", name: "Manchester" },
  ],
  availableChannel: {
    "@type": "ServiceChannel",
    servicePhone: "+447309903243",
    availableLanguage: "en-GB",
  },
  hoursAvailable: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  offers: {
    "@type": "Offer",
    priceSpecification: {
      "@type": "PriceSpecification",
      priceCurrency: "GBP",
      description: "Fixed upfront price, no call-out fee",
    },
  },
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "What to Do If You're Locked Out of Your Car in Stockport",
  description: "Step-by-step guide for dealing with a car lockout in Stockport.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Stay calm and stay safe",
      text: "Move to a safe location away from traffic. Do not attempt to force entry — this causes lock and door damage that costs far more than a locksmith.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Call Car Keys in Stockport",
      text: "Call 07309903243. Vikki Heaton is available 24/7 and will confirm your location and provide a fixed price upfront with no call-out fee.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Wait for the mobile locksmith",
      text: "Vikki arrives at your location — home, work, car park, or roadside — within an average of 25 minutes across Stockport and Greater Manchester.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Non-destructive entry",
      text: "Using specialist tools and professional techniques, your vehicle is unlocked without damage to the door, frame, or lock mechanism.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Key replacement if needed",
      text: "If you have lost your keys entirely, a replacement key can be cut and programmed on-site — no tow truck or dealer visit required.",
    },
  ],
}

export default function EmergencyServicePage() {
  return (
    <>
      <Script
        id="emergency-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Script
        id="emergency-howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Script
        id="emergency-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqData)) }}
      />

      <main className="bg-slate-900 text-white pt-20">

        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-red-700 via-red-600 to-orange-600">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 text-yellow-300 mb-4">
                <Zap className="w-5 h-5 animate-pulse" />
                <span className="font-semibold text-sm tracking-wide uppercase">Emergency 24/7 Service</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Emergency Car Locksmith in Stockport — 25-Minute Response, 24/7
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-4 leading-relaxed">
                Locked out of your car? Lost your car keys? Car Keys in Stockport provides fast, professional
                emergency locksmith services across Stockport and Greater Manchester — any time, day or night.
                No call-out fee. Fully insured.
              </p>
              {/* AI-citable paragraph */}
              <p className="text-base text-white/80 mb-8 leading-relaxed">
                Vikki Heaton — a fully insured female auto locksmith with over 9 years of experience — operates
                a mobile unit serving Stockport, Cheadle, Bramhall, Hazel Grove, Marple, Manchester, Bury,
                Oldham, and surrounding Greater Manchester areas. She averages a 25-minute arrival time and
                has completed over 2,500 successful jobs since 2016.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:07309903243"
                  className="bg-white text-red-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center gap-2"
                  aria-label="Call emergency locksmith Car Keys in Stockport now"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: 07309903243
                </a>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors text-lg inline-flex items-center justify-center gap-2"
                >
                  Get Free Quote <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="flex flex-wrap justify-center gap-6 text-sm text-white/80">
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-300" /> No Call-Out Fee</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-300" /> Fully Insured</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-300" /> 25-Min Avg Response</span>
                <span className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-green-300" /> All Vehicle Makes</span>
              </div>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="section-padding bg-slate-800">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Emergency Locksmith Services We Provide
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Emergency Car Lockout",
                  desc: "Locked keys inside your vehicle. Professional non-destructive entry — no damage to locks, doors, or glass.",
                },
                {
                  title: "Lost Car Key Replacement",
                  desc: "All keys lost. New key cut and programmed on-site. No need to tow to a dealer.",
                },
                {
                  title: "Broken Key Extraction",
                  desc: "Key snapped in door lock or ignition. Specialist extraction tools used — no lock destruction.",
                },
                {
                  title: "Transponder / Smart Key Emergency",
                  desc: "Key fob stopped working or immobiliser fault. On-site programming for all modern key types.",
                },
                {
                  title: "Van Emergency Lockout",
                  desc: "Commercial and personal vans covered. Ford Transit, Mercedes Sprinter, VW Transporter and all others.",
                },
                {
                  title: "Ignition Emergency",
                  desc: "Key won't turn or stuck ignition. On-site diagnosis and repair for all vehicle makes.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-6">
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HowTo — What to Do When Locked Out */}
        <section className="section-padding bg-slate-900">
          <div className="container-custom max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
              What to Do If You're Locked Out of Your Car in Stockport
            </h2>
            <p className="text-gray-300 text-center mb-10">
              Follow these steps for the safest and fastest resolution.
            </p>
            <ol className="space-y-6">
              {[
                {
                  n: "1",
                  title: "Stay calm and move to safety",
                  text: "Move away from traffic. Do not try to force a window or door — this causes £100–£500 of damage and is slower than calling a locksmith.",
                },
                {
                  n: "2",
                  title: "Call 07309903243",
                  text: "Vikki Heaton answers 24/7. Tell her your location and vehicle make — she'll give you a fixed price immediately, no call-out fee.",
                },
                {
                  n: "3",
                  title: "Wait for the mobile unit — avg 25 minutes",
                  text: "Vikki travels to you anywhere in Stockport or Greater Manchester. You do not need to arrange a tow.",
                },
                {
                  n: "4",
                  title: "Non-destructive entry",
                  text: "Specialist tools open your vehicle without damage. All modern cars, vans, and SUVs covered.",
                },
                {
                  n: "5",
                  title: "Key replacement if required",
                  text: "If your key is lost or damaged, a new key is cut and programmed on-site. You leave with a working vehicle.",
                },
              ].map((step) => (
                <li key={step.n} className="flex gap-5 items-start">
                  <div className="bg-orange-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {step.n}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{step.title}</h3>
                    <p className="text-gray-300 text-sm">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service Areas */}
        <section className="section-padding bg-slate-800">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-orange-400 mb-3">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold text-sm tracking-wide uppercase">Emergency Coverage Areas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Emergency Locksmith Areas Covered
            </h2>
            <p className="text-gray-300 mb-8">
              Car Keys in Stockport covers all of the following areas for 24/7 emergency locksmith call-outs:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Stockport", "Cheadle", "Bramhall", "Hazel Grove", "Marple", "Romiley",
                "Reddish", "Edgeley", "Davenport", "Heaton Mersey", "Heaton Moor",
                "High Lane", "Adswood", "Brinnington", "Manchester", "Bury",
                "Oldham", "Rochdale", "Salford", "Trafford", "Tameside",
              ].map((area) => (
                <span key={area} className="bg-slate-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-slate-900" id="faq">
          <div className="container-custom max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 text-orange-400 mb-3">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold text-sm tracking-wide uppercase">FAQ</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">
                Emergency Locksmith FAQs — Stockport
              </h2>
            </div>
            <div className="space-y-6">
              {faqData.map((faq, i) => (
                <article
                  key={i}
                  className="card p-6"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-lg font-bold text-white mb-3" itemProp="name">
                    {faq.question}
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-gray-300 text-sm leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-r from-red-700 to-orange-600 text-center">
          <div className="container-custom">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Emergency? Call Car Keys in Stockport Now
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              Available 24/7. 25-minute average response. No call-out fee. Fully insured.
            </p>
            <a
              href="tel:07309903243"
              className="bg-white text-red-600 font-bold px-10 py-4 rounded-2xl hover:bg-gray-100 transition-colors text-xl inline-flex items-center gap-2"
              aria-label="Call emergency auto locksmith Car Keys in Stockport"
            >
              <Phone className="w-6 h-6" />
              07309903243
            </a>
          </div>
        </section>

      </main>
    </>
  )
}
