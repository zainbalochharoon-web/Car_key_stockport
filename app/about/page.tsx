import type { Metadata } from "next"
import Script from "next/script"
import Image from "next/image"
import { Shield, Clock, Award, Users, CheckCircle, Phone, MapPin, Star, Trophy, Heart, Zap } from "lucide-react"
import Link from "next/link"
import { vikkiHeatonPersonSchema, breadcrumbSchema, webPageSchema } from "@/lib/schema"

export const revalidate = 86400

export const metadata: Metadata = {
  title: "About Vikki Heaton | Female Auto Locksmith Stockport | Car Keys in Stockport",
  description:
    "Meet Vikki Heaton — founder and sole auto locksmith at Car Keys in Stockport. Fully insured, 9+ years experience, 2,500+ jobs completed. 24/7 mobile service across Stockport and Greater Manchester.",
  alternates: {
    canonical: "https://carkeysinstockport.co.uk/about",
  },
  openGraph: {
    title: "About Vikki Heaton | Female Auto Locksmith — Car Keys in Stockport",
    description:
      "Vikki Heaton founded Car Keys in Stockport in 2016. She handles every job personally — no subcontractors, no call centres. Fully insured. 24/7 across Stockport and Greater Manchester.",
    url: "https://carkeysinstockport.co.uk/about",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <>
      <Script
        id="about-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vikkiHeatonPersonSchema) }}
      />
      <Script
        id="about-webpage-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              name: "About Vikki Heaton — Car Keys in Stockport",
              description:
                "Vikki Heaton is a fully insured female auto locksmith based in Stockport who founded Car Keys in Stockport in 2016. She has completed over 2,500 jobs across Stockport and Greater Manchester.",
              url: "/about",
              datePublished: "2026-01-15",
              dateModified: "2026-04-01",
              breadcrumb: [
                { name: "Home", url: "/" },
                { name: "About", url: "/about" },
              ],
            })
          ),
        }}
      />
      <Script
        id="about-breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Home", url: "/" },
              { name: "About", url: "/about" },
            ])
          ),
        }}
      />
      <main className="bg-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="section-padding pt-20 sm:pt-28 md:pt-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-40 h-40 bg-gradient-to-r from-orange-400 to-red-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-3xl opacity-5"></div>
        </div>

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 text-orange-400 mb-3 sm:mb-4">
                <Award className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0" />
                <span className="font-semibold text-sm sm:text-base">Professional Automotive Locksmiths</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                About{" "}
                <span className="text-transparent bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text">
                  Car Keys in Stockport
                </span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Car Keys in Stockport is a mobile auto locksmith service founded by Vikki Heaton in 2016. Vikki handles
                every job personally — no subcontractors, no call centres — across Stockport and Greater Manchester,
                24 hours a day, 7 days a week.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center bg-gradient-to-br from-orange-500/20 to-red-500/20 p-3 sm:p-4 rounded-xl border border-orange-400/30">
                  <div className="text-2xl sm:text-3xl font-bold text-orange-400 mb-2">8+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Years Experience</div>
                </div>
                <div className="text-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 sm:p-4 rounded-xl border border-blue-400/30">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2">2,500+</div>
                  <div className="text-xs sm:text-sm text-gray-300">Jobs Completed</div>
                </div>
                <div className="text-center bg-gradient-to-br from-green-500/20 to-blue-500/20 p-3 sm:p-4 rounded-xl border border-green-400/30">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-2">98%</div>
                  <div className="text-xs sm:text-sm text-gray-300">Customer Satisfaction</div>
                </div>
                <div className="text-center bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-3 sm:p-4 rounded-xl border border-yellow-400/30">
                  <div className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-xs sm:text-sm text-gray-300">Emergency Service</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="tel:+447309903243" className="btn-primary text-center w-full sm:w-auto">
                  <Phone className="w-4 sm:w-5 h-4 sm:h-5 inline mr-2 flex-shrink-0" />
                  Call: 07309903243
                </a>
                <Link href="/contact" className="btn-secondary text-center w-full sm:w-auto">
                  Get Free Quote
                </Link>
              </div>
            </div>

            <div className="relative animate-slide-up hidden lg:block">
              <div className="relative h-80 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/30 via-red-400/20 to-purple-400/30 z-10"></div>
                <Image
                  src="/car-locksmith-service.svg"
                  alt="Car Keys Stockport professional team - car locksmith near me"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Achievement Badges */}
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-400 to-orange-400 p-3 rounded-full shadow-lg">
                <Award className="w-8 h-8 text-white" />
              </div>

              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-400 p-3 rounded-full shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>

              <div className="absolute top-1/2 -left-6 bg-gradient-to-r from-blue-400 to-purple-400 p-3 rounded-full shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vikki Heaton — Verified Author & Business Owner */}
      <section className="section-padding bg-slate-800/50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <Image
                src="/images/vikki-heaton-auto-locksmith-stockport.jpg"
                alt="Vikki Heaton — Auto Locksmith & Business Owner, Stockport"
                width={160}
                height={180}
                className="rounded-2xl object-cover ring-4 ring-orange-400 shadow-xl"
              />
              <a
                href="https://www.facebook.com/vikki.heaton.5"
                target="_blank"
                rel="noopener noreferrer me"
                className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
              >
                Follow on Facebook
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2 text-orange-400 mb-2">
                <Heart className="w-4 h-4 flex-shrink-0" />
                <span className="font-semibold text-sm uppercase tracking-wide">Meet Your Locksmith</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Vikki Heaton — Auto Locksmith &amp; Business Owner
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Hi, I&apos;m Vikki — and I personally attend every job. I founded Car Keys in Stockport in 2016
                with one simple goal: to give Stockport a trustworthy, no-nonsense auto locksmith service that
                puts the customer first.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                I&apos;m a fully insured, certified female auto locksmith with over 8 years of experience in
                car key replacement, van lockout assistance, key fob programming, and ignition repair. I cover
                Stockport and Greater Manchester 24 hours a day, 7 days a week — including bank holidays.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                Unlike national booking platforms, when you call <strong className="text-white">07309903243</strong> you
                speak directly to me. I give you a fixed price before I start, and I don&apos;t leave until the
                job is done right.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Fully Insured",
                  "Certified Auto Locksmith",
                  "Female-Owned Business",
                  "No Subcontractors",
                  "Fixed Upfront Pricing",
                  "24/7 Available",
                ].map((badge) => (
                  <span
                    key={badge}
                    className="bg-orange-500/20 border border-orange-400/40 text-orange-300 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-300">
              From startup to Stockport's trusted locksmith service, a story of growth and dedication.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: "2016",
                  title: "Company Founded",
                  description:
                    "Started as a small family business with one van and a vision to provide honest, reliable locksmith services to Stockport.",
                  icon: <Zap className="w-6 h-6 text-orange-400" />,
                },
                {
                  year: "2018",
                  title: "24/7 Emergency Service Launched",
                  description:
                    "Extended to full 24/7 availability — nights, weekends, and bank holidays — to meet growing demand across Stockport and Greater Manchester.",
                  icon: <Clock className="w-6 h-6 text-blue-400" />,
                },
                {
                  year: "2020",
                  title: "Technology Upgrade",
                  description:
                    "Invested in latest key cutting and programming equipment to handle all modern vehicle security systems, enhancing service capabilities.",
                  icon: <Award className="w-6 h-6 text-green-400" />,
                },
                {
                  year: "2022",
                  title: "1000+ Customers",
                  description:
                    "Reached milestone of serving over 1000 satisfied customers with 5-star average rating, a testament to our quality.",
                  icon: <Star className="w-6 h-6 text-yellow-400" />,
                },
                {
                  year: "2024",
                  title: "Industry Leaders",
                  description:
                    "Now recognized as Stockport's leading automotive locksmith with 2,500+ successful jobs completed, continuing our commitment to excellence.",
                  icon: <Trophy className="w-6 h-6 text-purple-400" />,
                },
              ].map((milestone, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center border-2 border-orange-400">
                      {milestone.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-2xl font-bold text-orange-400">{milestone.year}</span>
                      <h3 className="text-xl font-bold">{milestone.title}</h3>
                    </div>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Story</h2>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 mb-6">
                Car Keys in Stockport was founded by Vikki Heaton in 2016. Vikki recognised a gap in the market: too many
                residents were being overcharged by national booking platforms that subcontracted work to unknown
                technicians, or left waiting hours for a response. She set up a mobile auto locksmith business built
                around one principle — you know exactly who is coming, and you know the price before they arrive.
              </p>

              <p className="text-lg text-gray-300 mb-6">
                Since 2016, Vikki has completed over 2,500 car key replacements and emergency lockouts across Stockport
                and Greater Manchester. She operates a fully equipped mobile unit and handles every job personally —
                from a standard car key cut and programme to all-keys-lost situations on rare European vehicles.
              </p>

              <p className="text-lg text-gray-300 mb-8">
                Car Keys in Stockport maintains a 98% first-attempt success rate, a 25-minute average response time,
                and a no call-out fee policy on every job — 24 hours a day, 7 days a week, 365 days a year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solo Operator — Trust Signal */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">One Locksmith. Every Job. No Exceptions.</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Car Keys in Stockport is a sole-operator business. When you call 07309903243, Vikki Heaton answers.
              Vikki is the locksmith who arrives at your location. There are no subcontractors, no third-party
              technicians, and no surprises.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Direct Contact",
                description:
                  "You speak to Vikki when you call. She gives you a fixed price and confirms her arrival time. No call centre, no relay.",
              },
              {
                title: "Personal Accountability",
                description:
                  "Vikki's name and reputation are on every job. That's why she maintains a 98% first-attempt success rate across 2,500+ completed jobs.",
              },
              {
                title: "Consistent Quality",
                description:
                  "You know exactly who is coming. The same tools, the same standards, the same person — every single time.",
              },
            ].map((item, i) => (
              <div key={i} className="card">
                <CheckCircle className="w-8 h-8 text-orange-400 mb-4" />
                <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-12 h-12 text-orange-400" />,
                title: "Fully Insured & Licensed",
                description:
                  "Complete peace of mind with comprehensive insurance coverage and all necessary certifications, ensuring reliable and trustworthy service.",
              },
              {
                icon: <Clock className="w-12 h-12 text-orange-400" />,
                title: "Fast Response",
                description:
                  "Average 25-minute response time across Stockport, with 24/7 emergency availability for urgent needs.",
              },
              {
                icon: <Award className="w-12 h-12 text-orange-400" />,
                title: "Expert Technicians",
                description:
                  "Certified automotive locksmiths with ongoing training on the latest vehicle technologies, guaranteeing expert solutions.",
              },
              {
                icon: <Users className="w-12 h-12 text-orange-400" />,
                title: "Local Service",
                description:
                  "Proud to be part of the Stockport community, with local knowledge and competitive pricing, supporting local economy.",
              },
            ].map((item, index) => (
              <div key={index} className="card text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Certifications & Credentials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8">Certifications & Credentials</h2>
              <p className="text-gray-300 mb-8">
                Our team holds industry-leading certifications and undergoes continuous training to stay ahead of
                automotive security advancements.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Master Locksmiths Association (MLA)",
                    description:
                      "Proud members of the UK's leading locksmith trade association, ensuring the highest professional standards and ethical practices.",
                  },
                  {
                    title: "Auto Locksmith Training Institute",
                    description:
                      "Our technicians are certified through comprehensive automotive locksmith training programs, covering all aspects of modern vehicle keys.",
                  },
                  {
                    title: "Public Liability Insurance",
                    description:
                      "Fully insured with £2 million public liability coverage for complete customer protection and peace of mind during our service.",
                  },
                  {
                    title: "DBS Checked",
                    description:
                      "All our technicians undergo thorough background checks for your security and peace of mind, ensuring trustworthy service.",
                  },
                  {
                    title: "Manufacturer Training",
                    description:
                      "Regular training updates on the latest vehicle security systems from major manufacturers, keeping our skills cutting-edge.",
                  },
                ].map((cert, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-orange-400 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold mb-2">{cert.title}</h3>
                      <p className="text-gray-300">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/auto-locksmith-equipment.svg"
                  alt="Professional car locksmith certifications and equipment - auto locksmith near me"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Our Commitment */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Commitment to You</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Transparent Pricing",
                  description:
                    "No hidden fees, no call-out charges. What we quote is what you pay, with competitive rates for all services, ensuring complete honesty.",
                },
                {
                  title: "Quality Guarantee",
                  description:
                    "We stand behind our work with a comprehensive warranty on all services and replacement parts, ensuring lasting solutions.",
                },
                {
                  title: "Customer First",
                  description:
                    "Your satisfaction is our priority. We're not happy until you're completely satisfied with our service, going the extra mile for you.",
                },
              ].map((commitment, index) => (
                <div key={index} className="card">
                  <h3 className="text-xl font-bold mb-4">{commitment.title}</h3>
                  <p className="text-gray-300">{commitment.description}</p>
                </div>
              ))}
            </div>

            <p className="text-lg text-gray-300 mb-8">
              When you call Car Keys in Stockport, you get Vikki — an experienced, fully insured auto locksmith who
              treats every job as a personal commitment. Fixed upfront pricing. Non-destructive entry. 24/7 availability.
              No call-out fee. No surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Location & Coverage */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Location & Coverage</h2>
              <p className="text-gray-300 mb-8">
                Based in the heart of Stockport, we provide comprehensive coverage across Greater Manchester with
                multiple service zones for optimal response times, ensuring we can reach you quickly.
              </p>

              <div className="space-y-4">
                {[
                  { area: "Stockport Centre", time: "15-20 mins", zones: "SK1, SK2, SK3" },
                  { area: "South Stockport", time: "20-25 mins", zones: "SK7, SK8" },
                  { area: "East Stockport", time: "25-30 mins", zones: "SK6, SK14" },
                  { area: "Greater Manchester", time: "30-45 mins", zones: "M19, M20, M22" },
                ].map((coverage, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-slate-700 rounded-lg">
                    <div>
                      <h3 className="font-semibold">{coverage.area}</h3>
                      <p className="text-gray-400 text-sm">{coverage.zones}</p>
                    </div>
                    <div className="text-orange-400 font-bold">{coverage.time}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden bg-slate-700 flex items-center justify-center">
                <MapPin className="w-24 h-24 text-orange-400" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white font-semibold">Service Coverage Map</p>
                  <p className="text-gray-300 text-sm">Interactive map would be displayed here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Call Vikki Directly — 24/7</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            No call centre. No hold music. Vikki answers personally, gives you a fixed price, and arrives in an
            average of 25 minutes across Stockport and Greater Manchester.
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
              Request Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}
