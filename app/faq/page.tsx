import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Phone, MessageCircle, ArrowRight } from "lucide-react"
import { faqSchema, webPageSchema, breadcrumbSchema } from "@/lib/schema"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Auto Locksmith FAQ Stockport | Car Key Replacement Answers | Car Keys in Stockport",
  description:
    "Answers to the most common questions about car key replacement, emergency lockouts, key fob programming, and van locksmith services in Stockport. Prices, response times, and more.",
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/faq",
  },
  openGraph: {
    title: "Auto Locksmith FAQ Stockport | Common Questions Answered",
    description:
      "How much does car key replacement cost? How fast does a locksmith arrive? Can you make a key without the original? All answered here.",
    url: "https://carkeysinstockport.co.uk/faq",
    type: "website",
  },
}

// Comprehensive FAQ data — structured for AI Overview extraction, PAA matching, voice search
const allFaqs = [
  // ── Pricing cluster ─────────────────────────────────────────────────────────
  {
    category: "Pricing & Costs",
    items: [
      {
        question: "How much does car key replacement cost in Stockport?",
        answer:
          "Car key replacement in Stockport costs £80–£250 depending on the vehicle make, model, and key type. A standard blade key (no chip) is the cheapest. A transponder key (with immobiliser chip) costs more due to programming. A smart key or proximity key is the most expensive. Car Keys in Stockport provides a fixed upfront price before any work begins — no call-out fee. Call 07309903243 for an instant quote.",
      },
      {
        question: "Is it cheaper to use a locksmith or a main dealer for car key replacement?",
        answer:
          "A mobile auto locksmith is typically 40–60% cheaper than a main dealer. Main dealers charge premium labour rates (often £100+/hour), and many require the vehicle to be transported to them — adding towing costs. Car Keys in Stockport cuts and programs keys on-site at your location, same day, with no call-out fee. A key that a dealer quotes £350 for may cost £150–£200 with a mobile locksmith.",
      },
      {
        question: "How much does emergency car lockout service cost in Stockport?",
        answer:
          "Emergency car lockout assistance from Car Keys in Stockport costs £60–£150 depending on the vehicle type and entry method required. There is no call-out fee. A fixed price is provided before the locksmith arrives. For comparison: a broken car window costs £100–£500 plus labour and leaves your vehicle vulnerable — professional non-destructive entry is always the cheaper option.",
      },
      {
        question: "Do you charge a call-out fee?",
        answer:
          "No. Car Keys in Stockport does not charge a call-out fee for any service — including 24/7 emergency lockouts. You receive a fixed, upfront price before any work begins. There are no hidden charges, no travel fees, and no surprise additions to the final bill.",
      },
    ],
  },
  // ── Response & availability cluster ─────────────────────────────────────────
  {
    category: "Response Time & Availability",
    items: [
      {
        question: "How quickly does a locksmith arrive in Stockport?",
        answer:
          "Car Keys in Stockport maintains an average 25-minute response time across Stockport and the surrounding Greater Manchester area. Vikki Heaton operates a fully equipped mobile unit and travels directly to your location — whether at home, work, a car park, or the roadside. Available 24 hours a day, 7 days a week, 365 days a year.",
      },
      {
        question: "Are you available at night and on weekends?",
        answer:
          "Yes. Car Keys in Stockport operates 24/7, including nights, weekends, bank holidays, and Christmas Day. Automotive emergencies don't follow business hours, and neither does this service.",
      },
      {
        question: "How long does car key replacement take on-site?",
        answer:
          "Most car key replacements are completed within 20–30 minutes on-site. This covers cutting the new key blank and programming it to the vehicle's ECU. Complex smart keys or all-keys-lost scenarios may take up to 45–60 minutes depending on the vehicle make.",
      },
    ],
  },
  // ── Technical / key types cluster ───────────────────────────────────────────
  {
    category: "Key Types & Technical Questions",
    items: [
      {
        question: "What is a transponder key and why does it cost more to replace?",
        answer:
          "A transponder key contains a microchip embedded in the key head. When inserted into the ignition, the chip transmits a unique code to the vehicle's immobiliser system — if the code is wrong, the engine will not start. Replacing a transponder key requires specialist diagnostic equipment to program the new chip to the car's ECU. This programming step is why transponder keys cost more than standard blade keys. Most vehicles manufactured after 1995 use transponder keys.",
      },
      {
        question: "Can you make a car key without the original?",
        answer:
          "Yes. Car Keys in Stockport can produce a fully working replacement key without the original. Using the vehicle's VIN number and specialist key-cutting equipment, a new key blank is cut to match your vehicle's lock profile. It is then programmed to the vehicle's immobiliser and ECU. You do not need to retain the original key, and the vehicle does not need to be towed to a dealer.",
      },
      {
        question: "What is the difference between a key fob and a transponder key?",
        answer:
          "A transponder key is a physical key with an immobiliser chip inside the head — it must be inserted into the ignition to start the car. A key fob is a separate remote control device that operates central locking and may trigger an alarm. Many modern keys combine both: a transponder blade inside a fob casing with remote buttons. Programming either type requires specialist equipment and expertise.",
      },
      {
        question: "What is an all-keys-lost situation?",
        answer:
          "An all-keys-lost situation means no working key exists for the vehicle — not even a spare. This is the most complex key replacement scenario because the vehicle's ECU must be accessed and the immobiliser system fully re-programmed from scratch. Car Keys in Stockport handles all-keys-lost jobs on-site for most vehicle makes, though some rare models may require dealer involvement.",
      },
      {
        question: "Can you program key fobs for all car brands?",
        answer:
          "Car Keys in Stockport programs key fobs for all major brands including Ford, Vauxhall, BMW, Mercedes-Benz, Audi, Volkswagen, Toyota, Nissan, Renault, Kia, Hyundai, Honda, Tesla, McLaren, Bentley, and more. Specialist programming equipment is carried in the mobile unit for on-site completion.",
      },
    ],
  },
  // ── Lockout cluster ──────────────────────────────────────────────────────────
  {
    category: "Car Lockouts",
    items: [
      {
        question: "What should I do if I'm locked out of my car?",
        answer:
          "Move to a safe location away from traffic. Do not attempt to force a window, door, or lock — this causes damage that costs far more than a professional locksmith. Call Car Keys in Stockport on 07309903243. Vikki will confirm your location and vehicle, provide a fixed price, and arrive within an average of 25 minutes. The service is available 24/7 across Stockport and Greater Manchester.",
      },
      {
        question: "Will you damage my car getting in?",
        answer:
          "No. Car Keys in Stockport uses non-destructive entry techniques — specialist tools designed to open vehicle doors without any damage to the lock cylinder, door frame, weather seals, or glass. This is why calling a professional locksmith is always safer and cheaper than forcing entry yourself.",
      },
      {
        question: "Can police help if I'm locked out of my car in the UK?",
        answer:
          "UK police do not assist with standard car lockouts. They will respond if there is an immediate danger to life — for example, a child or vulnerable person trapped inside a hot vehicle. For a standard lockout with no risk to life, a 24/7 mobile auto locksmith is the correct and fastest solution.",
      },
      {
        question: "Do you help with van lockouts?",
        answer:
          "Yes. Car Keys in Stockport provides van lockout assistance for all commercial and personal vans including Ford Transit, Mercedes Sprinter, Vauxhall Vivaro, Volkswagen Transporter, Renault Trafic, Peugeot Expert, and all other makes. Van lockout service is available 24/7 across Stockport, Hazel Grove, and Greater Manchester.",
      },
    ],
  },
  // ── Trust & credentials cluster ──────────────────────────────────────────────
  {
    category: "Insurance, Credentials & Trust",
    items: [
      {
        question: "Is Car Keys in Stockport fully insured?",
        answer:
          "Yes. Car Keys in Stockport carries full public liability insurance covering all automotive locksmith services. Every job is backed by this insurance, meaning you are protected regardless of the service required.",
      },
      {
        question: "Who carries out the work — is it one person or a team?",
        answer:
          "Vikki Heaton carries out all work personally. When you call 07309903243, you speak directly to Vikki — the locksmith who will arrive at your location. There are no subcontractors, no call centres, and no intermediaries. This is why the service is trusted — you know exactly who is coming.",
      },
      {
        question: "How long has Car Keys in Stockport been operating?",
        answer:
          "Car Keys in Stockport was founded by Vikki Heaton in 2016. Since then, the business has completed over 2,500 car key replacements and lockout jobs across Stockport and Greater Manchester, maintaining a 98% first-attempt success rate.",
      },
    ],
  },
  // ── Area coverage cluster ─────────────────────────────────────────────────────
  {
    category: "Coverage Areas",
    items: [
      {
        question: "What areas do you cover in Stockport?",
        answer:
          "Car Keys in Stockport covers all Stockport districts including Cheadle, Bramhall, Hazel Grove, Marple, Romiley, Reddish, Edgeley, Davenport, Heaton Mersey, Heaton Moor, High Lane, Adswood, Brinnington, Portwood, Woodsmoor, Stepping Hill, and Stockport town centre.",
      },
      {
        question: "Do you cover Greater Manchester outside of Stockport?",
        answer:
          "Yes. Car Keys in Stockport covers the wider Greater Manchester area including Manchester city, Bury, Oldham, Rochdale, Salford, Trafford, and Tameside. Response times may be slightly longer for areas further from Stockport.",
      },
      {
        question: "Do you cover Cheshire areas?",
        answer:
          "Yes. Car Keys in Stockport provides services across Cheshire as well as Greater Manchester. This includes Macclesfield, Knutsford, Altrincham, Wilmslow, and surrounding SK postcode areas.",
      },
    ],
  },
]

