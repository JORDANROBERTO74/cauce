import { region } from "@/config/region"
import type { Locale } from "@/i18n/config"

const localeTags: Record<Locale, string> = {
  en: "en-GB",
  es: "es-ES",
}

export function formatCurrency(value: number, locale: Locale) {
  return new Intl.NumberFormat(localeTags[locale], {
    style: "currency",
    currency: region.currency,
    maximumFractionDigits: 0,
  }).format(value)
}
