import ContactPageContent from "@/components/contact/page/ContactPageContent";
import { createPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Contact | Mayur - ${siteConfig.title}`,
  description:
    "Email Mayur about a full-time role or freelance product work. Based in Surat, remote-first.",
  path: "/contact",
  ogImage: "contact",
  keywords: [
    "Contact Mayur",
    `Hire ${siteConfig.title}`,
    "React Developer Contact",
    "Next.js Developer Contact",
    "Freelance Web Developer",
    "AI Product Development",
    "Remote Developer India",
  ],
});

export default function Contact() {
  return <ContactPageContent />;
}
