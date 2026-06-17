// ── Single source of truth for sellable Xclator products ──

export type Product = {
  slug: string;
  name: string;
  accent: string;
  demoUrl: string;
  price: string; // e.g. "$1,200"
  priceNote: string; // e.g. "Lifetime Access"
  oneLiner: string;
  shortDesc: string;
  whatItDoes: string[];
  features: string[];
  detailTagline: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "leadhawk",
    name: "LeadHawk",
    accent: "#22C55E",
    demoUrl: "https://leadhawk.xclator.com",
    price: "$1,200",
    priceNote: "Lifetime Access",
    oneLiner: "AI-powered lead generation built for web designers & agencies.",
    shortDesc:
      "Finds businesses that need a website, audits weak existing sites, and hands you pitch-ready leads — with full lead management built in.",
    whatItDoes: [
      "Scans the web to find businesses with no website or a weak/outdated website.",
      "Runs an automated website audit on prospects (performance, design, SEO signals) so you walk in knowing exactly what's broken.",
      "Generates a ready-to-send pitch tailored to each prospect's gaps.",
      "Built-in lead management — track, tag, and move leads through your pipeline in one place.",
      "Runs largely on autopilot so you spend time closing, not prospecting.",
    ],
    features: [
      "AI prospecting (no-website & weak-website detection)",
      "Automated website audits",
      "AI pitch generation",
      "Full lead management / CRM-lite",
      "Best for: web designers, dev agencies, freelancers",
    ],
    detailTagline: "Stop hunting for clients. Let LeadHawk bring them to you.",
  },
  {
    slug: "scribeflow",
    name: "ScribeFlow",
    accent: "#E85D3A",
    demoUrl: "https://scribeflow.xclator.com",
    price: "$1,999",
    priceNote: "Lifetime Access",
    oneLiner:
      "AI transcription tool — paste any video link, get downloadable audio + accurate transcription in any format.",
    shortDesc:
      "Drop a link from YouTube, TikTok, Facebook or anywhere — get the downloadable audio and a 99% accurate, multilingual transcript you can export in any format.",
    whatItDoes: [
      "Paste any video/audio link (YouTube, TikTok, Facebook, songs — anything) and get back the downloadable audio plus a full transcription.",
      "Export in any format you need.",
      "99% accuracy, multilingual.",
      "Generate and translate scripts with built-in AI tools.",
      "Process many links at once with bulk generation.",
    ],
    features: [
      "AI script generator",
      "99% accuracy, multilingual",
      "AI script translator",
      "Bulk link → script generation",
      "Downloadable audio + any export format",
    ],
    detailTagline: "Any link in. Studio-accurate transcript out.",
  },
  {
    slug: "mapmotion",
    name: "MapMotion",
    accent: "#3B82F6",
    demoUrl: "https://mapmotion.xclator.com",
    price: "$699",
    priceNote: "Lifetime Access",
    oneLiner: "A 2D map animation tool to create cinematic map sequences in minutes.",
    shortDesc:
      "Animate anything on a 2D map — flight routes, military movements, journeys — in multiple styles, all from a single page.",
    whatItDoes: [
      "Create 2D map animations of any kind: flight routes, military movements, travel journeys, delivery paths, and more.",
      "Multiple animation styles to match your video's tone.",
      "Everything in a single-page workflow — fast, no learning curve.",
      "Built for video creators, educators, analysts, and storytellers.",
    ],
    features: [
      "2D map route & movement animation",
      "Multiple styles / themes",
      "Single-page, fast workflow",
      "Great for flight paths, military ops, journeys",
    ],
    detailTagline: "Turn any route into cinematic motion.",
  },
  {
    slug: "mobile-erp",
    name: "Mobile ERP",
    accent: "#A855F7",
    demoUrl: "https://mobile.xclator.com",
    price: "$499",
    priceNote: "Lifetime Access",
    oneLiner:
      "A lightweight ERP system built for mobile shops & small businesses — fully customizable.",
    shortDesc:
      "An ERP-lite system for mobile shops and small businesses — inventory, sales, and operations in one place, and customizable for any business.",
    whatItDoes: [
      "A lightweight ERP that covers the essentials small businesses actually use — without the bloat of enterprise systems.",
      "Built first for mobile phone shops, but fully customizable for any business type.",
      "Manage inventory, sales, and day-to-day operations in one clean system.",
    ],
    features: [
      "ERP-lite: inventory, sales, operations",
      "Designed for mobile shops & small businesses",
      "Fully customizable for any business",
      "Simple, no enterprise bloat",
    ],
    detailTagline: "Enterprise control, small-business simple.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
