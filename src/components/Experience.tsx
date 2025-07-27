import Link from "next/link";
import React from "react";
import { Calendar, MapPin, ExternalLink, CheckCircle } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-24 h-24 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center lg:text-left mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Experience<span className="text-purple-600">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl animate-fade-in-up delay-200">
            My professional journey in frontend development, working with
            cutting-edge technologies and delivering exceptional user
            experiences.
          </p>
        </div>

        {/* Experience Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden animate-fade-in-up delay-300">
          <div className="p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Company Info Section */}
              <div className="lg:w-1/3">
                <div className="space-y-6">
                  {/* Company Logo/Name */}
                  <div className="space-y-4">
                    <Link
                      href="https://disolutions.net"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-2xl lg:text-3xl font-bold text-purple-600 hover:text-purple-700 transition-colors duration-300"
                    >
                      DI Solutions
                      <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>

                    {/* Position Badge */}
                    <div className="inline-block bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold border border-purple-200">
                      Front-end Developer
                    </div>
                  </div>

                  {/* Duration & Location */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-gray-600">
                      <Calendar className="w-5 h-5 text-purple-600" />
                      <span className="font-medium">August 2023 - Present</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <MapPin className="w-5 h-5 text-purple-600" />
                      <span>on-site / India</span>
                    </div>
                  </div>

                  {/* Skills Used */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-gray-800">
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
                      ].map((tech, index) => (
                        <span
                          key={tech}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                          style={{ animationDelay: `${400 + index * 100}ms` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="lg:w-2/3">
                <div className="space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-800">
                    Front-end Developer{" "}
                    <span className="text-purple-600">@ DI Solutions</span>
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Proficient in modern JavaScript frameworks, including
                        React.js, Next.js, React Native, and Tailwind CSS, with
                        extensive experience building scalable web and mobile
                        applications.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Delivered complex, production-grade solutions by
                        implementing advanced functionality and optimizing
                        performance for diverse client needs.
                      </p>
                    </div>

                    <div className="flex items-start gap-3 group">
                      <CheckCircle className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <p className="text-gray-700 text-lg leading-relaxed">
                        Successfully developed and deployed sophisticated
                        applications, ensuring seamless integration of
                        third-party APIs and delivering exceptional user
                        experiences.
                      </p>
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-purple-50 to-gray-50 rounded-xl border border-purple-100">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                      Key Achievements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                        <span className="text-gray-700">
                          10+ Projects Completed
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                        <span className="text-gray-700">
                          100% Client Satisfaction
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                        <span className="text-gray-700">
                          Mobile & Web Development
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                        <span className="text-gray-700">
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
