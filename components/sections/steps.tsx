"use client"

import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

import { Icon } from "@/components/icons"
import type { Dictionary } from "@/i18n/get-dictionary"
import { cn } from "@/lib/utils"

type Step = Dictionary["steps"]["items"][number]

function StepVisual({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="space-y-3">
        {[72, 54, 88].map((width, row) => (
          <div key={row} className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-citron" />
            <span className="h-2 rounded-pill bg-line" style={{ width: `${width}%` }} />
          </div>
        ))}
        <div className="mt-5 rounded-xl border border-dashed border-line p-3">
          <span className="block h-2 w-1/3 rounded-pill bg-line" />
          <span className="mt-2 block h-2 w-2/3 rounded-pill bg-line/70" />
        </div>
      </div>
    )
  }

  if (index === 1) {
    return (
      <div className="space-y-4">
        {[
          { score: "92", width: "92%" },
          { score: "74", width: "74%" },
          { score: "51", width: "51%" },
        ].map((row) => (
          <div key={row.score} className="flex items-center gap-3">
            <span className="w-8 text-xs font-semibold tabular-nums text-muted">{row.score}</span>
            <span className="h-2 flex-1 rounded-pill bg-line">
              <span className="block h-full rounded-pill bg-ink" style={{ width: row.width }} />
            </span>
          </div>
        ))}
      </div>
    )
  }

  if (index === 2) {
    return (
      <div className="rounded-xl border border-line p-4">
        <span className="block h-2 w-2/5 rounded-pill bg-ink/80" />
        <div className="mt-4 space-y-2">
          <span className="block h-2 w-full rounded-pill bg-line" />
          <span className="block h-2 w-11/12 rounded-pill bg-line" />
          <span className="block h-2 w-9/12 rounded-pill bg-line" />
        </div>
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-citron/25 px-2.5 py-1.5">
          <Icon name="globe" className="size-3.5" />
          <span className="h-1.5 w-16 rounded-pill bg-ink/20" />
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-2.5">
      {[0, 1, 2].map((row) => (
        <div key={row} className="flex items-center gap-3 rounded-xl border border-line px-3 py-2.5">
          <span className="flex size-6 items-center justify-center rounded-full bg-citron/30">
            <Icon name="check" className="size-3.5" />
          </span>
          <span className="h-2 flex-1 rounded-pill bg-line" />
          <span className="h-6 w-14 rounded-pill bg-ink/85" />
        </div>
      ))}
    </div>
  )
}

export function Steps({ steps }: { steps: Dictionary["steps"] }) {
  const [active, setActive] = useState(0)
  const step: Step = steps.items[active]

  return (
    <section id="how-it-works" className="scroll-mt-24 bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow text-muted">{steps.eyebrow}</p>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.4vw,3.2rem)] leading-[1.02] tracking-[-0.01em]">
            {steps.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{steps.lead}</p>
        </div>

        <div
          role="tablist"
          aria-label={steps.eyebrow}
          className="mt-10 flex gap-2 overflow-x-auto pb-1"
        >
          {steps.items.map((item, index) => (
            <button
              key={item.tab}
              role="tab"
              id={`step-tab-${index}`}
              aria-selected={index === active}
              aria-controls={`step-panel-${index}`}
              onClick={() => setActive(index)}
              className={cn(
                "shrink-0 rounded-pill border px-4 py-2 text-sm font-medium transition-colors",
                index === active
                  ? "border-ink bg-ink text-bone"
                  : "border-line bg-paper text-muted hover:border-ink/30 hover:text-ink",
              )}
            >
              {item.tab}
            </button>
          ))}
        </div>

        <div className="mt-6 rounded-card border border-line bg-bone p-5 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.tab}
              id={`step-panel-${active}`}
              role="tabpanel"
              aria-labelledby={`step-tab-${active}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center"
            >
              <div>
                <p className="eyebrow text-moss">{step.phase}</p>
                <h3 className="mt-3 font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-tight">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted md:text-base">
                  {step.body}
                </p>
                <ul className="mt-5 space-y-2">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm">
                      <Icon name="check" className="mt-0.5 size-4 shrink-0 text-moss" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-line bg-paper p-5 shadow-sm">
                <StepVisual index={active} />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
