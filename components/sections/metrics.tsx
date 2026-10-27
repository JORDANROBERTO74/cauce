import Image from "next/image"

import { Reveal } from "@/components/motion/reveal"
import type { Dictionary } from "@/i18n/get-dictionary"

export function Metrics({ metrics }: { metrics: Dictionary["metrics"] }) {
  return (
    <section className="bg-bone py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1fr_0.85fr] md:items-center md:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow text-muted">{metrics.eyebrow}</p>
              <h2 className="mt-4 max-w-lg font-display text-[clamp(1.9rem,3.8vw,2.8rem)] leading-[1.05] tracking-[-0.01em]">
                {metrics.title}
              </h2>
            </Reveal>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
              {metrics.items.map((item, index) => (
                <Reveal key={item.label} delay={index * 0.05}>
                  <div className="border-t border-ink/15 pt-4">
                    <dt className="sr-only">{item.label}</dt>
                    <dd className="font-display text-4xl leading-none tracking-tight md:text-5xl">
                      {item.value}
                    </dd>
                    <p className="mt-2 text-sm leading-snug text-muted">{item.label}</p>
                  </div>
                </Reveal>
              ))}
            </dl>

            <p className="mt-8 border-t border-line pt-4 text-xs text-muted">{metrics.note}</p>
          </div>

          <div className="relative aspect-4/3 overflow-hidden rounded-card border border-line bg-ink">
            <Image
              src="/images/band-river.jpg"
              alt=""
              fill
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,18,22,0.15),rgba(15,18,22,0.55))]"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
