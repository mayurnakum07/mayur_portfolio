import type { Project } from "@/data/projects";
import { absoluteUrl, siteConfig } from "./site";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: siteConfig.url,
    image: absoluteUrl("/profile.jpg"),
    jobTitle: siteConfig.title,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surat",
      addressRegion: "Gujarat",
      addressCountry: "IN",
    },
    sameAs: [siteConfig.github, siteConfig.linkedIn, siteConfig.instagram],
    knowsAbout: [
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Model Context Protocol",
      "AI product development",
      "Cross-platform mobile development",
    ],
  };
}

export function projectSchema(project: Project) {
  const isApp = project.platforms.some((platform) =>
    ["iOS", "Android", "macOS"].includes(platform)
  );

  return {
    "@context": "https://schema.org",
    "@type": isApp ? "SoftwareApplication" : "CreativeWork",
    name: project.name,
    headline: project.tagline,
    description: project.summary,
    url: absoluteUrl(`/projects/${project.slug}`),
    image: absoluteUrl(project.images.hero),
    ...(isApp
      ? {
          applicationCategory: "MobileApplication",
          operatingSystem: project.platforms.join(", "),
        }
      : {}),
    ...(project.links.live ? { sameAs: [project.links.live] } : {}),
    author: { "@type": "Person", name: siteConfig.name, url: siteConfig.url },
    ...(project.client
      ? { publisher: { "@type": "Organization", name: project.client } }
      : {}),
    keywords: project.stack.join(", "),
  };
}
