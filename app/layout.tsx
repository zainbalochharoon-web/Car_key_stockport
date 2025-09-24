import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import { Phone, Key, Facebook, Instagram, Twitter, Linkedin, MapPin, Clock } from "lucide-react" // Added social icons
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://carkeysinstockport.co.uk"),
  title: {
    default: "Car Keys in Stockport - 24/7 Car Key Replacement Service",
    template: "%s | Car Keys in Stockport",
  },
  description:
    "24/7 car key replacement, programming and lockout assistance in Stockport. Fast response, insurance-approved, mobile service. Call now!",
  keywords: ["car key replacement", "Stockport", "auto locksmith", "car keys", "key programming", "lockout service"],
  authors: [{ name: "Car Keys in Stockport" }],
  creator: "Car Keys in Stockport",
  publisher: "Car Keys in Stockport",
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
    type: "website",
    locale: "en_GB",
    url: "https://carkeysinstockport.co.uk",
    siteName: "Car Keys in Stockport",
    title: "Car Keys in Stockport - 24/7 Car Key Replacement Service",
    description:
      "24/7 car key replacement, programming and lockout assistance in Stockport. Fast response, insurance-approved, mobile service.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Car Keys in Stockport - 24/7 Car Key Replacement Service",
    description:
      "24/7 car key replacement, programming and lockout assistance in Stockport. Fast response, insurance-approved, mobile service.",
  },
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-GB">
      <body className={inter.className}>
        {/* Sticky Call Bar - Mobile */}
        <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white p-4 z-50 md:hidden">
          <a href="tel:07309903243" className="flex items-center justify-center gap-2 font-bold text-lg">
            <Phone className="w-5 h-5" />
            Call Now: 07309903243
          </a>
        </div>

        {/* Header */}
        <header className="bg-slate-900 backdrop-blur-sm fixed w-full z-40 border-b border-white/10">
          <div className="container-custom">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center gap-2 text-white">
                <Key className="w-6 h-6 text-orange-400" />
                <span className="text-xl font-bold">Car Keys</span>
                <span className="text-xl font-semibold text-gray-300">Stockport</span>
              </Link>

              <nav className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-white hover:text-orange-400 transition-colors">
                  Home
                </Link>
                <Link href="/services" className="text-white hover:text-orange-400 transition-colors">
                  Services
                </Link>
                <Link href="/areas/stockport" className="text-white hover:text-orange-400 transition-colors">
                  Areas
                </Link>
                <Link href="/about" className="text-white hover:text-orange-400 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-white hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </nav>

              <a href="tel: 07309903243" className="btn-primary hidden md:flex items-center gap-2">
                <Phone className="w-4 h-4" />
               07309903243
              </a>
            </div>
          </div>
        </header>

        {children}

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-700">
          <div className="container-custom py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <Link href="/" className="flex items-center gap-2 text-white mb-4">
                  <Key className="w-7 h-7 text-orange-400" />
                  <span className="text-2xl font-bold">Car Keys</span>
                  <span className="text-2xl font-semibold text-gray-300">Stockport</span>
                </Link>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  Your trusted 24/7 automotive locksmith in Stockport and Greater Manchester. Fast, reliable, and
                  professional car key replacement, programming, and lockout assistance.
                </p>
                <div className="flex items-center gap-2 text-gray-400 mb-2">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">123 High Street, Stockport SK1 1AB</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">Open 24/7 for Emergencies</span>
                </div>
              </div>

              {/* Services */}
              <div>
                <h4 className="font-bold text-white mb-4 text-lg">Our Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link
                      href="/services/car-key-replacement"
                      className="hover:text-orange-400 transition-colors text-sm"
                    >
                      Car Key Replacement
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/auto-keys-programming"
                      className="hover:text-orange-400 transition-colors text-sm"
                    >
                      Key Programming
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/lockout-assistance"
                      className="hover:text-orange-400 transition-colors text-sm"
                    >
                      Lockout Assistance
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/ignition-repair" className="hover:text-orange-400 transition-colors text-sm">
                      Ignition Repair
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/emergency-service"
                      className="hover:text-orange-400 transition-colors text-sm"
                    >
                      Emergency Service
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-bold text-white mb-4 text-lg">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <Link href="/about" className="hover:text-orange-400 transition-colors text-sm">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-orange-400 transition-colors text-sm">
                      Get a Free Quote
                    </Link>
                  </li>
                  <li>
                    <Link href="/areas/stockport" className="hover:text-orange-400 transition-colors text-sm">
                      Areas We Serve
                    </Link>
                  </li>
                  <li>
                    <Link href="/testimonials" className="hover:text-orange-400 transition-colors text-sm">
                      Customer Reviews
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq" className="hover:text-orange-400 transition-colors text-sm">
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact & Social */}
              <div>
                <h4 className="font-bold text-white mb-4 text-lg">Contact Us</h4>
                <div className="space-y-2 text-gray-400 mb-6">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-400" />
                    <a href="tel:07309903243" className="hover:text-orange-400 transition-colors text-sm">
                     07309903243
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href="mailto:info@carkeysinstockport.co.uk"
                      className="hover:text-orange-400 transition-colors text-sm"
                    >
                      info@carkeysinstockport.co.uk
                    </Link>
                  </div>
                </div>

                <h4 className="font-bold text-white mb-3 text-lg">Follow Us</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/carkeysinstockport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.instagram.com/carkeysinstockport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a
                    href="https://twitter.com/carkeysinstockport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/carkeysinstockport"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-orange-400 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} Car Keys Stockport. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-gray-400 text-sm">
                <Link href="/privacy-policy" className="hover:text-orange-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-orange-400 transition-colors">
                  Terms of Service
                </Link>
                <Link href="/sitemap.xml" className="hover:text-orange-400 transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </footer>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutomotiveBusiness",
              name: "Car Keys in Stockport",
              url: "https://carkeysinstockport.co.uk",
              telephone: "07309903243",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 High Street",
                addressLocality: "Stockport",
                addressRegion: "Greater Manchester",
                postalCode: "SK1 1AB",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "53.4106",
                longitude: "-2.1575",
              },
              openingHours: "Mo-Su 00:00-23:59",
              priceRange: "££",
              description: "24/7 car key replacement, programming and lockout assistance in Stockport",
              areaServed: [
                {
                  "@type": "City",
                  name: "Stockport",
                },
                {
                  "@type": "City",070730990324307309903243309903243
                  name: "Cheadle",
                },
                {
                  "@type": "City",
                  name: "Bramhall",
                },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Car Key Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Car Key Replacement",
                      description: "Professional car key replacement service",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Key Programming",
                      description: "Car key programming and coding service",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.facebook.com/carkeysinstockport",
                "https://www.google.com/maps/place/car+keys+stockport",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
