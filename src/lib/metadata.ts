import type { Metadata } from "next";
import { socialImagePath } from "./images";
import { absoluteUrl, siteConfig } from "./site";

type PageMetaOptions = {
  title: string;
  description: string;
  path: string;
  /** A named OG image under /public/og ("home"), or a root-absolute path. */
  ogImage: string;
  ogType?: "website" | "article";
  keywords?: string[];
  /** Soft pages (404) should not be indexed. */
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path,
  ogImage,
  ogType = "website",
  keywords = [],
  noIndex = false,
}: PageMetaOptions): Metadata {
  // Resolve through the manifest so cards get the 1200x630 crop, not the original.
  const source = ogImage.startsWith("/") ? ogImage : `/og/${ogImage}.png`;
  const imageUrl = absoluteUrl(socialImagePath(source));
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    keywords: keywords.length ? keywords : undefined,
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    alternates: noIndex ? undefined : { canonical },
    openGraph: {
      type: ogType,
      url: noIndex ? siteConfig.url : canonical,
      title,
      description,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export const defaultDescription = `${siteConfig.name} — ${siteConfig.title}. React, Next.js, React Native, and AI-native products built for production.`;
