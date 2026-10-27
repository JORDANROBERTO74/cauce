const fallbackUrl = "https://cauce.vercel.app"

export const site = {
  name: "Cauce",
  tagline: "Outbound workspace for B2B teams",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl).replace(/\/$/, ""),
  email: "hello@cauce.dev",
  repo: "https://github.com/JORDANROBERTO74/cauce",
}
