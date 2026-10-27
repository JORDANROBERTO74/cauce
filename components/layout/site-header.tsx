import Link from "next/link"

import { Logo } from "@/components/icons"
import { LocaleSwitcher } from "@/components/layout/locale-switcher"
import { ButtonLink } from "@/components/ui/button"
import { site } from "@/config/site"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"

export function SiteHeader({ locale, nav }: { locale: Locale; nav: Dictionary["nav"] }) {
  const links = [
    { href: "#features", label: nav.product },
    { href: "#how-it-works", label: nav.how },
    { href: "#pricing", label: nav.pricing },
    { href: "#faq", label: nav.faq },
  ]

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 md:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-2.5 text-bone">
          <Logo />
          <span className="text-lg font-semibold tracking-tight">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-bone/65 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-bone">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LocaleSwitcher current={locale} label={nav.language} />
          <ButtonLink href={`mailto:${site.email}`} className="hidden sm:inline-flex">
            {nav.cta}
          </ButtonLink>
        </div>
      </div>
    </header>
  )
}
