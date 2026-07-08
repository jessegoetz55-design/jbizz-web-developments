import type { Metadata } from "next"
import { PageHeader, SectionLabel, Card, Tag } from "@/components/ui"

export const metadata: Metadata = {
  title: "Gumroad Product Roadmap | JBizz-OS",
  description: "30 digital products across 3 phases with pricing, deliverables, and release schedule.",
}

type Product = {
  name: string
  price: string
  desc: string
  deliverables: string[]
}

const phases: {
  phase: string
  window: string
  summary: string
  products: Product[]
}[] = [
  {
    phase: "PHASE 1 — LAUNCH STACK",
    window: "WEEKS 1–2",
    summary: "Six fast, high-utility packs that prove the JBizz method and start the daily sales flywheel.",
    products: [
      {
        name: "JBizz-OS Starter Pack",
        price: "$29",
        desc: "The entry point to the operating system: core skills, prompts, and the mobile-first workflow.",
        deliverables: ["25 starter skills", "Prompt library", "Daily OS checklist", "Setup guide (phone-only)"],
      },
      {
        name: "Outreach Automation Pack",
        price: "$19",
        desc: "The full multi-touch outreach machine: scripts, follow-up cadences, and tracking templates.",
        deliverables: ["3-touch script flows", "Follow-up cadence map", "Lead tracker template", "Personalization prompts"],
      },
      {
        name: "Client Delivery Automation Pack",
        price: "$19",
        desc: "Templated onboarding, delivery, and handoff so every client gets the five-star experience.",
        deliverables: ["Onboarding sequence", "Delivery email templates", "Walkthrough script", "Review + referral flow"],
      },
      {
        name: "Content Automation Pack",
        price: "$19",
        desc: "Daily micro content and weekly long-form on autopilot, all CTAing back to products and services.",
        deliverables: ["30-day content calendar", "Hook templates", "Proof-post formulas", "Repurposing workflow"],
      },
      {
        name: "Permit Scraping Pack",
        price: "$39",
        desc: "The contractor lead engine: scrape county permits, enrich, and generate personalized outreach.",
        deliverables: ["Scraping workflow + tools list", "Enrichment checklist", "Contractor scripts", "Error-handling SOP"],
      },
      {
        name: "Landing Page Speed Pack",
        price: "$19",
        desc: "Build a client-ready landing page from a phone in under an hour.",
        deliverables: ["5 page templates", "Copy prompts by niche", "Mobile QA checklist", "Deploy guide"],
      },
    ],
  },
  {
    phase: "PHASE 2 — AUTHORITY STACK",
    window: "WEEKS 3–4",
    summary: "Deeper systems at higher prices: JBizz-OS Pro plus niche domination packs that own specific verticals.",
    products: [
      {
        name: "JBizz-OS Pro",
        price: "$49",
        desc: "The expanded operating system: 75+ skills across automation, scraping, SEO, and delivery.",
        deliverables: ["75+ skills", "Module workflows", "Advanced prompt chains", "Scaling SOPs"],
      },
      {
        name: "Niche Domination: Contractors",
        price: "$29",
        desc: "Everything to own the contractor niche: offers, scripts, demos, and delivery templates.",
        deliverables: ["Contractor offer stack", "Permit outreach system", "Demo site template", "Pricing scripts"],
      },
      {
        name: "Niche Domination: Restaurants",
        price: "$29",
        desc: "Menu-first mobile sites, review automation, and local SEO for food businesses.",
        deliverables: ["Restaurant site template", "Review automation", "Local SEO checklist", "Outreach scripts"],
      },
      {
        name: "Niche Domination: Home Services",
        price: "$29",
        desc: "Salons, cleaners, landscapers, auto shops — the high-volume local services playbook.",
        deliverables: ["Services site template", "Booking automation", "Lead scoring model", "Outreach scripts"],
      },
      {
        name: "Local SEO Pack",
        price: "$29",
        desc: "Rank local businesses from a phone: Google Business, on-page, citations, and reviews.",
        deliverables: ["GBP optimization SOP", "On-page checklist", "Citation list", "Review generation flow"],
      },
      {
        name: "48-Hour Web Build Pack",
        price: "$39",
        desc: "The complete JBizz build system: from closed deal to live site in 48–72 hours, phone-only.",
        deliverables: ["Build workflow", "Section templates", "AI copy prompts", "Launch + handoff checklist"],
      },
    ],
  },
  {
    phase: "PHASE 3 — ENTERPRISE STACK",
    window: "MONTHS 2–3",
    summary: "Flagship systems and bundles: the full OS, complete lead gen machines, and the automation suite.",
    products: [
      {
        name: "JBizz-OS Enterprise",
        price: "$99",
        desc: "The complete 200-skill operating system across all 8 modules, with every SOP and workflow.",
        deliverables: ["200 skills", "All 8 module playbooks", "Full SOP library", "90-day execution calendar"],
      },
      {
        name: "Full Automation Suite",
        price: "$79",
        desc: "Every JBizz automation in one package: outreach, content, delivery, scraping, and product creation.",
        deliverables: ["8 automation blueprints", "Trigger maps", "Tool stack guide", "Maintenance SOP"],
      },
      {
        name: "Contractor Lead Gen System",
        price: "$59",
        desc: "The productized permit engine: a business-in-a-box for anyone selling to contractors.",
        deliverables: ["Full scraping system", "Enrichment + scoring", "Outreach engine", "Close + delivery scripts"],
      },
      {
        name: "Local Business Lead Gen System",
        price: "$59",
        desc: "The productized local engine: scrape, score, demo, and close local businesses at scale.",
        deliverables: ["Maps scraping system", "Demo page generator flow", "Scoring model", "Conversion scripts"],
      },
      {
        name: "The JBizz Everything Bundle",
        price: "$149",
        desc: "Every product in the catalog. The whole operating manual, productized.",
        deliverables: ["All 30 products", "Priority updates", "Bonus: private prompt vault"],
      },
      {
        name: "Operator Bundle",
        price: "$79",
        desc: "The execution core: OS Pro + Automation Suite + Outreach Pack for people who just want to run the system.",
        deliverables: ["JBizz-OS Pro", "Full Automation Suite", "Outreach Automation Pack"],
      },
    ],
  },
]

export default function ProductsPage() {
  return (
    <div>
      <PageHeader
        code="SEC-04 // PRODUCT ROADMAP"
        title="Gumroad Product Roadmap"
        description="30+ products in 90 days across three phases. Singles at $9–$49, bundles at $79–$149. Every product is a productized piece of the JBizz system — build once, sell forever."
      />

      <div className="flex flex-col gap-10 px-4 py-6 md:px-8">
        {phases.map((phase) => (
          <section key={phase.phase} className="flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <SectionLabel>{phase.phase}</SectionLabel>
              <Tag tone="primary">{phase.window}</Tag>
            </div>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">{phase.summary}</p>
            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
              {phase.products.map((product) => (
                <Card key={product.name} className="flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-mono text-sm font-semibold text-foreground text-balance">{product.name}</p>
                    <span className="shrink-0 rounded border border-primary/40 bg-primary/10 px-2 py-0.5 font-mono text-xs font-bold text-primary">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{product.desc}</p>
                  <div className="mt-auto">
                    <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">Deliverables</p>
                    <ul className="mt-2 flex flex-col gap-1">
                      {product.deliverables.map((d) => (
                        <li key={d} className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                          <span className="text-primary" aria-hidden="true">
                            +
                          </span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
