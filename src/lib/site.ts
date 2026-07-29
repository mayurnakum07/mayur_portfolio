/**
 * Single source of truth for portfolio copy — update here first, then resume/LinkedIn.
 */
export const siteConfig = {
  name: "Mayur Nakum",
  title: "AI Software Engineer",
  tagline: "Building Intelligent Digital Products.",
  email: "mayurnakum07@gmail.com",
  github: "https://github.com/mayurnakum07",
  linkedIn: "https://www.linkedin.com/in/mayurnakum",
  instagram: "https://instagram.com/mr_mayur_nakum",
  url: "https://mayurnakum-portfolio.vercel.app",
  resumePath: "/mayurResume.pdf",
  stats: {
    yearsExperience: "3",
    projectsDelivered: "15+",
    technologies: "8+",
  },
  byDesign: {
    appStoreUrl:
      "https://apps.apple.com/in/app/bydesign-todo-list-calendar/id1554933824",
    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.idealist.whiteboard",
    webUrl: "https://www.bydesign.io/",
  },
} as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${normalized}`;
}
