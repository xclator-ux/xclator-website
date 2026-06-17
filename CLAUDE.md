# CLAUDE.md — Xclator Website

## Project Overview
Build the Xclator website — an immersive, scroll-snapping, dark-themed marketing site for **Xclator AI LLC**, a US-registered AI product studio. The original design reference is in `design/Xclator v2.html`. The site started as a single-page landing site and is now expanding into a **multi-page app** with a dedicated Products page, individual product detail pages, an About page, a Contact page (with form), and legal pages (Privacy, Refund, Terms).

> **IMPORTANT CONTEXT CHANGE:** Xclator is no longer "just a domain / solo founder." It is now **Xclator AI LLC**, a US-registered company (Wyoming) with a **6-person team**. The old site copy that says "One Founder / solo founder / we're not a 50-person agency" must be REPLACED with the new lean-team + registered-LLC narrative (see About + copy rules below). Do NOT reuse "solo founder" language anywhere.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v3 + custom CSS for animations
- **Animations:** Framer Motion for scroll reveals + CSS keyframes for aurora/parallax
- **Fonts:** Google Fonts — Plus Jakarta Sans (800) + Nunito (400-700)
- **Deployment:** Vercel
- **No database, no auth.** The only backend is a single serverless route for the contact form (see Contact page).

## Project Path
`C:\Users\ANAS PC\Desktop\xclator-website`

## Design Reference
The file `design/Xclator v2.html` is the source of truth for the **visual language** (colors, type, aurora, glass, animations). New pages must reuse the SAME design system (same globals.css, same components, same motion). Do NOT invent a new visual style for new pages — they must feel native to the existing site.

## Routing / Pages (App Router)
```
src/app/
  layout.tsx              # Root layout — fonts, metadata, global styles, Navbar + Footer shared
  page.tsx                # Home (landing) — existing sections, with edits below
  globals.css             # Existing design system
  products/
    page.tsx              # NEW — Products listing page (all 4 products as cards)
  products/[slug]/
    page.tsx              # NEW — Individual product detail page (dynamic route)
  about/
    page.tsx              # NEW — About Xclator AI LLC
  contact/
    page.tsx              # NEW — Contact page with form + company details
    actions.ts            # NEW — server action / route handler for form submit
  legal/
    privacy/page.tsx      # NEW — Privacy Policy
    refund/page.tsx       # NEW — Refund Policy
    terms/page.tsx        # NEW — Terms & Conditions
  api/
    contact/route.ts      # NEW — POST handler for contact form (email send)
```

> NOTE: Because we now have real routes, scroll-snap stays ONLY on the home page. New pages (products, about, contact, legal) are normal scrollable pages — NO `scroll-snap-type`, NO forced `100vh` sections, NO section dots. Wrap scroll-snap logic so it only applies on `/`.

## Navbar Changes (CRITICAL)
The navbar currently scrolls to sections on the home page. Update it to use real routes:
- **Products** → `/products` (real page, not scroll)
- **Services** → home page services section (`/#services`)
- **About** → `/about` (real page — redirect the old in-page About anchor here)
- **Contact** → `/contact` (real page with form)
- **"Start a Project"** button → `/contact`
- Logo → `/`
- On non-home pages the navbar should be solid (glass bg) from the start, since there's no hero behind it.
- Mobile hamburger drawer: same new links.

## Home Page Edits (CRITICAL)
1. **Hero "Work With Us" button** → change from `https://wa.me/...` to `/contact`.
2. **Hero "Explore Products →"** → change to `/products` (real page).
3. **CTA section "Start a Project"** → `/contact`. **"Explore Products"** → `/products`.
4. **About section on home** → keep a short teaser but its link/anchor now goes to `/about`.
5. **Social proof / copy** → remove "solo founder" framing. Update About teaser copy to team narrative.
6. **Footer Company links** → About → `/about`, Services → `/#services`, Contact → `/contact`. Add a new **Legal** column: Privacy → `/legal/privacy`, Refund → `/legal/refund`, Terms → `/legal/terms`.
7. **Footer copyright** → `© 2026 Xclator AI LLC. All rights reserved.`
8. Add **ClipMagnet stays "Coming Soon"** on home, but the 4 SELLABLE products (LeadHawk, ScribeFlow, MapMotion, Mobile ERP) are the ones on `/products`.

