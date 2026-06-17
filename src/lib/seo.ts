// ── Centralized SEO / social constants ──
// Single source of truth for the canonical site URL and the shared OG image.

export const SITE_URL = "https://www.xclator.com";

// NOTE: the OG image lives at public/images/og-image.png (1200x630).
export const OG_IMAGE_PATH = "/images/og-image.png";
export const OG_IMAGE_ALT = "Xclator AI LLC — We Build AI Products That Ship";

export const OG_IMAGE = {
  url: OG_IMAGE_PATH,
  width: 1200,
  height: 630,
  alt: OG_IMAGE_ALT,
};

// Convenience for openGraph.images / twitter.images on every page.
export const ogImages = [OG_IMAGE];
export const twitterImages = [OG_IMAGE_PATH];

import type { Metadata } from "next";

/**
 * Builds a complete, consistent Metadata object for a subpage.
 * Next.js does NOT inherit openGraph.images / twitter.card from the parent
 * when a child defines its own openGraph/twitter, so we always set them here.
 */
export function pageMeta({
  title,
  description,
  path,
  fullTitle,
}: {
  title: string;
  description: string;
  path: string;
  fullTitle?: string;
}): Metadata {
  const social = fullTitle ?? `${title} | Xclator AI LLC`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: "Xclator AI LLC",
      url: `${SITE_URL}${path}`,
      title: social,
      description,
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: social,
      description,
      images: twitterImages,
    },
  };
}
