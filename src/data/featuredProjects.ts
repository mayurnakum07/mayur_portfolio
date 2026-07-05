import { StaticImageData } from "next/image";
import networkedImg from "../../public/assets/projects/networked.png";
import luxcartImg from "../../public/assets/projects/luxcartApp.webp";
import waveBibleImg from "../../public/assets/projects/waveBibleApp.png";

export type ProjectCategory =
  | "AI Platform"
  | "Mobile App"
  | "SaaS"
  | "Automation";

export interface FeaturedProject {
  id: string;
  image: StaticImageData;
  title: string;
  category: ProjectCategory;
  description: string;
  techStack: string[];
  metrics: string[];
  liveUrl: string;
  caseStudyUrl: string;
  githubUrl?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "networked-ai",
    image: networkedImg,
    title: "Networked AI",
    category: "AI Platform",
    description:
      "AI event platform for hosting, ticketing, and real-time networking at scale.",
    techStack: ["React", "TypeScript", "Firebase"],
    metrics: ["AI Powered", "Real-time", "Production Ready"],
    liveUrl: "https://app.net-worked.ai/",
    caseStudyUrl: "/projects",
  },
  {
    id: "shivansh-jewellery",
    image: luxcartImg,
    title: "Shivansh Jewellery",
    category: "Mobile App",
    description:
      "Premium jewellery commerce with mobile-first discovery and secure checkout.",
    techStack: ["React", "TypeScript", "Firebase"],
    metrics: ["Cross Platform", "Production Ready", "Real-time"],
    liveUrl: "/projects",
    caseStudyUrl: "/projects",
  },
  {
    id: "waves-bible",
    image: waveBibleImg,
    title: "Waves: Bible Verse",
    category: "Mobile App",
    description:
      "AI-powered scripture app with personalized verses and an intelligent chatbot.",
    techStack: ["React", "TypeScript", "Firebase", "OpenAI"],
    metrics: ["AI Powered", "Cross Platform", "Production Ready"],
    liveUrl: "https://wavesbibleapp.com/",
    caseStudyUrl: "/projects",
  },
];
