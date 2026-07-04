import Link from "next/link";
import React from "react";
import { Calendar, MapPin, ExternalLink, CheckCircle } from "lucide-react";

const Experience = () => {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-center lg:text-left mb-20">
          <h1 className="heading-section mb-6">
            Experience<span className="text-accent-cyan">.</span>
          </h1>
          <p className="text-body-lg max-w-3xl">
            My professional journey in frontend development, working with
            cutting-edge technologies and delivering exceptional user
            experiences.
          </p>
        </div>

        <div className="card-elevated overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
              <div className="lg:w-1/3">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Link
                      href="https://disolutions.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-2xl lg:text-3xl font-bold link-accent"
                    >
                      DI Solutions
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
                    </Link>

                    <div className="badge-accent">
                      Front-end Developer
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-accent-cyan" />
                      <span className="font-medium">August 2023 - Present</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-accent-cyan" />
                      <span>on-site / India</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React.js",
                        "Next.js",
                        "React Native",
                        "Tailwind CSS",
                        "Firebase",
                        "TypeScript",
                      ].map((tech) => (
                        <span key={tech} className="tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3">
                <div className="space-y-8">
                  <h3 className="heading-subsection">
                    Front-end Developer{" "}
                    <span className="text-accent-purple">@ DI Solutions</span>
                  </h3>

                  <div className="space-y-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-cyan mt-1 flex-shrink-0" />
                      <p className="text-body">
                        Proficient in modern JavaScript frameworks, including
                        React.js, Next.js, React Native, and Tailwind CSS, with
                        extensive experience building scalable web and mobile
                        applications.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-cyan mt-1 flex-shrink-0" />
                      <p className="text-body">
                        Delivered complex, production-grade solutions by
                        implementing advanced functionality and optimizing
                        performance for diverse client needs.
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-cyan mt-1 flex-shrink-0" />
                      <p className="text-body">
                        Successfully developed and deployed sophisticated
                        applications, ensuring seamless integration of
                        third-party APIs and delivering exceptional user
                        experiences.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 p-6 surface-panel">
                    <h4 className="text-lg font-semibold text-foreground mb-5">
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                        <span className="text-muted-foreground">
                          10+ Projects Completed
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                        <span className="text-muted-foreground">
                          100% Client Satisfaction
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                        <span className="text-muted-foreground">
                          Mobile & Web Development
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                        <span className="text-muted-foreground">
                          Performance Optimization
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
