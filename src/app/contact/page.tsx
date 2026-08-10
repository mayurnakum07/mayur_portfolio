import ContactPage from "@/components/contact/ContactPage";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { faqSchema } from "@/lib/structuredData";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `Contact | Mayur - ${siteConfig.title}`,
  description:
    "Get in touch with Mayur for AI product development, web applications, mobile apps, and full-time opportunities.",
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
  return (
    <>
      <JsonLd data={faqSchema()} />
      <ContactPage />
    </>
  );
}
