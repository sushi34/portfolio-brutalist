'use client'

import Link from 'next/link'
import { Mail, Linkedin, Github, Twitter, ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

const socialLinks = [
  { name: 'Email', href: 'mailto:kian@segantini.dev', icon: Mail },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/kiansegantini', icon: Linkedin, external: true },
  { name: 'GitHub', href: 'https://github.com/kiansegantini', icon: Github, external: true },
  { name: 'Twitter', href: 'https://twitter.com/kiansegantini', icon: Twitter, external: true },
]

const footerLinks = {
  work: [
    { name: 'All Projects', href: '/work' },
    { name: 'Case Studies', href: '/work#case-studies' },
    { name: 'Services', href: '/contact#services' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Process', href: '/about#process' },
    { name: 'Values', href: '/about#values' },
  ],
  connect: [
    { name: 'Contact', href: '/contact' },
    { name: 'Fiverr', href: 'https://fiverr.com/kiansegantini', external: true },
    { name: 'Availability', href: '/contact#availability' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-neutral-950/50 backdrop-blur-sm">
      <div className="section-container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6" aria-label="Kian Segantini - Home">
              <span className="font-display font-bold text-display-sm text-neutral-50 tracking-tight">
                KS
              </span>
            </Link>
            <p className="font-body text-body-md text-neutral-400 mb-6 max-w-xs">
              UX/UI Designer crafting digital experiences that convert. Based in Italy, working worldwide.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-neutral-400 hover:text-accent transition-colors duration-fast"
                  aria-label={social.name}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                >
                  <social.icon className="h-5 w-5" aria-hidden="true" />
                  {social.external && <ExternalLink className="h-3 w-3 ml-1 opacity-50" aria-hidden="true" />}
                </a>
              ))}
            </div>
          </div>

          {/* Work */}
          <nav aria-label="Work links">
            <h3 className="font-display font-semibold text-heading-sm text-neutral-50 mb-4">Work</h3>
            <ul className="space-y-3">
              {footerLinks.work.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-body-md text-neutral-400 hover:text-accent transition-colors duration-fast"
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="h-3 w-3 ml-1 inline" aria-hidden="true" />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company links">
            <h3 className="font-display font-semibold text-heading-sm text-neutral-50 mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-body-md text-neutral-400 hover:text-accent transition-colors duration-fast"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <nav aria-label="Connect links">
            <h3 className="font-display font-semibold text-heading-sm text-neutral-50 mb-4">Connect</h3>
            <ul className="space-y-3">
              {footerLinks.connect.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-body-md text-neutral-400 hover:text-accent transition-colors duration-fast"
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="h-3 w-3 ml-1 inline" aria-hidden="true" />}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-body-sm text-neutral-500">
            © {new Date().getFullYear()} Kian Segantini. All rights reserved.
          </p>
          <p className="font-body text-body-sm text-neutral-500 font-mono">
            Built with Next.js, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}