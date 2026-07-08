import type { ReactNode } from "react"

export function PageHeader({
  code,
  title,
  description,
}: {
  code: string
  title: string
  description: string
}) {
  return (
    <header className="border-b border-border px-4 py-6 md:px-8">
      <p className="font-mono text-xs tracking-widest text-primary">{code}</p>
      <h1 className="mt-1 font-mono text-2xl font-bold tracking-tight text-balance md:text-3xl">{title}</h1>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground text-pretty">{description}</p>
    </header>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-mono text-xs font-semibold tracking-widest text-muted-foreground uppercase">{children}</h2>
  )
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-lg border border-border bg-card p-4 ${className}`}>{children}</div>
}

export function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <Card>
      <p className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{label}</p>
      <p className="mt-1 font-mono text-2xl font-bold text-foreground md:text-3xl">{value}</p>
      {sub ? <p className="mt-1 font-mono text-xs text-primary">{sub}</p> : null}
    </Card>
  )
}

export function Tag({ children, tone = "default" }: { children: ReactNode; tone?: "default" | "primary" | "accent" }) {
  const tones = {
    default: "border-border text-muted-foreground",
    primary: "border-primary/40 bg-primary/10 text-primary",
    accent: "border-accent/40 bg-accent/10 text-accent",
  }
  return (
    <span className={`inline-flex items-center rounded border px-2 py-0.5 font-mono text-[10px] tracking-wider uppercase ${tones[tone]}`}>
      {children}
    </span>
  )
}