## Products Page (`/products`) — NEW
A normal scrollable page (reuse hero/aurora style at top, smaller). Header: a hero strip with a heading + sub. Then a responsive grid (2 columns desktop, 1 column mobile) of **4 product cards**.

Each product card contains:
- Product name (with its accent color)
- Pulsing dot in accent color
- Short description (one-liner from data below)
- **Price** — show lifetime price prominently (e.g. `$1,200 · Lifetime`)
- Two buttons:
  - **Demo** → opens the product's live URL in a new tab (`target="_blank" rel="noopener noreferrer"`)
  - **Buy Now** → **DISABLED** state showing **"Coming Soon"** (Stripe not live yet). Render as a disabled-looking button (lower opacity, `cursor: not-allowed`, no link). Add a small tooltip/subtext "Payments launching soon."
- Whole card (excluding buttons) is clickable → navigates to `/products/[slug]` detail page.

**Below the 4 products: a custom-systems HERO band** (full-width section):
- Tagline (use): **"Need something built just for you?"**
- Sub: **"We design and ship custom AI systems, internal tools, and bespoke software for businesses that have outgrown off-the-shelf. Tell us what you need — we'll build it."**
- CTA button **"Contact Us"** → `/contact`.

## Product Data (source of truth — use exactly)
Slugs: `leadhawk`, `scribeflow`, `mapmotion`, `mobile-erp`.

### LeadHawk  (accent #22C55E)
- **Slug:** `leadhawk`
- **Demo URL:** https://leadhawk.xclator.com
- **Price:** $1,200 · Lifetime Access
- **One-liner:** AI-powered lead generation built for web designers & agencies.
- **Short (card):** Finds businesses that need a website, audits weak existing sites, and hands you pitch-ready leads — with full lead management built in.
- **Detail page — what it does:**
  - Scans the web to find businesses with **no website** or a **weak/outdated** website.
  - Runs an **automated website audit** on prospects (performance, design, SEO signals) so you walk in knowing exactly what's broken.
  - Generates a **ready-to-send pitch** tailored to each prospect's gaps.
  - Built-in **lead management** — track, tag, and move leads through your pipeline in one place.
  - Runs largely on **autopilot** so you spend time closing, not prospecting.
- **Key features (detail page bullets):**
  - AI prospecting (no-website & weak-website detection)
  - Automated website audits
  - AI pitch generation
  - Full lead management / CRM-lite
  - Best for: web designers, dev agencies, freelancers
- **Detail tagline:** "Stop hunting for clients. Let LeadHawk bring them to you."

### ScribeFlow  (accent #E85D3A)
- **Slug:** `scribeflow`
- **Demo URL:** https://scribeflow.xclator.com
- **Price:** $1,999 · Lifetime Access
- **One-liner:** AI transcription tool — paste any video link, get downloadable audio + accurate transcription in any format.
- **Short (card):** Drop a link from YouTube, TikTok, Facebook or anywhere — get the downloadable audio and a 99% accurate, multilingual transcript you can export in any format.
- **Detail page — what it does:**
  - Paste **any video/audio link** (YouTube, TikTok, Facebook, songs — anything) and get back the **downloadable audio** plus a full transcription.
  - **Export in any format** you need.
  - **99% accuracy**, multilingual.
  - Generate and translate scripts with built-in AI tools.
  - Process **many links at once** with bulk generation.
- **Key features (detail page bullets):**
  - AI script generator
  - 99% accuracy, multilingual
  - AI script translator
  - Bulk link → script generation
  - Downloadable audio + any export format
- **Detail tagline:** "Any link in. Studio-accurate transcript out."

### MapMotion  (accent #3B82F6)
- **Slug:** `mapmotion`
- **Demo URL:** https://mapmotion.xclator.com
- **Price:** $699 · Lifetime Access
- **One-liner:** A 2D map animation tool to create cinematic map sequences in minutes.
- **Short (card):** Animate anything on a 2D map — flight routes, military movements, journeys — in multiple styles, all from a single page.
- **Detail page — what it does:**
  - Create **2D map animations** of any kind: flight routes, military movements, travel journeys, delivery paths, and more.
  - Multiple **animation styles** to match your video's tone.
  - Everything in a **single-page** workflow — fast, no learning curve.
  - Built for video creators, educators, analysts, and storytellers.
- **Key features (detail page bullets):**
  - 2D map route & movement animation
  - Multiple styles / themes
  - Single-page, fast workflow
  - Great for flight paths, military ops, journeys
