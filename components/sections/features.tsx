import { Icon } from "@/components/icons"
import { Reveal } from "@/components/motion/reveal"
import type { Dictionary } from "@/i18n/get-dictionary"

export function Features({ features }: { features: Dictionary["features"] }) {
  return (
    <section id="features" className="scroll-mt-24 bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-muted">{features.eyebrow}</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.02] tracking-[-0.01em]">
            {features.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{features.lead}</p>
        </Reveal>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.items.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="group h-full rounded-card border border-line bg-paper p-6 transition-colors duration-200 hover:border-ink/30">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-citron/30 text-ink transition-colors group-hover:bg-citron">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
