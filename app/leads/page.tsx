import type { Metadata } from "next"
import { PageHeader, SectionLabel, Card, Tag } from "@/components/ui"
import { CopyButton } from "@/components/copy-button"

export const metadata: Metadata = {
  title: "Lead Gen & Outreach | JBizz-OS",
  description: "Permit scraping and local business scraping workflows plus full multi-step outreach script flows.",
}

const workflows = [
  {
    name: "Permit Scraping Engine",
    target: "Contractors in Broward + Miami-Dade",
    volume: "20–50 messages/day",
    steps: [
      { step: "Scrape", detail: "Pull daily permit filings from Broward + Miami-Dade public permit portals. Capture contractor name, license, trade, permit type, address, and date." },
      { step: "Filter", detail: "Keep active trades most likely to need web + lead gen: roofing, HVAC, plumbing, electrical, GC. Drop permits older than 14 days." },
      { step: "Enrich", detail: "Look up phone, email, website, and Google rating. Flag contractors with no website or a rating under 4.0 as high priority." },
      { step: "Generate", detail: "AI writes a personalized first message referencing their specific permit (trade + city). One message per contractor, never generic." },
      { step: "Send + Log", detail: "Send 20–50/day via SMS or email. Log every send, open, and reply in the lead tracker with a follow-up date." },
    ],
    errorHandling: [
      "Portal layout changes → scraper fails loudly, never silently returns empty",
      "Duplicate contractors → dedupe on license number before outreach",
      "Bounced contact info → mark dead, never re-send",
    ],
  },
  {
    name: "Local Business Scraping Engine",
    target: "Local businesses with weak web presence",
    volume: "20–50 messages/day",
    steps: [
      { step: "Scrape", detail: "Pull Google Maps listings by category (restaurants, salons, gyms, auto shops, cleaners) within target zip codes." },
      { step: "Score", detail: "Score each lead 1–10: website quality (0–3), online presence (0–3), demand level (0–2), responsiveness likelihood (0–2). Score 7+ = high priority." },
      { step: "Demo", detail: "Auto-build a personalized demo landing page for every 7+ lead using their real name, photos, and reviews. The demo IS the pitch." },
      { step: "Outreach", detail: "Send message with the live demo link: they see their own business looking better than their current site before they ever reply." },
      { step: "Convert", detail: "Reply → same-day call or text thread → close at $300–$1,500. Demo page transfers to them on payment." },
    ],
    errorHandling: [
      "Rate limits → throttle scraping, rotate categories daily",
      "Wrong business data on demo → verify name + photos before sending, one bad demo kills trust",
      "No response after 3 touches → move to nurture list, recycle in 30 days",
    ],
  },
]

const scoring = [
  { criteria: "Website quality", points: "0–3", note: "None or broken = 3, outdated = 2, decent = 1, great = 0" },
  { criteria: "Online presence", points: "0–3", note: "Weak socials/reviews = high score = high opportunity" },
  { criteria: "Business demand", points: "0–2", note: "Active permits, ads, or hiring = demand signals" },
  { criteria: "Responsiveness", points: "0–2", note: "Owner-operated + active on Google = likely to reply" },
]

