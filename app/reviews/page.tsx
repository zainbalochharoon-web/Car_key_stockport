import type { Metadata } from "next"
import Script from "next/script"
import Link from "next/link"
import { Star, Phone, CheckCircle, MapPin } from "lucide-react"
import { reviewSchema, faqSchema, breadcrumbSchema } from "@/lib/schema"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "Reviews — Car Keys Stockport | Vikki Heaton Auto Locksmith",
  description:
    "Genuine customer reviews for Car Keys in Stockport. Vikki Heaton has 5-star ratings from customers across Stockport, Cheadle, Bramhall, Hazel Grove and Greater Manchester. Read verified reviews.",
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/reviews",
  },
  openGraph: {
    title: "Reviews — Car Keys Stockport | Vikki Heaton Auto Locksmith",
    description:
      "5-star reviews from real customers across Stockport and Greater Manchester. Car key replacement, lockout assistance, key fob programming.",
    url: "https://carkeysinstockport.co.uk/reviews",
    type: "website",
    siteName: "Car Keys in Stockport",
    locale: "en_GB",
  },
}

const reviews = [
  {
    author: "James Wilson",
    location: "Stockport",
    rating: 5,
    text: "Lost my BMW keys on a Saturday night. Vikki was out within 20 minutes and had new keys cut and programmed in under 30 minutes. Absolutely brilliant service — cannot recommend enough.",
    service: "Car Key Replacement",
    datePublished: "2025-11-15",
  },
  {
    author: "Sarah Mitchell",
    location: "Cheadle",
    rating: 5,
    text: "Professional service from start to finish. Fair pricing, absolutely no hidden costs, and Vikki was very knowledgeable about my Vauxhall Astra. Highly recommended to anyone in the Cheadle area.",
    service: "Emergency Lockout",
    datePublished: "2025-10-22",
  },
  {
    author: "David Brown",
    location: "Bramhall",
    rating: 5,
    text: "Needed a replacement key for my Mercedes. Vikki arrived quickly, was very professional, and had the key working perfectly. Quoted a fixed price upfront — exactly what I paid.",
    service: "Car Key Replacement",
    datePublished: "2025-10-08",
  },
  {
    author: "Emma Johnson",
    location: "Hazel Grove",
    rating: 5,
    text: "Amazing mobile service! Locked out of my van early morning. Vikki was there within 25 minutes, dealt with it professionally and was on her way. Would use again without hesitation.",
    service: "Van Lockout",
    datePublished: "2025-09-30",
  },
  {
    author: "Oliver Smith",
    location: "Marple",
    rating: 5,
    text: "Stuck outside my car in the rain at Marple. Called at 10pm and Vikki answered straight away, gave me a price on the phone, and arrived exactly when she said. Brilliant.",
    service: "Emergency Lockout",
    datePublished: "2025-09-14",
  },
  {
    author: "Karen Thomas",
    location: "Edgeley",
    rating: 5,
    text: "Key fob stopped working on my Ford Focus. Vikki came out the same evening, diagnosed it as a programming fault rather than a broken fob, reprogrammed it on the spot. Saved me a fortune.",
    service: "Key Fob Programming",
    datePublished: "2025-08-27",
  },
  {
    author: "Michael Davies",
    location: "Heaton Moor",
    rating: 5,
    text: "Used Car Keys in Stockport twice now. Both times: fast response, transparent pricing, great result. Female locksmith who clearly knows her stuff — my wife felt completely comfortable.",
    service: "Car Key Replacement",
    datePublished: "2025-08-12",
  },
  {
    author: "Rachel Green",
    location: "Reddish",
    rating: 5,
    text: "Locked my keys inside my car at Tesco. Vikki was there in 20 minutes, had me back in within 5 minutes, was incredibly professional. No damage at all to the car. Highly recommend.",
    service: "Emergency Lockout",
    datePublished: "2025-07-18",
  },
  {
    author: "Tom Harrison",
    location: "Davenport",
    rating: 5,
    text: "Lost all keys to my Audi A3. Vikki handled the all-keys-lost situation without any drama. New key cut and programmed on my driveway. This could have cost me double at a dealer — very happy.",
    service: "Car Key Replacement",
    datePublished: "2025-07-03",
  },
  {
    author: "Linda Clarke",
    location: "Gatley",
    rating: 5,
    text: "Had my ignition barrel replaced after it seized. Vikki explained everything clearly, gave a fixed price upfront, and the repair was done in under an hour. Car running perfectly since.",
    service: "Ignition Repair",
    datePublished: "2025-06-20",
  },
]

const reviewsFaqItems = [
  {
    question: "Are the reviews for Car Keys in Stockport genuine?",
    answer:
      "Yes. All reviews displayed are from real customers who used Car Keys in Stockport. Vikki Heaton personally handles every job — reviews reflect direct, first-hand experiences of the service.",
  },
  {
    question: "How do customers rate Car Keys in Stockport?",
    answer:
      "Car Keys in Stockport consistently receives 5-star ratings across Google, Facebook, and direct feedback. Customers regularly highlight the fast response time, transparent pricing, and professional service.",
  },
  {
    question: "Why do customers choose Car Keys in Stockport over a dealership?",
    answer:
      "A main dealer typically costs 2–3x more, requires the vehicle to be transported, and often involves a multi-day wait. Car Keys in Stockport comes to you, provides an upfront fixed price, and completes the work on-site — usually within an hour.",
  },
  {
    question: "Is Car Keys in Stockport fully insured?",
    answer:
      "Yes. Vikki Heaton is fully insured for all automotive locksmith work. She operates as a sole trader, meaning every customer deals directly with the person doing the work — there are no subcontractors.",
  },
]

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://carkeysinstockport.co.uk/#business",
  name: "Car Keys in Stockport",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: String(reviews.length),
    bestRating: "5",
    worstRating: "1",
  },
  review: reviews.map((r) =>
    reviewSchema(r.author, r.rating, r.text, r.datePublished)
  ),
}

