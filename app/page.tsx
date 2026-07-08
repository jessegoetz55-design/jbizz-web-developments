import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PageHeader, SectionLabel, Card, StatCard, Tag } from "@/components/ui"

const revenueEngines = [
  {
    name: "Service Business",
    items: [
      { label: "Web builds", value: "$300–$1,500" },
      { label: "Maintenance", value: "$150/mo" },
      { label: "Automations", value: "$250–$750" },
      { label: "SEO + content bundles", value: "$150–$500" },
    ],
  },
  {
    name: "Gumroad Digital Products",
    items: [
      { label: "30+ products over 90 days", value: "" },
      { label: "Single products", value: "$9–$49" },
      { label: "Bundles", value: "$79–$149" },
      { label: "JBizz-OS modules", value: "recurring" },
    ],
  },
  {
    name: "Lead Gen Automation",
    items: [
      { label: "Permit scraping → contractor outreach", value: "" },
      { label: "Local business scraping → demo pages", value: "" },
      { label: "AI outreach engine", value: "20–50/day" },
      { label: "Daily inbound leads", value: "compounding" },
    ],
  },
]

const dailyOS = [
  { block: "BLOCK 1 — 30 MIN", title: "Outreach", tasks: ["Send 20–50 outreach messages", "Follow up on every open thread", "Log responses in lead tracker"] },
  { block: "BLOCK 2 — 30 MIN", title: "Product Building", tasks: ["Advance one Gumroad product", "Ship one deliverable (template, prompt, pack)", "Update product roadmap status"] },
  { block: "BLOCK 3 — 30 MIN", title: "JBizz-OS Skills", tasks: ["Create 1–2 new OS skills", "Document prompt + workflow + SOP", "File into the correct module"] },
]

const weekly = [
  "3–5 content pieces published",
  "1 Gumroad product update shipped",
  "1 automation built and documented",
  "1–3 clients closed",
]

const monthly = [
  "1 major Gumroad product launched",
  "20–40 JBizz-OS skills created",
  "1 new lead gen system deployed",
]

const brand = [
  { trait: "Direct", meaning: "Say what it costs, what they get, and when. No hedging." },
  { trait: "Fast", meaning: "Same-day demos. 48–72hr builds. Speed is the moat." },
  { trait: "No fluff", meaning: "Every message, page, and product earns its place." },
  { trait: "Automation-first", meaning: "If it repeats 3+ times, it gets systemized." },
  { trait: "Results-driven", meaning: "Sell outcomes: leads, sales, time saved." },
]

export default function CommandPage() {
  return (
    <div>
      <PageHeader
        code="SEC-01 // COMMAND CENTER"
        title="JBizz Master Game Plan"
        description="Mobile-only, AI-powered web development and automation studio. Built entirely from an Android phone. This is the full operating system: revenue engines, daily execution, and the road to $5k–$15k/mo in 90 days."
      />

      <div className="flex flex-col gap-8 px-4 py-6 md:px-8">
        {/* KPI strip */}
        <section aria-label="Key targets" className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <StatCard label="90-Day Revenue Target" value="$5k–$15k" sub="PER MONTH BY DAY 90" />
          <StatCard label="Products To Ship" value="30+" sub="GUMROAD IN 90 DAYS" />
          <StatCard label="Daily Outreach" value="20–50" sub="SCALING TO 100/DAY" />
          <StatCard label="OS Skills" value="200" sub="8 MODULES" />
        </section>

        {/* Revenue engines */}
        <section className="flex flex-col gap-3">
          <SectionLabel>Revenue Engines</SectionLabel>
          <div className="grid gap-3 md:grid-cols-3">
            {revenueEngines.map((engine, i) => (
              <Card key={engine.name}>
                <div className="flex items-center justify-between">
                  <p className="font-mono text-sm font-semibold text-foreground">{engine.name}</p>
                  <Tag tone="primary">{`ENGINE ${String(i + 1).padStart(2, "0")}`}</Tag>
                </div>
                <ul className="mt-3 flex flex-col gap-2">
                  {engine.items.map((item) => (
                    <li key={item.label} className="flex items-baseline justify-between gap-2 text-sm">
                      <span className="text-muted-foreground">{item.label}</span>
                      {item.value ? <span className="shrink-0 font-mono text-xs text-primary">{item.value}</span> : null}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Daily OS */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <SectionLabel>Daily Operating System — 90 Minutes</SectionLabel>
            <Tag tone="accent">Non-negotiable</Tag>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {dailyOS.map((block) => (
              <Card key={block.title}>
                <p className="font-mono text-[10px] tracking-widest text-primary">{block.block}</p>
                <p className="mt-1 font-mono text-base font-semibold">{block.title}</p>
                <ul className="mt-3 flex flex-col gap-2">
                  {block.tasks.map((task) => (
                    <li key={task} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                      <span className="text-primary" aria-hidden="true">
                        →
                      </span>
                      {task}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Weekly + Monthly */}
        <section className="grid gap-3 md:grid-cols-2">
          <Card>
            <SectionLabel>Weekly Scoreboard</SectionLabel>
            <ul className="mt-3 flex flex-col gap-2">
              {weekly.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-mono text-primary" aria-hidden="true">
                    [W]
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <SectionLabel>Monthly Scoreboard</SectionLabel>
            <ul className="mt-3 flex flex-col gap-2">
              {monthly.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-mono text-accent" aria-hidden="true">
                    [M]
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Card>
        </section>

        {/* Brand voice */}
        <section className="flex flex-col gap-3">
          <SectionLabel>Brand Voice — How JBizz Sounds</SectionLabel>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {brand.map((b) => (
              <Card key={b.trait}>
                <p className="font-mono text-sm font-semibold text-primary">{b.trait}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{b.meaning}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* Section links */}
        <section className="flex flex-col gap-3">
          <SectionLabel>System Modules</SectionLabel>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: "/calendar", code: "SEC-02", title: "90-Day Execution Calendar", desc: "Dated plan, phase by phase, with KPIs per month." },
              { href: "/leads", code: "SEC-03", title: "Lead Gen & Outreach", desc: "Permit + local scraping workflows and full script flows." },
              { href: "/products", code: "SEC-04", title: "Gumroad Product Roadmap", desc: "30 products across 3 phases with deliverables and pricing." },
              { href: "/playbooks", code: "SEC-05", title: "SOPs & Playbooks", desc: "Five-star standards, department playbooks, org chart." },
              { href: "/skills", code: "SEC-06", title: "JBizz-OS Architecture", desc: "The 200-skill system across 8 modules." },
            ].map((mod) => (
              <Link
                key={mod.href}
                href={mod.href}
                className="group rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/50"
              >
                <p className="font-mono text-[10px] tracking-widest text-muted-foreground">{mod.code}</p>
                <p className="mt-1 flex items-center gap-2 font-mono text-sm font-semibold text-foreground group-hover:text-primary">
                  {mod.title}
                  <ArrowRight size={14} aria-hidden="true" />
                </p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{mod.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
