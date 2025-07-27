"use client";

import { projectData } from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const ProjectBanner = () => {
  // Get the first 3 projects for the banner
  const featuredProjects = projectData.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-28">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            Featured<span className="text-purple-600"> Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore some of my recent work that showcases my expertise in modern
            web and mobile development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-900 transition-colors duration-200"
                    >
                      <Github size={16} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                    {project.status}
                  </span>
                  <span className="text-xs text-gray-500">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                  <span className="text-purple-600">.</span>
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Want to See More?
            </h3>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Discover my complete portfolio of projects, from web applications
              to mobile apps, each crafted with attention to detail and modern
              development practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/projects"
                className="group px-8 py-4 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold transition-all duration-200 flex items-center gap-3"
              >
                View All Projects
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </Link>

              <Link
                href="/contact"
                className="px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white font-semibold transition-all duration-200"
              >
                Start a Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBanner;
