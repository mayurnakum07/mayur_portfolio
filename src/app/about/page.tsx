import AboutPageContent from "@/components/about/page/AboutPageContent";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata } from "@/lib/metadata";
import { personSchema } from "@/lib/structuredData";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `About | Mayur - ${siteConfig.title}`,
  description:
    "How Mayur Nakum scopes work, makes technical decisions, and builds web, mobile and AI-powered products — plus what he is learning right now.",
  path: "/about",
  ogImage: "about",
  keywords: [
    "About Mayur",
    siteConfig.title,
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Software Engineer",
    "Surat India",
  ],
});

export default function AboutPage() {
  return (
    <main className="w-full min-w-0">
      <JsonLd data={personSchema()} />
      <AboutPageContent />
    </main>
  );
}
