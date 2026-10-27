import type { IconName } from "@/components/icons"

export type Dictionary = {
  meta: {
    title: string
    description: string
  }
  nav: {
    skip: string
    product: string
    how: string
    pricing: string
    faq: string
    cta: string
    language: string
  }
  hero: {
    eyebrow: string
    title: string
    titleAccent: string
    lead: string
    primary: string
    secondary: string
    note: string
    panel: {
      title: string
      meta: string
      columns: { account: string; signal: string; fit: string; status: string }
      rows: { account: string; signal: string; fit: string; status: string }[]
      footer: string
    }
    facts: string[]
  }
  features: {
    eyebrow: string
    title: string
    lead: string
    items: { icon: IconName; title: string; body: string }[]
  }
  steps: {
    eyebrow: string
    title: string
    lead: string
    items: {
      tab: string
      phase: string
      title: string
      body: string
      bullets: string[]
    }[]
  }
  integrations: {
    eyebrow: string
    title: string
    lead: string
    items: { icon: IconName; name: string; note: string }[]
  }
  metrics: {
    eyebrow: string
    title: string
    note: string
    items: { value: string; label: string }[]
  }
  pricing: {
    eyebrow: string
    title: string
    lead: string
    note: string
    freeLabel: string
    perMonth: string
    cta: string
    badge: string
    tiers: {
      name: string
      price: number
      summary: string
      features: string[]
      highlighted: boolean
    }[]
  }
  faq: {
    eyebrow: string
    title: string
    lead: string
    items: { question: string; answer: string }[]
  }
  cta: {
    title: string
    body: string
    primary: string
    secondary: string
  }
  footer: {
    tagline: string
    columns: { title: string; links: { label: string; href: string }[] }[]
    legal: string
    demoNote: string
  }
  notFound: {
    title: string
    body: string
    cta: string
  }
}

