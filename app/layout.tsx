import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Nav } from "@/components/nav"
import "./globals.css"

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "JBizz-OS | Command Center",
  description:
    "The full operating manual for JBizz Web Developments — mobile-only, AI-powered web development and automation studio. 90-day calendar, lead gen systems, product roadmap, SOPs, and the 200-skill OS.",
}

export const viewport: Viewport = {
  themeColor: "#0a0f0c",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`bg-background ${geist.variable} ${geistMono.variable}`}>
      <body className="min-h-dvh antialiased">
        <div className="flex min-h-dvh flex-col md:flex-row">
          <Nav />
          <main className="flex-1 pb-20 md:pb-0">{children}</main>
        </div>
      </body>
    </html>
  )
}
