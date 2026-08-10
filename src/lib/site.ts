/**
 * Single source of truth for portfolio copy — update here first, then resume/LinkedIn.
 */
export const siteConfig = {
  name: "Mayur Nakum",
  title: "AI Software Engineer",
  tagline: "Building Intelligent Digital Products.",
  location: "Surat, Gujarat, India",
  email: "mayurnakum07@gmail.com",
  github: "https://github.com/mayurnakum07",
  linkedIn: "https://www.linkedin.com/in/mayurnakum",
  instagram: "https://instagram.com/mr_mayur_nakum",
  url: "https://mayurnakum-portfolio.vercel.app",
  resumePath: "/Mayur-Nakum-Resume.pdf",
  /**
   * Every number here is checkable against /projects — that is the point.
   * If the project list changes, change these in the same sitting.
   */
  stats: [
    { value: "3", label: "Years Experience" },
    { value: "9", label: "Products in Production" },
    { value: "5", label: "Live on App Store & Google Play" },
    { value: "4", label: "Platforms Shipped" },
  ],
  /**
   * Formspree form ID. Set NEXT_PUBLIC_FORMSPREE_ID in the environment to
   * enable the contact form; without it the form falls back to mailto.
   */
  formspreeId: process.env.NEXT_PUBLIC_FORMSPREE_ID ?? "",
} as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
