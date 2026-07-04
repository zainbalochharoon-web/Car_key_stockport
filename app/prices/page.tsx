import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Phone, CheckCircle, ArrowRight } from "lucide-react"
import { faqSchema, webPageSchema, breadcrumbSchema, serviceSchema } from "@/lib/schema"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Car Locksmith Prices Stockport | Key Replacement & Lockout Costs | Car Keys in Stockport",
  description:
    "Transparent car locksmith prices in Stockport. Car key replacement from £80, emergency lockout from £60, key fob programming from £80. No call-out fee. Fixed upfront pricing. Call 07309903243.",
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/prices",
  },
  openGraph: {
    title: "Car Locksmith Prices Stockport | Car Keys in Stockport",
    description:
      "Upfront, fixed prices for car key replacement, emergency lockout, key fob programming, and van lockout in Stockport. No call-out fee. No hidden charges.",
    url: "https://carkeysinstockport.co.uk/prices",
    type: "website",
  },
}

const pricingFaqs = [
  {
    question: "How much does car key replacement cost in Stockport?",
    answer:
      "Car key replacement in Stockport costs £80–£250 depending on the vehicle make, model, and key type. A standard blade key (no chip) is the cheapest. A transponder key with immobiliser chip costs more due to programming. A smart key or proximity key is the most expensive. Car Keys in Stockport provides a fixed upfront price before any work begins — no call-out fee.",
  },
  {
    question: "How much does emergency car lockout service cost in Stockport?",
    answer:
      "Emergency car lockout assistance from Car Keys in Stockport costs £60–£150 depending on the vehicle type and entry method required. There is no call-out fee. A fixed price is provided before the locksmith arrives. For comparison: a broken car window costs £100–£500 plus labour — professional non-destructive entry is always the cheaper option.",
  },
  {
    question: "Is it cheaper to use a locksmith or a main dealer for car key replacement in Stockport?",
    answer:
      "A mobile auto locksmith is typically 40–60% cheaper than a main dealer. Main dealers charge premium labour rates (often £100+/hour), and many require the vehicle to be transported to them — adding towing costs. Car Keys in Stockport cuts and programs keys on-site at your location, same day, with no call-out fee. A key that a dealer quotes £350 for may cost £150–£200 with a mobile locksmith.",
  },
  {
    question: "How much does van lockout service cost in Stockport?",
    answer:
      "Van lockout assistance from Car Keys in Stockport starts from £69. A fixed price is provided before the locksmith arrives — there is no call-out fee and no hidden charges. Final cost depends on the van make and entry method required.",
  },
  {
    question: "How much does key fob programming cost in Stockport?",
    answer:
      "Key fob programming in Stockport costs £80–£200 depending on the vehicle make and fob type. This includes programming and testing. A fixed upfront price is provided before any work begins.",
  },
  {
    question: "How much does ignition repair cost in Stockport?",
    answer:
      "Ignition repair and barrel replacement in Stockport costs £80–£200 depending on the fault and vehicle make. Car Keys in Stockport diagnoses the fault on-site and provides a fixed price before any work begins.",
  },
  {
    question: "Do you charge a call-out fee?",
    answer:
      "No. Car Keys in Stockport does not charge a call-out fee for any service — including 24/7 emergency lockouts. You receive a fixed, upfront price before any work begins. There are no hidden charges, no travel fees, and no surprise additions to the final bill.",
  },
  {
    question: "How much does all-keys-lost car key replacement cost?",
    answer:
      "All-keys-lost car key replacement in Stockport costs £150–£350 depending on the vehicle make. This is the most complex key replacement scenario as the vehicle's ECU must be accessed and the immobiliser system fully re-programmed. Car Keys in Stockport handles all-keys-lost jobs on-site for most vehicle makes.",
  },
]

