import type { Metadata } from "next"
import { PageHeader, SectionLabel, Card, Tag } from "@/components/ui"

export const metadata: Metadata = {
  title: "90-Day Execution Calendar | JBizz-OS",
  description: "The dated 90-day execution plan for JBizz Web Developments, week by week with KPIs.",
}

type Week = {
  week: number
  days: string
  focus: string
  deliverables: string[]
}

const phases: {
  phase: string
  days: string
  theme: string
  kpis: { label: string; value: string }[]
  weeks: Week[]
}[] = [
  {
    phase: "PHASE 1 — FOUNDATION",
    days: "DAYS 1–30",
    theme: "Build 10 products, JBizz-OS Starter, the permit scraping system, and lock in the daily outreach + content habit.",
    kpis: [
      { label: "Gumroad products live", value: "10" },
      { label: "Clients closed", value: "3–5" },
      { label: "Lead gen systems", value: "1 (permits)" },
      { label: "Outreach sent", value: "600–1,500" },
    ],
    weeks: [
      {
        week: 1,
        days: "Days 1–7",
        focus: "Launch infrastructure",
        deliverables: [
          "Ship JBizz-OS Starter Pack to Gumroad",
          "Publish 2 automation packs",
          "Set up lead tracker (sheet or DB)",
          "Start daily outreach: 20/day minimum",
          "Post 1 content piece per day",
        ],
      },
      {
        week: 2,
        days: "Days 8–14",
        focus: "First revenue",
        deliverables: [
          "Ship 1 scraping pack + 1 content pack",
          "Close first 1–2 clients from outreach",
          "Build Broward permit scraping v1",
          "Write 10 JBizz-OS skills",
        ],
      },
      {
        week: 3,
        days: "Days 15–21",
        focus: "Permit engine online",
        deliverables: [
          "Permit scraper running daily (Broward + Miami-Dade)",
          "Auto-generated contractor outreach live",
          "Ship 2 more Gumroad products",
          "Raise outreach to 30–40/day",
        ],
      },
      {
        week: 4,
        days: "Days 22–30",
        focus: "Close the month",
        deliverables: [
          "Hit 10 total products live",
          "3–5 clients closed and delivered",
          "20+ JBizz-OS skills documented",
          "Publish first long-form content piece",
        ],
      },
    ],
  },
  {
    phase: "PHASE 2 — MOMENTUM",
    days: "DAYS 31–60",
    theme: "10 more products, JBizz-OS Pro, the local business scraping system, and weekly automation releases.",
    kpis: [
      { label: "Total products live", value: "20" },
      { label: "Total clients", value: "10+" },
      { label: "Lead gen systems", value: "2 (permits + local)" },
      { label: "Automation releases", value: "1/week" },
    ],
    weeks: [
      {
        week: 5,
        days: "Days 31–37",
        focus: "JBizz-OS Pro build",
        deliverables: [
          "Ship JBizz-OS Pro to Gumroad",
          "Launch first niche domination pack",
          "Start Google Maps local business scraper",
          "Maintain 40/day outreach",
        ],
      },
      {
        week: 6,
        days: "Days 38–44",
        focus: "Local lead engine",
        deliverables: [
          "Local scraper live: categories + lead scoring",
          "Auto-build demo landing pages from scraped data",
          "Ship 2 niche domination packs",
          "Weekly automation release #1",
        ],
      },
      {
        week: 7,
        days: "Days 45–51",
        focus: "Delivery automation",
        deliverables: [
          "Ship SEO pack + web build pack",
          "Automate client onboarding + delivery emails",
          "Personalized demo outreach at 40–50/day",
          "Weekly automation release #2",
        ],
      },
      {
        week: 8,
        days: "Days 52–60",
        focus: "Scale checkpoint",
        deliverables: [
          "Hit 20 total products live",
          "10+ total clients closed",
          "40+ new JBizz-OS skills this month",
          "Review metrics: kill what's not converting",
        ],
      },
    ],
  },
  {
    phase: "PHASE 3 — SCALE",
    days: "DAYS 61–90",
    theme: "10 more products, JBizz-OS Enterprise, fully automated delivery, and outreach scaled to 100/day.",
    kpis: [
      { label: "Total products live", value: "30+" },
      { label: "Monthly revenue", value: "$5k–$15k" },
      { label: "Outreach volume", value: "100/day" },
      { label: "Delivery", value: "Fully automated" },
    ],
    weeks: [
      {
        week: 9,
        days: "Days 61–67",
        focus: "Enterprise build",
        deliverables: [
          "Ship JBizz-OS Enterprise",
          "Launch full automation suite product",
          "Scale outreach to 60–80/day",
          "Bundle top products into $79–$149 bundles",
        ],
      },
      {
        week: 10,
        days: "Days 68–74",
        focus: "Lead gen products",
        deliverables: [
          "Ship contractor lead gen system as a product",
          "Ship local business lead gen system as a product",
          "Automate content pipeline (daily micro content)",
        ],
      },
      {
        week: 11,
        days: "Days 75–81",
        focus: "Full automation",
        deliverables: [
          "Client delivery 100% templated and automated",
          "Outreach at 100/day across both engines",
          "Ship 2 final Gumroad products",
        ],
      },
      {
        week: 12,
        days: "Days 82–90",
        focus: "Operate the machine",
        deliverables: [
          "30+ products live, bundles converting",
          "Recurring maintenance clients stacked at $150/mo",
          "Document everything: JBizz-OS at 150–200 skills",
          "Set the next 90-day plan",
        ],
      },
    ],
  },
]

export default function CalendarPage() {
  return (
    <div>
      <PageHeader
        code="SEC-02 // EXECUTION CALENDAR"
        title="The 90-Day Plan"
        description="Twelve weeks. Three phases. Every week has a focus and a set of deliverables. If a week slips, the deliverables carry over — the calendar never resets."
      />

      <div className="flex flex-col gap-10 px-4 py-6 md:px-8">
        {phases.map((phase) => (
          <section key={phase.phase} className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <SectionLabel>{phase.phase}</SectionLabel>
              <Tag tone="primary">{phase.days}</Tag>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">{phase.theme}</p>

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {phase.kpis.map((kpi) => (
                <Card key={kpi.label}>
                  <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{kpi.label}</p>
                  <p className="mt-1 font-mono text-lg font-bold text-primary">{kpi.value}</p>
                </Card>
              ))}
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {phase.weeks.map((week) => (
                <Card key={week.week}>
                  <div className="flex items-center justify-between">
                    <p className="font-mono text-sm font-semibold">
                      WEEK {String(week.week).padStart(2, "0")} <span className="text-muted-foreground">/ {week.days}</span>
                    </p>
                    <Tag>{week.focus}</Tag>
                  </div>
                  <ul className="mt-3 flex flex-col gap-2">
                    {week.deliverables.map((d) => (
                      <li key={d} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="text-primary" aria-hidden="true">
                          ▸
                        </span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
