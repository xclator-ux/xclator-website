# CLAUDE.md — Xclator Website

## Project Overview
Build the Xclator website — an immersive, scroll-snapping, dark-themed landing page for an AI product studio. The design reference is in `design/Xclator v2.html` (single HTML file from Claude Design). Convert it into a proper Next.js 14 app.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3 + custom CSS for animations
- **Animations:** Framer Motion for scroll reveals + CSS keyframes for aurora/parallax
- **Fonts:** Google Fonts — Plus Jakarta Sans (800) + Nunito (400-700)
- **Deployment:** Vercel
- **No database, no backend, no auth** — this is a static marketing site

## Project Path
`C:\Users\ANAS PC\Desktop\xclator-website`

## Setup Commands
```bash
npx create-next-app@14 xclator-website --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd xclator-website
npm install framer-motion
```

## Design Reference
The file `design/Xclator v2.html` is the SINGLE SOURCE OF TRUTH for all visual design. Read it completely before writing any code. Match the visual output pixel-perfectly. Do NOT copy the HTML structure — rebuild it in React/Next.js with proper components.

## Architecture

```
src/
  app/
    layout.tsx          # Root layout — fonts, metadata, global styles
    page.tsx            # Landing page — assembles all sections
    globals.css         # CSS variables, aurora keyframes, scroll-snap, grain, cursor
  components/
    Navbar.tsx           # Fixed glass navbar
    Hero.tsx             # Aurora bg + centered headline + CTAs + social proof
    Products.tsx         # 2x2 product grid with hover tilt
    Services.tsx         # 3 service panels with hover dim effect
    TechStats.tsx        # Tech marquee + stats counter grid
    About.tsx            # Split layout — text left, orb visual right
    CTA.tsx              # Full-screen CTA with gradient blobs
    Footer.tsx           # Footer with link columns
    ScrollContainer.tsx  # Scroll-snap wrapper with section dots
    SectionDots.tsx      # Fixed right-side navigation dots
    CustomCursor.tsx     # Custom orange cursor (desktop only)
  lib/
    constants.ts         # Product data, social links, nav items
```

## Color System (from design CSS variables)
```
--bg: #000000
--navy: #050A18
--white: #FFFFFF
--muted: #7B8BA3
--orange: #FF6B35
--cyan: #4DC9F6
--border: rgba(255,255,255,0.06)
--glass: rgba(255,255,255,0.02)
```

Product accent colors:
- LeadHawk: #22C55E
- ScribeFlow: #E85D3A
- MapMotion: #3B82F6
- ClipMagnet: #A855F7

## Typography
- Headings: Plus Jakarta Sans, weight 800, letter-spacing -0.03em
- Body: Nunito, weight 400-600
- Labels: Nunito, weight 700, uppercase, letter-spacing 0.22em
- Hero headline: clamp(52px, 6.5vw, 96px), line-height 0.95

## Critical Features to Implement

### 1. Scroll Snap (MOST IMPORTANT)
- Container: `scroll-snap-type: y mandatory`, `overflow-y: scroll`, `height: 100vh`
- Each section: `scroll-snap-align: start`, `height: 100vh`
- Footer: `height: auto` (not 100vh)
- Hide scrollbar: `::-webkit-scrollbar { display: none }`

### 2. Aurora Background (Hero)
- 4 gradient blobs with CSS `radial-gradient`, `filter: blur(90px)`
- Each blob has unique keyframe animation (20-32s cycles, ease-in-out, infinite, alternate)
- Mouse parallax: blobs shift opposite to cursor (15-20px range, lerp at 0.07)
- Grain overlay: SVG noise texture at 3.5% opacity

### 3. Custom Cursor (Desktop Only)
- Orange dot (10px) follows mouse instantly
- Ring (34px) follows with lerp delay (0.1 factor)
- Expand on hover over interactive elements (18px dot, 50px ring)
- `cursor: none` on body
- Hide on mobile/touch devices

### 4. Section Transitions / Scroll Animations
- **All sections:** Elements use Framer Motion `whileInView` with `opacity: 0→1`, `y: 50→0`, `scale: 0.97→1`
- **Stagger:** 0.1-0.15s between siblings
- **Easing:** `[0.16, 1, 0.3, 1]` (cubic-bezier)
- **Hero exit:** Letters split apart with random rotation/translation when scrolling away (Intersection Observer)
- **Products→Services:** Cards flip on Y-axis (`perspective(800px) rotateY(-80deg)`)
- **Services→Stats:** Panels dissolve upward with blur, stat cells appear with scale+blur

### 5. Product Cards
- Glassmorphism: `bg rgba(255,255,255,0.02)`, `border rgba(255,255,255,0.06)`
- Hover: `translateY(-10px)`, border brightens, glow blob opacity increases
- Top border gradient line in product's accent color
- Pulsing dot indicator per product
- "Coming Soon" pill badge on ClipMagnet

