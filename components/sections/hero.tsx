import { Icon } from "@/components/icons"
import { Reveal } from "@/components/motion/reveal"
import { ButtonLink } from "@/components/ui/button"
import { site } from "@/config/site"
import type { Dictionary } from "@/i18n/get-dictionary"

export function Hero({ hero }: { hero: Dictionary["hero"] }) {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-32 text-bone md:pb-28 md:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_-10%,rgba(200,240,75,0.16),transparent_55%),radial-gradient(ellipse_at_90%_10%,rgba(200,240,75,0.07),transparent_45%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,var(--color-bone)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-bone)_1px,transparent_1px)] [background-size:72px_72px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow flex items-center gap-2 text-citron">
              <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-citron" />
              {hero.eyebrow}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-5 font-display text-[clamp(2.9rem,7.4vw,5.4rem)] leading-[0.94] tracking-[-0.02em]">
              {hero.title}{" "}
              <em className="not-italic text-citron">{hero.titleAccent}</em>
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-bone/70">{hero.lead}</p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink href={`mailto:${site.email}`} size="lg">
                {hero.primary}
                <Icon name="arrow" className="size-4" />
              </ButtonLink>
              <ButtonLink href="#how-it-works" variant="outlineLight" size="lg">
                {hero.secondary}
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 flex items-center gap-2 text-xs text-bone/55">
              <Icon name="spark" className="size-3.5 text-citron/70" />
              {hero.note}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.25} className="mt-14 md:mt-16">
          <div className="rounded-card border border-ink-line/70 bg-ink-soft p-2 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)]">
            <div className="rounded-[1.2rem] bg-paper p-4 text-ink md:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="inline-block size-2.5 rounded-full bg-citron" />
                  <p className="text-sm font-semibold">{hero.panel.title}</p>
                </div>
                <p className="text-xs font-medium text-muted">{hero.panel.meta}</p>
              </div>

              <div className="mt-5 hidden grid-cols-[1.3fr_1.5fr_0.6fr_0.8fr] gap-4 border-b border-line pb-2 md:grid">
                <p className="eyebrow text-muted">{hero.panel.columns.account}</p>
                <p className="eyebrow text-muted">{hero.panel.columns.signal}</p>
                <p className="eyebrow text-muted">{hero.panel.columns.fit}</p>
                <p className="eyebrow text-muted">{hero.panel.columns.status}</p>
              </div>

              <ul className="divide-y divide-line">
                {hero.panel.rows.map((row) => (
                  <li
                    key={row.account}
                    className="grid gap-1 py-3.5 md:grid-cols-[1.3fr_1.5fr_0.6fr_0.8fr] md:items-center md:gap-4"
                  >
                    <p className="text-sm font-semibold">{row.account}</p>
                    <p className="text-sm text-muted">{row.signal}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider">{row.fit}</p>
                    <p className="w-fit rounded-pill bg-ink px-2.5 py-1 text-[11px] font-semibold text-citron">
                      {row.status}
                    </p>
                  </li>
                ))}
              </ul>

              <p className="mt-4 border-t border-line pt-3 text-xs text-muted">{hero.panel.footer}</p>
            </div>
          </div>
        </Reveal>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-bone/60">
          {hero.facts.map((fact) => (
            <li key={fact} className="flex items-center gap-2">
              <Icon name="check" className="size-4 text-citron" />
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