export const en: Dictionary = {
  meta: {
    title: "Cauce — Find the signal before the market does",
    description:
      "Cauce is an outbound workspace for B2B teams: it watches your accounts, explains what changed and drafts the first message. Bilingual demo built with Next.js.",
  },
  nav: {
    skip: "Skip to content",
    product: "Product",
    how: "How it works",
    pricing: "Pricing",
    faq: "FAQ",
    cta: "Book a demo",
    language: "Language",
  },
  hero: {
    eyebrow: "Outbound workspace",
    title: "Find the signal",
    titleAccent: "before the market does.",
    lead: "Cauce watches the accounts you care about, explains what changed and drafts the first message. Your team reviews it, sends it and books the call.",
    primary: "Book a demo",
    secondary: "See how it works",
    note: "Demo build. Sample data, no signup, no backend.",
    panel: {
      title: "Signal feed",
      meta: "Today · 14 new",
      columns: { account: "Account", signal: "Signal", fit: "Fit", status: "Status" },
      rows: [
        {
          account: "Northline Logistics",
          signal: "Opened 4 sales roles",
          fit: "High",
          status: "Draft ready",
        },
        {
          account: "Meridian Health",
          signal: "Raised a Series A",
          fit: "High",
          status: "Draft ready",
        },
        {
          account: "Oberon Retail",
          signal: "Migrated to a new CRM",
          fit: "Medium",
          status: "In review",
        },
        {
          account: "Kestrel Studios",
          signal: "Hired an ops lead",
          fit: "Medium",
          status: "Queued",
        },
      ],
      footer: "32 accounts monitored · next batch in 6h",
    },
    facts: ["Public sources only", "Drafts you approve", "Sending limits enforced"],
  },
  features: {
    eyebrow: "Workspace",
    title: "A workspace, not another tab.",
    lead: "Signals, research, drafts and replies in one place, with the source kept next to the sentence.",
    items: [
      {
        icon: "signal",
        title: "Signal monitoring",
        body: "Hiring, funding, launches, migrations and new leadership across the list you already own.",
      },
      {
        icon: "research",
        title: "Account briefs",
        body: "Each brief is assembled from public sources with the links attached, so anyone can check it.",
      },
      {
        icon: "draft",
        title: "Drafts in your voice",
        body: "A first message written from the brief and your last thirty approved emails, ready to edit.",
      },
      {
        icon: "triage",
        title: "Reply triage",
        body: "Replies are sorted into next step, later and no, with the reason kept on the record.",
      },
      {
        icon: "sync",
        title: "A CRM that stays honest",
        body: "Owners, stages and notes sync with the tools your team already runs.",
      },
      {
        icon: "shield",
        title: "Guardrails first",
        body: "Suppression lists, per-domain limits and an approval step before anything leaves.",
      },
    ],
  },
  steps: {
    eyebrow: "How it works",
    title: "From signal to sent message, in four steps.",
    lead: "No new inbox to babysit. Each step leaves a record you can read.",
    items: [
      {
        tab: "1 · Connect",
        phase: "Phase 01 — Setup",
        title: "Bring the list you already have.",
        body: "Import accounts from a CSV or your CRM, then choose the signals that matter to your segment. Every rule stays visible and editable.",
        bullets: ["CSV and CRM import", "Signal rules per segment", "Dry run before the first batch"],
      },
      {
        tab: "2 · Watch",
        phase: "Phase 02 — Detect",
        title: "Only the changes worth a message.",
        body: "Cauce scores each change against fit and timing, then drops the noise before it reaches a queue.",
        bullets: ["Fit and timing score", "Duplicate and noise filter", "Daily or hourly batches"],
      },
      {
        tab: "3 · Draft",
        phase: "Phase 03 — Write",
        title: "A brief and a first line, in your voice.",
        body: "Research and draft arrive together, with the source under each claim and a tone learned from emails you already approved.",
        bullets: ["Source under each claim", "Tone from approved emails", "Edit, regenerate or discard"],
      },
      {
        tab: "4 · Send",
        phase: "Phase 04 — Review",
        title: "Approve, send, follow up.",
        body: "Sending limits, approval and follow-ups live in one queue. Replies update the pipeline without a second tool.",
        bullets: ["One approval queue", "Per-domain sending limits", "Pipeline updated on reply"],
      },
    ],
  },
  integrations: {
    eyebrow: "Connections",
    title: "Plugs into what you already run.",
    lead: "Cauce is not another inbox. It writes to the tools your team already checks.",
    items: [
      { icon: "crm", name: "CRM", note: "Owners, stages and notes stay in sync." },
      { icon: "mail", name: "Email", note: "Send from your own domain, not ours." },
      { icon: "calendar", name: "Calendar", note: "Meetings land on the right seller's day." },
      { icon: "webhook", name: "Webhooks", note: "Push new signals anywhere, in order." },
      { icon: "csv", name: "CSV", note: "Import accounts and signals in minutes." },
      { icon: "api", name: "API", note: "Read and write the workspace programmatically." },
      { icon: "sso", name: "SSO", note: "Single sign-on for teams on a shared plan." },
      { icon: "warehouse", name: "Data warehouse", note: "Keep a copy of every signal and draft." },
    ],
  },
  metrics: {
    eyebrow: "The demo dataset",
    title: "Numbers from the sample workspace, not from customers.",
    note: "Sample figures. This build has no backend, so nothing here is measured.",
    items: [
      { value: "3.2x", label: "more replies per seller, per week" },
      { value: "68%", label: "of research time back to the team" },
      { value: "12 min", label: "median signal to reviewed draft" },
      { value: "94%", label: "of drafts sent after one edit" },
    ],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "Start with one seller. Expand when replies arrive.",
    lead: "One workspace, three plans. Every plan includes both languages and the full signal set.",
    note: "Prices in EUR, per workspace, per month, VAT not included.",
    freeLabel: "Free",
    perMonth: "/ month",
    cta: "Talk to us",
    badge: "Most chosen",
    tiers: [
      {
        name: "Solo",
        price: 0,
        summary: "For one seller testing signals.",
        features: [
          "1 seat",
          "50 monitored accounts",
          "200 signals per month",
          "Email drafts",
          "Community support",
        ],
        highlighted: false,
      },
      {
        name: "Team",
        price: 49,
        summary: "For a small team with a shared pipeline.",
        features: [
          "5 seats",
          "2,500 monitored accounts",
          "All signal types",
          "CRM sync",
          "Sending limits and approvals",
          "Email support",
        ],
        highlighted: true,
      },
      {
        name: "Scale",
        price: 149,
        summary: "For a team running outbound as a channel.",
        features: [
          "Unlimited seats",
          "25,000 monitored accounts",
          "API and webhooks",
          "SSO",
          "Dedicated onboarding",
          "Priority support",
        ],
        highlighted: false,
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions the demo can answer.",
    lead: "Short answers, no sales call required.",
    items: [
      {
        question: "Is Cauce a real product?",
        answer:
          "No. This is a bilingual front-end demo. There is no account system, no billing and no backend: the workspace you see is sample data.",
      },
      {
        question: "What counts as a signal?",
        answer:
          "A verifiable change in an account: a new role, funding, a launch, a tech migration or a leadership change. Each one arrives with its source.",
      },
      {
        question: "Does it send email without me?",
        answer:
          "No. Every draft waits for approval and sending limits apply per domain. This demo never sends anything.",
      },
      {
        question: "Where does the data come from?",
        answer:
          "In a real deployment, public sources and your own CRM. In this build, the dataset is hand-written sample content.",
      },
      {
        question: "Which languages are supported?",
        answer:
          "English and Spanish. The site detects your browser language and remembers the choice you make.",
      },
      {
        question: "How do I run it locally?",
        answer:
          "Clone the repository, install with pnpm, then start the dev server. The README lists the exact commands.",
      },
    ],
  },
  cta: {
    title: "Put the signal before the pitch.",
    body: "Book a walkthrough and we will run the same four steps against your list.",
    primary: "Book a demo",
    secondary: "See how it works",
  },
  footer: {
    tagline: "Outbound workspace for B2B teams. Bilingual demo built with Next.js.",
    columns: [
      {
        title: "Product",
        links: [
          { label: "Features", href: "#features" },
          { label: "How it works", href: "#how-it-works" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ],
      },
    ],    legal: "© 2026 Cauce Labs. All rights reserved.",
    demoNote: "Demo project. Sample data, no accounts, no tracking beyond Vercel Analytics.",
  },
  notFound: {
    title: "This page took a different course.",
    body: "The link you followed does not exist in this build.",
    cta: "Back to the start",
  },
}
