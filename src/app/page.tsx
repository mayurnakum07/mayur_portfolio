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
    <main className="container-page relative w-full">
      <section className="section-spacing relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16 lg:gap-20">
            <div className="text-center lg:text-left lg:w-1/2 space-y-10">
              <div className="space-y-6">
                <p className="text-body-lg text-muted-foreground font-medium">
                  Hey, {"I'm"} Mayur{" "}
                  <span className="inline-block">👋🏻</span>
                </p>

                <h1 className="heading-display">
                  <span className="text-gradient">Front</span>
                  <span className="text-foreground">end</span>
                  <br />
                  <span className="text-foreground">Developer</span>
                </h1>
              </div>

              <div className="space-y-8">
                <p className="text-body-lg max-w-2xl">
                  I&apos;m a passionate frontend developer based in India,
                  specializing in creating{" "}
                  <span className="text-accent-cyan font-semibold">
                    beautiful, responsive, and user-centric
                  </span>{" "}
                  web and mobile applications that deliver exceptional user
                  experiences.
                </p>

                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  <span className="tag-highlight">React & Next.js Expert</span>
                  <span className="tag-highlight">Mobile Development</span>
                  <span className="tag-highlight">UI/UX Focused</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link href="/contact" className="btn-accent group px-8 py-4">
                  Get In Touch
                  <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                    →
                  </span>
                </Link>

                <Link
                  href="https://mayurnakum-portfolio.vercel.app/mayurResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary group px-8 py-4"
                >
                  <Download size={20} />
                  Download CV
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96">
              <div className="relative w-full h-full rounded-full border border-border shadow-glow-purple overflow-hidden">
                <Image
                  src={profileImg}
                  alt="Mayur Nakum - Frontend Developer"
                  className="object-cover w-full h-full"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />

                <div className="absolute -top-1 -right-1 w-6 h-6 bg-accent-cyan rounded-full opacity-80"></div>
                <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-accent-purple rounded-full opacity-80"></div>
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
