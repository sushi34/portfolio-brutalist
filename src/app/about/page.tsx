import { Metadata } from 'next'
import { PenTool, Monitor, Code, Heart, Lightbulb, Target, ArrowRight, Check } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'About',
  description: 'Get to know Kian Segantini — a UX/UI designer with 3+ years of experience crafting digital experiences that convert. Based in Italy, working worldwide.',
}

const values = [
  {
    icon: Heart,
    title: 'Empathy First',
    description: 'Every design decision starts with understanding the user. Real empathy drives better outcomes.',
  },
  {
    icon: Lightbulb,
    title: 'Clarity Over Cleverness',
    description: 'Simple, obvious solutions beat clever complexity. If users have to think, I\'ve failed.',
  },
  {
    icon: Target,
    title: 'Results-Oriented',
    description: 'Beautiful designs are useless without impact. I measure success by your business metrics.',
  },
  {
    icon: Code,
    title: 'Technical Excellence',
    description: 'Designs that developers love to build. Clean handoffs, design systems, and pixel-perfect specs.',
  },
]

const skills = [
  { category: 'Design', items: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'UI Design', 'Usability Testing'] },
  { category: 'Tools', items: ['Figma', 'Framer', 'Principle', 'Notion', 'Linear', 'Git'] },
  { category: 'Technical', items: ['HTML/CSS', 'React Basics', 'Tailwind CSS', 'Design Tokens', 'Accessibility', 'Performance'] },
  { category: 'Process', items: ['Design Thinking', 'Agile/Scrum', 'Design Sprints', 'Stakeholder Management', 'Developer Handoff', 'Design QA'] },
]

