import { Download } from "lucide-react";
import Image from "next/image";
import profileImg from "../../public/profile.jpg";
import Link from "next/link";
import MyStory from "@/components/MyStory";
import Skils from "@/components/Skils";
import Experience from "@/components/Experience";
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
    images: "https://i.ibb.co/CK5dKs62/Screenshot-2025-03-29-135543.webp",
    title: "Mayur | Frontend Web Developer Portfolio",
    description:
      "Frontend Developer with expertise in React, Next.js, TypeScript, React Ionic, and React Native. Passionate about building dynamic, responsive web and mobile applications. Skilled in integrating Firebase to deliver scalable and efficient backend solutions.",
  },
  twitter: {
    images: "https://i.ibb.co/CK5dKs62/Screenshot-2025-03-29-135543.webp",
    title: "Mayur | Frontend Web Developer Portfolio",
    description:
      "Frontend Developer with expertise in React, Next.js, TypeScript, React Ionic, and React Native. Passionate about building dynamic, responsive web and mobile applications. Skilled in integrating Firebase to deliver scalable and efficient backend solutions.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

const Home = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto">
      <section className="py-28">
        {/* Reverse order on mobile so image shows first */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2">
            <p className="text-2xl text-gray-800 mb-2">
              Hey, {"I'm"} Mayur <span className="inline-block">👋🏻</span>
            </p>
            <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-gray-800">
              <span className="text-purple-600">Front</span>end <br />
              Developer
            </h1>
            <p className="mt-6 text-gray-800 text-xl lg:text-2xl px-2">
              I&apos;m a frontend developer based in India, I&apos;ll help you
              build beautiful websites your users will love.
            </p>

            {/* Button Section - Centered on Small/Mid Screens */}
            <div className="mt-6 flex flex-col md:flex-row items-center lg:items-start justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-4">
              <Link
                href="/contact"
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-bold"
              >
                Get In Touch
              </Link>
              <a
                href="https://mayurnakum-portfolio.vercel.app/mayurResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-transparent transition-all duration-300 border border-gray-600 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white flex gap-2 font-bold"
              >
                <Download /> Download CV
              </a>
            </div>
          </div>
          {/* Image Section (First on Mobile) */}
          <div className="relative flex items-center justify-center w-60 md:w-72 lg:w-[25rem] h-60 md:h-72 lg:h-[25rem] mt-10 lg:mt-0 rounded-full border-4 border-purple-300">
            <Image
              src={profileImg}
              alt="Profile Image"
              className="object-cover rounded-full w-full h-full"
            />
          </div>
        </div>
      </section>
      <Experience />
      <Skils />
      <MyStory />
    </main>
  );
};

export default Home;
