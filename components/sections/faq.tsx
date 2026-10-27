import { Reveal } from "@/components/motion/reveal"
import type { Dictionary } from "@/i18n/get-dictionary"

export function Faq({ faq }: { faq: Dictionary["faq"] }) {
  return (
    <section id="faq" className="scroll-mt-24 bg-bone py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:px-8">
        <Reveal>
          <p className="eyebrow text-muted">{faq.eyebrow}</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,3.8vw,2.8rem)] leading-[1.05] tracking-[-0.01em]">
            {faq.title}
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted md:text-base">{faq.lead}</p>
        </Reveal>

        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faq.items.map((item) => (
            <details key={item.question} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-medium tracking-tight">
                {item.question}
                <span
                  aria-hidden="true"
                  className="relative flex size-6 shrink-0 items-center justify-center rounded-full border border-ink/20 transition-colors group-open:border-ink group-open:bg-ink group-open:text-bone"
                >
                  <span className="absolute h-px w-2.5 bg-current" />
                  <span className="absolute h-2.5 w-px bg-current transition-transform duration-200 group-open:scale-y-0" />
                </span>
              </summary>
              <p className="mt-3 max-w-xl pr-10 text-sm leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
