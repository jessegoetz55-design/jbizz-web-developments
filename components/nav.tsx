"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  CalendarDays,
  Radar,
  Package,
  BookOpenCheck,
  Cpu,
} from "lucide-react"

const links = [
  { href: "/", label: "Command", short: "CMD", icon: LayoutDashboard },
  { href: "/calendar", label: "90-Day Plan", short: "PLAN", icon: CalendarDays },
  { href: "/leads", label: "Lead Gen", short: "LEADS", icon: Radar },
  { href: "/products", label: "Products", short: "PROD", icon: Package },
  { href: "/playbooks", label: "Playbooks", short: "SOPS", icon: BookOpenCheck },
  { href: "/skills", label: "JBizz-OS", short: "OS", icon: Cpu },
]

export function Nav() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop sidebar */}
      <nav
        aria-label="Main navigation"
        className="sticky top-0 hidden h-dvh w-56 shrink-0 flex-col border-r border-border bg-card md:flex"
      >
        <div className="border-b border-border p-4">
          <p className="font-mono text-xs tracking-widest text-muted-foreground">OPERATING SYSTEM</p>
          <p className="mt-1 font-mono text-lg font-bold tracking-tight text-foreground">
            JBIZZ<span className="text-primary">-OS</span>
          </p>
        </div>
        <div className="flex flex-col gap-1 p-2">
          {links.map(({ href, label, icon: Icon }) => {
            const active = pathname === href
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 font-mono text-sm transition-colors ${
                  active
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Icon size={16} aria-hidden="true" />
                {label}
              </Link>
            )
          })}
        </div>
        <div className="mt-auto border-t border-border p-4">
          <p className="font-mono text-xs text-muted-foreground">
            BUILT FROM A PHONE.
            <br />
            <span className="text-primary">100% MOBILE. 100% AI.</span>
          </p>
        </div>
      </nav>

      {/* Mobile top bar */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-card px-4 py-3 md:hidden">
        <p className="font-mono text-base font-bold tracking-tight">
          JBIZZ<span className="text-primary">-OS</span>
        </p>
        <p className="font-mono text-xs tracking-widest text-muted-foreground">ENTERPRISE BUILD</p>
      </header>

      {/* Mobile bottom nav */}
      <nav
        aria-label="Main navigation"
        className="fixed inset-x-0 bottom-0 z-40 flex justify-around border-t border-border bg-card px-1 py-2 md:hidden"
      >
        {links.map(({ href, short, icon: Icon }) => {
          const active = pathname === href
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={`flex flex-col items-center gap-1 rounded-lg px-2 py-1 font-mono text-[10px] tracking-wider ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon size={18} aria-hidden="true" />
              {short}
            </Link>
          )
        })}
      </nav>
    </>
  )
}
