import ContactPage from "@/components/contact/ContactPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mayur - AI Software Engineer",
  description:
    "Get in touch with Mayur for AI product development, web applications, mobile apps, and full-time opportunities.",
  keywords: [
    "Contact Mayur",
    "Hire AI Software Engineer",
    "React Developer Contact",
    "Next.js Developer Contact",
    "Freelance Web Developer",
    "AI Product Development",
    "Remote Developer India",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/20FD61NY/image.png",
    title: "Contact | Mayur - AI Software Engineer",
    description:
      "Get in touch with Mayur for AI product development, web applications, mobile apps, and full-time opportunities.",
  },
  twitter: {
    images: "https://i.ibb.co/20FD61NY/image.png",
    title: "Contact | Mayur - AI Software Engineer",
    description:
      "Get in touch with Mayur for AI product development, web applications, mobile apps, and full-time opportunities.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#09090b",
};

export default function Contact() {
  return <ContactPage />;
}
