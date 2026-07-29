import { Github, Linkedin, Mail, MapPin, type LucideIcon } from "lucide-react";
import { siteConfig } from "@/lib/site";

export type ContactCardType = "email" | "link" | "location";

export interface ContactCardData {
  id: string;
  title: string;
  value?: string;
  description: string;
  icon: LucideIcon;
  type: ContactCardType;
  href?: string;
  buttonLabel?: string;
}

export const contactCards: ContactCardData[] = [
  {
    id: "email",
    title: "Email",
    value: siteConfig.email,
    description: "Usually replies within 24 hours.",
    icon: Mail,
    type: "email",
    href: `mailto:${siteConfig.email}`,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Professional networking",
    icon: Linkedin,
    type: "link",
    href: siteConfig.linkedIn,
    buttonLabel: "Visit Profile",
  },
  {
    id: "github",
    title: "GitHub",
    description: "Explore open-source work",
    icon: Github,
    type: "link",
    href: siteConfig.github,
    buttonLabel: "View Projects",
  },
  {
    id: "location",
    title: "Location",
    value: "Surat, Gujarat, India",
    description: "Open to remote opportunities.",
    icon: MapPin,
    type: "location",
  },
];
