import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Nunito } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "Xclator — AI Product Studio | Ship AI Products",
  description:
    "Xclator is an AI product studio from Pakistan. We build, launch, and scale AI-powered SaaS products. LeadHawk, ScribeFlow, MapMotion, and more.",
  openGraph: {
    title: "Xclator — AI Product Studio | Ship AI Products",
    description:
      "Xclator is an AI product studio from Pakistan. We build, launch, and scale AI-powered SaaS products.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${nunito.variable}`}>
      <body>{children}</body>
    </html>
  );
}
