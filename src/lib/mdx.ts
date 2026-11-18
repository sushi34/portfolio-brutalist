import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')

export interface CaseStudyMeta {
  slug: string
  title: string
  description: string
  date: string
  role: string
  tools: string[]
  thumbnail: string
  client: string
  duration: string
  category: 'UX/UI Design' | 'Website/Landing Page Design' | 'Website Redesign'
  featured: boolean
}

export interface CaseStudy extends CaseStudyMeta {
  content: string
}

export function getCaseStudySlugs() {
  const caseStudiesDir = path.join(contentDir, 'case-studies')
  if (!fs.existsSync(caseStudiesDir)) return []
  return fs.readdirSync(caseStudiesDir)
    .filter(file => file.endsWith('.mdx'))
    .map(file => file.replace(/\.mdx$/, ''))
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const caseStudiesDir = path.join(contentDir, 'case-studies')
  const filePath = path.join(caseStudiesDir, `${slug}.mdx`)
  
  if (!fs.existsSync(filePath)) return null
  
  const fileContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(fileContent)
  
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    role: data.role,
    tools: data.tools || [],
    thumbnail: data.thumbnail,
    client: data.client,
    duration: data.duration,
    category: data.category,
    featured: data.featured || false,
    content,
  }
}

export function getAllCaseStudies(): CaseStudy[] {
  const slugs = getCaseStudySlugs()
  return slugs
    .map(slug => getCaseStudyBySlug(slug))
    .filter((study): study is CaseStudy => study !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return getAllCaseStudies().filter(study => study.featured)
}

export function getCaseStudiesByCategory(category: CaseStudyMeta['category']): CaseStudy[] {
  return getAllCaseStudies().filter(study => study.category === category)
}