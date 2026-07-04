import React from "react";
import {
  BookOpen,
  GraduationCap,
  Briefcase,
  Rocket,
  Heart,
  Star,
} from "lucide-react";

const MyStory = () => {
  const storyTimeline = [
    {
      year: "2020",
      title: "Starting the Journey",
      description:
        "Entered the tech world with a passion for web design and development, mastering foundational skills in HTML, CSS, JavaScript, and React.js.",
      icon: BookOpen,
      accent: "cyan" as const,
    },
    {
      year: "2021",
      title: "Learning Through Practice",
      description:
        "Completed formal training and built multiple projects to solidify expertise, turning ideas into functional applications.",
      icon: GraduationCap,
      accent: "purple" as const,
    },
    {
      year: "2022",
      title: "Professional Growth",
      description:
        "Secured an internship, transitioning to a junior developer role within six months. Learned advanced tools like Next.js and Ionic while contributing to complex production projects.",
      icon: Briefcase,
      accent: "cyan" as const,
    },
    {
      year: "2023",
      title: "Advancing to Senior Developer",
      description:
        "Leveraged skills and experience to lead development efforts, optimize performance, and mentor new talent as a senior developer.",
      icon: Rocket,
      accent: "purple" as const,
    },
    {
      year: "2024",
      title: "Expanding Horizons",
      description:
        "Pursuing freelancing alongside my full-time role to help clients bring creative ideas to life, focusing on innovative and efficient web solutions.",
      icon: Star,
      accent: "cyan" as const,
    },
  ];

  const accentStyles = {
    cyan: {
      badge: "bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan",
      icon: "bg-accent-cyan/10 border-accent-cyan/30 text-accent-cyan",
      line: "from-accent-cyan/20 to-accent-cyan/40",
    },
    purple: {
      badge: "bg-accent-purple/10 border border-accent-purple/20 text-accent-purple",
      icon: "bg-accent-purple/10 border-accent-purple/30 text-accent-purple",
      line: "from-accent-purple/20 to-accent-purple/40",
    },
  };

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-center mb-20">
          <h1 className="heading-section mb-6">
            My Story<span className="text-accent-cyan">.</span>
          </h1>
          <p className="text-body-lg max-w-3xl mx-auto">
            A journey of passion, learning, and growth in the world of frontend
            development, from humble beginnings to creating impactful digital
            solutions.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-border transform lg:-translate-x-1/2"></div>

          <div className="space-y-12">
            {storyTimeline.map((item, index) => {
              const styles = accentStyles[item.accent];
              return (
                <div
                  key={item.year}
                  className="relative flex items-center gap-8"
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0
                        ? "lg:pr-8 lg:text-right"
                        : "lg:pl-8 lg:text-left"
                    }`}
                  >
                    <div className="card-interactive p-6 lg:p-8">
                      <div
                        className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold mb-4 ${styles.badge}`}
                      >
                        {item.year}
                      </div>

                      <h3 className="heading-subsection text-xl lg:text-2xl mb-3">
                        {item.title}
                      </h3>

                      <p className="text-body">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center border ${styles.icon}`}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>

                  <div className="flex-1 lg:block hidden"></div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="surface-panel-accent p-8 lg:p-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Heart className="w-7 h-7 text-accent-purple" />
              <h3 className="heading-subsection">
                Passion for Innovation
              </h3>
            </div>
            <p className="text-body-lg mb-8 max-w-2xl mx-auto">
              Every project is an opportunity to learn, grow, and create
              something amazing.
              {` I'm`} excited to continue this journey and help bring your
              ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center gap-2 text-accent-cyan font-semibold">
                <Star className="w-5 h-5" />
                <span>Ready to create something amazing together?</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
