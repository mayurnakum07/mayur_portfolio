import HomeAboutTeaser from "@/components/home/HomeAboutTeaser";
import HomeCapabilities from "@/components/home/HomeCapabilities";
import HomeContactBridge from "@/components/home/HomeContactBridge";
import HomeLab from "@/components/home/HomeLab";
import HomeOpening from "@/components/home/HomeOpening";
import HomeProof from "@/components/home/HomeProof";
import HomeSelectedWork from "@/components/home/HomeSelectedWork";
import JsonLd from "@/components/JsonLd";
import { createPageMetadata, defaultDescription } from "@/lib/metadata";
import { personSchema } from "@/lib/structuredData";
import { siteConfig } from "@/lib/site";

export const metadata = createPageMetadata({
  title: `${siteConfig.name} · ${siteConfig.title}`,
  description: defaultDescription,
  path: "/",
  ogImage: "home",
  keywords: [
    siteConfig.title,
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "AI product development",
  ],
});

export default function Home() {
  return (
    <main className="w-full min-w-0">
      <JsonLd data={personSchema()} />
      <HomeOpening />
      <HomeProof />
      <HomeSelectedWork />
      <HomeCapabilities />
      <HomeLab />
      <HomeAboutTeaser />
      <HomeContactBridge />
    </main>
  );
}