const allFaqItems = allFaqs.flatMap((cat) => cat.items)

export default function FAQPage() {
  return (
    <>
      <Script
        id="faq-page-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(allFaqItems)) }}
      />
      <Script
        id="faq-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              name: "Auto Locksmith FAQ — Car Keys in Stockport",
              description:
                "Answers to common questions about car key replacement, emergency lockouts, key fob programming, costs, and coverage areas in Stockport and Greater Manchester.",
              url: "/faq",
              datePublished: "2026-01-15",
              dateModified: "2026-04-01",
              breadcrumb: [
                { name: "Home", url: "/" },
                { name: "FAQ", url: "/faq" },
              ],
            })
          ),
        }}
      />
      <Script
        id="faq-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "FAQ", url: "/faq" },
            ])
          ),
        }}
      />

      <main className="bg-slate-900 text-white pt-20">

        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-orange-400 mb-4">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold text-sm tracking-wide uppercase">Common Questions</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Auto Locksmith FAQ — Car Keys in Stockport
            </h1>
            {/* AI-citable summary paragraph */}
            <p className="text-lg text-gray-300 mb-4 leading-relaxed" id="faq-summary">
              Car Keys in Stockport is a 24/7 mobile auto locksmith service based in Stockport, Greater
              Manchester, operated by Vikki Heaton since 2016. This FAQ covers the most common questions
              about car key replacement costs, emergency lockout response times, key fob programming, van
              lockout assistance, and service coverage across Stockport and Greater Manchester.
            </p>
            <p className="text-base text-gray-400 mb-8">
              Can't find your answer? Call <a href="tel:07309903243" className="text-orange-400 font-semibold hover:text-orange-300">07309903243</a> — Vikki answers personally, 24/7.
            </p>
          </div>
        </section>

        {/* FAQ by category */}
        <section className="section-padding bg-slate-800">
          <div className="container-custom max-w-4xl mx-auto">
            {allFaqs.map((category) => (
              <div key={category.category} className="mb-16 last:mb-0">
                <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-orange-400 border-b border-slate-700 pb-4">
                  {category.category}
                </h2>
                <div className="space-y-6">
                  {category.items.map((faq, i) => (
                    <article
                      key={i}
                      className="bg-slate-700 rounded-2xl p-6 sm:p-8 border border-slate-600"
                      itemScope
                      itemType="https://schema.org/Question"
                    >
                      <h3
                        className="text-lg sm:text-xl font-bold text-white mb-4"
                        itemProp="name"
                      >
                        {faq.question}
                      </h3>
                      <div
                        itemScope
                        itemType="https://schema.org/Answer"
                        itemProp="acceptedAnswer"
                      >
                        <p
                          className="text-gray-300 text-sm sm:text-base leading-relaxed"
                          itemProp="text"
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-r from-orange-600 to-red-600 text-center">
          <div className="container-custom">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Still Have Questions? Call Vikki Directly
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              No call centres. No hold music. Vikki Heaton answers personally and gives you
              an instant fixed price for any service across Stockport and Greater Manchester.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:07309903243"
                className="bg-white text-orange-600 font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-colors text-lg inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call: 07309903243
              </a>
              <Link
                href="/contact"
                className="border-2 border-white text-white font-bold px-8 py-4 rounded-2xl hover:bg-white/10 transition-colors text-lg inline-flex items-center justify-center gap-2"
              >
                Request Free Quote <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  )
}
