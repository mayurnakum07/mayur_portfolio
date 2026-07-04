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
  themeColor: "#09090b",
};

const About = () => {
  return (
    <main className="container-page">
      <section className="section-spacing">
        <div className="section-header-center mb-20 lg:mb-28">
          <h1 className="heading-display mb-8">
            About me<span className="text-accent-cyan">.</span>
          </h1>
          <p className="text-body-lg max-w-3xl mx-auto">
            Developing beautiful and functional websites is what I love doing,
            and{" "}
            <span className="text-accent-cyan font-semibold">
              {`that's`} why I give my all
            </span>{" "}
            in every new challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-20 lg:mb-28">
          <div className="card-interactive p-6 lg:p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="icon-box-accent">
                <User className="w-6 h-6 text-accent-purple" />
              </div>
              <h3 className="heading-subsection text-lg">
                Passionate Developer
              </h3>
            </div>
            <p className="text-body">
              {`I'm`} deeply passionate about creating exceptional user
              experiences and bringing innovative ideas to life through code.
            </p>
          </div>

          <div className="card-interactive p-6 lg:p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="icon-box bg-accent-cyan/10 border-accent-cyan/20">
                <Target className="w-6 h-6 text-accent-cyan" />
              </div>
              <h3 className="heading-subsection text-lg">
                Goal-Oriented
              </h3>
            </div>
            <p className="text-body">
              Every project has a clear objective, and I ensure we achieve it
              through focused development and strategic planning.
            </p>
          </div>

          <div className="card-interactive p-6 lg:p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="icon-box-accent">
                <Heart className="w-6 h-6 text-accent-purple" />
              </div>
              <h3 className="heading-subsection text-lg">
                User-Focused
              </h3>
            </div>
            <p className="text-body">
              I prioritize user experience in every decision, ensuring the end
              product is both beautiful and functional.
            </p>
          </div>

          <div className="card-interactive p-6 lg:p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className="icon-box bg-accent-cyan/10 border-accent-cyan/20">
                <Award className="w-6 h-6 text-accent-cyan" />
              </div>
              <h3 className="heading-subsection text-lg">
                Quality Driven
              </h3>
            </div>
            <p className="text-body">
              I maintain high standards in code quality, performance, and
              design to deliver exceptional results.
            </p>
          </div>
        </div>

        <div className="surface-panel-accent p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="heading-subsection mb-6">My Mission</h2>
            <p className="text-body-lg">
              To create{" "}
              <span className="text-accent-cyan font-semibold">
                innovative, accessible, and impactful digital solutions
              </span>{" "}
              that not only meet client requirements but exceed expectations.
              I believe in the power of technology to transform businesses and
              enhance user experiences.
            </p>
          </div>
        </div>
      </section>

      <Myplace />
      <MyStory />
      <Experience />
    </main>
  );
};

export default About;
