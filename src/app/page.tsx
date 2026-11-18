'use client'

import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Shield, PenTool, Monitor, Code } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { motion } from 'framer-motion'

const services = [
  {
    icon: PenTool,
    title: 'UX/UI Design',
    description: 'User-centered design systems, wireframes, prototypes, and high-fidelity interfaces that solve real problems.',
    color: 'primary',
  },
  {
    icon: Monitor,
    title: 'Website/Landing Page Design',
    description: 'Conversion-focused landing pages and marketing websites that turn visitors into customers.',
    color: 'accent',
  },
  {
    icon: Code,
    title: 'Website Redesign',
    description: 'Strategic redesigns that improve usability, performance, and business metrics without losing brand identity.',
    color: 'primary',
  },
]

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '3+', label: 'Years Experience' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Global Availability' },
]

export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden noise-overlay">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary-900/30 rounded-full" />
        </div>

        <div className="section-container relative z-10 py-20">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary-900/30 border border-primary-900/50 text-primary-300 font-body text-caption uppercase tracking-widest"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Available for freelance projects
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
              className="font-display font-black text-display-xl text-neutral-50 mb-6 text-balance leading-[0.95]"
            >
              UX/UI Designer
              <br />
              <span className="text-gradient">Crafting Digital Experiences</span>
              <br />
              That Convert
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
              className="font-body text-body-lg text-neutral-300 max-w-2xl mx-auto mb-10 text-balance"
            >
              I design intuitive, beautiful interfaces that solve real business problems.
              From wireframe to pixel-perfect delivery — your vision, elevated.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button size="lg" asChild>
                <Link href="/contact" className="w-full sm:w-auto">
                  Start a Project
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/work" className="w-full sm:w-auto">
                  View Work
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
              className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display font-black text-display-md text-neutral-50 mb-1">
                    {stat.value}
                  </div>
                  <div className="font-body text-caption text-neutral-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-neutral-500"
          aria-hidden="true"
        >
          <span className="font-body text-caption uppercase tracking-widest">Scroll</span>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 lg:py-32 border-t border-neutral-800">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="font-body text-caption text-accent uppercase tracking-widest mb-4 inline-block">
              Services
            </span>
            <h2 className="font-display font-black text-display-lg text-neutral-50 mb-4">
              What I <span className="text-gradient">Do</span>
            </h2>
            <p className="font-body text-body-lg text-neutral-400">
              End-to-end design solutions tailored to your business goals.
            </p>
          </motion.div>

          <div className="grid-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <Card variant="accent" padding="lg" className="h-full">
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-14 h-14 mb-6 flex items-center justify-center bg-primary-900/30 border border-primary-900/50">
                      <service.icon
                        className="h-7 w-7 text-accent"
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="font-display font-semibold text-heading-md text-neutral-50 mb-3">
                      {service.title}
                    </h3>
                    <p className="font-body text-body-md text-neutral-400 mb-6">
                      {service.description}
                    </p>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-display font-medium text-body-sm text-accent uppercase tracking-wider hover:text-primary-300 transition-colors"
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Brutalist corner accents */}
                  <div className="brutal-corner brutal-corner-tl" aria-hidden="true" />
                  <div className="brutal-corner brutal-corner-br" aria-hidden="true" />
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="featured-work" className="py-20 lg:py-32 border-t border-neutral-800">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="font-body text-caption text-accent uppercase tracking-widest mb-4 inline-block">
                Featured Work
              </span>
              <h2 className="font-display font-black text-display-lg text-neutral-50">
                Selected <span className="text-gradient">Projects</span>
              </h2>
            </div>
            <Link
              href="/work"
              className="btn-brutal-secondary self-end md:self-auto"
            >
              View All Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid-2">
            {/* Placeholder for featured case studies - will be replaced with dynamic content */}
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden"
            >
              <Card variant="accent" padding="none" className="h-full overflow-hidden">
                <div className="relative aspect-video bg-primary-900/30 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PenTool className="h-16 w-16 text-primary-900/50" aria-hidden="true" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 text-caption font-display font-medium bg-accent/20 text-accent border border-accent/30">
                      UX/UI Design
                    </span>
                    <span className="px-2 py-1 text-caption font-display font-medium bg-primary-900/30 text-primary-300 border border-primary-900/50">
                      Featured
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-heading-lg text-neutral-50 mb-2">
                    E-commerce Platform Redesign
                  </h3>
                  <p className="font-body text-body-md text-neutral-400 mb-4">
                    Complete redesign of a multi-vendor marketplace improving conversion by 47%.
                  </p>
                  <Link
                    href="/work/ecommerce-redesign"
                    className="inline-flex items-center gap-2 font-display font-medium text-body-sm text-accent uppercase tracking-wider hover:text-primary-300 transition-colors"
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="brutal-corner brutal-corner-tl" aria-hidden="true" />
                <div className="brutal-corner brutal-corner-br" aria-hidden="true" />
              </Card>
            </motion.article>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden"
            >
              <Card variant="accent" padding="none" className="h-full overflow-hidden">
                <div className="relative aspect-video bg-accent/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Monitor className="h-16 w-16 text-accent/30" aria-hidden="true" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 text-caption font-display font-medium bg-accent/20 text-accent border border-accent/30">
                      Landing Page
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-heading-lg text-neutral-50 mb-2">
                    SaaS Landing Page Design
                  </h3>
                  <p className="font-body text-body-md text-neutral-400 mb-4">
                    High-converting landing page for a B2B SaaS startup — 3.2x demo requests.
                  </p>
                  <Link
                    href="/work/saas-landing"
                    className="inline-flex items-center gap-2 font-display font-medium text-body-sm text-accent uppercase tracking-wider hover:text-primary-300 transition-colors"
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="brutal-corner brutal-corner-tl" aria-hidden="true" />
                <div className="brutal-corner brutal-corner-br" aria-hidden="true" />
              </Card>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 lg:py-32 border-t border-neutral-800">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="font-body text-caption text-accent uppercase tracking-widest mb-4 inline-block">
              Process
            </span>
            <h2 className="font-display font-black text-display-lg text-neutral-50 mb-4">
              How I <span className="text-gradient">Work</span>
            </h2>
            <p className="font-body text-body-lg text-neutral-400">
              A transparent, collaborative process that delivers results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discover', description: 'Deep dive into your business, users, and goals. Research, audits, and strategy alignment.' },
              { step: '02', title: 'Define', description: 'User journeys, wireframes, and information architecture. Validate before designing.' },
              { step: '03', title: 'Design', description: 'High-fidelity interfaces, design systems, and interactive prototypes. Pixel-perfect delivery.' },
              { step: '04', title: 'Deliver', description: 'Developer handoff, design QA, and post-launch support. Your success is my success.' },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <Card variant="default" padding="lg" className="h-full">
                  <div className="mb-4">
                    <span className="font-display font-black text-display-sm text-accent/30">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-heading-md text-neutral-50 mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-body-md text-neutral-400">
                    {item.description}
                  </p>
                  <div className="brutal-corner brutal-corner-tr" aria-hidden="true" />
                  <div className="brutal-corner brutal-corner-bl" aria-hidden="true" />
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 border-t border-neutral-800">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-3xl mx-auto text-center p-12 lg:p-16 card-brutal-accent"
          >
            {/* Decorative border */}
            <div className="absolute inset-0 border-2 border-accent/50 -inset-1 pointer-events-none" aria-hidden="true" />
            <div className="brutal-corner brutal-corner-tl" aria-hidden="true" />
            <div className="brutal-corner brutal-corner-tr" aria-hidden="true" />
            <div className="brutal-corner brutal-corner-bl" aria-hidden="true" />
            <div className="brutal-corner brutal-corner-br" aria-hidden="true" />

            <div className="relative z-10">
              <span className="font-body text-caption text-accent uppercase tracking-widest mb-4 inline-block">
                Ready to Start?
              </span>
              <h2 className="font-display font-black text-display-md text-neutral-50 mb-6">
                Let's Build Something<span className="text-gradient"> Great</span> Together
              </h2>
              <p className="font-body text-body-lg text-neutral-300 mb-8 max-w-lg mx-auto">
                I'm currently accepting new projects. Whether you need a complete redesign or a fresh landing page, let's talk about your goals.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact" className="w-full sm:w-auto">
                    Start a Project
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="ghost" asChild>
                  <Link href="mailto:kian@segantini.dev" className="w-full sm:w-auto">
                    Email Directly
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}