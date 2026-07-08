import type { Pack } from "./types"

export const phase1Packs: Pack[] = [
  {
    slug: "jbizz-os-starter",
    name: "JBizz-OS Starter Pack",
    price: "$29",
    phase: 1,
    category: "Operating System",
    tagline: "The entry point to the phone-only operating system.",
    description:
      "25 core skills, the daily 90-minute OS, and the mobile-first workflow that runs the entire JBizz business from an Android phone. This is the foundation every other pack builds on.",
    gumroadListing:
      "Run a real web dev business from your phone. JBizz-OS Starter gives you 25 battle-tested skills, a 90-minute daily operating system, and the exact AI prompts I use to build sites, close clients, and ship automations — all without touching a laptop. No fluff. Install the system, run the checklist, get paid.",
    deliverables: [
      "25 starter skills across all 8 modules",
      "The 90-minute daily OS checklist",
      "Core prompt library (build, sell, deliver)",
      "Phone-only setup guide (tools + workflow)",
      "Weekly review scorecard",
    ],
    prompts: [
      {
        title: "Daily OS Kickoff",
        prompt:
          "You are my JBizz-OS operator. It is [DAY/DATE]. My 90-minute block is: 30 min outreach, 30 min product building, 30 min skill creation. Current pipeline: [PASTE PIPELINE]. Current product in progress: [PRODUCT]. Give me: 1) the exact 3 outreach targets to hit today with draft messages, 2) the single highest-leverage product task, 3) one new skill to document. Keep it brutal and specific.",
      },
      {
        title: "Skill Documenter",
        prompt:
          "Convert this workflow I just did into a reusable JBizz-OS skill. Workflow: [DESCRIBE WHAT YOU DID]. Output format: Skill name, Module (Automation/Scraping/SEO/Web Builds/Outreach/Content/Delivery/Scaling), Trigger (when to use it), Steps (numbered, phone-executable), Prompt (the exact reusable AI prompt), Success criteria.",
      },
      {
        title: "Weekly Review",
        prompt:
          "Run my JBizz weekly review. This week's numbers: outreach sent [N], replies [N], calls [N], closes [N], revenue $[N], products shipped [N], skills added [N]. Targets were: [TARGETS]. Tell me: what's working, what's broken, the ONE bottleneck to fix next week, and my adjusted daily targets.",
      },
    ],
    templates: [
      {
        title: "90-Minute Daily OS Checklist",
        body: "BLOCK 1 — OUTREACH (30 min)\n[ ] Pull today's leads from scraper\n[ ] Send 10-20 first-touch messages\n[ ] Send all due follow-ups (day 2, day 5)\n[ ] Log replies in tracker\n\nBLOCK 2 — PRODUCT (30 min)\n[ ] One task on current Gumroad product\n[ ] Screenshot progress for content\n\nBLOCK 3 — OS (30 min)\n[ ] Document 1 new skill from today's work\n[ ] Post 1 piece of micro content\n[ ] Update pipeline tracker",
      },
      {
        title: "Pipeline Tracker (columns)",
        body: "LEAD | SOURCE (permit/maps/inbound) | NICHE | FIRST TOUCH DATE | LAST TOUCH | STAGE (new/contacted/replied/call/proposal/closed/dead) | VALUE | NEXT ACTION | NEXT ACTION DATE",
      },
    ],
    buildSop: [
      "Install a mobile browser with desktop mode + a notes app with folders (this is your CRM until revenue justifies more).",
      "Set a fixed 90-minute daily block. Non-negotiable. Same time every day.",
      "Load the prompt library into your AI tool's saved prompts.",
      "Run the Daily OS Kickoff prompt every morning before the block starts.",
      "Every Friday: run the Weekly Review prompt and adjust next week's targets.",
      "Rule: if a task took more than 10 minutes and you'll do it again, document it as a skill.",
    ],
  },
  {
    slug: "outreach-automation-pack",
    name: "Outreach Automation Pack",
    price: "$19",
    phase: 1,
    category: "Outreach",
    tagline: "The full multi-touch outreach machine.",
    description:
      "Every script, cadence, and tracker needed to send 20-50 personalized messages a day and turn cold contractors and local businesses into booked calls.",
    gumroadListing:
      "Stop staring at a blank message box. This pack contains the exact 3-touch outreach flows, follow-up cadences, and personalization prompts that book calls with contractors and local businesses — sendable from any phone in under 60 seconds per lead.",
    deliverables: [
      "3-touch script flows (permit, local biz, inbound)",
      "Follow-up cadence map (day 0/2/5/12)",
      "Personalization prompt engine",
      "Objection response library",
      "Lead tracker template",
    ],
    prompts: [
      {
        title: "Personalized First Touch",
        prompt:
          "Write a first-touch outreach message. Lead: [NAME/COMPANY]. Source: [permit for X / Google Maps listing / referral]. Detail I noticed: [SPECIFIC DETAIL — permit type, bad website, no website, low reviews]. My offer: fast mobile-first websites and automations, built same-week. Rules: under 50 words, reference the specific detail in sentence one, one clear CTA (free demo or quick call), zero corporate speak.",
      },
      {
        title: "Objection Handler",
        prompt:
          "A lead replied: \"[PASTE REPLY]\". My offer: [OFFER + PRICE]. Write a response that: acknowledges their point in one sentence, reframes around speed and results, ends with a low-friction next step. Under 60 words. Never defensive, never desperate.",
      },
      {
        title: "Dead Lead Revival",
        prompt:
          "This lead went cold [N] weeks ago after [LAST INTERACTION]. Write a revival message with a new angle: either a) something new I shipped for a similar business, b) a specific improvement I noticed they still need, or c) a time-limited offer. Under 40 words.",
      },
    ],
    templates: [
      {
        title: "Cadence Map",
        body: "DAY 0 — First touch (personalized, references specific detail)\nDAY 2 — Value bump: send a screenshot/demo relevant to their business. \"Made this for a [niche] like you — want one?\"\nDAY 5 — Direct ask: \"Should I close your file or is this worth 10 minutes?\"\nDAY 12 — Revival angle (new work shipped, new observation)\nAFTER: move to monthly newsletter-style touch. Never delete a lead.",
      },
      {
        title: "Reply Triage Rules",
        body: "INTERESTED → book call within 24h, send 2 time options immediately\nQUESTION → answer + CTA in same message\nNOT NOW → tag for 30-day revival, confirm politely\nNO → thank, ask for referral, archive\nNO REPLY x4 → monthly drip",
      },
    ],
    buildSop: [
      "Create three saved message stubs on your phone keyboard shortcuts: first-touch, day-2 bump, day-5 ask.",
      "Each morning, pull 10-20 leads from the scraper and run each through the Personalized First Touch prompt.",
      "Send via the channel the lead actually uses: SMS for contractors, email/IG for local businesses.",
      "Log every send in the tracker with a next-action date. The tracker is the machine — the messages are just fuel.",
      "Process all due follow-ups BEFORE sending new first touches.",
      "Weekly: count replies per script variant, kill the weakest variant, write one new one.",
    ],
  },
  {
    slug: "client-delivery-pack",
    name: "Client Delivery Automation Pack",
    price: "$19",
    phase: 1,
    category: "Delivery",
    tagline: "Five-star delivery on rails, every single time.",
    description:
      "Templated onboarding, delivery, and handoff sequences so every client gets the same fast, professional, review-generating experience without you thinking about it.",
    gumroadListing:
      "Your delivery IS your marketing. This pack turns client handoff into an automated five-star machine: onboarding sequences, delivery emails, walkthrough scripts, and the review + referral flow that turns one client into three.",
    deliverables: [
      "Client onboarding sequence (5 messages)",
      "Delivery day email + walkthrough script",
      "30-day check-in automation",
      "Review request + referral flow",
      "Scope guard scripts (change request handling)",
    ],
    prompts: [
      {
        title: "Onboarding Kickoff Writer",
        prompt:
          "Write the kickoff message for a new client. Client: [NAME], business: [BUSINESS], project: [SITE/AUTOMATION], price: $[N], delivery promise: [N] days. Include: what happens next (3 steps), exactly what I need from them (list), and when they'll see the first preview. Confident, warm, zero fluff.",
      },
      {
        title: "Delivery Announcement",
        prompt:
          "Write the delivery message for [CLIENT]. Their [SITE/AUTOMATION] is live at [URL]. Include: 3 specific things built for them (pull from: [FEATURES]), how to use it in 2 sentences, what's included in support, and a soft setup for the review ask coming in a few days.",
      },
      {
        title: "Review Request",
        prompt:
          "Write a review request for [CLIENT], [N] days after delivery of [PROJECT]. They said: \"[ANY POSITIVE FEEDBACK]\". Ask for a Google review, make it 30-second easy (include the direct link placeholder), and mention I'll feature their business in my work showcase.",
      },
    ],
    templates: [
      {
        title: "Delivery Day Checklist",
        body: "[ ] Final mobile QA on 2 screen sizes\n[ ] Speed check (loads under 3s)\n[ ] All links + forms tested\n[ ] Client walkthrough sent (video or annotated screenshots)\n[ ] Login credentials delivered securely\n[ ] Invoice sent / final payment confirmed\n[ ] 3-day review ask scheduled\n[ ] 30-day check-in scheduled\n[ ] Before/after screenshots saved for content",
      },
      {
        title: "Scope Guard Script",
        body: "\"Good idea — that's outside the current build, but I can add it. Two options: [A] add it now for $[X], delivered with the project, or [B] log it for a phase-2 update after launch. Which works better?\"\n\nRule: never say yes for free, never say no flat. Every change request is either revenue or a logged phase-2 item.",
      },
    ],
    buildSop: [
      "Save all 5 onboarding/delivery messages as templates the day you close a client — customize per client with the prompts.",
      "Send the kickoff within 1 hour of payment. Speed here sets the whole relationship tone.",
      "Deliver a preview within 48 hours even if partial. Clients panic in silence.",
      "On delivery day, run the full checklist. Never skip mobile QA.",
      "Day 3 after delivery: send the review request. Day 30: check-in + upsell (maintenance $150/mo).",
      "Every review earned goes straight into outreach messages and content as proof.",
    ],
  },
  {
    slug: "content-automation-pack",
    name: "Content Automation Pack",
    price: "$19",
    phase: 1,
    category: "Content",
    tagline: "Daily micro content and weekly long-form on autopilot.",
    description:
      "The build-in-public content engine: 30-day calendar, hook formulas, proof-post templates, and the repurposing workflow that turns one work session into a week of posts.",
    gumroadListing:
      "You're already doing the work — this pack turns it into content. 30-day calendar, viral hook templates, proof-post formulas, and a repurposing system that converts every client build and automation into posts that sell your services and products on autopilot.",
    deliverables: [
      "30-day content calendar (themed by day)",
      "20 hook templates for build-in-public posts",
      "Proof-post formulas (before/after, numbers, process)",
      "1-to-7 repurposing workflow",
      "CTA rotation system (services / Gumroad / follow)",
    ],
    prompts: [
      {
        title: "Daily Micro Post",
        prompt:
          "Write today's build-in-public post. What I did today: [WORK DONE]. Interesting detail: [DETAIL/NUMBER/SCREENSHOT DESCRIPTION]. Today's CTA target: [services/Gumroad product/follow]. Format: hook line that creates curiosity, 2-4 short lines of substance, CTA. Platform: [X/IG/TikTok script]. No hashtag spam, no cringe.",
      },
      {
        title: "Weekly Long-Form",
        prompt:
          "Write this week's long-form post. Theme: [e.g., how I scraped 200 contractor leads from my phone]. Raw material: [BULLET NOTES FROM THE WEEK]. Structure: story hook, the problem, exactly how I did it (numbered, specific), the result with numbers, one lesson, CTA to [PRODUCT/SERVICE]. 300-500 words. Written like I talk: direct, fast, no fluff.",
      },
      {
        title: "Repurposer",
        prompt:
          "Take this post and repurpose it into: 1) a 3-tweet thread, 2) a 30-second video script with shot notes, 3) two standalone one-liner posts, 4) an IG carousel outline (5 slides). Original: [PASTE POST]. Keep the core proof point in every version.",
      },
    ],
    templates: [
      {
        title: "30-Day Calendar (weekly rhythm)",
        body: "MON — Process post: how I do X from my phone\nTUE — Proof post: result, number, or before/after\nWED — Tool/stack post: what I use and why\nTHU — Client story or lead gen win\nFRI — Product post: what I'm shipping on Gumroad\nSAT — Hot take / niche opinion\nSUN — Weekly recap with numbers + next week's goal\nRepeat x4. Every post CTAs to: services (M/Th), Gumroad (W/F), follow (T/S/S).",
      },
      {
        title: "Proof Post Formula",
        body: "LINE 1: The result, stated plainly. (\"Client site live in 41 hours. Built entirely on my phone.\")\nLINE 2-3: The 2 most interesting specifics of how.\nLINE 4: What it means for the reader.\nCTA: \"Want one? DM me 'site'.\" or product link.",
      },
    ],
    buildSop: [
      "Screenshot everything while you work — every build, scrape run, and client message (redacted) is future content.",
      "End of each work block: run the Daily Micro Post prompt on the day's best moment. Post within 10 minutes, don't overthink.",
      "Sunday: batch-run the Weekly Long-Form prompt on the week's notes.",
      "Run the Repurposer on your best-performing post each week.",
      "Track one metric only: DMs/clicks generated. Likes are noise.",
      "Every 30 days: kill the weakest day-theme, test a new one.",
    ],
  },
  {
    slug: "permit-scraping-pack",
    name: "Permit Scraping Pack",
    price: "$39",
    phase: 1,
    category: "Scraping",
    tagline: "The contractor lead engine, productized.",
    description:
      "The complete Broward + Miami-Dade permit scraping system: live county data sources, filtering, lead scoring, enrichment, and the outreach scripts that convert permits into paying contractor clients.",
    gumroadListing:
      "Every building permit is a contractor with money moving RIGHT NOW. This pack gives you the exact county data sources (free, public, no API keys), the filtering + scoring system, and the outreach scripts that turn permit records into 20-50 warm contractor conversations a day.",
    deliverables: [
      "Live county data source guide (Broward + Miami-Dade endpoints)",
      "Query recipes (by trade, date, city)",
      "Lead scoring model (5-factor)",
      "Enrichment checklist (phone, license, socials)",
      "Contractor outreach scripts (3-touch flow)",
      "Error-handling + rate-limit SOP",
    ],
    prompts: [
      {
        title: "Permit-to-Message",
        prompt:
          "Turn this permit record into an outreach message. Contractor: [PERMITTEE/CONTRNAME]. Permit type: [TYPE]. Job address/city: [CITY]. Issue date: [DATE]. My offer: mobile-first contractor websites + lead automations, built same-week from my phone. Rules: reference their actual recent job in sentence one (without being creepy — city + trade only, not the exact address), under 50 words, CTA: free demo site.",
      },
      {
        title: "Trade Batch Analyzer",
        prompt:
          "Here are [N] permit records: [PASTE ROWS]. Group them by contractor, rank contractors by permit volume (more permits = busier = better lead), flag any that appear 3+ times, and output a prioritized outreach list with the best personalization angle for each.",
      },
      {
        title: "Enrichment Runner",
        prompt:
          "Enrich this contractor lead: [COMPANY NAME], [CITY], license # [N if available]. Find and structure: likely website, Google Business profile status, review count estimate, phone/email search strategy, and the single biggest gap I can pitch (no site / weak site / no reviews / no booking).",
      },
    ],
    templates: [
      {
        title: "3-Touch Contractor Flow",
        body: "TOUCH 1 (day 0): \"Saw your crew pulled a [trade] permit in [city] this week. I build fast mobile sites + lead automations for [trade] contractors — want a free demo of what yours could look like?\"\nTOUCH 2 (day 2): Send demo screenshot. \"Built this mockup for a [trade] company. This could be you — takes me about 48hrs. Interested?\"\nTOUCH 3 (day 5): \"Last one from me — busy season's here and guys with good sites are catching the overflow jobs. 10-minute call this week?\"",
      },
      {
        title: "Lead Scoring Model",
        body: "+3 — Active permit issued in last 14 days\n+2 — 3+ permits in last 90 days (high volume)\n+2 — No website found\n+1 — Website exists but not mobile-friendly\n+1 — Under 10 Google reviews\n+1 — High-value trade (roofing, HVAC, pool, GC)\nSCORE 6+ = priority (contact today) | 4-5 = standard | <4 = drip list",
      },
    ],
    buildSop: [
      "Query the county endpoints daily for permits issued in the last 7 days (recipes included, both counties are free public data).",
      "Filter to your target trades: roofing, HVAC, electrical, plumbing, pool, general contractor.",
      "Run the batch through the Trade Batch Analyzer prompt to group and rank.",
      "Score every lead with the 5-factor model. Only priority leads get same-day outreach.",
      "Enrich the top 10-20: find phone/email, check their web presence, note the gap.",
      "Send Touch 1 to all priority leads. Log in tracker. Follow the 3-touch flow.",
      "ERROR HANDLING: if an endpoint times out, wait 60s and retry once; cap queries at 2000 records; always filter server-side by date to keep responses fast.",
    ],
  },
  {
    slug: "landing-page-speed-pack",
    name: "Landing Page Speed Pack",
    price: "$19",
    phase: 1,
    category: "Web Builds",
    tagline: "Client-ready landing page from a phone in under an hour.",
    description:
      "Five proven page structures, niche-specific copy prompts, a mobile QA checklist, and the deploy guide — everything to go from blank screen to live demo link in one sitting.",
    gumroadListing:
      "The fastest money in web dev is a demo link sent while the lead is still warm. This pack: 5 landing page structures that convert, AI copy prompts tuned per niche, and the phone-only deploy workflow that gets a live URL in front of your lead in under an hour.",
    deliverables: [
      "5 landing page structures (services, restaurant, contractor, booking, single-offer)",
      "Niche copy prompt library",
      "Section-by-section build order",
      "Mobile QA checklist",
      "Deploy + custom domain guide",
    ],
    prompts: [
      {
        title: "Full Page Copy Generator",
        prompt:
          "Write complete landing page copy for [BUSINESS NAME], a [NICHE] in [CITY]. Structure: hero (headline + subhead + CTA), 3 service blocks, social proof section, about (2 sentences), final CTA. Voice: confident local expert. The headline must pass the 'so what' test — lead with the customer outcome, not the business name. Include a click-to-call CTA since this is mobile-first.",
      },
      {
        title: "Demo Site Speedrun",
        prompt:
          "I'm building a demo site to close a cold lead. Business: [NAME], niche: [NICHE], what I know about them: [DETAILS FROM SCRAPING]. Generate: page structure choice (from: services/restaurant/contractor/booking/single-offer), full copy, color direction based on their trade, and the 3 features to highlight in my pitch message.",
      },
    ],
    templates: [
      {
        title: "Contractor Page Structure",
        body: "1. HERO — Trade + city + outcome headline. Phone number button. License # visible.\n2. TRUST BAR — Years, jobs done, license, insured.\n3. SERVICES — 3-6 cards, each with a 'get quote' CTA.\n4. PROOF — Job photos grid + 2-3 reviews.\n5. SERVICE AREA — Cities list (local SEO).\n6. FINAL CTA — Quote form: name, phone, job type. 3 fields max.",
      },
      {
        title: "Mobile QA Checklist",
        body: "[ ] Loads under 3 seconds on 4G\n[ ] All tap targets 44px+\n[ ] Phone number is click-to-call\n[ ] Form works and submits (test it)\n[ ] No horizontal scroll at 360px width\n[ ] Text readable without zoom (16px+ body)\n[ ] Images compressed + alt text set\n[ ] Business name, city, trade in title tag",
      },
    ],
    buildSop: [
      "Pick the structure that matches the niche — never design from scratch for a demo.",
      "Run the copy prompt FIRST. Copy before layout, always.",
      "Build sections top to bottom. Hero must be done in the first 15 minutes.",
      "Use real business details from your scrape data — a demo with their actual name/city/trade converts 5x a generic one.",
      "Run the mobile QA checklist. Then deploy and send the live link with Touch 2 of your outreach flow.",
      "Time cap: 60 minutes. A shipped demo beats a perfect one.",
    ],
  },
  {
    slug: "seo-content-bundle-pack",
    name: "SEO + Content Bundle Pack",
    price: "$24",
    phase: 1,
    category: "SEO",
    tagline: "The $150-$500 SEO bundle you sell to every client.",
    description:
      "The productized SEO + content service: what's in the bundle, how to deliver it in 2 hours, and the prompts that generate a month of local SEO content per client.",
    gumroadListing:
      "Every web build client should hand you another $150-$500 for SEO. This pack productizes that upsell: the exact bundle contents, the 2-hour delivery workflow, and the AI prompts that produce a month of local SEO content per client without hiring anyone.",
    deliverables: [
      "SEO bundle offer sheet (3 tiers: $150/$300/$500)",
      "2-hour delivery workflow",
      "Local keyword research prompts",
      "Monthly content generation prompts",
      "Client-facing SEO report template",
    ],
    prompts: [
      {
        title: "Local Keyword Map",
        prompt:
          "Build a local keyword map for [BUSINESS], a [NICHE] in [CITY]. Output: 5 money keywords (service + city), 5 near-me variants, 5 question keywords customers actually search, and which page each keyword should live on. Prioritize by buyer intent, not volume.",
      },
      {
        title: "Monthly Content Batch",
        prompt:
          "Generate this month's SEO content for [BUSINESS] ([NICHE], [CITY]). From this keyword map: [PASTE MAP]. Produce: 2 service-page copy blocks (300 words each), 2 blog post outlines targeting question keywords, and 4 Google Business Profile posts. Local, specific, written for humans first.",
      },
    ],
    templates: [
      {
        title: "3-Tier Offer Sheet",
        body: "BASIC $150/mo — GBP optimization + 4 GBP posts + 1 page copy refresh\nSTANDARD $300/mo — Basic + 2 blog posts + citation building + monthly report\nPRO $500/mo — Standard + review generation system + competitor tracking + quarterly strategy call\nPitch line: \"Your site is live — now let's make sure people actually find it.\"",
      },
      {
        title: "Monthly Client Report",
        body: "1. WINS THIS MONTH (3 bullets, plain English)\n2. Search visibility: [before] → [after]\n3. Content shipped: [list]\n4. Reviews gained: [N]\n5. NEXT MONTH'S FOCUS (2 bullets)\nRule: no jargon, no vanity metrics, always end with what's next.",
      },
    ],
    buildSop: [
      "Pitch the SEO bundle in the delivery message of EVERY web build (built into the Delivery Pack flow).",
      "On close: run the Local Keyword Map prompt — 15 minutes.",
      "Run the Monthly Content Batch prompt and implement — 90 minutes.",
      "Set a monthly recurring block per client: batch + implement + report. 2 hours max per client.",
      "Send the report on the 1st of each month, every month, without fail. The report IS the retention.",
    ],
  },
  {
    slug: "ai-prompt-vault-starter",
    name: "AI Prompt Vault: Web Dev Edition",
    price: "$9",
    phase: 1,
    category: "Operating System",
    tagline: "50 copy-paste prompts for phone-based web work.",
    description:
      "The tripwire product: 50 tested prompts covering builds, copy, debugging, client comms, and pricing — the cheapest entry into the JBizz ecosystem.",
    gumroadListing:
      "50 prompts. $9. Every one tested in real client work: site builds, copywriting, debugging, pricing conversations, scope control. Copy, paste, ship. The cheapest way to start working like JBizz.",
    deliverables: [
      "50 categorized prompts (builds, copy, client comms, debug, pricing)",
      "Prompt customization guide",
      "Bonus: 5 'save the deal' scripts",
    ],
    prompts: [
      {
        title: "Price Anchor",
        prompt:
          "A lead asked what a website costs. Their business: [NICHE], current web presence: [NONE/WEAK/OK]. Write my reply: anchor high with what agencies charge ($3-5k), position my $[PRICE] as the fast, no-BS alternative, include one concrete deliverable promise, end with a yes/no question.",
      },
      {
        title: "Bug Fixer",
        prompt:
          "This isn't working: [PASTE CODE/DESCRIBE ISSUE]. Expected: [WHAT SHOULD HAPPEN]. Actual: [WHAT HAPPENS]. Walk through likely causes ranked by probability, then give me the fix for the most likely one first. I'm on mobile — keep the code changes minimal and complete.",
      },
    ],
    templates: [
      {
        title: "Vault Index (categories)",
        body: "BUILDS (12) — scaffold, sections, forms, styling, deploy\nCOPY (10) — heros, service pages, about, CTAs, meta\nCLIENT COMMS (10) — pitch, kickoff, update, delay, upsell\nDEBUG (8) — layout, forms, speed, mobile, deploy errors\nPRICING (5) — anchor, scope, raise, discount defense, retainer\nSAVE THE DEAL (5) — ghosting, price shock, 'thinking about it', competitor, cold feet",
      },
    ],
    buildSop: [
      "This is the $9 front-door product — link it in every content CTA rotation.",
      "Keep prompts generic enough to work for any buyer, specific enough to be instantly useful.",
      "Update quarterly with your newest tested prompts; announce updates to past buyers (free Gumroad update = goodwill + review requests).",
    ],
  },
  {
    slug: "google-maps-scraping-pack",
    name: "Google Maps Scraping Pack",
    price: "$29",
    phase: 1,
    category: "Scraping",
    tagline: "Turn Google Maps into a local business lead machine.",
    description:
      "The local business counterpart to permit scraping: category-based Maps prospecting, the gap-analysis system, and demo-first outreach that converts weak web presence into web build clients.",
    gumroadListing:
      "Google Maps is a public directory of businesses with bad websites. This pack shows you how to mine it by category and city, score each business's web presence gap, and hit them with a demo-first pitch they can't ignore — all from your phone.",
    deliverables: [
      "Category prospecting system (best 12 niches ranked)",
      "Web presence gap-analysis checklist",
      "Demo-first outreach flow",
      "Daily 20-lead workflow",
      "Tracking template",
    ],
    prompts: [
      {
        title: "Gap Analyzer",
        prompt:
          "Analyze this local business's web presence. Name: [NAME], niche: [NICHE], city: [CITY]. What I found: website [URL or NONE], reviews [N at X stars], last review [DATE], socials [LIST]. Output: their 3 biggest gaps ranked by revenue impact, the one-line pitch angle for each, and which demo type to build (landing page / booking page / review widget).",
      },
      {
        title: "Category Session Planner",
        prompt:
          "Plan today's Maps prospecting session. City: [CITY]. I need 20 leads. Suggest: the 2 best categories to search today (rotate from: restaurants, salons, cleaners, landscapers, auto shops, gyms, dentists, roofers, movers, tutors, pet groomers, HVAC), the exact search phrases, and the qualification bar (what makes a business worth adding to the list).",
      },
    ],
    templates: [
      {
        title: "Daily 20-Lead Workflow",
        body: "1. Pick category + city zone (rotate weekly)\n2. Search Maps, open each result\n3. QUALIFY: 4.0+ stars but weak/no website = gold. Skip chains.\n4. Log: name, phone, site status, review count, gap\n5. Run Gap Analyzer on top 10\n6. Build 1-2 demos for the best leads (Speed Pack)\n7. Send demo-first messages\nTime: 45-60 min total",
      },
      {
        title: "Demo-First Message",
        body: "\"Hey [NAME] — I was looking at [BUSINESS] on Google and noticed [GAP]. I went ahead and built you a quick preview of what a modern mobile site could look like: [DEMO LINK]. If you like it, it's yours live within the week. Worth a look?\"",
      },
    ],
    buildSop: [
      "Rotate categories weekly so you never exhaust a niche in your city.",
      "The qualification bar matters: good reviews + bad website = business that's already winning and will pay to win more.",
      "Only build demos for leads scoring 2+ gaps — demos take time, spend it on the best.",
      "Demo-first messages get 3-5x replies vs. text-only. The demo IS the pitch.",
      "Log everything. After 100 leads you'll know exactly which categories convert in your city.",
    ],
  },
  {
    slug: "review-automation-pack",
    name: "Review Automation Pack",
    price: "$19",
    phase: 1,
    category: "Automation",
    tagline: "The review generation system you sell for $250+.",
    description:
      "A sellable automation: the complete review request system (timing, scripts, QR flows, negative-review interception) that you deliver to local business clients as a $250-$500 add-on.",
    gumroadListing:
      "Reviews are the #1 local ranking factor and most businesses just... don't ask. This pack is a productized review generation system you can deliver to any local business for $250-$500: request timing, scripts, QR code flows, and the negative-review interceptor.",
    deliverables: [
      "Review request timing map (by business type)",
      "SMS/email request scripts",
      "QR code table/counter flow",
      "Negative review interceptor system",
      "Client pitch deck (why they need this)",
    ],
    prompts: [
      {
        title: "Review Script Set",
        prompt:
          "Write a review request script set for [BUSINESS], a [NICHE]. Their customer interaction: [walk-in/appointment/job-site]. Generate: 1) SMS request (sent [timing]), 2) follow-up 3 days later, 3) in-person ask line for staff, 4) the response template for when reviews come in. Friendly, short, direct-link ready.",
      },
      {
        title: "Interceptor Setup",
        prompt:
          "Design the negative review interceptor for [BUSINESS]. Flow: customer gets 'How was your experience?' message → 4-5 stars routes to Google review link → 1-3 stars routes to private feedback form that alerts the owner. Write: the initial message, both routing messages, and the owner alert format.",
      },
    ],
    templates: [
      {
        title: "Client Pitch (review system)",
        body: "\"You have [N] reviews. Your top competitor has [N]. Every 10 extra reviews is roughly [X]% more calls from Google. I install a system that asks every happy customer automatically — and catches unhappy ones before they post publicly. $[PRICE] one-time, runs forever. Want it live this week?\"",
      },
    ],
    buildSop: [
      "Sell this as an add-on to every web build, and standalone to businesses that already have sites.",
      "Setup per client: customize scripts with their name/link, set the timing per their business type, install QR assets. 90 minutes.",
      "The interceptor is the closer — every owner has one bad review that haunts them.",
      "Deliver with a 1-page 'how it works' sheet so they feel the system, not just the invoice.",
    ],
  },
]
