import { Icon } from "@/components/icons"
import { Reveal } from "@/components/motion/reveal"
import { ButtonLink } from "@/components/ui/button"
import { site } from "@/config/site"
import type { Locale } from "@/i18n/config"
import type { Dictionary } from "@/i18n/get-dictionary"
import { formatCurrency } from "@/lib/format"
import { cn } from "@/lib/utils"

export function Pricing({
  pricing,
  locale,
}: {
  pricing: Dictionary["pricing"]
  locale: Locale
}) {
  return (
    <section id="pricing" className="scroll-mt-24 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-muted">{pricing.eyebrow}</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.02] tracking-[-0.01em]">
            {pricing.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{pricing.lead}</p>
        </div>

        <div className="mt-12 grid gap-3 lg:grid-cols-3">
          {pricing.tiers.map((tier, index) => (
            <Reveal key={tier.name} delay={index * 0.05}>
              <article
                className={cn(
                  "flex h-full flex-col rounded-card border p-6 md:p-7",
                  tier.highlighted
                    ? "border-ink bg-ink text-bone"
                    : "border-line bg-bone text-ink",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold tracking-tight">{tier.name}</h3>
                  {tier.highlighted ? (
                    <span className="rounded-pill bg-citron px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-ink">
                      {pricing.badge}
                    </span>
                  ) : null}
                </div>

                <p
                  className={cn(
                    "mt-1 text-sm leading-relaxed",
                    tier.highlighted ? "text-bone/60" : "text-muted",
                  )}
                >
                  {tier.summary}
                </p>

                <p className="mt-6 flex items-baseline gap-2">
                  <span className="font-display text-[2.6rem] leading-none tracking-tight">
                    {tier.price === 0 ? pricing.freeLabel : formatCurrency(tier.price, locale)}
                  </span>
                  {tier.price > 0 ? (
                    <span
                      className={cn(
                        "text-xs",
                        tier.highlighted ? "text-bone/50" : "text-muted",
                      )}
                    >
                      {pricing.perMonth}
                    </span>
                  ) : null}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm">
                      <Icon
                        name="check"
                        className={cn(
                          "mt-0.5 size-4 shrink-0",
                          tier.highlighted ? "text-citron" : "text-moss",
                        )}
                      />
                      <span className={tier.highlighted ? "text-bone/80" : "text-ink/80"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href={`mailto:${site.email}`}
                  variant={tier.highlighted ? "primary" : "outline"}
                  size="md"
                  className="mt-7 w-full"
                >
                  {pricing.cta}
                </ButtonLink>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted">{pricing.note}</p>
      </div>
    </section>
  )
}
