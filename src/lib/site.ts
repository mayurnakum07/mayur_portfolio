/**
 * Single source of truth for portfolio copy. Update here first, then resume/LinkedIn.
 * Production counts live in `getProofStats()` from projects.ts so they stay checkable.
 */
export const siteConfig = {
  name: "Mayur Nakum",
  title: "AI Software Engineer",
  tagline: "I build web, mobile, and AI products that ship.",
  location: "Surat, Gujarat, India",
  email: "mayurnakum07@gmail.com",
  github: "https://github.com/mayurnakum07",
  linkedIn: "https://www.linkedin.com/in/mayurnakum",
  instagram: "https://instagram.com/mayurnakum_07",
  url: "https://mayurnakum-portfolio.vercel.app",
  resumePath: "/Mayur-Nakum-Resume.pdf",
  /** Full-time start at DI Solutions. */
  experienceStart: "2023-08",
  /** Left DI Solutions; freelancing since. */
  experienceEnd: "2026-08",
  /** Short availability line for hero / contact. */
  availability: "Open to full-time roles and freelance work",
} as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
