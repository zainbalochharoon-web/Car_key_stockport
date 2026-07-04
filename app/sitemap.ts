import type { MetadataRoute } from "next"
import { carBrandsData } from "@/data/carBrands"

const SITE_URL = "https://carkeysinstockport.co.uk"

// Honest static dates per content type.
// Update these when you actually edit the content — not on every deploy.
const DATES = {
  homepage: new Date("2026-05-01"),
  services: new Date("2026-04-15"),
  areas: new Date("2026-04-10"),
  cars: new Date("2026-03-20"),
  reviews: new Date("2026-05-07"),
  cheshireCarKeys: new Date("2026-04-01"),
  prices: new Date("2026-05-09"),
  blog: new Date("2026-03-01"),
  support: new Date("2026-02-01"),
}

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Tier 1: Highest-authority pages ────────────────────────────────────────
  const corePriority: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      priority: 1.0,
      changeFrequency: "weekly",
      lastModified: DATES.homepage,
    },
  ]

  // ── Tier 2: Service pages ──────────────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = [
    "/services/emergency-service",
    "/services/lockout-assistance",
    "/services/car-key-replacement",
    "/services/auto-keys-programming",
    "/services/key-fob-programming",
    "/services/ignition-repair",
    "/services/van-lockout",
    "/services/remote-key-fobs",
  ].map((path) => ({
    url: `${SITE_URL}${path}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
    lastModified: DATES.services,
  }))

  const servicesHub: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/services`,
      priority: 0.85,
      changeFrequency: "monthly",
      lastModified: DATES.services,
    },
  ]

  // ── Tier 3: Primary area hub ───────────────────────────────────────────────
  const primaryAreaPage: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/areas/stockport`,
      priority: 0.95,
      changeFrequency: "weekly",
      lastModified: DATES.homepage,
    },
  ]

  // ── Tier 4: Sub-area pages ─────────────────────────────────────────────────
  // Hazel Grove elevated: highest-traffic area query
  const subAreaPages: MetadataRoute.Sitemap = [
    { path: "/areas/stockport/hazel-grove", priority: 0.92 },   // van locking — 1,845 imp
    { path: "/areas/stockport/bramhall", priority: 0.88 },       // 4 clicks, 3.12% CTR
    { path: "/areas/stockport/manchester", priority: 0.88 },
    { path: "/areas/stockport/bury", priority: 0.87 },
    { path: "/areas/stockport/oldham", priority: 0.87 },         // 526 impressions
    { path: "/areas/stockport/cheadle", priority: 0.86 },
    { path: "/areas/stockport/marple", priority: 0.85 },
    { path: "/areas/stockport/romiley", priority: 0.84 },
    { path: "/areas/stockport/bredbury", priority: 0.84 },
    { path: "/areas/stockport/reddish", priority: 0.84 },
    { path: "/areas/stockport/edgeley", priority: 0.84 },        // GSC impressions
    { path: "/areas/stockport/offerton", priority: 0.83 },
    { path: "/areas/stockport/davenport", priority: 0.83 },
    { path: "/areas/stockport/gatley", priority: 0.83 },
    { path: "/areas/stockport/heaton-mersey", priority: 0.83 },
    { path: "/areas/stockport/heaton-moor", priority: 0.83 },
    { path: "/areas/stockport/high-lane", priority: 0.83 },      // GSC impressions
    { path: "/areas/stockport/portwood", priority: 0.82 },
    { path: "/areas/stockport/woodsmoor", priority: 0.82 },
    { path: "/areas/stockport/stepping-hill", priority: 0.82 },
    { path: "/areas/stockport/adswood", priority: 0.82 },        // pos 1.15
    { path: "/areas/stockport/brinnington", priority: 0.82 },    // 1 click, 5.88% CTR
    { path: "/areas/stockport/rochdale", priority: 0.85 },
    { path: "/areas/stockport/salford", priority: 0.85 },
    { path: "/areas/stockport/tameside", priority: 0.85 },
    { path: "/areas/stockport/trafford", priority: 0.85 },
    { path: "/areas/stockport/denton", priority: 0.84 },
  ].map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    priority,
    changeFrequency: "monthly" as const,
    lastModified: DATES.areas,
  }))

  // ── Tier 5: Cars hub + brand pages ────────────────────────────────────────
  const carsHub: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/cars`,
      priority: 0.9,
      changeFrequency: "weekly",
      lastModified: DATES.cars,
    },
  ]

  // Tesla elevated: pos 4.73, 0.8% CTR, highest revenue-per-click
  const brandPages: MetadataRoute.Sitemap = carBrandsData.map((brand) => ({
    url: `${SITE_URL}/cars/${brand.slug}`,
    priority: brand.slug === "tesla" ? 0.92 : 0.85,
    changeFrequency: "monthly" as const,
    lastModified: DATES.cars,
  }))

  // ── Tier 6: High-intent standalone pages ──────────────────────────────────
  const highIntentPages: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/reviews`,
      priority: 0.92,
      changeFrequency: "monthly",
      lastModified: DATES.reviews,
    },
    {
      url: `${SITE_URL}/cheshire-car-keys`,
      priority: 0.88,              // pos 5.09, 12.5% CTR
      changeFrequency: "monthly",
      lastModified: DATES.cheshireCarKeys,
    },
    {
      url: `${SITE_URL}/faq`,
      priority: 0.82,
      changeFrequency: "monthly",
      lastModified: DATES.support,
    },
    {
      url: `${SITE_URL}/prices`,
      priority: 0.88,
      changeFrequency: "monthly",
      lastModified: DATES.prices,
    },
  ]

  // ── Tier 7: Support pages ─────────────────────────────────────────────────
  const supportPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/about`, priority: 0.65 },
    { url: `${SITE_URL}/contact`, priority: 0.75 },
    { url: `${SITE_URL}/services/testimonials`, priority: 0.78 },
    { url: `${SITE_URL}/blog`, priority: 0.65 },
    { url: `${SITE_URL}/blog/cheap-locksmith-denton-24-hours`, priority: 0.72 },
    { url: `${SITE_URL}/terms-and-conditions`, priority: 0.3 },
    { url: `${SITE_URL}/privacy-policy`, priority: 0.3 },
  ].map(({ url, priority }) => ({
    url,
    priority,
    changeFrequency: "monthly" as const,
    lastModified: DATES.support,
  }))

  return [
    ...corePriority,
    ...servicesHub,
    ...servicePages,
    ...primaryAreaPage,
    ...subAreaPages,
    ...carsHub,
    ...brandPages,
    ...highIntentPages,
    ...supportPages,
  ]
}
