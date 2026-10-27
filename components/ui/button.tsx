import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-citron text-ink hover:bg-citron-deep",
        dark: "bg-ink text-bone hover:bg-ink-soft",
        outline: "border border-ink/20 text-ink hover:border-ink/60",
        outlineLight: "border border-bone/30 text-bone hover:border-bone/70",
      },
      size: {
        md: "h-11 px-5 text-sm",
        lg: "h-12 px-6 text-[15px]",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
)

type ButtonLinkProps = VariantProps<typeof buttonStyles> & {
  href: string
  children: ReactNode
  className?: string
}

export function ButtonLink({ href, children, className, variant, size }: ButtonLinkProps) {
  const classes = cn(buttonStyles({ variant, size }), className)
  const isExternal = /^(https?:|mailto:)/.test(href)

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}
