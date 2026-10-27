import { site } from "@/config/site"

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: site.name,
        url: site.url,
        description: site.tagline,
        email: site.email,
      },
      {
        "@type": "WebSite",
        name: site.name,
        url: site.url,
        inLanguage: ["en", "es"],
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
