import React from "react";
import {
  Code,
  Palette,
  Database,
  Users,
  Zap,
  Smartphone,
  Globe,
  Shield,
} from "lucide-react";

const Skils = () => {
  const skillCategories = [
    {
      icon: Palette,
      title: "Web Design",
      skills: [
        "UI/UX Design",
        "Responsive Design",
        "User Research",
        "Tailwind CSS",
      ],
      accent: "cyan" as const,
    },
    {
      icon: Code,
      title: "Frontend",
      skills: [
        "JavaScript",
        "ReactJS",
        "React Native",
        "React Ionic",
        "NextJS",
      ],
      accent: "purple" as const,
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Firebase", "Vercel", "Node JS (Beginner)"],
      accent: "cyan" as const,
    },
    {
      icon: Users,
      title: "Soft Skills",
      skills: [
        "Effective Communication",
        "Collaboration",
        "Commitment",
        "Leadership",
      ],
      accent: "purple" as const,
    },
  ];

  const accentStyles = {
    cyan: {
      header: "border-accent-cyan/20 bg-accent-cyan/5",
      icon: "text-accent-cyan",
      dot: "bg-accent-cyan",
    },
    purple: {
      header: "border-accent-purple/20 bg-accent-purple/5",
      icon: "text-accent-purple",
      dot: "bg-accent-purple",
    },
  };

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-center mb-20">
          <h1 className="heading-section mb-6">
            Skills<span className="text-accent-cyan">.</span>
          </h1>
          <p className="text-body-lg max-w-3xl mx-auto">
            A comprehensive toolkit of technical expertise and soft skills that
            enable me to deliver exceptional digital solutions across various
            platforms and technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category) => {
            const styles = accentStyles[category.accent];
            return (
              <div
                key={category.title}
                className="group card-interactive overflow-hidden"
              >
                <div
                  className={`p-6 border-b ${styles.header}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <category.icon className={`w-7 h-7 ${styles.icon}`} />
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  <div className={`w-10 h-0.5 ${styles.dot} rounded-full opacity-60`}></div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="flex items-center gap-3 text-muted-foreground"
                      >
                        <div
                          className={`w-1.5 h-1.5 ${styles.dot} rounded-full flex-shrink-0`}
                        ></div>
                        <span className="text-body-sm font-medium">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20">
          <div className="surface-panel-accent p-8 lg:p-12">
            <div className="text-center mb-10">
              <h3 className="heading-subsection mb-4">
                Additional Expertise
              </h3>
              <p className="text-body-lg">
                Beyond core skills, I bring specialized knowledge in modern
                development practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-4 p-4 card-interactive">
                <div className="icon-box-accent">
                  <Smartphone className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Mobile Development
                  </h4>
                  <p className="text-body-sm text-muted-foreground">
                    Cross-platform solutions
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 card-interactive">
                <div className="icon-box bg-accent-cyan/10 border-accent-cyan/20">
                  <Globe className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Web Performance
                  </h4>
                  <p className="text-body-sm text-muted-foreground">Optimization & SEO</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 card-interactive">
                <div className="icon-box-accent">
                  <Zap className="w-5 h-5 text-accent-purple" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Rapid Development
                  </h4>
                  <p className="text-body-sm text-muted-foreground">Quick prototyping</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 card-interactive">
                <div className="icon-box bg-accent-cyan/10 border-accent-cyan/20">
                  <Shield className="w-5 h-5 text-accent-cyan" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    Security Best Practices
                  </h4>
                  <p className="text-body-sm text-muted-foreground">Safe & secure code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skils;