### 6. Service Panels
- 3 tall panels in a row, full height
- Large watermark numbers (01, 02, 03) at 5% opacity
- Hover: panel scales 1.02, siblings dim to 45% opacity
- Tech tags at bottom of each panel

### 7. Stats Counter
- Numbers count up from 0 on scroll into view (2s, ease-out)
- Use `requestAnimationFrame` with eased progress
- `IntersectionObserver` with threshold 0.5 to trigger

### 8. Tech Stack Marquee
- Infinite CSS horizontal scroll (`translateX(0) → translateX(-50%)`)
- Duplicated content for seamless loop
- Fade mask on edges (`mask-image: linear-gradient`)
- Pause on hover

### 9. Section Dots (Fixed Right Side)
- 6 dots, fixed position, right 28px, vertically centered
- Active dot: orange, scale 1.6, glow shadow
- Update active state on scroll position

### 10. Navbar
- Transparent initially
- On scroll past hero: `background rgba(0,0,0,0.75)` + `backdrop-filter blur(20px)` + bottom border
- Logo: "Xcl**a**tor" — the "a" is orange

## Links & Contact Data

### Navigation
- Products → scroll to products section
- Services → scroll to services section
- About → scroll to about section
- Contact → scroll to CTA section
- "Start a Project" button → https://wa.me/923019172774

### Hero CTAs
- "Explore Products →" → scroll to products section
- "Work With Us" → https://wa.me/923019172774

### CTA Section
- "Start a Project" → https://wa.me/923019172774
- "Explore Products" → scroll to products section

### Product Links (footer + cards)
- LeadHawk → https://leadhawk.xclator.com
- ScribeFlow → https://scribeflow.xclator.com
- MapMotion → https://mapmotion.xclator.com
- ClipMagnet → # (not live yet)

### Social Links
- LinkedIn: https://www.linkedin.com/in/abdulmoiz-xclator/
- WhatsApp: https://wa.me/923019172774
- Email: abdulmoiz@xclator.com

### Footer
- "© 2026 Xclator. Built in Pakistan."

## Mobile Responsive Rules (CRITICAL)

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Mobile Adaptations
- **Navbar:** Hamburger menu (3 lines icon), slide-in drawer from right
- **Hero:** Headline 40-48px, subline 16px, CTAs stack vertically (full width), social proof wraps
- **Products:** Single column (1 card per row), cards stack vertically
- **Services:** Single column (panels stack), reduce panel height to auto (NOT 100vh per panel)
- **Stats:** 2x2 grid on tablet, 2x2 on mobile (NOT 4 columns)
- **About:** Single column (text on top, orb visual below), orb smaller (160px)
- **CTA:** Reduce heading size, CTAs stack vertically
- **Footer:** Single column, link columns stack
- **Custom cursor:** HIDDEN on touch devices (`@media (hover: none)`)
- **Section dots:** HIDDEN on mobile
- **Scroll snap:** Keep on mobile but sections should have `min-height: 100vh` instead of fixed `height: 100vh` to handle overflow on small screens
- **Aurora blobs:** Reduce size (40vw instead of 70vw), reduce blur
- **Padding:** 20px on mobile (instead of 56px)

### Mobile Performance
- Reduce aurora blob count to 2 on mobile
- Disable mouse parallax on touch devices
- Simplify letter-split animation (just fade out on mobile)
- Use `will-change: transform` sparingly

## SEO & Meta
```
title: "Xclator — AI Product Studio | Ship AI Products"
description: "Xclator is an AI product studio from Pakistan. We build, launch, and scale AI-powered SaaS products. LeadHawk, ScribeFlow, MapMotion, and more."
og:image: (generate a simple OG image or use a solid color card)
```

## DO NOT
- Do NOT use any UI library (shadcn, MUI, Chakra) — all custom CSS/Tailwind
- Do NOT add dark mode toggle — it's dark only
- Do NOT add a blog, login, or any pages beyond the landing page
- Do NOT skip any section from the design
- Do NOT use `localStorage` or `sessionStorage`
- Do NOT add cookie banners or analytics (yet)

## Build Order
1. Setup Next.js project with Tailwind + Framer Motion
2. Configure fonts (Plus Jakarta Sans + Nunito) in layout.tsx
3. Build globals.css (variables, aurora keyframes, grain, scroll-snap)
4. Build ScrollContainer + SectionDots
5. Build Navbar (with glass effect on scroll)
6. Build Hero (aurora bg, centered text, CTAs, social proof, scroll indicator)
7. Build Products (grid, cards, hover effects)
8. Build Services (panels, hover dim, watermark numbers)
9. Build TechStats (marquee + counter grid)
10. Build About (split layout, orb, social links)
11. Build CTA (gradient blobs, pulsing button)
12. Build Footer
13. Build CustomCursor
14. Add all scroll animations (Framer Motion whileInView)
15. Add section transition effects (letter split, card flip, panel dissolve)
16. Mobile responsive pass on ALL components
17. Test at 375px, 768px, 1024px, 1440px
18. Final polish and deploy
