import type { Metadata } from "next"
import { PageHeader, SectionLabel } from "@/components/ui"
import { SkillsBrowser } from "@/components/skills-browser"

export const metadata: Metadata = {
  title: "JBizz-OS Architecture | JBizz-OS",
  description: "The 200-skill operating system: 8 modules covering automation, scraping, SEO, web builds, outreach, content, delivery, and scaling.",
}

export default function SkillsPage() {
  return (
    <div>
      <PageHeader
        code="SEC-06 // OS ARCHITECTURE"
        title="JBizz-OS: The 200-Skill System"
        description="Eight modules, twenty-five skills each. Every skill gets documented as a prompt, workflow, template, or SOP — then productized. Search or filter by module."
      />
      <div className="flex flex-col gap-4 px-4 py-6 md:px-8">
        <SectionLabel>Skill Registry — 200 / 200</SectionLabel>
        <SkillsBrowser />
      </div>
    </div>
  )
}
