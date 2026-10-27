import type { MetadataRoute } from "next"

import { locales } from "@/i18n/config"
import { absoluteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: absoluteUrl(`/${locale}`),
    lastModified: new Date("2026-10-26"),
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: {
        en: absoluteUrl("/en"),
        es: absoluteUrl("/es"),
      },
    },
  }))
}
