export type PackPrompt = {
  title: string
  prompt: string
}

export type PackTemplate = {
  title: string
  body: string
}

export type Pack = {
  slug: string
  name: string
  price: string
  phase: 1 | 2 | 3
  category: string
  tagline: string
  description: string
  gumroadListing: string
  deliverables: string[]
  prompts: PackPrompt[]
  templates: PackTemplate[]
  buildSop: string[]
}
