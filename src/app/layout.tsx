import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'

const spaceGrotesk = Inter({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const ibmPlexMono = Inter({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fafafa' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: {
    default: 'Kian Segantini — UX/UI Designer',
    template: '%s | Kian Segantini',
  },
  description: 'UX/UI Designer crafting digital experiences that convert. Specializing in Website Design, Landing Pages, and Website Redesigns. Available for freelance work.',
  keywords: ['UX Designer', 'UI Designer', 'Web Designer', 'Product Designer', 'Figma', 'Website Design', 'Landing Page', 'Website Redesign', 'Freelance'],
  authors: [{ name: 'Kian Segantini' }],
  creator: 'Kian Segantini',
  publisher: 'Kian Segantini',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kiansegantini.vercel.app',
    siteName: 'Kian Segantini Portfolio',
    title: 'Kian Segantini — UX/UI Designer',
    description: 'UX/UI Designer crafting digital experiences that convert.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kian Segantini Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kian Segantini — UX/UI Designer',
    description: 'UX/UI Designer crafting digital experiences that convert.',
    images: ['/og-image.png'],
    creator: '@kiansegantini',
  },
  verification: {
    google: 'google-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} dark`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-body antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 btn-brutal-primary"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}