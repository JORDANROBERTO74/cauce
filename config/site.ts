const fallbackUrl = "https://cauce-eight.vercel.app"

export const site = {
  name: "Cauce",
  tagline: "Outbound workspace for B2B teams",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? fallbackUrl).replace(/\/$/, ""),
  email: "hello@cauce.dev",
}