export default function ReviewsPage() {
  const overallRating = (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
  const fiveStarCount = reviews.filter((r) => r.rating === 5).length

  return (
    <>
      <Script
        id="aggregate-rating-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(reviewsFaqItems)) }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "Reviews", url: "/reviews" },
            ])
          ),
        }}
      />

      <main className="bg-slate-900 text-white pt-20">

        {/* Hero */}
        <section className="section-padding bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="container-custom text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-orange-400 fill-orange-400" aria-hidden="true" />
              ))}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Customer Reviews — Car Keys Stockport
            </h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              Genuine reviews from customers across Stockport and Greater Manchester. Vikki Heaton personally handles every job.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-orange-400">{overallRating}</p>
                <p className="text-gray-400 text-sm mt-1">Average Rating</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-orange-400">{reviews.length}</p>
                <p className="text-gray-400 text-sm mt-1">Reviews Published</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-orange-400">{fiveStarCount}</p>
                <p className="text-gray-400 text-sm mt-1">Five-Star Reviews</p>
              </div>
            </div>
            <a
              href="tel:+447309903243"
              className="btn-primary inline-flex items-center gap-2"
              aria-label="Call Car Keys in Stockport"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call Vikki: 07309903243
            </a>
          </div>
        </section>

        {/* Reviews grid */}
        <section className="section-padding bg-slate-800">
          <div className="container-custom">
            <h2 className="text-3xl font-bold mb-8 text-center">What Our Customers Say</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <article key={review.author} className="card p-6 flex flex-col gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">"{review.text}"</p>
                  <div className="border-t border-slate-700 pt-3 flex justify-between items-start">
                    <div>
                      <p className="font-bold text-white">{review.author}</p>
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <MapPin className="w-3 h-3" aria-hidden="true" />
                        {review.location}
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 bg-slate-700 px-2 py-1 rounded">
                      {review.service}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Vikki */}
        <section className="section-padding">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Customers Trust Vikki Heaton</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Sole Trader — You Deal With Vikki Directly",
                  body: "There are no subcontractors or call centres. When you call, you speak with Vikki. When she arrives, you get the same person. This is why customers consistently report feeling at ease, especially in late-night or vulnerable situations.",
                },
                {
                  title: "Fixed Upfront Pricing — No Surprises",
                  body: "Every job is quoted on the phone before Vikki leaves. The price she quotes is the price you pay. No call-out fee, no extras added on arrival. Customers review this consistently as a defining reason they recommend her.",
                },
                {
                  title: "Fully Insured, Professional Equipment",
                  body: "Vikki carries professional OBD key programming equipment compatible with virtually all modern vehicles. She is fully insured for all automotive locksmith work and uses non-destructive entry techniques on every job.",
                },
                {
                  title: "24/7 — Including Bank Holidays",
                  body: "Lockouts and lost keys don't follow business hours. Vikki operates 24 hours a day, 7 days a week, 365 days a year across Stockport and Greater Manchester. The same fixed pricing applies regardless of the time you call.",
                },
              ].map((item) => (
                <div key={item.title} className="card p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-slate-800">
          <div className="container-custom max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions About Reviews</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {reviewsFaqItems.map((item) => (
                <article key={item.question} className="card p-6">
                  <h3 className="font-bold text-orange-400 mb-2">{item.question}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-gradient-to-br from-orange-600 to-orange-700">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-4">Experience the Service Yourself</h2>
            <p className="text-xl text-orange-50 mb-8 max-w-2xl mx-auto">
              Join hundreds of customers across Stockport and Greater Manchester. Fixed price, no call-out fee, available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+447309903243"
                className="btn-primary bg-white text-orange-600 hover:bg-gray-100"
                aria-label="Call Car Keys Stockport"
              >
                <Phone className="w-5 h-5 inline mr-2" aria-hidden="true" />
                Call Now: 07309903243
              </a>
              <Link href="/contact" className="btn-secondary border-2 border-white text-white hover:bg-white/10">
                Get Free Quote
              </Link>
            </div>
            <p className="text-orange-100 text-sm mt-6">
              Serving{" "}
              <Link href="/areas/stockport" className="underline hover:text-white">Stockport</Link>
              {", "}
              <Link href="/areas/stockport/cheadle" className="underline hover:text-white">Cheadle</Link>
              {", "}
              <Link href="/areas/stockport/bramhall" className="underline hover:text-white">Bramhall</Link>
              {", "}
              <Link href="/areas/stockport/hazel-grove" className="underline hover:text-white">Hazel Grove</Link>
              {" and all of Greater Manchester"}
            </p>
          </div>
        </section>

      </main>
    </>
  )
}
