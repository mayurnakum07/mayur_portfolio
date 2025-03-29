"use client";

import { projectData } from "@/data/projectData";
import Image from "next/image";
import React from "react";

const MyProjects = () => {
  return (
    <section className="pb-32">
      {projectData.map((item, index) => (
        <div
          key={index}
          className="relative h-[50vh] lg:h-[100vh] md:h-[90vh] sm:h-[70vh] bg-white"
        >
          <div
            className={`h-[0vh] ${
              index === projectData.length - 1 ? "relative" : "sticky top-[80px]"
            }`}
          >
            <div className="w-[100%] bg-[#b8b8b8] h-[30vh] rounded-xl lg:h-[70vh] md:h-[50vh] sm:h-[40vh] relative">
              <Image
                src={item.image}
                alt="project-image"
                className="w-[100%] h-[100%] object-contain "
                loading="lazy"
              />
            </div>
            <h1 className="mt-5 text-4xl lg:text-6xl font-bold text-gray-800">
              {item.title}
              <span className="text-purple-600">.</span>
            </h1>
            <p className="mt-5 text-gray-800 text-xl lg:text-2xl px-2">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MyProjects;
