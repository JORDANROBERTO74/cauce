import { Icon } from "@/components/icons"
import { Reveal } from "@/components/motion/reveal"
import type { Dictionary } from "@/i18n/get-dictionary"

export function Integrations({ integrations }: { integrations: Dictionary["integrations"] }) {
  return (
    <section className="bg-ink py-20 text-bone md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <Reveal>
            <p className="eyebrow text-citron">{integrations.eyebrow}</p>
            <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.02] tracking-[-0.01em]">
              {integrations.title}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-bone/60">
              {integrations.lead}
            </p>
          </Reveal>

          <div className="grid gap-2.5 sm:grid-cols-2">
            {integrations.items.map((item, index) => (
              <Reveal key={item.name} delay={index * 0.03}>
                <article className="h-full rounded-2xl border border-ink-line bg-ink-soft p-5 transition-colors duration-200 hover:border-citron/40">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-citron/10 text-citron">
                      <Icon name={item.icon} className="size-[18px]" />
                    </span>
                    <h3 className="text-sm font-semibold">{item.name}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-bone/55">{item.note}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
