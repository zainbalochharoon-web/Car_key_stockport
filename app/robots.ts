import type { MetadataRoute } from "next"

const SITE_URL = "https://carkeysinstockport.co.uk"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Primary: allow all legitimate crawlers (Google, Bing, etc.)
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/contact?*",
          "/*.json$",
        ],
      },
      // Allow OpenAI GPTBot — needed for ChatGPT AI search citations
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Allow Google-Extended (Gemini training crawler)
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Allow PerplexityBot for Perplexity AI citations
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Allow ClaudeBot for Claude AI citations
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      // Allow Meta AI crawler
      {
        userAgent: "FacebookBot",
        allow: "/",
      },
      // Allow Anthropic crawler
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      // Block pure scrapers that add no SEO/AI value
      {
        userAgent: "AhrefsBot",
        disallow: "/",
      },
      {
        userAgent: "SemrushBot",
        disallow: "/",
      },
      {
        userAgent: "DotBot",
        disallow: "/",
      },
      {
        userAgent: "MJ12bot",
        disallow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