const scriptFlows = [
  {
    name: "Outreach Flow",
    context: "Contractor with a fresh permit, or local business receiving a demo link.",
    steps: [
      {
        label: "TOUCH 1 — OPENER",
        text: "Hey, saw your recent permit for the roofing job in Hollywood — I build fast, mobile-optimized sites and automations from my phone. Want a free demo built for your business today?",
      },
      {
        label: "TOUCH 2 — VALUE FOLLOW-UP (48HRS)",
        text: "Following up — I already built a quick demo of what your site could look like: [demo link]. Took me 20 minutes. Imagine what I can do with a full build. Worth a look?",
      },
      {
        label: "TOUCH 3 — LAST CALL (5 DAYS)",
        text: "Last one from me — the demo stays live through Friday. If the timing's wrong, no stress. If you want more calls from your Google listing, reply and I'll walk you through it in 5 minutes.",
      },
    ],
  },
  {
    name: "Sales Flow",
    context: "Lead replied. Goal: close same-day with a clear scope and price.",
    steps: [
      {
        label: "STEP 1 — FRAME",
        text: "Here's what I can build for you today: a mobile-first site that loads instantly, ranks locally, and turns visitors into calls. Fast delivery. AI-powered. No agencies, no waiting weeks.",
      },
      {
        label: "STEP 2 — SCOPE + PRICE",
        text: "Two options: (1) Launch site — 5 sections, mobile-first, SEO basics, live in 48–72 hours: $500. (2) Growth build — everything in Launch plus booking, reviews automation, and a lead capture system: $1,200. Which fits?",
      },
      {
        label: "STEP 3 — CLOSE",
        text: "Perfect. I take 50% to start, 50% at launch. Send over your logo and any photos you want used — I'll have the first version to you within 48 hours.",
      },
      {
        label: "STEP 4 — UPSELL AT DELIVERY",
        text: "Site's live. Most clients add the $150/mo maintenance plan — updates, backups, SEO tweaks, and priority support. Want me to include your first month free?",
      },
    ],
  },
  {
    name: "Content Flow",
    context: "Daily micro content + weekly long-form. Every piece CTAs to Gumroad or services.",
    steps: [
      {
        label: "DAILY MICRO",
        text: "Here's how I build websites and automations entirely from my phone using AI. Today: [one specific tactic — a build, an automation, a before/after]. Full system in my JBizz-OS pack — link in bio.",
      },
      {
        label: "WEEKLY LONG-FORM",
        text: "Breakdown: how I [built X / automated Y / closed Z client] this week from an Android phone. Step-by-step with the exact prompts and tools. If you want the templates, they're in the pack: [Gumroad link].",
      },
      {
        label: "PROOF POST",
        text: "Client result: [metric — new site live in 48hrs / 3x more calls / automated their whole intake]. This is what mobile-first, AI-powered delivery looks like. Want yours? DM me 'BUILD'.",
      },
    ],
  },
  {
    name: "Delivery Flow",
    context: "Build is done. Goal: five-star handoff that generates referrals and reviews.",
    steps: [
      {
        label: "STEP 1 — LAUNCH",
        text: "Your site is live: [link]. Here's your automation pack, and here's your SEO setup — titles, descriptions, and Google Business profile all optimized.",
      },
      {
        label: "STEP 2 — WALKTHROUGH",
        text: "Quick walkthrough video attached: how to update text, check your leads, and what the automations do. Everything runs itself — you just answer the phone.",
      },
      {
        label: "STEP 3 — REVIEW ASK",
        text: "If the experience earned it, a quick Google review goes a long way for a one-man studio: [review link]. Takes 60 seconds.",
      },
      {
        label: "STEP 4 — REFERRAL LOOP",
        text: "One more thing — know another business owner who needs this? For every referral that closes, you get a free month of maintenance. No limit.",
      },
    ],
  },
]

export default function LeadsPage() {
  return (
    <div>
      <PageHeader
        code="SEC-03 // LEAD GENERATION"
        title="Lead Gen & Outreach Systems"
        description="Two scraping engines feed one AI outreach machine. Every lead is scored, every message is personalized, every script is a multi-step flow — not a one-shot."
      />

      <div className="flex flex-col gap-10 px-4 py-6 md:px-8">
        {/* Workflows */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Scraping Engines</SectionLabel>
          <div className="grid gap-4 lg:grid-cols-2">
            {workflows.map((wf) => (
              <Card key={wf.name} className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-mono text-sm font-semibold text-foreground">{wf.name}</p>
                  <Tag tone="primary">{wf.volume}</Tag>
                </div>
                <p className="text-xs text-muted-foreground">TARGET: {wf.target}</p>
                <ol className="flex flex-col gap-3">
                  {wf.steps.map((s, i) => (
                    <li key={s.step} className="flex gap-3">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded border border-primary/40 bg-primary/10 font-mono text-[10px] font-bold text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <p className="font-mono text-xs font-semibold tracking-wider text-foreground uppercase">{s.step}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{s.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
                <div className="rounded border border-accent/30 bg-accent/5 p-3">
                  <p className="font-mono text-[10px] tracking-widest text-accent uppercase">Error Handling</p>
                  <ul className="mt-2 flex flex-col gap-1">
                    {wf.errorHandling.map((e) => (
                      <li key={e} className="text-xs leading-relaxed text-muted-foreground">
                        {e}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Lead scoring */}
        <section className="flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <SectionLabel>Lead Qualification Model</SectionLabel>
            <Tag tone="accent">Score 7+ = high priority</Tag>
          </div>
          <Card className="overflow-x-auto p-0">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                  <th className="px-4 py-3 font-semibold">Criteria</th>
                  <th className="px-4 py-3 font-semibold">Points</th>
                  <th className="px-4 py-3 font-semibold">How to score it</th>
                </tr>
              </thead>
              <tbody>
                {scoring.map((row) => (
                  <tr key={row.criteria} className="border-b border-border last:border-0">
                    <td className="px-4 py-3 font-medium text-foreground">{row.criteria}</td>
                    <td className="px-4 py-3 font-mono text-primary">{row.points}</td>
                    <td className="px-4 py-3 text-muted-foreground">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </section>

        {/* Script flows */}
        <section className="flex flex-col gap-4">
          <SectionLabel>Script Flows — Copy &amp; Send</SectionLabel>
          <div className="grid gap-4 lg:grid-cols-2">
            {scriptFlows.map((flow) => (
              <Card key={flow.name} className="flex flex-col gap-3">
                <div>
                  <p className="font-mono text-sm font-semibold text-foreground">{flow.name}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{flow.context}</p>
                </div>
                <div className="flex flex-col gap-3">
                  {flow.steps.map((step) => (
                    <div key={step.label} className="rounded border border-border bg-background p-3">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-mono text-[10px] tracking-widest text-primary">{step.label}</p>
                        <CopyButton text={step.text} />
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{`"${step.text}"`}</p>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
