import type { ReactNode, SVGProps } from "react"

export type IconName =
  | "signal"
  | "research"
  | "draft"
  | "triage"
  | "sync"
  | "shield"
  | "crm"
  | "mail"
  | "calendar"
  | "webhook"
  | "csv"
  | "api"
  | "sso"
  | "warehouse"
  | "arrow"
  | "check"
  | "globe"
  | "spark"

const paths: Record<IconName, ReactNode> = {
  signal: (
    <>
      <path d="M4 19v-4" />
      <path d="M9.3 19v-8" />
      <path d="M14.7 19V7" />
      <path d="M20 19V3" />
    </>
  ),
  research: (
    <>
      <rect x="3.5" y="3" width="11" height="15" rx="2" />
      <path d="M7 7.5h4M7 11h4M7 14.5h2" />
      <circle cx="16.5" cy="16" r="3.2" />
      <path d="m18.9 18.4 2 2" />
    </>
  ),
  draft: (
    <>
      <path d="M4.5 20l3.8-.9 9.2-9.2a2.6 2.6 0 0 0-3.7-3.7L4.6 15.4z" />
      <path d="m13 7.3 3.7 3.7" />
    </>
  ),
  triage: (
    <>
      <path d="M3.5 5h17l-6.6 7.6V20l-3.8-2.2v-5.2z" />
    </>
  ),
  sync: (
    <>
      <path d="M20 12a8 8 0 0 1-13.6 5.7" />
      <path d="M4 12a8 8 0 0 1 13.6-5.7" />
      <path d="M17.2 2.6v4h-4" />
      <path d="M6.8 21.4v-4h4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 2.8v6.1c0 4.5-3 7.4-7 9.1-4-1.7-7-4.6-7-9.1V5.8z" />
      <path d="m9 12 2.2 2.2L15 10" />
    </>
  ),
  crm: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.4" />
      <path d="M3 10h18" />
      <circle cx="8" cy="15" r="1.6" />
      <path d="M12 15h5" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.4" />
      <path d="m4 7.5 8 5.8 8-5.8" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.4" />
      <path d="M8 3v4M16 3v4M3 10.5h18" />
    </>
  ),
  webhook: (
    <>
      <circle cx="12" cy="5.8" r="2.6" />
      <circle cx="5.8" cy="18" r="2.6" />
      <circle cx="18.2" cy="18" r="2.6" />
      <path d="M10.4 8 7.4 15.6M13.6 8l3 7.6M8.4 18h7.2" />
    </>
  ),
  csv: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.4" />
      <path d="M3 10h18M9.5 10v10M15 10v10" />
    </>
  ),
  api: (
    <>
      <path d="m8 6-5 6 5 6" />
      <path d="m16 6 5 6-5 6" />
      <path d="M13.4 4 10.6 20" />
    </>
  ),
  sso: (
    <>
      <circle cx="8" cy="8" r="4.2" />
      <path d="m11 11 9 9" />
      <path d="m17.4 17.4 2-2M14.8 14.8l2-2" />
    </>
  ),
  warehouse: (
    <>
      <ellipse cx="12" cy="6" rx="7.2" ry="3" />
      <path d="M4.8 6v12c0 1.7 3.2 3 7.2 3s7.2-1.3 7.2-3V6" />
      <path d="M4.8 12c0 1.7 3.2 3 7.2 3s7.2-1.3 7.2-3" />
    </>
  ),
  arrow: (
    <>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </>
  ),
  check: (
    <>
      <path d="m4.5 12.5 4.6 4.6L19.5 6.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18" />
      <path d="M12 3c2.6 2.6 3.9 5.7 3.9 9s-1.3 6.4-3.9 9c-2.6-2.6-3.9-5.7-3.9-9S9.4 5.6 12 3z" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3c1.3 4.9 4.1 7.7 9 9-4.9 1.3-7.7 4.1-9 9-1.3-4.9-4.1-7.7-9-9 4.9-1.3 7.7-4.1 9-9z" />
    </>
  ),
}

type IconProps = { name: IconName } & SVGProps<SVGSVGElement>

export function Icon({ name, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name]}
    </svg>
  )
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={className}>
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill="currentColor" />
        <path
          d="M7 22c4 0 4.4-12 9-12s5 12 9 12"
          fill="none"
          stroke="var(--color-citron)"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <circle cx="16" cy="10" r="1.6" fill="var(--color-citron)" />
      </svg>
      <span className="sr-only">{`Cauce`}</span>
    </span>
  )
}
