import { StaticImageData } from "next/image";
import byDesignImg from "../../public/assets/projects/bydesign.png";
import networkedImg from "../../public/assets/projects/networked.png";
import shivanshImg from "../../public/assets/projects/shivansh.png";
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
  detailsUrl: string;
  detailsLabel: "View details" | "Read case study";
  githubUrl?: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: "bydesign",
    image: byDesignImg,
    title: "ByDesign",
    category: "AI Platform",
    description:
      "Cross-platform productivity workspace with AI assistant and Model Context Protocol (MCP) integration.",
    techStack: ["React Native", "TypeScript", "MCP", "Firebase"],
    metrics: ["App Store", "Google Play", "Web & macOS"],
    liveUrl: "https://www.bydesign.io/",
    detailsUrl: "/projects/bydesign",
    detailsLabel: "Read case study",
  },
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
    detailsUrl: "/projects#networked-ai",
    detailsLabel: "View details",
  },
  {
    id: "shivansh-jewellery",
    image: shivanshImg,
    title: "Shivansh Jewellery",
    category: "SaaS",
    description:
      "Premium jewellery commerce with admin dashboard and performance-focused storefront.",
    techStack: ["Next.js", "TypeScript", "Firebase"],
    metrics: ["Production", "Admin Dashboard", "E-commerce"],
    liveUrl: "https://shivansh-jewellery.vercel.app/",
    detailsUrl: "/projects#shivansh-jewellery",
    detailsLabel: "View details",
  },
  {
    id: "waves-bible",
    image: waveBibleImg,
    title: "Waves: Bible Verse",
    category: "Mobile App",
    description:
      "AI-powered scripture app with personalized verses and an intelligent chatbot.",
    techStack: ["React Native", "TypeScript", "Firebase", "OpenAI"],
    metrics: ["AI Powered", "iOS", "Production Ready"],
    liveUrl: "https://wavesbibleapp.com/",
    detailsUrl: "/projects#waves-bible",
    detailsLabel: "View details",
  },
];
