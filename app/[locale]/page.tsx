import { notFound } from "next/navigation"

import { Cta } from "@/components/sections/cta"
import { Faq } from "@/components/sections/faq"
import { Features } from "@/components/sections/features"
import { Hero } from "@/components/sections/hero"
import { Integrations } from "@/components/sections/integrations"
import { Metrics } from "@/components/sections/metrics"
import { Pricing } from "@/components/sections/pricing"
import { Steps } from "@/components/sections/steps"
import { isLocale } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!isLocale(locale)) {
    notFound()
  }

  const dict = getDictionary(locale)

  return (
    <main id="main">
      <Hero hero={dict.hero} />
      <Features features={dict.features} />
      <Steps steps={dict.steps} />
      <Integrations integrations={dict.integrations} />
      <Metrics metrics={dict.metrics} />
      <Pricing pricing={dict.pricing} locale={locale} />
      <Faq faq={dict.faq} />
      <Cta cta={dict.cta} />
    </main>
  )
}
