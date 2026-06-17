import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Nunito } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import { COMPANY } from "@/lib/company";
import { SITE_URL, ogImages, twitterImages } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

const DEFAULT_TITLE = "Xclator AI LLC — AI Product Studio | Ship AI Products";
const DEFAULT_DESC =
  "Xclator AI LLC is a US-registered AI product studio. We build, launch, and scale AI-powered SaaS products — LeadHawk, ScribeFlow, MapMotion, and Mobile ERP.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Xclator AI LLC",
  },
  description: DEFAULT_DESC,
  applicationName: "Xclator AI LLC",
  authors: [{ name: "Xclator AI LLC", url: SITE_URL }],
  creator: "Xclator AI LLC",
  publisher: "Xclator AI LLC",
  alternates: { canonical: "/" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    siteName: "Xclator AI LLC",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: ogImages,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESC,
    images: twitterImages,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.legalName,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  email: COMPANY.email,
  sameAs: [COMPANY.socials.linkedin],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: COMPANY.email,
    telephone: "+19179208834",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.line1,
    addressLocality: COMPANY.address.city,
    addressRegion: COMPANY.address.state,
    postalCode: COMPANY.address.zip,
    addressCountry: "US",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${nunito.variable}`}>
      <body>
        <JsonLd data={organizationLd} />
        {children}
      </body>
    </html>
  );
}
