"use client";

import { projectData } from "@/data/projectData";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const ProjectBanner = () => {
  const featuredProjects = projectData.slice(0, 3);

  return (
    <section className="section-spacing section-divider">
      <div>
        <div className="text-center mb-20">
          <h2 className="heading-section mb-6">
            Featured<span className="text-accent-cyan"> Projects</span>
          </h2>
          <p className="text-body-lg max-w-3xl mx-auto">
            Explore some of my recent work that showcases my expertise in modern
            web and mobile development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group card-interactive overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-3">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon bg-surface-elevated"
                    >
                      <ExternalLink size={16} />
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-icon bg-surface-elevated"
                    >
                      <Github size={16} />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="badge-status">
                    {project.status}
                  </span>
                  <span className="label-text">
                    Project {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-cyan transition-colors duration-300">
                  {project.title}
                  <span className="text-accent-cyan">.</span>
                </h3>

                <p className="text-body-sm text-muted-foreground leading-relaxed mb-5 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="tag text-xs px-2 py-0.5">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="badge-accent text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="surface-panel-accent p-8 lg:p-12">
            <h3 className="heading-subsection mb-4">
              Want to See More?
            </h3>
            <p className="text-body-lg mb-10 max-w-2xl mx-auto">
              Discover my complete portfolio of projects, from web applications
              to mobile apps, each crafted with attention to detail and modern
              development practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/projects" className="btn-accent group px-8 py-4">
                View All Projects
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-0.5 transition-transform duration-200"
                />
              </Link>

              <Link href="/contact" className="btn-outline-accent px-8 py-4">
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
