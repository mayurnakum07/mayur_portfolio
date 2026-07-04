import MyProjects from "@/components/MyProjects";
import { Metadata } from "next";
import { Code, Sparkles, Zap, Shield, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Projects | Mayur - Frontend Developer",
  description:
    "Explore projects developed by Mayur, a frontend web developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Web Development Projects",
    "Frontend Projects",
    "React Projects",
    "Next.js Portfolio",
    "JavaScript Projects",
    "TypeScript Projects",
    "UI/UX Development",
    "Modern Web Applications",
    "Responsive Websites",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/C5QRJzQF/image.png",
    title: "Projects | Mayur - Frontend Developer",
    description:
      "Explore projects developed by Mayur, a frontend web developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
  twitter: {
    images: "https://i.ibb.co/C5QRJzQF/image.png",
    title: "Projects | Mayur - Frontend Developer",
    description:
      "Explore projects developed by Mayur, a frontend web developer specializing in React, Next.js, TypeScript, and modern web technologies.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#09090b",
};

const Projects = () => {
  return (
    <main className="container-page relative w-full">
      <section className="section-spacing relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="icon-box-accent p-3 rounded-xl">
              <Code className="text-accent-purple" size={28} />
            </div>
            <div>
              <h1 className="heading-display">
                My <span className="text-gradient">Best</span> Creations
              </h1>
            </div>
          </div>

          <div className="max-w-4xl">
            <p className="text-body-lg px-2 border-l-2 border-accent-cyan mb-12">
              Designing and Developing Robust and Stylish Web Applications for a
              Decade and Counting
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="text-accent-cyan" size={22} />
                  <h3 className="text-lg font-semibold text-foreground">
                    Projects Completed
                  </h3>
                </div>
                <p className="text-3xl font-bold text-gradient">10+</p>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="text-accent-cyan" size={22} />
                  <h3 className="text-lg font-semibold text-foreground">
                    Technologies
                  </h3>
                </div>
                <p className="text-3xl font-bold text-gradient">8+</p>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="text-accent-cyan" size={22} />
                  <h3 className="text-lg font-semibold text-foreground">
                    Years Experience
                  </h3>
                </div>
                <p className="text-3xl font-bold text-gradient">2+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MyProjects />

      <section className="section-spacing">
        <div className="surface-panel-accent p-8 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <div className="icon-box-accent p-3 rounded-xl">
                <Shield className="text-accent-purple" size={22} />
              </div>
              <h2 className="heading-subsection">
                A Note About My Portfolio
              </h2>
            </div>

            <div className="space-y-4 text-body leading-relaxed">
              <p className="text-body-lg">
                While {`I've`} showcased some of my best work here, this
                represents only a portion of my complete project portfolio. Many
                of my most complex and innovative projects are not publicly
                displayed due to:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <Lock
                    className="text-accent-purple mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Client Confidentiality
                    </h3>
                    <p className="text-body-sm text-muted-foreground">
                      Some projects involve sensitive business logic,
                      proprietary algorithms, or confidential client data that
                      cannot be publicly shared.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield
                    className="text-accent-purple mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Security Requirements
                    </h3>
                    <p className="text-body-sm text-muted-foreground">
                      Enterprise-level applications often have strict security
                      protocols that prevent public demonstration of their full
                      capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Code
                    className="text-accent-purple mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Complex Architecture
                    </h3>
                    <p className="text-body-sm text-muted-foreground">
                      Some of my most sophisticated work involves intricate
                      system architectures that are difficult to showcase in a
                      portfolio format.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap
                    className="text-accent-purple mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Ongoing Development
                    </h3>
                    <p className="text-body-sm text-muted-foreground">
                      Several high-impact projects are currently in active
                      development or under NDA restrictions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-5 card border-l-2 border-l-accent-cyan rounded-l-none">
                <p className="text-foreground font-medium">
                  💡 <strong>Interested in seeing more?</strong> {`I'd`} be
                  happy to discuss specific examples of my work during our
                  conversation, including case studies and technical details
                  that demonstrate my expertise in handling complex,
                  enterprise-level applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