const priceRows = [
  {
    service: "Emergency Car Lockout",
    range: "£60 – £150",
    time: "25 min avg",
    note: "Non-destructive entry, all makes",
  },
  {
    service: "Standard Blade Key Cut",
    range: "£80 – £120",
    time: "20–30 min",
    note: "No chip/immobiliser",
  },
  {
    service: "Transponder Key Replacement",
    range: "£100 – £200",
    time: "20–30 min",
    note: "Chip + programming included",
  },
  {
    service: "Smart / Proximity Key",
    range: "£150 – £250",
    time: "30–45 min",
    note: "Keyless entry/start",
  },
  {
    service: "All-Keys-Lost Replacement",
    range: "£150 – £350",
    time: "45–60 min",
    note: "ECU re-programme required",
  },
  {
    service: "Key Fob Programming",
    range: "£80 – £200",
    time: "15–30 min",
    note: "Remote fobs for all brands",
  },
  {
    service: "Van Lockout Assistance",
    range: "£69 – £150",
    time: "25 min avg",
    note: "All commercial/personal vans",
  },
  {
    service: "Ignition Repair / Barrel",
    range: "£80 – £200",
    time: "30–60 min",
    note: "On-site diagnosis + repair",
  },
]

export default function PricesPage() {
  return (
    <>
      <Script
        id="prices-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(pricingFaqs)) }}
      />
      <Script
        id="prices-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema({
              name: "Car Locksmith Prices Stockport",
              description:
                "Transparent, fixed upfront pricing for all auto locksmith services in Stockport. Car key replacement from £80, emergency lockout from £60, key fob programming from £80, van lockout from £69. No call-out fee.",
              url: "/prices",
              areaServed: "Greater Manchester",
              priceMin: 60,
              priceMax: 350,
            })
          ),
        }}
      />
      <Script
        id="prices-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              name: "Car Locksmith Prices Stockport | Car Keys in Stockport",
              description:
                "Transparent pricing for car key replacement, emergency lockout, key fob programming, van lockout, and ignition repair in Stockport. No call-out fee.",
              url: "/prices",
              datePublished: "2026-01-15",
              dateModified: "2026-05-01",
              breadcrumb: [
                { name: "Home", url: "/" },
                { name: "Prices", url: "/prices" },
              ],
            })
          ),
        }}
      />
      <Script
        id="prices-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Prices", url: "/prices" },
            ])
          ),
        }}
      />

      <main className="bg-slate-900 text-white pt-20">

        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container-custom max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 text-orange-400 mb-4">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold text-sm tracking-wide uppercase">Fixed Upfront Pricing</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Car Locksmith Prices in Stockport
            </h1>
            {/* AI-citable summary — optimised for AI Overview extraction */}
            <p className="text-lg text-gray-300 mb-4 leading-relaxed" id="prices-summary">
              Car Keys in Stockport provides transparent, fixed upfront pricing for all auto locksmith services across
              Stockport and Greater Manchester. Emergency car lockout starts from £60. Car key replacement starts from
              £80. There is no call-out fee on any service. Vikki Heaton provides a fixed price before any work begins
              — 24 hours a day, 7 days a week.
            </p>
            <p className="text-base text-gray-400 mb-8">
              Prices vary by vehicle make, model, and key type. Call{" "}
              <a href="tel:07309903243" className="text-orange-400 font-semibold hover:text-orange-300">
                07309903243
              </a>{" "}
              for an instant quote — Vikki answers personally, 24/7.
            </p>
            <a
              href="tel:07309903243"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-2xl transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              Get Instant Quote: 07309903243
            </a>
          </div>
        </section>

        {/* Price Table */}
        <section className="section-padding bg-slate-800">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
              Auto Locksmith Price Guide — Stockport 2026
            </h2>
            <p className="text-gray-400 text-center mb-10 text-sm">
              All prices include labour and on-site service. No call-out fee. No hidden charges.
              Final price confirmed before work begins.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-700">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-700 text-left">
                    <th className="px-6 py-4 font-bold text-white">Service</th>
                    <th className="px-6 py-4 font-bold text-orange-400">Price Range</th>
                    <th className="px-6 py-4 font-bold text-white hidden sm:table-cell">Typical Time</th>
                    <th className="px-6 py-4 font-bold text-white hidden md:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {priceRows.map((row, i) => (
                    <tr
                      key={i}
                      className={`border-t border-slate-700 ${i % 2 === 0 ? "bg-slate-800" : "bg-slate-750"}`}
                    >
                      <td className="px-6 py-4 font-semibold text-white">{row.service}</td>
                      <td className="px-6 py-4 font-bold text-orange-400">{row.range}</td>
                      <td className="px-6 py-4 text-gray-300 hidden sm:table-cell">{row.time}</td>
                      <td className="px-6 py-4 text-gray-400 hidden md:table-cell">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { label: "No Call-Out Fee", detail: "On any service, any time of day" },
                { label: "Fixed Upfront Price", detail: "Confirmed before work begins" },
                { label: "No Hidden Charges", detail: "What we quote is what you pay" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-700 rounded-xl p-4 flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-white text-sm">{item.label}</div>
                    <div className="text-gray-400 text-xs mt-1">{item.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why cheaper than a dealer */}
        <section className="section-padding bg-slate-900">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Why Is a Mobile Locksmith Cheaper Than a Main Dealer?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Main dealers charge premium labour rates — often £100 or more per hour — plus a diagnostic fee before any
              work begins. Many require the vehicle to be physically present at the dealership, which adds towing costs
              if the car is undriveable. A replacement key that a Ford or BMW dealer quotes £300–£400 for typically
              costs £120–£200 with Car Keys in Stockport.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6">
              Car Keys in Stockport is a sole-operator mobile service. There is no dealership overhead, no multiple
              intermediaries, and no towing required. Vikki Heaton uses the same professional key-cutting machines and
              diagnostic programming equipment as main dealers — but comes to your location and charges a fraction of
              the price.
            </p>
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <h3 className="font-bold text-lg text-white mb-4">Cost Comparison: Dealer vs. Mobile Locksmith</h3>
              <div className="grid sm:grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="text-gray-400 font-semibold mb-3 uppercase tracking-wide text-xs">Main Dealer</div>
                  {[
                    "Diagnostic fee: £50–£150",
                    "Labour: £100+/hour",
                    "Towing (if needed): £80–£200",
                    "Key + programming: £200–£400",
                    "Wait time: 1–5 days for parts",
                  ].map((item, i) => (
                    <div key={i} className="text-gray-300 py-1.5 border-b border-slate-700">{item}</div>
                  ))}
                </div>
                <div>
                  <div className="text-orange-400 font-semibold mb-3 uppercase tracking-wide text-xs">Car Keys in Stockport</div>
                  {[
                    "No call-out fee",
                    "Fixed upfront price",
                    "Mobile — comes to you",
                    "Key + programming: £80–£250",
                    "Same-day, on-site in 25 minutes",
                  ].map((item, i) => (
                    <div key={i} className="text-gray-300 py-1.5 border-b border-slate-700 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ by price query */}
        <section className="section-padding bg-slate-800">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-orange-400 border-b border-slate-700 pb-4">
              Pricing Questions — Answered
            </h2>
            <div className="space-y-6">
              {pricingFaqs.map((faq, i) => (
                <article
                  key={i}
                  className="bg-slate-700 rounded-2xl p-6 sm:p-8 border border-slate-600"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-4" itemProp="name">
                    {faq.question}
                  </h3>
                  <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed" itemProp="text">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Service links — internal semantic graph */}
        <section className="section-padding bg-slate-900">
          <div className="container-custom max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Explore Each Service</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: "Emergency Car Lockout", href: "/services/emergency-service" },
                { name: "Car Key Replacement", href: "/services/car-key-replacement" },
                { name: "Key Fob Programming", href: "/services/key-fob-programming" },
                { name: "Van Lockout Assistance", href: "/services/van-lockout" },
                { name: "Auto Keys Programming", href: "/services/auto-keys-programming" },
                { name: "Ignition Repair", href: "/services/ignition-repair" },
                { name: "Remote Key Fobs", href: "/services/remote-key-fobs" },
                { name: "Lockout Assistance", href: "/services/lockout-assistance" },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-2 bg-slate-800 border border-slate-700 hover:border-orange-400 rounded-xl px-4 py-3 text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  <ArrowRight className="w-4 h-4 text-orange-400 flex-shrink-0" />
                  {service.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-r from-orange-600 to-red-600 text-center">
          <div className="container-custom">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Get Your Fixed Price Now — Call Vikki Directly
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-xl mx-auto">
              No automated quote form. No hold music. Vikki Heaton answers personally, tells you the exact price,
              and arrives within 25 minutes across Stockport and Greater Manchester.
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
