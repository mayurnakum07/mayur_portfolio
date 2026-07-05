import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Myplace from "@/components/Myplace";
import Journey from "@/components/journey/Journey";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Mayur - AI Software Engineer",
  description:
    "Learn how Mayur Nakum thinks, solves problems, and builds scalable web, mobile, and AI-powered products.",
  keywords: [
    "About Mayur",
    "AI Software Engineer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Software Engineer",
    "Surat India",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/SwV3FCz9/image.png",
    title: "About | Mayur - AI Software Engineer",
    description:
      "Learn how Mayur Nakum thinks, solves problems, and builds scalable web, mobile, and AI-powered products.",
  },
  twitter: {
    images: "https://i.ibb.co/SwV3FCz9/image.png",
    title: "About | Mayur - AI Software Engineer",
    description:
      "Learn how Mayur Nakum thinks, solves problems, and builds scalable web, mobile, and AI-powered products.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#09090b",
};

const AboutPage = () => {
  return (
    <main className="w-full overflow-x-clip">
      <About />
      <Experience />
      <Journey />
      <div className="container-page">
        <Myplace />
      </div>
    </main>
  );
};

export default AboutPage;
