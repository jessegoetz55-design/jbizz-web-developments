import type { Metadata } from "next"
import { PageHeader, SectionLabel, Card, Tag } from "@/components/ui"

export const metadata: Metadata = {
  title: "SOPs & Playbooks | JBizz-OS",
  description: "Five-star company standards, standard operating procedures, department playbooks, and the JBizz org chart.",
}

const standards = [
  {
    name: "Speed",
    rule: "Same-day replies. 48–72hr builds. Demos before they ask.",
    sop: ["Reply to every lead within 4 business hours", "Quote turnaround time in the first sales message", "If a deadline is at risk, tell the client before they notice"],
  },
  {
    name: "Quality",
    rule: "Everything ships mobile-first, fast-loading, and tested.",
    sop: ["Run the mobile QA checklist on every build before delivery", "No page ships with placeholder text or broken links", "Client sees a preview link before final launch"],
  },
  {
    name: "Communication",
    rule: "Clients always know status without asking.",
    sop: ["Status update at kickoff, midpoint, and launch — minimum", "One channel per client (text or email), no scattered threads", "Every message ends with the next step and who owns it"],
  },
  {
    name: "Professionalism",
    rule: "One-man studio, enterprise standards.",
    sop: ["Written scope + price before any work starts", "50/50 payment terms in writing, invoiced properly", "Never talk down a competitor — outperform them"],
  },
  {
    name: "Delivery",
    rule: "Handoff is a product, not an afterthought.",
    sop: ["Every delivery includes: live link, walkthrough, automation pack, SEO setup", "Client gets everything they need to operate without you", "Delivery flow scripts used verbatim — consistency wins reviews"],
  },
  {
    name: "Follow-through",
    rule: "The sale ends at the review and the referral, not the launch.",
    sop: ["Review ask within 48 hours of launch", "Referral offer made at delivery, tracked in the lead sheet", "30-day post-launch check-in on every client"],
  },
]

const departments = [
  { name: "Web Development", mission: "48–72hr mobile-first builds", owns: ["Client builds", "Demo pages", "Templates"] },
  { name: "Automation", mission: "If it repeats 3+ times, systemize it", owns: ["Automation builds", "Delivery pipelines", "Tool stack"] },
  { name: "Lead Gen", mission: "Fill the pipeline daily", owns: ["Permit engine", "Local engine", "Lead scoring"] },
  { name: "Content", mission: "Daily proof, weekly depth", owns: ["Micro content", "Long-form", "CTAs to products"] },
  { name: "Product Creation", mission: "Productize everything", owns: ["Gumroad catalog", "Bundles", "JBizz-OS releases"] },
  { name: "Client Success", mission: "Five-star handoffs, recurring revenue", owns: ["Onboarding", "Delivery", "Reviews + referrals"] },
]

