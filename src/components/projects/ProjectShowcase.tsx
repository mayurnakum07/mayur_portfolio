"use client";

import { projectData } from "@/data/projectData";
import ProjectCard from "./ProjectCard";

export default function ProjectShowcase() {
  return (
    <section className="pb-28 md:pb-36 lg:pb-44">
      <div className="container-page">
        <div className="flex flex-col gap-20 md:gap-24 lg:gap-[96px]">
          {projectData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
