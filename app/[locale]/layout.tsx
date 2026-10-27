import type { Metadata } from "next"
import { Instrument_Serif, Manrope } from "next/font/google"
import { notFound } from "next/navigation"
import { Analytics } from "@vercel/analytics/next"

import { JsonLd } from "@/components/json-ld"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/sections/site-footer"
import { site } from "@/config/site"
import { defaultLocale, isLocale, locales } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"
import { alternates, canonical } from "@/lib/seo"

import "../globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
})

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const current = isLocale(locale) ? locale : defaultLocale
  const dict = getDictionary(current)

  return {
    metadataBase: new URL(site.url),
    title: dict.meta.title,
    description: dict.meta.description,
    applicationName: site.name,
    alternates: {
      canonical: canonical(current),
      languages: alternates(),
    },
    openGraph: {
      type: "website",
      siteName: site.name,
      url: canonical(current),
      title: dict.meta.title,
      description: dict.meta.description,
      locale: current === "es" ? "es_ES" : "en_US",
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }

  const dict = getDictionary(locale)

  return (
    <html lang={locale} className={`${manrope.variable} ${instrument.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-pill focus:bg-citron focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ink"
        >
          {dict.nav.skip}
        </a>
        <SiteHeader locale={locale} nav={dict.nav} />
        {children}
        <SiteFooter locale={locale} footer={dict.footer} />
        <JsonLd />
        {process.env.VERCEL === "1" ? <Analytics /> : null}
      </body>
    </html>
  )
}
