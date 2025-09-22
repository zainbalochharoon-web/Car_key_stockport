import Image from "next/image"
import Link from "next/link"
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
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Car Locksmith Services Stockport - Auto Locksmith Near Me | 24/7 Mobile Service",
  description:
    "Professional car locksmith services in Stockport - auto locksmith near me, mobile locksmith, car key replacement near me. 24/7 emergency service. Call +44161234567",
  openGraph: {
    title: "Car Locksmith Services Stockport - Auto Locksmith Near Me | 24/7 Mobile Service",
    description:
      "Professional car locksmith services in Stockport - auto locksmith near me, mobile locksmith, car key replacement near me. 24/7 emergency service.",
    url: "https://carkeysinstockport.co.uk",
  },
}

export default function HomePage() {
  return (
    <main className="bg-slate-900 text-white">
      {/* Hero Section */}
      <section className="section-padding pt-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 text-orange-400 mb-4">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24/7 Emergency Service</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Car Locksmith Services in <span className="text-orange-400">Stockport</span>
              </h1>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional auto locksmith services near me - car key replacement, programming and lockout assistance across Stockport. Mobile locksmith service with 30-minute average response time. We bring the solution directly to your location, saving you time and hassle.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="tel:++44 7936 755530" className="btn-primary text-center">
                  <Phone className="w-5 h-5 inline mr-2" />
                  Call Now: +44 7936 755530
                </a>
                <Link href="/contact" className="btn-secondary text-center">
                  Get Free Quote
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="card">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">Fully Insured</div>
                </div>
                <div className="card">
                  <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">30min Response</div>
                </div>
                <div className="card">
                  <CheckCircle className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">No Call Out Fee</div>
                </div>
                <div className="card">
                  <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-sm font-semibold">5★ Rated</div>
                </div>
              </div>
            </div>

            <div className="relative animate-slide-up">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden border-2 border-orange-400/30">
                <Image
                  src="/real-locksmith-service.jpg"
                  alt="Professional car locksmith service in Stockport - auto locksmith near me"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="card hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-orange-400 mb-2">2,500+</div>
              <div className="text-gray-300">Keys Replaced</div>
              <div className="text-sm text-gray-400 mt-1">Since 2016</div>
            </div>
            <div className="card hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-blue-400 mb-2">25min</div>
              <div className="text-gray-300">Avg Response</div>
              <div className="text-sm text-gray-400 mt-1">In Stockport</div>
            </div>
            <div className="card hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300">Success Rate</div>
              <div className="text-sm text-gray-400 mt-1">First Attempt</div>
            </div>
            <div className="card hover:scale-105 transition-transform duration-300">
              <div className="text-4xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300">Available</div>
              <div className="text-sm text-gray-400 mt-1">Every Day</div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-red-600 py-4">
        <div className="container-custom">
          <div className="flex items-center justify-between flex-wrap">
            <div className="flex items-center gap-3 mb-2 sm:mb-0">
              <Zap className="w-6 h-6 text-yellow-300 animate-pulse" />
              <span className="font-bold text-white text-sm sm:text-base">EMERGENCY LOCKOUT? We're on our way!</span>
            </div>
            <a
              href="tel:+44161234567"
              className="bg-white text-red-600 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors text-sm sm:text-base"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Car Locksmith & Auto Locksmith Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional automotive locksmith services across Stockport and surrounding areas. We handle everything
              from lost keys to complex ignition repairs with expertise and efficiency. Your trusted car locksmith near me.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Car Key Replacement",
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
                className="bg-slate-700 rounded-2xl p-6 hover:bg-slate-600 transition-all duration-300 group shadow-lg border border-slate-600"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-orange-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Spotlight Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Most Popular Car Locksmith Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the auto locksmith services most frequently requested by our satisfied customers in Stockport. Professional car locksmith near me.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Emergency Key Replacement",
                description: "Fast, on-site replacement for lost or broken keys, available 24/7.",
                icon: <Zap className="w-12 h-12 text-red-400 mx-auto mb-4" />,
                link: "/services/car-key-replacement",
              },
              {
                title: "Key Fob Programming",
                description: "Expert programming for all types of remote key fobs and transponder keys.",
                icon: <Key className="w-12 h-12 text-blue-400 mx-auto mb-4" />,
                link: "/services/auto-keys-programming",
              },
              {
                title: "Vehicle Lockout Assistance",
                description: "Damage-free entry to your vehicle when you're locked out, day or night.",
                icon: <Car className="w-12 h-12 text-green-400 mx-auto mb-4" />,
                link: "/services/lockout-assistance",
              },
            ].map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="card text-center p-6 hover:scale-105 transition-transform duration-300 group"
              >
                {item.icon}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <span className="text-orange-400 font-semibold flex items-center justify-center gap-2 group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits of Mobile Service Section */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-orange-400/30">
                <Image
                  src="/real-mobile-locksmith.jpg"
                  alt="Mobile car locksmith service van - auto locksmith near me"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The Benefits of Our Mobile Car Locksmith Service</h2>
              <p className="text-xl text-gray-300 mb-8">
                We bring the auto locksmith to you, offering unparalleled convenience and efficiency. No need to tow your
                vehicle or wait in a shop. Professional mobile locksmith near me.
              </p>
              <div className="space-y-6">
                {[
                  {
                    icon: <Truck className="w-6 h-6 text-orange-400" />,
                    title: "On-Site Convenience",
                    description: "We come to your home, workplace, or roadside location, saving you time and hassle.",
                  },
                  {
                    icon: <Hourglass className="w-6 h-6 text-blue-400" />,
                    title: "Faster Resolution",
                    description: "Our mobile units are fully equipped to cut and program keys on the spot, quickly.",
                  },
                  {
                    icon: <DollarSign className="w-6 h-6 text-green-400" />,
                    title: "Cost-Effective",
                    description: "Avoid expensive towing fees and dealership markups with our direct service.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-slate-700 rounded-xl border border-slate-600">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What to Do If You Lose Your Car Keys Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lost Your Car Keys? Here's What To Do</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay calm and follow these simple steps to get back on track quickly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Check Thoroughly",
                description: "Retrace your steps and check all common places (pockets, bags, home, car interior).",
                icon: <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-4" />,
              },
              {
                step: "2",
                title: "Secure Your Vehicle",
                description: "If you suspect theft, report it to the police immediately and inform your insurer.",
                icon: <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />,
              },
              {
                step: "3",
                title: "Call Us 24/7",
                description: "Contact Car Keys Stockport for fast, on-site replacement and programming.",
                icon: <Phone className="w-12 h-12 text-blue-400 mx-auto mb-4" />,
              },
            ].map((item, index) => (
              <div key={index} className="card text-center p-6">
                {item.icon}
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="btn-primary">
              Get Immediate Assistance
            </Link>
          </div>
        </div>
      </section>

      {/* Car Brands Section */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">We Work With All Major Brands</h2>
            <p className="text-gray-300">Professional key services for every vehicle manufacturer, old and new.</p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6">
            {[
              "BMW",
              "Mercedes",
              "Audi",
              "Ford",
              "Vauxhall",
              "Toyota",
              "Honda",
              "Nissan",
              "Volkswagen",
              "Peugeot",
              "Renault",
              "Citroen",
              "Fiat",
              "SEAT",
              "Skoda",
              "Volvo",
              "Hyundai",
              "Kia",
            ].map((brand, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform duration-300">
                <div className="text-sm font-semibold text-gray-300">{brand}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Showcase */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Advanced Car Locksmith Technology & Equipment</h2>
              <p className="text-gray-300 mb-8">
                We use the latest automotive locksmith technology to ensure fast, accurate, and reliable service for all
                modern vehicle security systems. Our mobile workshops are fully equipped to handle any challenge
                on-site. Professional auto locksmith equipment.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: <Key className="w-6 h-6 text-orange-400" />,
                    title: "Key Cutting Machines",
                    description:
                      "Precision laser and mechanical key cutting for all key types, including high-security and smart keys.",
                  },
                  {
                    icon: <Car className="w-6 h-6 text-blue-400" />,
                    title: "Programming Equipment",
                    description:
                      "Latest diagnostic tools for transponder and proximity key programming, ensuring seamless integration with your vehicle's immobilizer system.",
                  },
                  {
                    icon: <Wrench className="w-6 h-6 text-green-400" />,
                    title: "Mobile Workshop",
                    description:
                      "Our fully equipped vans bring the entire workshop to your location, minimizing downtime and maximizing convenience.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 bg-slate-800 rounded-xl">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <Image
                  src="/real-car-keys.jpg"
                  alt="Advanced car locksmith equipment and tools - professional auto locksmith near me"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-300">
              Simple 3-step process to get you back on the road quickly and safely.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Call Us",
                description:
                  "Call our 24/7 hotline and describe your car key problem. We'll provide an instant, no-obligation quote over the phone.",
              },
              {
                step: "2",
                title: "We Arrive",
                description:
                  "Our mobile locksmith arrives at your location within 30 minutes, fully equipped with all necessary tools and key blanks.",
              },
              {
                step: "3",
                title: "Problem Fixed",
                description:
                  "We cut, program, and rigorously test your new keys on-site. Payment is only required after successful completion and your satisfaction.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-orange-400/30 transform -translate-y-1/2"></div>
                )}
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 text-white shadow-lg relative z-10">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Guarantee */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Service Guarantee</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We stand behind our work with comprehensive guarantees and professional standards, ensuring your complete
              peace of mind.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Award className="w-8 h-8 text-yellow-400" />,
                title: "12 Month Warranty",
                description: "All keys and programming covered for a full year.",
              },
              {
                icon: <Shield className="w-8 h-8 text-green-400" />,
                title: "£2M Insurance",
                description: "Full public liability coverage for your protection.",
              },
              {
                icon: <Clock className="w-8 h-8 text-blue-400" />,
                title: "30min Response",
                description: "Or we'll reduce your bill - guaranteed fast arrival.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-orange-400" />,
                title: "No Fix, No Fee",
                description: "You only pay for successful work, no hidden charges.",
              },
            ].map((item, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform duration-300">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Our Car Locksmith Services in Stockport?</h2>

              <div className="space-y-6">
                {[
                  {
                    icon: <Shield className="w-6 h-6 text-green-400" />,
                    title: "Fully Insured & Licensed",
                    description:
                      "Complete peace of mind with full public liability insurance and professional certifications, ensuring reliable and trustworthy service.",
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-blue-400" />,
                    title: "Fast Response Time",
                    description:
                      "Average 30-minute response time across Stockport and surrounding areas, getting you back on the road quickly.",
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6 text-orange-400" />,
                    title: "Fixed Pricing",
                    description:
                      "No hidden fees or call-out charges. You know the exact cost before we start work, ensuring transparency.",
                  },
                  {
                    icon: <Star className="w-6 h-6 text-yellow-400" />,
                    title: "5-Star Service",
                    description:
                      "Consistently rated 5 stars by customers across Google, Facebook and Trustpilot, reflecting our commitment to excellence.",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 bg-slate-700 rounded-xl p-4 border border-slate-600">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-slate-600">
                <Image
                  src="/real-locksmith-service.jpg"
                  alt="Professional automotive locksmith in Stockport - car locksmith near me"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Landmarks */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Serving All Stockport Locations</h2>
            <p className="text-gray-300">From town center to suburbs - we know every street and can reach you fast.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Stockport Train Station", area: "Town Centre" },
              { name: "Bramhall Park", area: "Bramhall" },
              { name: "Cheadle Royal Hospital", area: "Cheadle" },
              { name: "Hazel Grove Station", area: "Hazel Grove" },
              { name: "Marple Bridge", area: "Marple" },
              { name: "Romiley Forum", area: "Romiley" },
              { name: "Woodley Precinct", area: "Woodley" },
              { name: "Stockport Market", area: "Town Centre" },
            ].map((location, index) => (
              <div key={index} className="card text-center">
                <MapPin className="w-6 h-6 text-orange-400 mx-auto mb-2" />
                <h3 className="font-semibold mb-1">{location.name}</h3>
                <p className="text-gray-400 text-sm">{location.area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Tips & Advice Section */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Tips & Advice</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay informed with our expert tips on car key maintenance, security, and common issues.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "How to Protect Your Car Keys from Theft",
                description: "Simple steps to keep your keys safe and prevent vehicle theft.",
                link: "#", // Placeholder link for a blog post
                icon: <Shield className="w-8 h-8 text-green-400" />,
              },
              {
                title: "Signs Your Car Key Fob Battery is Dying",
                description: "Don't get stranded! Learn to recognize the warning signs of a weak key fob battery.",
                link: "#", // Placeholder link for a blog post
                icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
              },
              {
                title: "Understanding Transponder Keys: What You Need to Know",
                description: "A deep dive into the technology behind modern car keys and how they work.",
                link: "#", // Placeholder link for a blog post
                icon: <BookOpen className="w-8 h-8 text-blue-400" />,
              },
            ].map((article, index) => (
              <Link
                href={article.link}
                key={index}
                className="card p-6 hover:bg-slate-700 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  {article.icon}
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                    {article.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-4">{article.description}</p>
                <span className="text-orange-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/blog" className="btn-secondary">
              View All Tips & Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-300">
              Real reviews from satisfied customers across Stockport, highlighting our reliable and efficient service.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Stockport",
                rating: 5,
                text: "Brilliant service! Lost my car keys on a Sunday evening and they were out within 20 minutes. Professional, friendly and reasonably priced.",
              },
              {
                name: "Mike Thompson",
                location: "Cheadle",
                rating: 5,
                text: "Locked myself out of the car with the engine running! These guys saved the day. Quick response and got me back in without any damage.",
              },
              {
                name: "Emma Wilson",
                location: "Bramhall",
                rating: 5,
                text: "Needed a replacement key for my BMW. They came to my workplace, cut and programmed the key in 15 minutes. Excellent service!",
              },
            ].map((review, index) => (
              <div key={index} className="bg-slate-700 rounded-2xl p-6 shadow-lg border border-slate-600">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                <div>
                  <div className="font-semibold text-white">{review.name}</div>
                  <div className="text-sm text-gray-400">{review.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does car key replacement take?",
                answer:
                  "Most car key replacements take 15-30 minutes once we arrive. Complex programming may take up to 45 minutes.",
              },
              {
                question: "Do you need the original key?",
                answer:
                  "No, we can create new keys without the original using your vehicle's VIN number and proper identification.",
              },
              {
                question: "Can you program keys for all car makes?",
                answer:
                  "Yes, we have the equipment and expertise to program keys for all major car manufacturers and models.",
              },
              {
                question: "Is there a call-out charge?",
                answer:
                  "No, we don't charge call-out fees. You only pay for the work completed, with transparent pricing provided upfront.",
              },
              {
                question: "Do you provide spare keys?",
                answer: "Yes, we can create spare keys while you wait. It's always recommended to have a backup key.",
              },
              {
                question: "Are you available for emergencies?",
                answer:
                  "Yes, we provide 24/7 emergency car key replacement service across Stockport and surrounding areas.",
              },
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Quote Calculator */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Quick Price Estimate</h2>
            <p className="text-gray-300 mb-8">
              Get an instant estimate for your car key service. For an exact quote, please call us directly.
            </p>

            <div className="card bg-slate-700 p-8">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="serviceType" className="block text-sm font-medium mb-2 text-left">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:border-orange-400"
                  >
                    <option>Key Replacement</option>
                    <option>Key Programming</option>
                    <option>Lockout Service</option>
                    <option>Ignition Repair</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="carMake" className="block text-sm font-medium mb-2 text-left">
                    Car Make
                  </label>
                  <select
                    id="carMake"
                    className="w-full px-4 py-3 bg-slate-600 border border-slate-500 rounded-lg text-white focus:outline-none focus:border-orange-400"
                  >
                    <option>Select Make</option>
                    <option>BMW</option>
                    <option>Mercedes</option>
                    <option>Audi</option>
                    <option>Ford</option>
                    <option>Vauxhall</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold text-orange-400 mb-4">Estimated Price: £89 - £199</div>
                <a href="tel:+44161234567" className="btn-primary">
                  Call for Exact Quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Section */}
      <section className="section-padding bg-red-600">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-yellow-300 mb-4">
                <Zap className="w-6 h-6" />
                <span className="font-semibold text-lg">24/7 Emergency Response</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Locked Out? We're Here to Help!
              </h2>
              <p className="text-xl text-red-100 mb-8">
                Don't panic! Our emergency car locksmith team responds within 30 minutes across Stockport. 
                We handle all types of lockouts - keys locked inside, broken keys, lost keys, and more.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-300" />
                  <span className="text-white">Damage-free entry guaranteed</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-300" />
                  <span className="text-white">All vehicle types supported</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-300" />
                  <span className="text-white">Insurance approved methods</span>
                </div>
              </div>
              <a href="tel:+44161234567" className="bg-white text-red-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Emergency: 0161 234 567
              </a>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-yellow-300/30">
                <Image
                  src="/real-mobile-locksmith.jpg"
                  alt="Emergency car locksmith service - auto locksmith near me"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Areas We Serve</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional car locksmith services across Greater Manchester. Fast response times and local expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: "Stockport", response: "15-20 mins", postcode: "SK1-SK8" },
              { name: "Cheadle", response: "20-25 mins", postcode: "SK8" },
              { name: "Bramhall", response: "20-25 mins", postcode: "SK7" },
              { name: "Hazel Grove", response: "25-30 mins", postcode: "SK7" },
              { name: "Marple", response: "25-30 mins", postcode: "SK6" },
              { name: "Romiley", response: "25-30 mins", postcode: "SK6" },
              { name: "Bredbury", response: "20-25 mins", postcode: "SK6" },
              { name: "Woodley", response: "25-30 mins", postcode: "SK6" },
            ].map((area, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-2">{area.name}</h3>
                <p className="text-orange-400 font-semibold mb-1">{area.response}</p>
                <p className="text-gray-400 text-sm">{area.postcode}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 mb-4">Don't see your area? We cover all of Greater Manchester!</p>
            <a href="tel:+44161234567" className="btn-primary">
              Check Coverage Area
            </a>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real reviews from satisfied customers across Stockport and Greater Manchester.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                location: "Stockport",
                rating: 5,
                text: "Amazing service! Lost my car keys on a Sunday evening and they were out within 20 minutes. Professional, friendly and reasonably priced.",
                service: "Car Key Replacement"
              },
              {
                name: "Mike Thompson",
                location: "Cheadle",
                rating: 5,
                text: "Locked myself out of the car with the engine running! These guys saved the day. Quick response and got me back in without any damage.",
                service: "Emergency Lockout"
              },
              {
                name: "Emma Wilson",
                location: "Bramhall",
                rating: 5,
                text: "Needed a replacement key for my BMW. They came to my workplace, cut and programmed the key in 15 minutes. Excellent service!",
                service: "Key Programming"
              },
            ].map((review, index) => (
              <div key={index} className="bg-slate-700 rounded-2xl p-6 shadow-lg border border-slate-600">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-semibold text-white">{review.name}</div>
                    <div className="text-sm text-gray-400">{review.location}</div>
                  </div>
                  <div className="text-xs bg-orange-400 text-black px-2 py-1 rounded">
                    {review.service}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-white">4.9/5</span>
            </div>
            <p className="text-gray-300">Average rating from 500+ customers</p>
          </div>
        </div>
      </section>

      {/* Equipment & Technology Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">State-of-the-Art Equipment</h2>
              <p className="text-xl text-gray-300 mb-8">
                We invest in the latest automotive locksmith technology to ensure fast, accurate, and reliable service 
                for all modern vehicle security systems.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Laser Key Cutting",
                    description: "Precision cutting for high-security keys including sidewinder, dimple, and Tibbe keys.",
                    features: ["Sidewinder keys", "Dimple keys", "Tibbe keys", "High-security blanks"]
                  },
                  {
                    title: "Programming Equipment",
                    description: "Latest diagnostic tools for OBD programming, EEPROM reading, and immobilizer bypass.",
                    features: ["OBD programming", "EEPROM reading", "Immobilizer bypass", "ECU programming"]
                  },
                  {
                    title: "Mobile Workshop",
                    description: "Fully equipped service van with power supply, extensive key blanks, and testing equipment.",
                    features: ["Power supply", "Key blanks", "Testing equipment", "On-site solutions"]
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-xl font-bold mb-3 text-orange-400">{item.title}</h3>
                    <p className="text-gray-300 mb-4">{item.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, i) => (
                        <span key={i} className="bg-slate-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-orange-400/30">
                <Image
                  src="/real-locksmith-service.jpg"
                  alt="Professional car locksmith equipment and technology - auto locksmith near me"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide Section */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing Guide</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              No hidden fees, no surprises. Clear pricing for all our car locksmith services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                service: "Car Key Replacement",
                price: "From £89",
                description: "Cut and programmed on-site",
                features: ["All makes & models", "Transponder keys", "Remote fobs", "12-month warranty"]
              },
              {
                service: "Key Programming",
                price: "From £79",
                description: "Professional programming service",
                features: ["OBD programming", "Immobilizer bypass", "ECU programming", "Testing included"]
              },
              {
                service: "Lockout Service",
                price: "From £59",
                description: "Damage-free entry",
                features: ["24/7 availability", "All vehicles", "Insurance approved", "No damage guarantee"]
              },
              {
                service: "Emergency Service",
                price: "From £79",
                description: "30-minute response time",
                features: ["24/7 availability", "Fast response", "All emergencies", "No call-out fee"]
              }
            ].map((item, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">{item.service}</h3>
                <div className="text-3xl font-bold text-orange-400 mb-2">{item.price}</div>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <ul className="space-y-2 text-sm">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">* Prices include all parts, programming, and testing. Contact us for exact quotes.</p>
            <a href="tel:+44161234567" className="btn-primary">
              Get Exact Quote
            </a>
          </div>
        </div>
      </section>

      {/* Vehicle Brands Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Work With All Major Car Brands</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional car locksmith services for every vehicle manufacturer, from classic cars to the latest models.
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-9 gap-6 mb-12">
            {[
              "BMW", "Mercedes", "Audi", "Ford", "Vauxhall", "Toyota", "Honda", "Nissan", "Volkswagen",
              "Peugeot", "Renault", "Citroen", "Fiat", "SEAT", "Skoda", "Volvo", "Hyundai", "Kia",
              "Mazda", "Subaru", "Mitsubishi", "Lexus", "Jaguar", "Land Rover", "Mini", "Smart", "Alfa Romeo"
            ].map((brand, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform duration-300">
                <div className="text-sm font-semibold text-gray-300">{brand}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-300 mb-4">Don't see your car brand? We work with ALL vehicle manufacturers!</p>
            <a href="tel:+44161234567" className="btn-primary">
              Check Compatibility
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us vs Competitors */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us Over Other Locksmiths?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              See the difference that makes us Stockport's preferred car locksmith service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-green-400">✅ What We Offer</h3>
              <div className="space-y-4">
                {[
                  "Local Stockport business with 8+ years experience",
                  "Average 30-minute response time",
                  "No call-out fees or hidden charges",
                  "Fully insured with £2M coverage",
                  "12-month warranty on all work",
                  "24/7 emergency service",
                  "Professional, certified technicians",
                  "Mobile service - we come to you",
                  "Latest equipment and technology",
                  "Competitive, transparent pricing"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="card">
              <h3 className="text-2xl font-bold mb-6 text-red-400">❌ What Others Don't</h3>
              <div className="space-y-4">
                {[
                  "Often out-of-area companies with no local knowledge",
                  "Long wait times (1-2 hours average)",
                  "Hidden fees and call-out charges",
                  "Limited or no insurance coverage",
                  "No warranty on work performed",
                  "Limited availability (business hours only)",
                  "Uncertified or inexperienced staff",
                  "You must bring vehicle to their location",
                  "Outdated equipment and methods",
                  "Unclear pricing with hidden costs"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 text-red-400 text-xl">×</div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems & Solutions */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Common Car Key Problems & Solutions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quick solutions to the most frequent car key issues our customers face.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                problem: "Lost Car Keys",
                solution: "We can create new keys using your vehicle's VIN number and proper identification.",
                time: "15-30 minutes",
                icon: "🔑"
              },
              {
                problem: "Broken Key in Ignition",
                solution: "Professional extraction and replacement without damaging your ignition system.",
                time: "20-45 minutes",
                icon: "🔧"
              },
              {
                problem: "Key Fob Not Working",
                solution: "Battery replacement, reprogramming, or complete replacement if needed.",
                time: "10-20 minutes",
                icon: "📱"
              },
              {
                problem: "Car Won't Start",
                solution: "Diagnose ignition issues, key programming problems, or immobilizer faults.",
                time: "30-60 minutes",
                icon: "🚗"
              },
              {
                problem: "Remote Not Responding",
                solution: "Reprogram remote fob, fix range issues, or replace faulty components.",
                time: "15-30 minutes",
                icon: "📡"
              },
              {
                problem: "Ignition Stuck",
                solution: "Professional ignition repair or replacement with warranty.",
                time: "45-90 minutes",
                icon: "⚡"
              }
            ].map((item, index) => (
              <div key={index} className="card hover:scale-105 transition-transform duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-orange-400">{item.problem}</h3>
                <p className="text-gray-300 mb-4">{item.solution}</p>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Typical time: {item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process Timeline */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Complete Service Process</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From your first call to getting back on the road - here's exactly what happens.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Emergency Call",
                description: "Call our 24/7 hotline. We'll get your location and problem details.",
                icon: <Phone className="w-8 h-8 text-orange-400" />
              },
              {
                step: "2",
                title: "Instant Quote",
                description: "Receive transparent pricing with no hidden fees or call-out charges.",
                icon: <DollarSign className="w-8 h-8 text-green-400" />
              },
              {
                step: "3",
                title: "Fast Dispatch",
                description: "Our certified technician is dispatched immediately with all necessary equipment.",
                icon: <Truck className="w-8 h-8 text-blue-400" />
              },
              {
                step: "4",
                title: "Professional Service",
                description: "On-site service completed with testing and quality assurance.",
                icon: <CheckCircle className="w-8 h-8 text-purple-400" />
              }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-orange-400/30 transform -translate-y-1/2"></div>
                )}
                <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-400 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 text-white shadow-lg relative z-10">
                  {item.step}
                </div>
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Warranty Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Complete Protection & Peace of Mind</h2>
              <p className="text-xl text-gray-300 mb-8">
                We provide comprehensive insurance coverage and warranties to ensure you're fully protected.
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: "£2M Public Liability Insurance",
                    description: "Full coverage for any potential damage during our service, giving you complete peace of mind.",
                    icon: <Shield className="w-8 h-8 text-green-400" />
                  },
                  {
                    title: "12-Month Work Warranty",
                    description: "All our work is guaranteed for a full year, ensuring lasting solutions and your satisfaction.",
                    icon: <Award className="w-8 h-8 text-yellow-400" />
                  },
                  {
                    title: "No Damage Guarantee",
                    description: "We guarantee damage-free entry and service. If any damage occurs, we'll cover the repair costs.",
                    icon: <CheckCircle className="w-8 h-8 text-blue-400" />
                  },
                  {
                    title: "Satisfaction Promise",
                    description: "100% satisfaction guaranteed. If you're not happy, we'll make it right at no extra cost.",
                    icon: <Star className="w-8 h-8 text-orange-400" />
                  }
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 rounded-2xl overflow-hidden border-2 border-orange-400/30">
                <Image
                  src="/real-car-keys.jpg"
                  alt="Professional car locksmith insurance and warranty - auto locksmith near me"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Expertise Section */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Certified professionals with years of experience in automotive locksmith services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "John Smith",
                role: "Lead Locksmith",
                experience: "15+ years",
                speciality: "BMW, Mercedes, Audi",
                certifications: ["MLA Certified", "Auto Locksmith Institute"],
                image: "/real-locksmith-service.jpg"
              },
              {
                name: "Mike Johnson",
                role: "Senior Technician",
                experience: "10+ years",
                speciality: "Ford, Vauxhall, Toyota",
                certifications: ["Advanced Programming", "Emergency Response"],
                image: "/real-mobile-locksmith.jpg"
              },
              {
                name: "Sarah Wilson",
                role: "Emergency Specialist",
                experience: "8+ years",
                speciality: "24/7 Lockout Service",
                certifications: ["Damage-Free Entry", "Insurance Approved"],
                image: "/real-car-keys.jpg"
              }
            ].map((member, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-transform duration-300">
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-bold text-xl mb-2">{member.name}</h3>
                <p className="text-orange-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm mb-3">
                  {member.experience} • {member.speciality}
                </p>
                <div className="space-y-1">
                  {member.certifications.map((cert, i) => (
                    <div key={i} className="bg-slate-700 px-2 py-1 rounded text-xs">
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics & Achievements */}
      <section className="section-padding bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Numbers that speak for themselves - our commitment to excellence in car locksmith services.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "2,500+", label: "Keys Replaced", icon: <Key className="w-8 h-8 text-yellow-300" /> },
              { number: "98%", label: "Success Rate", icon: <CheckCircle className="w-8 h-8 text-green-300" /> },
              { number: "25min", label: "Avg Response", icon: <Clock className="w-8 h-8 text-blue-300" /> },
              { number: "8+", label: "Years Experience", icon: <Award className="w-8 h-8 text-purple-300" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-orange-100 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Quick answers to the most common questions about our car locksmith services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "How long does car key replacement take?",
                answer: "Most car key replacements take 15-30 minutes once we arrive. Complex programming may take up to 45 minutes."
              },
              {
                question: "Do you need the original key?",
                answer: "No, we can create new keys without the original using your vehicle's VIN number and proper identification."
              },
              {
                question: "Can you program keys for all car makes?",
                answer: "Yes, we have the equipment and expertise to program keys for all major car manufacturers and models."
              },
              {
                question: "Is there a call-out charge?",
                answer: "No, we don't charge call-out fees. You only pay for the work completed, with transparent pricing provided upfront."
              },
              {
                question: "Do you provide spare keys?",
                answer: "Yes, we can create spare keys while you wait. It's always recommended to have a backup key."
              },
              {
                question: "Are you available for emergencies?",
                answer: "Yes, we provide 24/7 emergency car key replacement service across Stockport and surrounding areas."
              },
              {
                question: "What if you can't fix my problem?",
                answer: "We have a 'No Fix, No Fee' policy. If we can't resolve your issue, you don't pay anything."
              },
              {
                question: "Do you work with insurance companies?",
                answer: "Yes, we work with all major insurance companies and can provide documentation for claims."
              }
            ].map((faq, index) => (
              <div key={index} className="card">
                <h3 className="font-bold mb-3 text-orange-400">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="section-padding bg-slate-800">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the contact method that works best for you - we're here to help 24/7.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: <Phone className="w-8 h-8 text-orange-400" />,
                title: "Call Direct",
                description: "Instant response for emergencies",
                action: "0161 234 567",
                link: "tel:+44161234567",
                color: "bg-orange-400/10 border-orange-400/30"
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-blue-400" />,
                title: "WhatsApp",
                description: "Quick messages and photos",
                action: "Message Us",
                link: "https://wa.me/44161234567",
                color: "bg-blue-400/10 border-blue-400/30"
              },
              {
                icon: <Mail className="w-8 h-8 text-green-400" />,
                title: "Email Quote",
                description: "Detailed service requests",
                action: "Send Email",
                link: "mailto:info@carkeysinstockport.co.uk",
                color: "bg-green-400/10 border-green-400/30"
              },
              {
                icon: <Calendar className="w-8 h-8 text-purple-400" />,
                title: "Book Online",
                description: "Schedule non-emergency work",
                action: "Book Now",
                link: "/contact",
                color: "bg-purple-400/10 border-purple-400/30"
              }
            ].map((method, index) => (
              <div key={index} className={`card text-center hover:scale-105 transition-transform duration-300 border-2 ${method.color}`}>
                <div className="flex justify-center mb-4">{method.icon}</div>
                <h3 className="font-bold mb-2">{method.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{method.description}</p>
                <a href={method.link} className="text-orange-400 font-semibold hover:underline">
                  {method.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="section-padding bg-slate-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Tips & Advice</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stay informed with our expert tips on car key maintenance, security, and common issues.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "How to Protect Your Car Keys from Theft",
                description: "Simple steps to keep your keys safe and prevent vehicle theft.",
                readTime: "5 min read",
                category: "Security",
                image: "/real-car-keys.jpg"
              },
              {
                title: "Signs Your Car Key Fob Battery is Dying",
                description: "Don't get stranded! Learn to recognize the warning signs of a weak key fob battery.",
                readTime: "3 min read",
                category: "Maintenance",
                image: "/real-mobile-locksmith.jpg"
              },
              {
                title: "Understanding Transponder Keys: What You Need to Know",
                description: "A deep dive into the technology behind modern car keys and how they work.",
                readTime: "7 min read",
                category: "Technology",
                image: "/real-locksmith-service.jpg"
              }
            ].map((article, index) => (
              <div key={index} className="card hover:scale-105 transition-transform duration-300 group">
                <div className="relative h-48 rounded-xl overflow-hidden mb-6">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-orange-400 text-black px-2 py-1 rounded text-xs font-semibold">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-sm">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-orange-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-300 mb-4">{article.description}</p>
                <span className="text-orange-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/blog" className="btn-secondary">
              View All Tips & Articles
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Car Locksmith Help Right Now?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don't wait - our mobile auto locksmiths are ready to help 24/7 across Stockport and surrounding areas. Get back
            on the road faster! Professional car locksmith near me.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+44161234567"
              className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5 inline mr-2" />
              Call Now: 0161 234 567
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Free Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
