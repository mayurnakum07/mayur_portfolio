"use client";

import { projectData } from "@/data/projectData";
import Image from "next/image";
import React from "react";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const MyProjects = () => {
  return (
    <section className="pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {projectData.map((item, index) => (
          <div
            key={index}
            className="group relative card-interactive overflow-hidden"
          >
            <div className="relative h-64 lg:h-80 overflow-hidden bg-surface-2">
              <Image
                src={item.image}
                alt={`${item.title} project preview`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 flex gap-4">
                  <Link
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon bg-surface-elevated"
                  >
                    <ExternalLink size={20} />
                  </Link>
                  <Link
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-icon bg-surface-elevated"
                  >
                    <Github size={20} />
                  </Link>
                </div>
              </div>
            </div>

            <div className="p-6 lg:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="badge-accent">
                  Project {String(index + 1).padStart(2, "0")}
                </span>
                <span className="label-text">
                  {index === 0 ? "Latest" : "Featured"}
                </span>
              </div>

              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-3 group-hover:text-accent-cyan transition-colors duration-300">
                {item.title}
                <span className="text-accent-cyan">.</span>
              </h3>

              <p className="text-body mb-6">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {item.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex gap-4">
                  <Link
                    href={item.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 link-accent text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </Link>
                  <Link
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 link-subtle text-sm font-semibold"
                  >
                    <Github size={16} />
                    Source Code
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent-cyan rounded-full"></div>
                  <span className="label-text normal-case tracking-normal">
                    {item.status}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <div className="surface-panel-accent p-8 lg:p-12">
          <h3 className="heading-subsection mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-body-lg mb-8 max-w-2xl mx-auto">
            {` Let's`} work together to bring your ideas to life. {`I'm`} always
            excited to take on new challenges and create amazing digital
            experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-accent px-8 py-3">
              <ExternalLink size={20} />
              Start a Project
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/mayurnakum07"
            >
              <button className="btn-outline-accent px-8 py-3">
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
