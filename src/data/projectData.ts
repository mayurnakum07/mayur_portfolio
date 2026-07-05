import type { StaticImageData } from "next/image";
import luxCartApp from "../../public/assets/projects/luxcartApp.webp";
import Netowrked from "../../public/assets/projects/networked.png";
import waveBible from "../../public/assets/projects/waveBibleApp.png";
import speedApp from "../../public/assets/projects/speedApp.webp";
import scrapyT from "../../public/assets/projects/scrapyT.png";
import basilWholesale from "../../public/assets/projects/basilMerchant.png";
import byDesign from "../../public/assets/projects/byDesign.png";
import shivansh from "../../public/assets/projects/shivansh.png";

export interface Project {
  id: string;
  featured?: boolean;
  image: StaticImageData;
  title: string;
  tagline: string;
  description: string;
  category: "AI" | "Web" | "Mobile";
  role: string;
  platform: string[];
  duration?: string;
  year: string;
  status: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  githubUrl?: string;
  appStoreUrl?: string;
  playStoreUrl?: string;
}

export const projectData: Project[] = [
  {
    id: "bydesign",

    featured: true,

    image: byDesign,

    title: "ByDesign",

    tagline: "AI Productivity Platform for Work & Life",

    description:
      "A production-scale productivity platform that unifies tasks, notes, calendars, documents, habits, and collaboration into one intelligent workspace. Contributed to major features including AI capabilities, Model Context Protocol (MCP) integration, real-time synchronization, widgets, multilingual support, and cross-platform productivity experiences.",

    category: "AI",

    role: "Frontend & Mobile Engineer",

    platform: ["Web", "iOS", "Android", "macOS"],

    duration: "Ongoing",

    year: "2025–Present",

    status: "Production",

    technologies: [
      "React Native",
      "React",
      "TypeScript",
      "Firebase",
      "OpenAI",
      "Claude",
      "MCP",
      "Widgets",
      "Google Calendar",
      "Apple Calendar",
      "REST API",
    ],

    highlights: [
      "AI Assistant",
      "Model Context Protocol (MCP)",
      "Two-way Calendar Sync",
      "Google & Apple Calendar",
      "Cross-platform Widgets",
      "Real-time Synchronization",
      "Multi-language Support",
      "Natural Language Scheduling",
      "Collaboration Workspace",
      "Document & Notes System",
      "Habits & Goal Tracking",
      "Offline-first Experience",
    ],

    liveUrl: "https://www.bydesign.io/",

    appStoreUrl:
      "https://apps.apple.com/in/app/bydesign-todo-list-calendar/id1554933824",

    playStoreUrl:
      "https://play.google.com/store/apps/details?id=com.idealist.whiteboard",
  },
  {
    id: "shivansh-jewellery",

    featured: true,

    image: shivansh,

    title: "Shivansh Jewellery",

    tagline: "Premium Jewellery E-commerce Platform",

    description:
      "A modern jewellery e-commerce platform designed to deliver a premium shopping experience with a powerful admin dashboard for product management, categories, customer enquiries and business operations. Built with scalability, performance and elegant UI as the primary focus.",

    category: "Web",

    role: "Full Stack Developer",

    platform: ["Web", "Admin Dashboard"],

    duration: "2 Months",

    year: "2026",

    status: "Production",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Firebase",
      "Tailwind CSS",
      "Framer Motion",
      "Vercel",
    ],

    highlights: [
      "Premium shopping experience",
      "Custom admin dashboard",
      "Category & product management",
      "Customer enquiry management",
      "Responsive design",
      "Performance optimized",
    ],

    liveUrl: "https://shivansh-jewellery.vercel.app/",
  },
  {
    id: "networked-ai",
    featured: true,

    image: Netowrked,

    title: "Networked AI",
    tagline: "AI-powered Event Networking Platform",

    description:
      "A production-ready event networking platform that helps organizers and attendees connect through intelligent recommendations, digital business cards, integrated ticketing, and real-time event experiences across web and mobile.",

    category: "AI",

    role: "Frontend & Mobile Developer",

    platform: ["Web", "iOS"],

    duration: "8 Months",

    year: "2025",

    status: "Production",

    technologies: [
      "React Ionic",
      "TypeScript",
      "Firebase",
      "Stripe",
      "Apple Pay",
    ],

    highlights: [
      "AI-powered networking",
      "Digital business cards",
      "Real-time event updates",
      "Integrated payments",
    ],

    liveUrl: "https://app.net-worked.ai/",
    appStoreUrl:
      "https://apps.apple.com/us/app/networked-ai-invites/id6471849642",
  },

  {
    id: "waves-bible",

    featured: true,

    image: waveBible,

    title: "Waves: Bible Verse",

    tagline: "AI-powered Spiritual Companion",

    description:
      "A faith-focused mobile application delivering personalized Bible verses, home screen widgets, devotionals, and an AI assistant that helps users understand scripture and strengthen their daily spiritual journey.",

    category: "AI",

    role: "React Native Developer",

    platform: ["iOS"],

    duration: "6 Months",

    year: "2025",

    status: "Production",

    technologies: [
      "React Native",
      "TypeScript",
      "Firebase",
      "OpenAI",
      "Widgets",
      "In-App Purchase",
    ],

    highlights: [
      "AI Bible Assistant",
      "Lock screen widgets",
      "Personalized devotionals",
      "Scripture explanations",
    ],

    liveUrl: "https://wavesbibleapp.com/",

    appStoreUrl: "https://apps.apple.com/us/app/waves-bible-verse/id6742439914",
  },

  {
    id: "luxcart",

    featured: true,

    image: luxCartApp,

    title: "LuxCart",

    tagline: "Modern Mobile Commerce Experience",

    description:
      "A premium React Native e-commerce application focused on fast shopping, secure payments, product discovery, real-time updates, and an intuitive mobile shopping experience.",

    category: "Mobile",

    role: "Mobile App Developer",

    platform: ["Android", "iOS"],

    duration: "Personal Project",

    year: "2024",

    status: "Completed",

    technologies: [
      "React Native",
      "Expo",
      "Firebase",
      "Stripe",
      "Tailwind CSS",
    ],

    highlights: [
      "Authentication",
      "Payment Integration",
      "Push Notifications",
      "Modern UI/UX",
    ],

    githubUrl: "https://github.com/mayurnakum07/React-Native-Ecommerce-App",

    liveUrl:
      "https://github.com/mayurnakum07/React-Native-Ecommerce-App?tab=readme-ov-file#luxecart---react-native-e-commerce-app",
  },

  {
    id: "bb-patrol",

    featured: false,

    image: speedApp,

    title: "BB Patrol Speed Black Box",

    tagline: "Smart Vehicle Monitoring System",

    description:
      "A vehicle monitoring application designed for safety and fleet management with GPS tracking, speed monitoring, voice recording, incident capture, and location-based analytics.",

    category: "Mobile",

    role: "React Native Developer",

    platform: ["Android"],

    duration: "Company Project",

    year: "2024",

    status: "Completed",

    technologies: [
      "React Native",
      "GPS",
      "Voice Services",
      "Floating Window",
      "Line Login",
    ],

    highlights: [
      "Real-time speed tracking",
      "Voice notes",
      "Incident reporting",
      "GPS analytics",
    ],
  },

  {
    id: "scrapyt",

    featured: false,

    image: scrapyT,

    title: "ScrapyT",

    tagline: "Web Data Extraction Platform",

    description:
      "A developer-focused platform for scraping, transforming, and exporting structured web data with support for dynamic websites and multiple export formats.",

    category: "Web",

    role: "Full Stack Developer",

    platform: ["Web"],

    duration: "Personal Project",

    year: "2024",

    status: "Completed",

    technologies: ["React", "Node.js", "Python", "MongoDB", "Express"],

    highlights: [
      "Dynamic scraping",
      "Data transformation",
      "Export engine",
      "REST API",
    ],
  },

  {
    id: "wholesale-payment",

    featured: false,

    image: basilWholesale,

    title: "Wholesale Payment",

    tagline: "Wholesale Billing & Inventory Platform",

    description:
      "A scalable wholesale management platform for handling inventory, bulk orders, automated invoicing, and payment workflows with real-time business insights.",

    category: "Web",

    role: "Frontend Developer",

    platform: ["Web"],

    duration: "Company Project",

    year: "2024",

    status: "Completed",

    technologies: ["React", "Next.js", "Stripe", "PostgreSQL", "TypeScript"],

    highlights: [
      "Inventory Management",
      "Bulk Orders",
      "Payment Gateway",
      "Analytics Dashboard",
    ],
  },
];
