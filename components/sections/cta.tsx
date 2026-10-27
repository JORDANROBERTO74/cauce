import Image from "next/image"

import { Icon } from "@/components/icons"
import { Reveal } from "@/components/motion/reveal"
import { ButtonLink } from "@/components/ui/button"
import { site } from "@/config/site"
import type { Dictionary } from "@/i18n/get-dictionary"

export function Cta({ cta }: { cta: Dictionary["cta"] }) {
  return (
    <section className="relative overflow-hidden bg-ink text-bone">
      <Image
        src="/images/band-channel.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,18,22,0.85),rgba(15,18,22,0.65))]"
      />

      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
        <Reveal>
          <h2 className="font-display text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] tracking-[-0.02em]">
            {cta.title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-bone/70">{cta.body}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={`mailto:${site.email}`} size="lg">
              {cta.primary}
              <Icon name="arrow" className="size-4" />
            </ButtonLink>
            <ButtonLink href={site.repo} variant="outlineLight" size="lg">
              {cta.secondary}
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
