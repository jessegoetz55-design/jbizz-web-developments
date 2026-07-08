"use client"

import { useMemo, useState } from "react"
import { Search } from "lucide-react"
import { modules } from "@/lib/skills-data"
import { Card, Tag } from "@/components/ui"

export function SkillsBrowser() {
  const [activeModule, setActiveModule] = useState<string>("all")
  const [query, setQuery] = useState("")

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return modules
      .filter((m) => activeModule === "all" || m.id === activeModule)
      .map((m) => ({
        ...m,
        skills: q ? m.skills.filter((s) => s.toLowerCase().includes(q)) : m.skills,
      }))
      .filter((m) => m.skills.length > 0)
  }, [activeModule, query])

  const totalShown = filtered.reduce((acc, m) => acc + m.skills.length, 0)

  return (
    <div className="flex flex-col gap-4">
      {/* Controls */}
      <div className="flex flex-col gap-3">
        <div className="relative">
          <Search
            size={16}
            aria-hidden="true"
            className="absolute top-1/2 left-3 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search 200 skills..."
            aria-label="Search skills"
            className="w-full rounded-lg border border-border bg-card py-2 pr-3 pl-9 font-mono text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
          />
        </div>
        <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Filter by module">
          <button
            type="button"
            role="tab"
            aria-selected={activeModule === "all"}
            onClick={() => setActiveModule("all")}
            className={`rounded border px-2.5 py-1 font-mono text-xs transition-colors ${
              activeModule === "all"
                ? "border-primary/40 bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:text-foreground"
            }`}
          >
            ALL
          </button>
          {modules.map((m) => (
            <button
              key={m.id}
              type="button"
              role="tab"
              aria-selected={activeModule === m.id}
              onClick={() => setActiveModule(m.id)}
              className={`rounded border px-2.5 py-1 font-mono text-xs transition-colors ${
                activeModule === m.id
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border text-muted-foreground hover:text-foreground"
              }`}
            >
              {m.name.toUpperCase()}
            </button>
          ))}
        </div>
        <p className="font-mono text-xs text-muted-foreground" aria-live="polite">
          SHOWING {totalShown} SKILLS
        </p>
      </div>

      {/* Modules */}
      {filtered.length === 0 ? (
        <Card>
          <p className="text-sm text-muted-foreground">No skills match that search.</p>
        </Card>
      ) : (
        <div className="flex flex-col gap-4">
          {filtered.map((mod) => (
            <Card key={mod.id} className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-widest text-muted-foreground">{mod.code}</span>
                  <p className="font-mono text-sm font-semibold text-foreground">{mod.name}</p>
                </div>
                <Tag tone="primary">{`${mod.skills.length} SKILLS`}</Tag>
              </div>
              <p className="text-xs italic text-muted-foreground">{`"${mod.mission}"`}</p>
              <ul className="grid gap-x-4 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3">
                {mod.skills.map((skill, i) => (
                  <li key={skill} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="shrink-0 font-mono text-[10px] leading-6 text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
