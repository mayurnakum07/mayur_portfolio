import Experience from "@/components/Experience";
import Myplace from "@/components/Myplace";
import MyStory from "@/components/MyStory";
import { Metadata } from "next";
import { User, Target, Heart, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Mayur - Frontend Developer",
  description:
    "Learn more about Mayur, a frontend web developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "About Mayur",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Development Journey",
    "JavaScript Developer",
    "UI/UX Developer",
    "Software Engineer",
    "Modern Web Technologies",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/SwV3FCz9/image.png",
    title: "About | Mayur - Frontend Developer",
    description:
      "Learn more about Mayur, a frontend web developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
  twitter: {
    images: "https://i.ibb.co/SwV3FCz9/image.png",
    title: "About | Mayur - Frontend Developer",
    description:
      "Learn more about Mayur, a frontend web developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

const About = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto">
      {/* Hero Section with Enhanced Design */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-pulse delay-500"></div>

        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
              About me<span className="text-purple-600">.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto animate-fade-in-up delay-200 border-l-4 lg:border-l-8 border-purple-600 pl-6 lg:pl-8">
              Developing beautiful and functional websites is what I love doing,
              and{" "}
              <span className="text-purple-600 font-semibold">
                {`that's`} why I give my all
              </span>{" "}
              in every new challenge.
            </p>
          </div>

          {/* About Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <User className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Passionate Developer
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {`I'm`} deeply passionate about creating exceptional user
                experiences and bringing innovative ideas to life through code.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-400">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Goal-Oriented
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Every project has a clear objective, and I ensure we achieve it
                through focused development and strategic planning.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-500">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  User-Focused
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I prioritize user experience in every decision, ensuring the end
                product is both beautiful and functional.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up delay-600">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-orange-100 rounded-lg">
                  <Award className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Quality Driven
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I maintain high standards in code quality, performance, and
                design to deliver exceptional results.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-gradient-to-r from-purple-50 to-gray-50 rounded-2xl p-8 lg:p-12 border border-purple-100 animate-fade-in-up delay-700">
            <div className="text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-6">
                My Mission
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                To create{" "}
                <span className="text-purple-600 font-semibold">
                  innovative, accessible, and impactful digital solutions
                </span>{" "}
                that not only meet client requirements but exceed expectations.
                I believe in the power of technology to transform businesses and
                enhance user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <Myplace />
      <MyStory />
      <Experience />
    </main>
  );
};

export default About;
