import { ButtonLink } from "@/components/ui/button"
import { defaultLocale, localeNames } from "@/i18n/config"
import { getDictionary } from "@/i18n/get-dictionary"

export default function NotFound() {
  const dict = getDictionary(defaultLocale)

  return (
    <main
      id="main"
      className="flex min-h-svh flex-col items-center justify-center bg-ink px-5 text-center text-bone"
    >
      <p className="eyebrow text-citron">404</p>
      <h1 className="mt-4 max-w-xl font-display text-[clamp(2.2rem,6vw,3.6rem)] leading-[1.02]">
        {dict.notFound.title}
      </h1>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/60">{dict.notFound.body}</p>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <ButtonLink href={`/${defaultLocale}`} size="lg">
          {dict.notFound.cta}
        </ButtonLink>
        <ButtonLink href="/es" variant="outlineLight" size="lg">
          {localeNames.es}
        </ButtonLink>
      </div>
    </main>
  )
}
