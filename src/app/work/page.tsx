import { Metadata } from 'next'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, PenTool, Monitor, Code, ExternalLink } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { getAllCaseStudies, getCaseStudiesByCategory } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Selected case studies and projects — deep dives into UX/UI design, website design, and redesign work.',
}

const categories = [
  { key: 'all', label: 'All Projects', icon: null },
  { key: 'UX/UI Design', label: 'UX/UI Design', icon: PenTool },
  { key: 'Website/Landing Page Design', label: 'Landing Pages', icon: Monitor },
  { key: 'Website Redesign', label: 'Redesigns', icon: Code },
] as const

export default function WorkPage() {
  const allStudies = getAllCaseStudies()

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 border-b border-neutral-800 noise-overlay">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="font-body text-caption text-accent uppercase tracking-widest mb-4 inline-block">
              Portfolio
            </span>
            <h1 className="font-display font-black text-display-xl text-neutral-50 mb-6 text-balance">
              Selected <span className="text-gradient">Work</span>
            </h1>
            <p className="font-body text-body-lg text-neutral-400 text-balance">
              Deep dives into projects that moved the needle. Each case study explores the problem, process, and measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-neutral-800">
        <div className="section-container">
          <div className="flex flex-wrap items-center gap-3" role="group" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                key={category.key}
                className={`
                  px-4 py-2 font-display font-medium text-body-sm uppercase tracking-wider
                  border-2 transition-all duration-fast ease-brutal
                  ${category.key === 'all'
                    ? 'bg-accent text-neutral-950 border-accent'
                    : 'bg-transparent text-neutral-400 border-neutral-700 hover:border-accent hover:text-accent'
                  }
                `}
                aria-pressed={category.key === 'all'}
              >
                {category.icon && <category.icon className="h-4 w-4 inline mr-2" aria-hidden="true" />}
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          {allStudies.length === 0 ? (
            <div className="text-center py-24">
              <PenTool className="h-16 w-16 text-neutral-700 mx-auto mb-6" aria-hidden="true" />
              <h2 className="font-display font-semibold text-heading-lg text-neutral-400 mb-3">
                No Projects Yet
              </h2>
              <p className="font-body text-body-md text-neutral-500 max-w-md mx-auto">
                Case studies will appear here once you add MDX files to the content/case-studies directory.
              </p>
            </div>
          ) : (
            <>
              {/* Featured Projects */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-display font-semibold text-heading-lg text-neutral-50 mb-8 flex items-center gap-3">
                  <span className="px-3 py-1 text-caption font-display font-medium bg-accent text-neutral-950">
                    Featured
                  </span>
                </h2>
                <div className="grid-2 mb-16">
                  {allStudies.filter(s => s.featured).map((study, index) => (
                    <ProjectCard key={study.slug} study={study} index={index} featured />
                  ))}
                </div>
              </motion.div>

              {/* All Projects by Category */}
              {categories.slice(1).map((category) => {
                const categoryStudies = allStudies.filter(s => s.category === category.key)
                if (categoryStudies.length === 0) return null

                return (
                  <motion.div
                    key={category.key}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="font-display font-semibold text-heading-lg text-neutral-50 mb-8 flex items-center gap-3">
                      <category.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                      {category.label}
                    </h2>
                    <div className="grid-3 mb-16">
                      {categoryStudies.map((study, index) => (
                        <ProjectCard key={study.slug} study={study} index={index} />
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-neutral-800">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto card-brutal-accent p-12 lg:p-16 relative"
          >
            <div className="brutal-corner brutal-corner-tl" aria-hidden="true" />
            <div className="brutal-corner brutal-corner-tr" aria-hidden="true" />
            <div className="brutal-corner brutal-corner-bl" aria-hidden="true" />
            <div className="brutal-corner brutal-corner-br" aria-hidden="true" />

            <h2 className="font-display font-black text-display-md text-neutral-50 mb-4">
              Don't See What You're Looking For?
            </h2>
            <p className="font-body text-body-lg text-neutral-300 mb-8">
              Every project is unique. Let's discuss your specific needs and create something exceptional together.
            </p>
            <Link href="/contact" className="btn-brutal-primary inline-flex items-center gap-2">
              Start a Project
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

function ProjectCard({ study, index, featured = false }: { study: any; index: number; featured?: boolean }) {
  const categoryIcons = {
    'UX/UI Design': PenTool,
    'Website/Landing Page Design': Monitor,
    'Website Redesign': Code,
  }

  const CategoryIcon = categoryIcons[study.category] || PenTool

  return (
    <article className="group relative">
      <Card variant={featured ? 'accent' : 'default'} padding="none" className="h-full overflow-hidden">
        <div className="relative aspect-video bg-primary-900/30 overflow-hidden">
          {study.thumbnail ? (
            <img
              src={study.thumbnail}
              alt=""
              className="w-full h-full object-cover transition-transform duration-700 ease-brutal group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <CategoryIcon className="h-16 w-16 text-primary-900/50" aria-hidden="true" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
          {featured && (
            <div className="absolute top-4 left-4">
              <span className="px-2 py-1 text-caption font-display font-medium bg-accent text-neutral-950 border border-accent">
                Featured
              </span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <CategoryIcon className="h-4 w-4 text-accent" aria-hidden="true" />
            <span className="px-2 py-1 text-caption font-display font-medium bg-primary-900/30 text-primary-300 border border-primary-900/50">
              {study.category}
            </span>
          </div>
          <h3 className="font-display font-semibold text-heading-lg text-neutral-50 mb-2 group-hover:text-accent transition-colors">
            {study.title}
          </h3>
          <p className="font-body text-body-md text-neutral-400 mb-4 line-clamp-2">
            {study.description}
          </p>
          <div className="flex items-center gap-4 text-neutral-500 font-body text-body-sm mb-4">
            <span>{study.client}</span>
            <span>·</span>
            <span>{study.duration}</span>
          </div>
          <Link
            href={`/work/${study.slug}`}
            className="inline-flex items-center gap-2 font-display font-medium text-body-sm text-accent uppercase tracking-wider hover:text-primary-300 transition-colors"
          >
            View Case Study
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="brutal-corner brutal-corner-tl" aria-hidden="true" />
        <div className="brutal-corner brutal-corner-br" aria-hidden="true" />
      </Card>
    </article>
  )
}