- **Detail tagline:** "Turn any route into cinematic motion."

### Mobile ERP  (accent #A855F7)
- **Slug:** `mobile-erp`
- **Demo URL:** https://mobile.xclator.com
- **Price:** $499 · Lifetime Access
- **One-liner:** A lightweight ERP system built for mobile shops & small businesses — fully customizable.
- **Short (card):** An ERP-lite system for mobile shops and small businesses — inventory, sales, and operations in one place, and customizable for any business.
- **Detail page — what it does:**
  - A **lightweight ERP** that covers the essentials small businesses actually use — without the bloat of enterprise systems.
  - Built first for **mobile phone shops**, but **fully customizable** for any business type.
  - Manage inventory, sales, and day-to-day operations in one clean system.
- **Key features (detail page bullets):**
  - ERP-lite: inventory, sales, operations
  - Designed for mobile shops & small businesses
  - Fully customizable for any business
  - Simple, no enterprise bloat
- **Detail tagline:** "Enterprise control, small-business simple."

## Product Detail Page (`/products/[slug]`) — NEW
Dynamic route reading from a `PRODUCTS` array in `src/lib/products.ts` (build this from the data above). Layout per product:
- Back link → `/products`
- Product name big, with accent color + pulsing dot
- Detail tagline
- Price block (lifetime price) + the two buttons: **Demo** (live URL, new tab) and **Buy Now → "Coming Soon" disabled**.
- "What it does" paragraph(s)
- "Key features" list (accent-colored bullets/checks)
- A closing CTA band: "Want this customized for your business? → Contact Us" → `/contact`
- Reuse glass cards, accent glow, Framer Motion reveals. NO scroll-snap.
- `generateStaticParams` for the 4 slugs. Proper per-product `metadata` (title/description) for SEO.

## About Page (`/about`) — NEW
Replace the home "solo founder" story. Real narrative (use this, polish wording, keep it confident, no fluff):

- **Who we are:** Xclator AI LLC is a US-registered AI product studio building and shipping AI-powered SaaS. We turn ideas into live products — fast.
- **The story:** What began as an agency over **2 years ago** has grown into a product company. The team has been building software for years (founder 5+ years in), and in **2026** the work was formalized as **Xclator AI LLC**, registered in the United States.
- **The team:** A lean, senior **6-person team** that ships faster than groups many times its size. Small team, big output — that's the edge.
- **What we do:** Build our own SaaS products (LeadHawk, ScribeFlow, MapMotion, Mobile ERP, ClipMagnet) AND build custom AI systems & software for clients.
- **Mission (use, may refine):** *"To put production-grade AI software in the hands of businesses everywhere — shipping fast, charging fair, and building tools people actually use."*
- **Why it matters / edge:** Lean team, AI-first workflow, real shipped products as proof, US-registered for trust.
- Include the company stats grid (products shipped, API calls, languages, accuracy) reused from home.
- Founder mention: **Abdul Moiz, Founder.** (Keep it as "Founder + 6-person team," NOT "solo founder.")
- CTA at bottom → `/contact`.

## Contact Page (`/contact`) — NEW
Two-column on desktop, stacked on mobile.

