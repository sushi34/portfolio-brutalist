# Kian Segantini — Portfolio Website

A brutalist, minimal, and bold portfolio website for a UX/UI Designer. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🎨 Design Philosophy

- **Brutalist aesthetic**: Raw, honest, unapologetically functional
- **Dark mode default**: Deep blue palette with cyan accents
- **Typography-first**: Space Grotesk (display) + IBM Plex Mono (body)
- **Subtle motion**: Purposeful animations that enhance, not distract
- **Performance obsessed**: 90+ PageSpeed scores, optimized Core Web Vitals

## 🚀 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 11 |
| Content | MDX (next-mdx-remote) |
| Fonts | Space Grotesk + IBM Plex Mono (Google Fonts) |
| Icons | Lucide React |
| Analytics | Vercel Analytics |
| Deployment | Vercel |

## 📁 Project Structure

```
new-portfolio/
├── content/
│   ├── case-studies/          # MDX case study files
│   │   ├── ecommerce-redesign.mdx
│   │   ├── saas-landing.mdx
│   │   └── enterprise-redesign.mdx
│   └── about/
│       └── story.mdx          # About page content
├── public/                    # Static assets
├── src/
│   ├── app/                   # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── layout.tsx         # Root layout
│   │   ├── work/
│   │   │   ├── page.tsx       # Work listing
│   │   │   └── [slug]/page.tsx # Case study detail
│   │   ├── about/page.tsx     # About page
│   │   └── contact/page.tsx   # Contact page
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   └── layout/
│   │       ├── Header.tsx
│   │       └── Footer.tsx
│   ├── lib/
│   │   ├── utils.ts           # Utility functions
│   │   └── mdx.ts             # MDX content fetching
│   └── styles/
│       └── globals.css        # Global styles + Tailwind
├── tailwind.config.ts         # Tailwind configuration
├── next.config.js             # Next.js configuration
├── tsconfig.json              # TypeScript configuration
├── package.json
└── vercel.json                # Vercel deployment config
```

## 🎯 Features

### Pages
- **Homepage**: Hero, services, featured work, process, CTA
- **Work**: Filterable case study grid with categories
- **Case Studies**: Dynamic MDX rendering with sidebar, navigation
- **About**: Story, values, skills, timeline
- **Contact**: Form with validation, FAQ, service selector

### Design System
- Brutalist component library (Button, Card, Input)
- Consistent spacing, typography, color scales
- Dark mode only (by design)
- Accessible by default (WCAG 2.1 AA)

### Content Management
- MDX for case studies and about content
- Frontmatter for metadata (SEO, categorization)
- Automatic reading time calculation
- Featured project flagging

### Performance
- Static generation where possible
- Optimized images (next/image)
- Font optimization (next/font)
- Vercel Analytics integration
- Security headers configured

## 🛠️ Development

### Prerequisites
- Node.js 18.17+
- npm 9+

### Setup
```bash
cd new-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Commands
```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # ESLint
```

## 📝 Adding Case Studies

Create a new `.mdx` file in `content/case-studies/`:

```mdx
---
title: "Project Title"
description: "Brief description for listings and SEO"
date: "2024-01-15"
role: "Your Role"
tools: ["Figma", "Framer", "Notion"]
thumbnail: "/case-studies/project-hero.jpg"
client: "Client Name"
duration: "3 months"
category: "UX/UI Design"  # or "Website/Landing Page Design" or "Website Redesign"
featured: true
---

## The Challenge

Your content here...

## Results

| Metric | Before | After | Change |
|--------|--------|-------|--------|
| Conversion | 2% | 4% | +100% |
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` → `theme.extend.colors`:
- `primary`: Deep blue scale
- `accent`: Cyan (CTAs, highlights)
- `neutral`: Grayscale scale

### Fonts
Edit `src/styles/globals.css` → `@import` URLs and CSS variables

### Animations
Edit `src/styles/globals.css` → `@keyframes` and animation utilities

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import in Vercel
3. Add environment variables if needed
4. Deploy

### Environment Variables
```env
# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📊 Analytics

Vercel Analytics automatically tracks:
- Page views
- Unique visitors
- Top pages
- Referrers
- Geographic data

Custom events can be added via `window.va.track()`.

## ♿ Accessibility

- Semantic HTML5
- ARIA labels where needed
- Focus management
- Color contrast (WCAG AA)
- Reduced motion support
- Keyboard navigation
- Screen reader tested

## 📄 License

MIT License — feel free to use as inspiration for your own portfolio.

## 🤝 Contributing

This is a personal portfolio, but suggestions welcome via issues!

---

Built with ❤️ by Kian Segantini