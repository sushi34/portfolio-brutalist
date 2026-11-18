'use client'

import { useState } from 'react'
import { Mail, MapPin, Clock, Send, Loader2, CheckCircle, AlertCircle, ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Input, Textarea } from '@/components/ui/Input'
import { Card } from '@/components/ui/Card'
import { motion } from 'framer-motion'

const services = [
  { value: 'ux-ui', label: 'UX/UI Design', description: 'User research, wireframes, prototypes, design systems' },
  { value: 'landing-page', label: 'Website/Landing Page Design', description: 'Conversion-focused landing pages and marketing sites' },
  { value: 'redesign', label: 'Website Redesign', description: 'Strategic redesigns improving usability and metrics' },
  { value: 'consultation', label: 'Design Consultation', description: 'Audit, strategy, and advisory services' },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Partial<typeof formData>>({})

  const validateForm = () => {
    const newErrors: Partial<typeof formData> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email format'
    if (!formData.service) newErrors.service = 'Please select a service'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.trim().length < 50) newErrors.message = 'Message should be at least 50 characters'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setStatus('submitting')

    try {
      // Simulate API call - replace with actual form endpoint
      await new Promise(resolve => setTimeout(resolve, 1500))
      setStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        timeline: '',
        message: '',
      })
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative py-20 lg:py-32 border-b border-neutral-800 noise-overlay">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-900/20 rounded-full blur-3xl" />
        </div>

        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="font-body text-caption text-accent uppercase tracking-widest mb-4 inline-block">
              Get In Touch
            </span>
            <h1 className="font-display font-black text-display-xl text-neutral-50 mb-6 text-balance">
              Let's Start a <span className="text-gradient">Project</span> Together
            </h1>
            <p className="font-body text-body-xl text-neutral-300 mb-8 text-balance">
              I'm currently accepting new projects. Fill out the form and I'll get back to you within 24 hours.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-neutral-400 font-body text-body-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                <a href="mailto:kian@segantini.dev" className="hover:text-accent transition-colors">kian@segantini.dev</a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Italy (GMT+1)</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" aria-hidden="true" />
                <span>Response within 24h</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="section-container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card variant="accent" padding="lg">
                  <h3 className="font-display font-semibold text-heading-sm text-neutral-50 mb-6">
                    Services
                  </h3>
                  <ul className="space-y-3" role="list">
                    {services.map((service) => (
                      <li key={service.value} className="group">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="radio"
                            name="service"
                            value={service.value}
                            checked={formData.service === service.value}
                            onChange={handleChange}
                            className="sr-only peer"
                          />
                          <div className={`
                            relative flex-1 p-4 border-2 transition-all duration-fast ease-brutal
                            ${formData.service === service.value
                              ? 'border-accent bg-accent/10'
                              : 'border-neutral-800 hover:border-accent/50'
                            }
                          `}>
                            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full border-2 transition-all duration-fast
                              ${formData.service === service.value
                                ? 'bg-accent border-accent'
                                : 'border-neutral-700 peer-hover:border-accent'
                              }
                            ">
                              {formData.service === service.value && (
                                <Check className="h-3 w-3 text-neutral-950 mx-auto my-1" aria-hidden="true" />
                              )}
                            </div>
                            <p className="font-display font-medium text-body-sm text-neutral-50">
                              {service.label}
                            </p>
                            <p className="font-body text-body-sm text-neutral-400 mt-1">
                              {service.description}
                            </p>
                          </div>
                        </label>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card variant="default" padding="lg">
                  <h3 className="font-display font-semibold text-heading-sm text-neutral-50 mb-4">
                    What Happens Next?
                  </h3>
                  <ol className="space-y-4 font-body text-body-md text-neutral-300">
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center font-display font-bold text-body-sm text-accent">1</span>
                      <span>I'll review your project details within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center font-display font-bold text-body-sm text-accent">2</span>
                      <span>We'll schedule a quick call to discuss scope & goals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center font-display font-bold text-body-sm text-accent">3</span>
                      <span>I'll send a detailed proposal with timeline & pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center font-display font-bold text-body-sm text-accent">4</span>
                      <span>We kick off the project!</span>
                    </li>
                  </ol>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card variant="default" padding="lg" className="text-center">
                  <h3 className="font-display font-semibold text-heading-sm text-neutral-50 mb-3">
                    Prefer Email?
                  </h3>
                  <p className="font-body text-body-md text-neutral-400 mb-6">
                    Send me a direct message and I'll reply as soon as possible.
                  </p>
                  <a
                    href="mailto:kian@segantini.dev?subject=Project Inquiry&body=Hi Kian,%0A%0AI'm interested in working with you on...%0A%0AProject type:%0ATimeline:%0ABudget range:%0A%0ABest,%0A[Your Name]"
                    className="btn-brutal-secondary inline-flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" aria-hidden="true" />
                    Email Directly
                  </a>
                </Card>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card variant="accent" padding="lg">
                  <h2 className="font-display font-semibold text-heading-lg text-neutral-50 mb-8">
                    Project Details
                  </h2>

                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-3 p-6 bg-green-500/10 border border-green-500/30 text-green-400 mb-8"
                    >
                      <CheckCircle className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-display font-semibold text-body-md">Message Sent!</p>
                        <p className="font-body text-body-sm mt-1">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-3 p-6 bg-red-500/10 border border-red-500/30 text-red-400 mb-8"
                    >
                      <AlertCircle className="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                      <div>
                        <p className="font-display font-semibold text-body-md">Something Went Wrong</p>
                        <p className="font-body text-body-sm mt-1">Please try again or email me directly at kian@segantini.dev</p>
                      </div>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Input
                        label="Full Name *"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        error={errors.name}
                        required
                      />
                      <Input
                        label="Email Address *"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        error={errors.email}
                        required
                      />
                    </div>

                    <Input
                      label="Company / Organization"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Acme Inc."
                    />

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className="label-brutal">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="input-brutal w-full appearance-none bg-neutral-950"
                        >
                          <option value="">Select budget range</option>
                          <option value="5k-10k">$5,000 - $10,000</option>
                          <option value="10k-25k">$10,000 - $25,000</option>
                          <option value="25k-50k">$25,000 - $50,000</option>
                          <option value="50k+">$50,000+</option>
                          <option value="discuss">Let's discuss</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="label-brutal">
                          Desired Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="input-brutal w-full appearance-none bg-neutral-950"
                        >
                          <option value="">Select timeline</option>
                          <option value="asap">ASAP</option>
                          <option value="1-2-months">1-2 months</option>
                          <option value="2-3-months">2-3 months</option>
                          <option value="3-6-months">3-6 months</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <Textarea
                      label="Project Details *"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project, goals, challenges, and anything else relevant. The more detail, the better I can help."
                      error={errors.message}
                      required
                      rows={6}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      loading={status === 'submitting'}
                      className="w-full sm:w-auto"
                    >
                      {status === 'submitting' ? (
                        <>
                          <Loader2 className="h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="h-5 w-5" />
                        </>
                      )}
                    </Button>

                    <p className="font-body text-body-sm text-neutral-500 text-center">
                      By submitting this form, you agree to my{' '}
                      <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>
                      . No spam, ever.
                    </p>
                  </form>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-t border-neutral-800">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="font-body text-caption text-accent uppercase tracking-widest mb-4 inline-block">
              FAQ
            </span>
            <h2 className="font-display font-black text-display-lg text-neutral-50 mb-4">
              Common <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: 'How much do you charge?', a: 'Pricing depends on project scope, complexity, and timeline. Most projects range from $5,000 to $50,000+. I provide detailed proposals after our discovery call.' },
              { q: 'What is your typical timeline?', a: 'A typical landing page takes 2-3 weeks. A full website redesign takes 4-8 weeks. Complex UX/UI projects can take 2-3 months. I\'ll provide a detailed timeline in the proposal.' },
              { q: 'Do you work with agencies?', a: 'Yes! I frequently partner with agencies as a senior design resource. White-label work and ongoing retainers are available.' },
              { q: 'What tools do you use?', a: 'Primarily Figma for design, Framer for prototyping, and Notion/Linear for project management. I can adapt to your team\'s toolstack.' },
              { q: 'Do you do development too?', a: 'I focus on design but have working knowledge of HTML/CSS, React, and Tailwind. For development, I partner with trusted developers or work alongside your team.' },
              { q: 'What is your availability?', a: 'I typically book 2-4 weeks in advance. For urgent projects, let me know and I\'ll see what I can do.' },
            ].map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group card-brutal"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-display font-medium text-heading-sm text-neutral-50">
                  {faq.q}
                  <ArrowRight className="h-5 w-5 text-accent transition-transform group-open:rotate-90" aria-hidden="true" />
                </summary>
                <div className="px-6 pb-6 font-body text-body-md text-neutral-400">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}