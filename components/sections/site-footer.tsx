import Link from "next/link"

import { Logo } from "@/components/icons"
import { site } from "@/config/site"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"

const hrefMap: Record<string, string> = {
  repo: site.repo,
  "repo-readme": `${site.repo}#readme`,
  "repo-license": `${site.repo}/blob/main/LICENSE`,
}

export function SiteFooter({
  footer,
  locale,
}: {
  footer: Dictionary["footer"]
  locale: Locale
}) {
  return (
    <footer className="border-t border-ink-line bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href={`/${locale}`} className="flex items-center gap-2.5">
              <Logo />
              <span className="text-lg font-semibold tracking-tight">{site.name}</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-bone/50">{footer.tagline}</p>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-block text-sm text-citron underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </div>

          {footer.columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-bone/50">
                {column.title}
              </h2>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => {
                  const href = hrefMap[link.href] ?? link.href
                  const external = href.startsWith("http")

                  return (
                    <li key={link.label}>
                      <a
                        href={href}
                        {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                        className="text-sm text-bone/65 transition-colors hover:text-bone"
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-line pt-6 text-xs text-bone/55 md:flex-row md:items-center md:justify-between">
          <p>{footer.legal}</p>
          <p className="max-w-md md:text-right">{footer.demoNote}</p>
        </div>
      </div>
    </footer>
  )
}
