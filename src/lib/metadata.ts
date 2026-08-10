import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

type PageMetaOptions = {
  title: string;
  description: string;
  path: string;
  /** A named OG image under /public/og ("home"), or a root-absolute path. */
  ogImage: string;
  ogType?: "website" | "article";
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path,
  ogImage,
  ogType = "website",
  keywords = [],
}: PageMetaOptions): Metadata {
  const imagePath = ogImage.startsWith("/") ? ogImage : `/og/${ogImage}.png`;
  const imageUrl = absoluteUrl(imagePath);
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    keywords,
    robots: "index, follow",
    alternates: { canonical },
    openGraph: {
      type: ogType,
      url: canonical,
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

export const defaultDescription = `${siteConfig.title} with expertise in React, Next.js, TypeScript, React Native, and AI product development. Building fast, reliable web and mobile software.`;
