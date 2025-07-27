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
  themeColor: "#000000",
};

const Projects = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto">
      {/* Enhanced Header Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-20 h-20 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-pulse delay-500"></div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* Icon and Title Row */}
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-purple-600 rounded-xl">
              <Code className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-gray-800">
                My <span className="text-purple-600">Best</span> Creations
              </h1>
            </div>
          </div>

          {/* Enhanced Description */}
          <div className="max-w-4xl">
            <p className="text-gray-800 text-xl lg:text-2xl px-2 border-l-4 lg:border-l-8 border-purple-600 mb-8">
              Designing and Developing Robust and Stylish Web Applications for a
              Decade and Counting
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Sparkles className="text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Projects Completed
                  </h3>
                </div>
                <p className="text-3xl font-bold text-purple-600">10+</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Technologies
                  </h3>
                </div>
                <p className="text-3xl font-bold text-purple-600">8+</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-center gap-3 mb-3">
                  <Code className="text-purple-600" size={24} />
                  <h3 className="text-lg font-semibold text-gray-800">
                    Years Experience
                  </h3>
                </div>
                <p className="text-3xl font-bold text-purple-600">2+</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <MyProjects />

      {/* Professional Note Section */}
      <section className="py-16">
        <div className="bg-gradient-to-r from-purple-50 to-gray-50 rounded-2xl p-8 lg:p-12 border border-purple-100">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-600 rounded-xl">
                <Shield className="text-white" size={24} />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                A Note About My Portfolio
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg">
                While {`I've`} showcased some of my best work here, this
                represents only a portion of my complete project portfolio. Many
                of my most complex and innovative projects are not publicly
                displayed due to:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start gap-3">
                  <Lock
                    className="text-purple-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Client Confidentiality
                    </h3>
                    <p className="text-sm text-gray-600">
                      Some projects involve sensitive business logic,
                      proprietary algorithms, or confidential client data that
                      cannot be publicly shared.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield
                    className="text-purple-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Security Requirements
                    </h3>
                    <p className="text-sm text-gray-600">
                      Enterprise-level applications often have strict security
                      protocols that prevent public demonstration of their full
                      capabilities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Code
                    className="text-purple-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Complex Architecture
                    </h3>
                    <p className="text-sm text-gray-600">
                      Some of my most sophisticated work involves intricate
                      system architectures that are difficult to showcase in a
                      portfolio format.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Zap
                    className="text-purple-600 mt-1 flex-shrink-0"
                    size={20}
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      Ongoing Development
                    </h3>
                    <p className="text-sm text-gray-600">
                      Several high-impact projects are currently in active
                      development or under NDA restrictions.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white rounded-lg border-l-4 border-purple-600">
                <p className="text-gray-800 font-medium">
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