const playbooks = [
  {
    name: "Sales Playbook",
    tag: "CLOSE",
    plays: [
      "Lead replies → respond within 4 hours with the two-option offer (Launch $500 / Growth $1,200)",
      "Always anchor on outcome: more calls, more bookings, less admin time",
      "Objection 'too expensive' → drop scope, never price-per-hour",
      "Objection 'need to think' → keep the demo live 5 days, set a follow-up date on the spot",
      "Close = 50% deposit collected. Nothing is a deal until money moves",
    ],
  },
  {
    name: "Delivery Playbook",
    tag: "SHIP",
    plays: [
      "Kickoff same day as deposit: collect logo, photos, and business info in one message",
      "Build from templates — customize the 20% that makes it theirs",
      "Midpoint preview link within 24–36 hours",
      "Launch with the full Delivery Flow: link + walkthrough + automation pack + SEO setup",
      "Log every build's time-to-deliver; anything over 72hrs triggers a process review",
    ],
  },
  {
    name: "Support Playbook",
    tag: "RETAIN",
    plays: [
      "Maintenance clients get responses within 1 business day, fixes within 3",
      "Every support ticket logged with issue, fix, and time spent",
      "Recurring issues become automation candidates immediately",
      "Quarterly check-in offering one free improvement — retention beats acquisition",
    ],
  },
  {
    name: "Automation Playbook",
    tag: "SYSTEMIZE",
    plays: [
      "Weekly automation review: what did I do manually 3+ times this week?",
      "Every automation gets a blueprint: trigger → steps → output → failure mode",
      "Automations fail loudly — silent failures are forbidden",
      "Every internal automation is a future Gumroad product",
    ],
  },
  {
    name: "Content Playbook",
    tag: "ATTRACT",
    plays: [
      "1 micro piece daily: a build, a tactic, or a result — always specific",
      "1 long-form weekly: full breakdown with exact prompts and tools",
      "Every piece CTAs to Gumroad or DM — no orphan content",
      "Client wins become proof posts within 48 hours (with permission)",
    ],
  },
  {
    name: "Product Playbook",
    tag: "PRODUCTIZE",
    plays: [
      "Every product ships with: description, deliverables, prompts, templates, visuals",
      "Price singles $9–$49, bundle at $79–$149 once 3+ related products exist",
      "Launch day = 3 content pieces pointing at the product",
      "Update top sellers monthly; updates re-trigger buyer emails on Gumroad",
    ],
  },
]

export default function PlaybooksPage() {
  return (
    <div>
      <PageHeader
        code="SEC-05 // OPERATIONS"
        title="SOPs, Playbooks & Org Chart"
        description="Six five-star standards, each backed by an SOP. Six departments — all currently staffed by one operator and an AI stack. The org chart is real; the headcount is one."
      />

      <div className="flex flex-col gap-10 px-4 py-6 md:px-8">
        {/* Five-star standards */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Five-Star Company Standards</SectionLabel>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {standards.map((s, i) => (
              <Card key={s.name} className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-sm font-semibold text-primary">{s.name}</p>
                  <span className="font-mono text-[10px] text-muted-foreground">{`STD-${String(i + 1).padStart(2, "0")}`}</span>
                </div>
                <p className="text-sm font-medium text-foreground text-pretty">{s.rule}</p>
                <ul className="mt-1 flex flex-col gap-1.5">
                  {s.sop.map((item) => (
                    <li key={item} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                      <span className="text-primary" aria-hidden="true">
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Org chart */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <SectionLabel>Org Chart</SectionLabel>
            <Tag tone="accent">Headcount: 1 + AI</Tag>
          </div>
          <div className="flex flex-col items-center gap-0">
            <Card className="w-full max-w-xs border-primary/40 text-center">
              <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Founder / Operator</p>
              <p className="mt-1 font-mono text-base font-bold text-primary">Jesse — JBizz</p>
              <p className="mt-1 text-xs text-muted-foreground">All departments report here. AI does the leverage; Jesse does the decisions.</p>
            </Card>
            <div className="h-6 w-px bg-border" aria-hidden="true" />
            <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {departments.map((dept) => (
                <Card key={dept.name}>
                  <p className="font-mono text-sm font-semibold text-foreground">{dept.name}</p>
                  <p className="mt-1 text-xs italic text-muted-foreground">{`"${dept.mission}"`}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {dept.owns.map((o) => (
                      <span key={o} className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                        {o}
                      </span>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Department playbooks */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Department Playbooks</SectionLabel>
          <div className="grid gap-3 lg:grid-cols-2">
            {playbooks.map((pb) => (
              <Card key={pb.name} className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-sm font-semibold text-foreground">{pb.name}</p>
                  <Tag tone="primary">{pb.tag}</Tag>
                </div>
                <ol className="flex flex-col gap-2">
                  {pb.plays.map((play, i) => (
                    <li key={play} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="shrink-0 font-mono text-xs font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
                      {play}
                    </li>
                  ))}
                </ol>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
