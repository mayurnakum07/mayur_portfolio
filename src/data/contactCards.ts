import { Github, Linkedin, Mail, MapPin, type LucideIcon } from "lucide-react";

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
    value: "mayurnakum07@gmail.com",
    description: "Usually replies within 24 hours.",
    icon: Mail,
    type: "email",
    href: "mailto:mayurnakum07@gmail.com",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Professional networking",
    icon: Linkedin,
    type: "link",
    href: "https://linkedin.com/in/mayur-nakum-178777250",
    buttonLabel: "Visit Profile",
  },
  {
    id: "github",
    title: "GitHub",
    description: "Explore open-source work",
    icon: Github,
    type: "link",
    href: "https://github.com/mayurnakum07",
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
