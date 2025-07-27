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
      color: "from-purple-500 to-purple-600",
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
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Database,
      title: "Backend",
      skills: ["Firebase", "Vercel", "Node JS (Beginner)"],
      color: "from-green-500 to-green-600",
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
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-pulse delay-500"></div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6 animate-fade-in-up">
            Skills<span className="text-purple-600">.</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up delay-200">
            A comprehensive toolkit of technical expertise and soft skills that
            enable me to deliver exceptional digital solutions across various
            platforms and technologies.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Category Header */}
              <div
                className={`bg-gradient-to-r ${category.color} p-6 text-white`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <category.icon className="w-8 h-8" />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="w-12 h-1 bg-white rounded-full opacity-80"></div>
              </div>

              {/* Skills List */}
              <div className="p-6">
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skill}
                      className="flex items-center gap-3 text-gray-700 group-hover:text-gray-800 transition-colors duration-200"
                      style={{
                        animationDelay: `${
                          500 + index * 100 + skillIndex * 50
                        }ms`,
                      }}
                    >
                      <div
                        className={`w-2 h-2 bg-gradient-to-r ${category.color} rounded-full flex-shrink-0`}
                      ></div>
                      <span className="text-sm lg:text-base font-medium">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 animate-fade-in-up delay-700">
          <div className="bg-gradient-to-r from-purple-50 to-gray-50 rounded-2xl p-8 lg:p-12 border border-purple-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
                Additional Expertise
              </h3>
              <p className="text-gray-600 text-lg">
                Beyond core skills, I bring specialized knowledge in modern
                development practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-200">
                  <Smartphone className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Mobile Development
                  </h4>
                  <p className="text-sm text-gray-600">
                    Cross-platform solutions
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Web Performance
                  </h4>
                  <p className="text-sm text-gray-600">Optimization & SEO</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-200">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Rapid Development
                  </h4>
                  <p className="text-sm text-gray-600">Quick prototyping</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 group hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors duration-200">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    Security Best Practices
                  </h4>
                  <p className="text-sm text-gray-600">Safe & secure code</p>
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
