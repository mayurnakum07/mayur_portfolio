import { Download } from "lucide-react";
import Image from "next/image";
import profileImg from "../../public/profile.jpg";
import Link from "next/link";
import MyStory from "@/components/MyStory";
import Skils from "@/components/Skils";
import Experience from "@/components/Experience";
import ProjectBanner from "@/components/ProjectBanner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mayur | Frontend Web Developer Portfolio",
  description:
    "Frontend Developer with expertise in React, Next.js, TypeScript, React Ionic, and React Native. Passionate about building dynamic, responsive web and mobile applications. Skilled in integrating Firebase to deliver scalable and efficient backend solutions.",
  keywords: [
    "Frontend Web Developer",
    "React Developer",
    "Next.js Developer",
    "React Ionic Developer",
    "JavaScript Expert",
    "TypeScript Developer",
    "Web Application Developer",
    "UI/UX Developer",
    "Modern Web Development",
    "Responsive Web Design",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/JR9gd9Xk/image.png",
    title: "Mayur | Frontend Web Developer Portfolio",
    description:
      "Frontend Developer with expertise in React, Next.js, TypeScript, React Ionic, and React Native. Passionate about building dynamic, responsive web and mobile applications. Skilled in integrating Firebase to deliver scalable and efficient backend solutions.",
  },
  twitter: {
    images: "https://i.ibb.co/JR9gd9Xk/image.png",
    title: "Mayur | Frontend Web Developer Portfolio",
    description:
      "Frontend Developer with expertise in React, Next.js, TypeScript, React Ionic, and React Native. Passionate about building dynamic, responsive web and mobile applications. Skilled in integrating Firebase to deliver scalable and efficient backend solutions.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#09090b",
};

const Home = () => {
  return (
    <main className="container-page">
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="space-y-6 lg:space-y-8">
              <p className="hero-eyebrow">
                Hey, {"I'm"} Mayur{" "}
                <span>👋🏻</span>
              </p>

              <h1 className="heading-display">
                <span className="text-gradient">Front</span>
                <span className="text-foreground">end</span>
                <br />
                <span className="text-foreground">Developer</span>
              </h1>
            </div>

            <div className="space-y-8">
              <p className="text-body-lg max-w-2xl mx-auto lg:mx-0">
                I&apos;m a passionate frontend developer based in India,
                specializing in creating{" "}
                <span className="text-accent-cyan font-semibold">
                  beautiful, responsive, and user-centric
                </span>{" "}
                web and mobile applications that deliver exceptional user
                experiences.
              </p>

              <div className="hero-tags">
                <span className="tag-highlight">React & Next.js Expert</span>
                <span className="tag-highlight">Mobile Development</span>
                <span className="tag-highlight">UI/UX Focused</span>
              </div>
            </div>

            <div className="hero-actions">
              <Link href="/contact" className="btn-accent px-8 py-4 w-full sm:w-auto">
                Get In Touch
                <span>→</span>
              </Link>

              <Link
                href="https://mayurnakum-portfolio.vercel.app/mayurResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-4 w-full sm:w-auto"
              >
                <Download size={20} />
                Download CV
              </Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="relative">
              <div className="hero-visual-glow" />
              <div className="hero-visual-frame">
                <Image
                  src={profileImg}
                  alt="Mayur Nakum - Frontend Developer"
                  className="object-cover w-full h-full"
                  priority
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Experience />
      <ProjectBanner />
      <Skils />
      <MyStory />
    </main>
  );
};

export default Home;
