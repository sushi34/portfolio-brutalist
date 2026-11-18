'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const navigation = [
  { name: 'Work', href: '/work' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-normal ease-brutal',
        scrolled ? 'bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800' : 'bg-transparent'
      )}
    >
      <nav className="section-container" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" aria-label="Kian Segantini - Home">
            <span className="font-display font-bold text-display-sm text-neutral-50 tracking-tight">
              KS
            </span>
            <span className="hidden sm:block font-body text-caption text-neutral-400 uppercase tracking-widest">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'font-display font-medium text-body-sm uppercase tracking-wider transition-colors duration-fast',
                  pathname === item.href
                    ? 'text-accent'
                    : 'text-neutral-400 hover:text-neutral-50'
                )}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-brutal-primary text-body-sm px-5 py-2"
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-400 hover:text-neutral-50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={cn(
            'md:hidden overflow-hidden transition-all duration-normal ease-brutal',
            mobileMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
          )}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-neutral-800">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'font-display font-medium text-body-md uppercase tracking-wider transition-colors',
                  pathname === item.href ? 'text-accent' : 'text-neutral-400'
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="btn-brutal-primary text-center mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}