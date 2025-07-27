"use client";

import { projectData } from "@/data/projectData";
import Image from "next/image";
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const MyProjects = () => {
  return (
    <section className="pb-32">
      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {projectData.map((item, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            {/* Project Image Container */}
            <div className="relative h-64 lg:h-80 overflow-hidden bg-gradient-to-br from-purple-50 to-gray-100">
              <Image
                src={item.image}
                alt={`${item.title} project preview`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-4">
                  <Link
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-800 p-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <ExternalLink size={20} />
                  </Link>
                  <Link
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-900 transition-colors duration-200"
                  >
                    <Github size={20} />
                  </Link>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 lg:p-8">
              {/* Project Number */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full">
                  Project {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-xs text-gray-500 font-medium">
                  {index === 0 ? "Latest" : "Featured"}
                </span>
              </div>

              {/* Project Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                {item.title}
                <span className="text-purple-600">.</span>
              </h3>

              {/* Project Description */}
              <p className="text-gray-600 text-sm lg:text-base leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-2 mb-6">
                {item.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex gap-3">
                  <Link
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold text-sm transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Link>
                  <Link
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold text-sm transition-colors duration-200"
                  >
                    <Github size={16} />
                    Source Code
                  </Link>
                </div>

                {/* Project Status */}
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500 font-medium">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-16 h-16 bg-purple-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-purple-200 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 transform scale-0 group-hover:scale-100 delay-100"></div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-purple-50 to-gray-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            {` Let's`} work together to bring your ideas to life. {`I'm`} always
            excited to take on new challenges and create amazing digital
            experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <ExternalLink size={20} />
              Start a Project
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mayurnakum07"
            >
              <button className="px-8 py-3 bg-transparent border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white font-semibold transition-all duration-200">
                View More Work
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
