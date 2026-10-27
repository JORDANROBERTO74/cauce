"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { localeCookie, locales, type Locale } from "@/i18n/config"
import { cn } from "@/lib/utils"

export function LocaleSwitcher({
  current,
  label,
  className,
}: {
  current: Locale
  label: string
  className?: string
}) {
  const pathname = usePathname() ?? "/"

  return (
    <nav aria-label={label} className={cn("flex items-center gap-1", className)}>
      {locales.map((locale) => {
        const active = locale === current
        const href = pathname.replace(/^\/(en|es)(?=\/|$)/, `/${locale}`) || `/${locale}`

        return (
          <Link
            key={locale}
            href={href}
            hrefLang={locale}
            aria-current={active ? "true" : undefined}
            onClick={() => {
              document.cookie = `${localeCookie}=${locale}; path=/; max-age=31536000; samesite=lax`
            }}
            className={cn(
              "rounded-pill px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors",
              active ? "bg-bone/15 text-bone" : "text-bone/60 hover:text-bone",
            )}
          >
            {locale}
          </Link>
        )
      })}
    </nav>
  )
}
