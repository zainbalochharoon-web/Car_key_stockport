import type { MetadataRoute } from "next"
import fs from "node:fs"
import path from "node:path"

import { areaSlugs } from "@/lib/area-locations"

const SITE_URL = "https://www.carkeysinstockport.co.uk"

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>

function toUrlPath(appDir: string, pageFilePath: string) {
  const rel = path.relative(appDir, pageFilePath).replaceAll("\\", "/")
  if (rel === "page.tsx") return "/"
  const without = rel.replace(/\/page\.tsx$/, "")
  return "/" + without
}

function isPublicStaticRoute(urlPath: string) {
  // exclude dynamic segments and Next "group" folders if any
  if (urlPath.includes("[") || urlPath.includes("]")) return false
  // exclude internal folders
  if (urlPath.startsWith("/api")) return false
  if (urlPath.startsWith("/components")) return false
  return true
}

function walkPages(appDir: string, dir: string, out: string[]) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === "api" || entry.name === "components") continue
      walkPages(appDir, full, out)
      continue
    }
    if (entry.isFile() && entry.name === "page.tsx") {
      out.push(full)
    }
  }
}

const locationPrefixes = [
  "/areas/",
  "/stockport",
  "/manchester",
  "/bury",
  "/salford",
  "/tameside",
  "/rochdale",
  "/oldham",
  "/gosport",
  "/hazel-grove",
  "/bramhall",
  "/cheadle",
]

function isServiceOrLocation(urlPath: string) {
  if (urlPath.startsWith("/services")) return true
  if (locationPrefixes.some((prefix) => urlPath.startsWith(prefix))) return true
  return false
}

function priorityForPath(urlPath: string) {
  if (urlPath === "/") return 1.0
  if (isServiceOrLocation(urlPath)) return 0.8
  return 0.5
}

function changeFrequencyForPath(urlPath: string): ChangeFrequency {
  if (isServiceOrLocation(urlPath)) return "daily"
  return "monthly"
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date()
  const appDir = path.join(process.cwd(), "app")

  const pageFiles: string[] = []
  walkPages(appDir, appDir, pageFiles)

  const staticPaths = Array.from(
    new Set(
      pageFiles
        .map((p) => toUrlPath(appDir, p))
        .filter(isPublicStaticRoute)
        // avoid indexing the dynamic route template itself
        .filter((p) => p !== "/areas")
    )
  )

  const areaPaths = areaSlugs.map((slug) => `/areas/${slug}`)

  const allPaths = Array.from(new Set([...staticPaths, ...areaPaths]))

  return allPaths.map((urlPath) => ({
    url: `${SITE_URL}${urlPath}`,
    lastModified: now,
    changeFrequency: changeFrequencyForPath(urlPath),
    priority: priorityForPath(urlPath),
  }))
}

