/**
 * Single source of truth for portfolio copy — update here first, then resume/LinkedIn.
 * Production counts live in `getProofStats()` from projects.ts so they stay checkable.
 */
export const siteConfig = {
  name: "Mayur Nakum",
  title: "AI Software Engineer",
  tagline: "Building Intelligent Digital Products.",
  location: "Surat, Gujarat, India",
  email: "mayurnakum07@gmail.com",
  github: "https://github.com/mayurnakum07",
  linkedIn: "https://www.linkedin.com/in/mayurnakum",
  instagram: "https://instagram.com/mayurnakum_07",
  url: "https://mayurnakum-portfolio.vercel.app",
  resumePath: "/Mayur-Nakum-Resume.pdf",
  /** Full-time start — used for tenure copy, not as a marketing stat. */
  experienceStart: "2023-08",
} as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