const timeline = [
  { year: '2024', title: 'Senior UX/UI Designer', company: 'Freelance / Agency Work', description: 'Leading design for SaaS, e-commerce, and enterprise clients globally.' },
  { year: '2022', title: 'UX/UI Designer', company: 'Digital Agency', description: 'Delivered 20+ projects for startups and scale-ups across Europe and US.' },
  { year: '2020', title: 'Junior Designer', company: 'Design Studio', description: 'Learned the craft working on branding, web, and mobile projects.' },
  { year: '2019', title: 'Design Student', company: 'Self-Taught Journey', description: 'Started learning design through courses, books, and endless practice.' },
]

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 border-b border-neutral-800 noise-overlay">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-body text-caption text-accent uppercase tracking-widest mb-4 inline-block">
                About Me
              </span>
              <h1 className="font-display font-black text-display-xl text-neutral-50 mb-6 text-balance">
                Hi, I'm <span className="text-gradient">Kian Segantini</span>
              </h1>
              <p className="font-body text-body-xl text-neutral-300 mb-8 max-w-2xl text-balance">
                A UX/UI Designer based in Italy, crafting digital experiences for clients worldwide.
                3+ years turning complex problems into simple, beautiful interfaces.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a href="/contact">Work Together</a>
                </Button>
                <Button variant="secondary" asChild size="lg">
                  <a href="/work">View Projects</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 lg:py-32 border-b border-neutral-800">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="font-body text-caption text-accent uppercase tracking-widest mb-4 inline-block">
                  My Story
                </span>
                <h2 className="font-display font-black text-display-lg text-neutral-50 mb-6">
                  From Curiosity <br />to <span className="text-gradient">Craft</span>
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6 font-body text-body-lg text-neutral-300"
              >
                <p>
                  I started my design journey in 2019, completely self-taught. What began as a fascination with how things look 
                  evolved into an obsession with how things work. I spent months studying design principles, 
                  deconstructing interfaces I admired, and building projects just to learn.
                </p>
                <p>
                  My first real projects were for friends and small local businesses. Each one taught me that 
                  design isn't about making things pretty — it's about solving problems. The aesthetic is just 
                  the byproduct of clear thinking.
                </p>
                <p>
                  Since then, I've had the privilege of working with startups, agencies, and enterprise clients 
                  across Europe and the US. From SaaS dashboards to e-commerce platforms, landing pages to 
                  complete redesigns — every project has reinforced one truth: the best design is invisible. 
                  It just works.
                </p>
                <p>
                  Today, I focus on high-impact work: UX/UI design for products that need to convert, 
                  landing pages that sell, and redesigns that revive stagnant metrics. I'm selective about 
                  projects because I believe in going deep, not wide.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Card variant="accent" padding="lg" className="h-full sticky top-24">
                <h3 className="font-display font-semibold text-heading-md text-neutral-50 mb-6">
                  Quick Facts
                </h3>
                <dl className="space-y-6">
                  <div>
                    <dt className="font-body text-caption text-neutral-500 uppercase tracking-wider">Location</dt>
                    <dd className="font-body text-body-md text-neutral-300 mt-1">Italy (GMT+1)</dd>
                  </div>
                  <div>
                    <dt className="font-body text-caption text-neutral-500 uppercase tracking-wider">Experience</dt>
                    <dd className="font-body text-body-md text-neutral-300 mt-1">3+ Years</dd>
                  </div>
                  <div>
                    <dt className="font-body text-caption text-neutral-500 uppercase tracking-wider">Projects Delivered</dt>
                    <dd className="font-body text-body-md text-neutral-300 mt-1">50+</dd>
                  </div>
                  <div>
                    <dt className="font-body text-caption text-neutral-500 uppercase tracking-wider">Availability</dt>
                    <dd className="font-body text-body-md text-neutral-300 mt-1">Open for new projects</dd>
                  </div>
                  <div>
                    <dt className="font-body text-caption text-neutral-500 uppercase tracking-wider">Preferred Stack</dt>
                    <dd className="font-body text-body-md text-neutral-300 mt-1">Figma, Framer, React, Tailwind</dd>
                  </div>
                  <div>
                    <dt className="font-body text-caption text-neutral-500 uppercase tracking-wider">Languages</dt>
                    <dd className="font-body text-body-md text-neutral-300 mt-1">English, Italian</dd>
                  </div>
                </dl>
                <div className="brutal-corner brutal-corner-tl" aria-hidden="true" />
                <div className="brutal-corner brutal-corner-br" aria-hidden="true" />
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="values" className="py-20 lg:py-32 border-b border-neutral-800">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="font-body text-caption text-accent uppercase tracking-widest mb-4 inline-block">
              Values
            </span>
            <h2 className="font-display font-black text-display-lg text-neutral-50 mb-4">
              Principles That <span className="text-gradient">Guide Me</span>
            </h2>
            <p className="font-body text-body-lg text-neutral-400">
              These aren't just words — they're the lens through which I make every design decision.
            </p>
          </motion.div>

          <div className="grid-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="accent" padding="lg" className="h-full text-center">
                  <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center bg-primary-900/30 border border-primary-900/50">
                    <value.icon className="h-7 w-7 text-accent" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-semibold text-heading-md text-neutral-50 mb-3">
                    {value.title}
                  </h3>
                  <p className="font-body text-body-md text-neutral-400">
                    {value.description}
                  </p>
                  <div className="brutal-corner brutal-corner-tl" aria-hidden="true" />
                  <div className="brutal-corner brutal-corner-br" aria-hidden="true" />
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 lg:py-32 border-b border-neutral-800">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="font-body text-caption text-accent uppercase tracking-widest mb-4 inline-block">
              Expertise
            </span>
            <h2 className="font-display font-black text-display-lg text-neutral-50 mb-4">
              Tools & <span className="text-gradient">Skills</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.article
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card variant="default" padding="lg" className="h-full">
                  <h3 className="font-display font-semibold text-heading-sm text-accent mb-4 uppercase tracking-wider">
                    {skill.category}
                  </h3>
                  <ul className="space-y-3">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 font-body text-body-md text-neutral-300">
                        <Check className="h-5 w-5 text-accent flex-shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="brutal-corner brutal-corner-tr" aria-hidden="true" />
                  <div className="brutal-corner brutal-corner-bl" aria-hidden="true" />
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 lg:py-32 border-b border-neutral-800">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="font-body text-caption text-accent uppercase tracking-widest mb-4 inline-block">
              Journey
            </span>
            <h2 className="font-display font-black text-display-lg text-neutral-50 mb-4">
              Where I've <span className="text-gradient">Been</span>
            </h2>
          </motion.div>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, index) => (
              <motion.article
                key={item.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 pb-12 last:pb-0"
              >
                <div className="absolute left-0 top-1">
                  <div className="w-4 h-4 bg-accent border-2 border-neutral-950 rounded-full" aria-hidden="true" />
                  {index < timeline.length - 1 && (
                    <div className="absolute left-1.5 top-5 w-0.5 h-full bg-neutral-800" aria-hidden="true" />
                  )}
                </div>
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="font-display font-black text-heading-md text-accent whitespace-nowrap">
                    {item.year}
                  </span>
                  <span className="font-body text-caption text-neutral-500 uppercase tracking-wider">
                    {item.title}
                  </span>
                </div>
                <p className="font-display font-medium text-heading-sm text-neutral-50">
                  {item.company}
                </p>
                <p className="font-body text-body-md text-neutral-400 mt-2">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32 border-t border-neutral-800">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative max-w-3xl mx-auto text-center p-12 lg:p-16 card-brutal-accent"
          >
            <div className="brutal-corner brutal-corner-tl" aria-hidden="true" />
            <div className="brutal-corner brutal-corner-tr" aria-hidden="true" />
            <div className="brutal-corner brutal-corner-bl" aria-hidden="true" />
            <div className="brutal-corner brutal-corner-br" aria-hidden="true" />

            <div className="relative z-10">
              <h2 className="font-display font-black text-display-md text-neutral-50 mb-6">
                Ready to Work <br /><span className="text-gradient">Together</span>?
              </h2>
              <p className="font-body text-body-lg text-neutral-300 mb-8 max-w-lg mx-auto">
                I'm currently accepting new projects for Q1 2025. Let's discuss how I can help elevate your digital presence.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="/contact">Start a Conversation</a>
                </Button>
                <Button variant="ghost" size="lg" asChild>
                  <a href="mailto:kian@segantini.dev">Email Me Directly</a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}