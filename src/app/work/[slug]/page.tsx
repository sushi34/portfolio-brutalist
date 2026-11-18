import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import Link from 'next/link'
import { ArrowLeft, Clock, User, Building2, ExternalLink, Github, ArrowRight } from 'lucide-react'
import { formatDate, readingTime } from '@/lib/utils'
import { getCaseStudyBySlug, getAllCaseStudies } from '@/lib/mdx'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const studies = getAllCaseStudies()
  return studies.map(study => ({ slug: study.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)
  
  if (!study) {
    return { title: 'Not Found' }
  }

  return {
    title: study.title,
    description: study.description,
    openGraph: {
      title: study.title,
      description: study.description,
      type: 'article',
      publishedTime: study.date,
      authors: ['Kian Segantini'],
      tags: study.tools,
      images: study.thumbnail ? [{ url: study.thumbnail }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: study.title,
      description: study.description,
      images: study.thumbnail ? [study.thumbnail] : [],
    },
  }
}

const components = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 {...props} className="font-display font-black text-display-md text-neutral-50 mb-6" />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 {...props} className="font-display font-semibold text-heading-lg text-neutral-50 mt-12 mb-4 pb-2 border-b border-neutral-800" />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className="font-display font-semibold text-heading-md text-neutral-50 mt-8 mb-3" />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="font-body text-body-lg text-neutral-300 mb-6 leading-relaxed" />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul {...props} className="font-body text-body-lg text-neutral-300 mb-6 space-y-3 list-disc list-inside" />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol {...props} className="font-body text-body-lg text-neutral-300 mb-6 space-y-3 list-decimal list-inside" />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li {...props} className="leading-relaxed" />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props} className="text-accent hover:text-primary-300 underline underline-offset-2 transition-colors" target="_blank" rel="noopener noreferrer" />
  ),
  blockquote: (props: React.QuoteHTMLAttributes<HTMLQuoteElement>) => (
    <blockquote {...props} className="border-l-4 border-accent pl-6 py-2 my-6 font-body text-body-lg text-neutral-400 italic" />
  ),
  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code {...props} className="font-mono text-body-sm bg-primary-900/30 px-1.5 py-0.5 rounded text-accent" />
  ),
  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre {...props} className="font-mono text-body-sm bg-neutral-950 p-4 rounded border border-neutral-800 overflow-x-auto mb-6" />
  ),
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <figure className="my-8">
      <img {...props} className="w-full h-auto border border-neutral-800" />
      {props.alt && <figcaption className="font-body text-body-sm text-neutral-500 text-center mt-2">{props.alt}</figcaption>}
    </figure>
  ),
  hr: () => <hr className="border-neutral-800 my-12" />,
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const study = getCaseStudyBySlug(slug)

  if (!study) {
    notFound()
  }

  const allStudies = getAllCaseStudies()
  const currentIndex = allStudies.findIndex(s => s.slug === slug)
  const prevStudy = currentIndex > 0 ? allStudies[currentIndex - 1] : null
  const nextStudy = currentIndex < allStudies.length - 1 ? allStudies[currentIndex + 1] : null

  return (
    <article className="relative">
      {/* Hero */}
      <header className="relative py-20 lg:py-32 border-b border-neutral-800 noise-overlay">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 font-body text-body-sm text-neutral-400 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Work
          </Link>

          <div className="max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1 text-caption font-display font-medium bg-accent/20 text-accent border border-accent/30">
                {study.category}
              </span>
              {study.featured && (
                <span className="px-3 py-1 text-caption font-display font-medium bg-primary-900/30 text-primary-300 border border-primary-900/50">
                  Featured
                </span>
              )}
            </div>

            <h1 className="font-display font-black text-display-xl text-neutral-50 mb-6 text-balance">
              {study.title}
            </h1>

            <p className="font-body text-body-xl text-neutral-300 mb-8 max-w-2xl text-balance">
              {study.description}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-neutral-400 font-body text-body-sm">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                <time dateTime={study.date}>{formatDate(study.date)}</time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>{readingTime(study.content)}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" aria-hidden="true" />
                <span>{study.role}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4" aria-hidden="true" />
                <span>{study.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" aria-hidden="true" />
                <span>{study.duration}</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Tools */}
              <Card variant="accent" padding="lg">
                <h3 className="font-display font-semibold text-heading-sm text-neutral-50 mb-4 flex items-center gap-2">
                  <Github className="h-5 w-5 text-accent" aria-hidden="true" />
                  Tools & Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {study.tools.map((tool: string) => (
                    <span key={tool} className="px-3 py-1 text-caption font-display font-medium bg-primary-900/30 text-primary-300 border border-primary-900/50">
                      {tool}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Project Meta */}
              <Card variant="default" padding="lg">
                <h3 className="font-display font-semibold text-heading-sm text-neutral-50 mb-4">
                  Project Details
                </h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="font-body text-caption text-neutral-500 uppercase tracking-wider">Client</dt>
                    <dd className="font-body text-body-md text-neutral-300 mt-1">{study.client}</dd>
                  </div>
                  <div>
                    <dt className="font-body text-caption text-neutral-500 uppercase tracking-wider">Duration</dt>
                    <dd className="font-body text-body-md text-neutral-300 mt-1">{study.duration}</dd>
                  </div>
                  <div>
                    <dt className="font-body text-caption text-neutral-500 uppercase tracking-wider">My Role</dt>
                    <dd className="font-body text-body-md text-neutral-300 mt-1">{study.role}</dd>
                  </div>
                  <div>
                    <dt className="font-body text-caption text-neutral-500 uppercase tracking-wider">Category</dt>
                    <dd className="font-body text-body-md text-neutral-300 mt-1">{study.category}</dd>
                  </div>
                </dl>
              </Card>

              {/* CTA */}
              <Card variant="accent" padding="lg" className="text-center">
                <h3 className="font-display font-semibold text-heading-sm text-neutral-50 mb-3">
                  Like This Project?
                </h3>
                <p className="font-body text-body-md text-neutral-400 mb-6">
                  Let's create something similar for your business.
                </p>
                <Button asChild className="w-full">
                  <Link href="/contact">Start a Project</Link>
                </Button>
              </Card>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-12">
              <div className="prose prose-invert max-w-none">
                <MDXRemote source={study.content} components={components} />
              </div>

              {/* Navigation */}
              {prevStudy || nextStudy ? (
                <nav className="flex items-center justify-between pt-8 border-t border-neutral-800" aria-label="Project navigation">
                  {prevStudy ? (
                    <Link
                      href={`/work/${prevStudy.slug}`}
                      className="flex items-center gap-2 group max-w-[45%]"
                    >
                      <ArrowLeft className="h-5 w-5 text-accent transition-transform group-hover:-translate-x-1" />
                      <div className="text-left">
                        <p className="font-body text-caption text-neutral-500 uppercase tracking-wider">Previous Project</p>
                        <p className="font-display font-medium text-body-md text-neutral-50 truncate">{prevStudy.title}</p>
                      </div>
                    </Link>
                  ) : (
                    <div className="w-[45%]" />
                  )}
                  {nextStudy ? (
                    <Link
                      href={`/work/${nextStudy.slug}`}
                      className="flex items-center gap-2 group max-w-[45%] text-right"
                    >
                      <div className="text-right">
                        <p className="font-body text-caption text-neutral-500 uppercase tracking-wider">Next Project</p>
                        <p className="font-display font-medium text-body-md text-neutral-50 truncate">{nextStudy.title}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-accent transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : (
                    <div className="w-[45%]" />
                  )}
                </nav>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </article>
  )
}

// Import missing icons
import { Calendar } from 'lucide-react'