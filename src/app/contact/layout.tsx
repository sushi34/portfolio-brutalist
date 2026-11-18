import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Kian Segantini for UX/UI design, website design, landing page design, and website redesign projects. Available for freelance work worldwide.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}