**Left — company details (real, do NOT change):**
- Company: **Xclator AI LLC**
- Email: **contact@xclator.com**
- Phone: **+1 917 920 8834**
- Address: **30 N Gould St, Ste 65282, Sheridan, WY 82801, USA**
- Social: LinkedIn (https://www.linkedin.com/in/abdulmoiz-xclator/), WhatsApp (https://wa.me/923019172774)

**Right — contact form** with fields: Name, Email, Subject, Message, Submit.
- **Do NOT use an HTML `<form>` tag inside React in a way that breaks** — use controlled inputs + `onClick` submit handler calling the API route.
- POST to `/api/contact`. The route handler should send an email to `contact@xclator.com`.
- Use **Resend** (`npm i resend`) with `process.env.RESEND_API_KEY` and a verified sender. If no key is set, the route should gracefully fall back to logging + returning success=false with a message (so the build never crashes). Add `.env.local` keys to `.env.example`.
- Show success / error states in the UI. Basic validation (required fields, valid email). Honeypot field for spam.
- NO scroll-snap on this page.

## Legal Pages — NEW (PRODUCTION-READY, NO DUMMY TEXT)
Three real pages drafted for **Xclator AI LLC**, a US (Wyoming) registered company selling **digital software products with lifetime access**. Use the full drafted copy provided by Abdul (he will paste the finalized legal text, OR generate from the structure below). Each page: clean readable typography, max-width container (~720px), `Last updated: 17 June 2026`, links back to home, listed in footer Legal column.

Required legal content (must be real and specific to this business):

**Privacy Policy** must cover: what data is collected (name, email, payment info via Stripe, usage data, video links/uploads processed by ScribeFlow, audit data by LeadHawk), how it's used, third-party processors (Stripe for payments, Resend/email, hosting on Vercel, AI/LLM providers like Anthropic/OpenAI for processing), cookies, data retention, user rights (access/delete), international transfers, children's policy, contact (contact@xclator.com), governing law (Wyoming, USA).

**Refund Policy** must reflect: **7-day conditional refund window** on lifetime-access digital products. Conditions: refund available within 7 days of purchase ONLY if the product is non-functional / materially not as described AND the customer has contacted support to attempt resolution first; refunds are NOT granted simply for change of mind after the product has been accessed/used, because these are digital lifetime-access licenses delivered immediately; abuse (downloading/using then requesting refund) is excluded; chargeback policy; how to request (email contact@xclator.com with order details); processing time. Make it fair but protective — clearly conditional, not "use it then refund."

**Terms & Conditions** must cover: definition of the company (Xclator AI LLC), what's being sold (lifetime license to use the software, not ownership of IP), acceptable use, prohibited use, license scope (single business/user as applicable), payment terms (via Stripe), no-resale clause, disclaimer of warranties, limitation of liability, IP ownership, termination for abuse, governing law (Wyoming, USA), changes to terms, contact.

> Write these in clear plain English, professionally, specific to a digital software / lifetime-license business. They must read as real, enforceable-style policies — Stripe reviews these. NO Lorem ipsum, NO "[Company Name]" placeholders left unfilled.

## Constants / Data
Centralize in `src/lib/products.ts` (product objects with slug, name, accent, demoUrl, price, oneLiner, shortDesc, whatItDoes[], features[], detailTagline) and `src/lib/company.ts` (name, email, phone, address, socials, foundedYear, teamSize). All pages read from these — single source of truth.

## Color System (unchanged)
```
--bg:#000000  --navy:#050A18  --white:#FFFFFF  --muted:#7B8BA3
--orange:#FF6B35  --cyan:#4DC9F6  --border:rgba(255,255,255,0.06)  --glass:rgba(255,255,255,0.02)
```
Product accents: LeadHawk #22C55E · ScribeFlow #E85D3A · MapMotion #3B82F6 · Mobile ERP #A855F7 · ClipMagnet #A855F7 (coming soon).

## SEO / Metadata
Give every new page its own `metadata` (title + description). Examples:
- Products: "Products — Xclator AI LLC | LeadHawk, ScribeFlow, MapMotion, Mobile ERP"
- About: "About Xclator AI LLC — AI Product Studio"
- Contact: "Contact Xclator AI LLC"
- Each product detail: "<Product> — <one-liner> | Xclator AI LLC"

## DO NOT
- Do NOT keep "solo founder / one founder / not a 50-person agency" copy anywhere.
- Do NOT put scroll-snap or forced 100vh sections on the new pages.
- Do NOT leave any placeholder/dummy text in legal pages.
- Do NOT enable Buy Now yet — it must render as disabled "Coming Soon."
- Do NOT use a UI library — custom Tailwind/CSS only, matching existing design.
- Do NOT use localStorage/sessionStorage.
- Do NOT break the existing home page design while refactoring the navbar/links.

## Build Order (this task)
1. Refactor Navbar links to real routes (+ solid bg on non-home pages).
2. Create `src/lib/products.ts` and `src/lib/company.ts` from the data above.
3. Build `/products` listing page (cards + custom-systems hero band).
4. Build `/products/[slug]` detail pages (generateStaticParams + metadata).
5. Build `/about` page (new team narrative, kill solo-founder copy).
6. Build `/contact` page + `/api/contact` route (Resend, graceful fallback) + `.env.example`.
7. Build `/legal/privacy`, `/legal/refund`, `/legal/terms` (real production copy).
8. Edit home page hero/CTA/footer links + footer Legal column + copyright → Xclator AI LLC.
9. Ensure scroll-snap is scoped to home only.
10. Mobile responsive pass on every new page (375 / 768 / 1024 / 1440).
11. `npm run build` must pass clean.
