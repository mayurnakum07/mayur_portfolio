import Link from "next/link";
import React from "react";

const Experience = () => {
  return (
    <section className="pb-20 pt-8">
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-800">
        Experience<span className="text-purple-600">.</span>
      </h1>
      <div className="mt-8 px-2 flex flex-col md:flex-row items-start">
        {/* Company Name */}
        <div className="w-full md:w-[30%]">
          <Link
            href="https://disolutions.net"
            target="_blank"
            className="text-3xl border-l-4 border-purple-600 px-3 leading-[55px] text-purple-600"
          >
            DI Solutions
          </Link>
        </div>
        {/* Company Details */}
        <div className="w-full md:w-[70%] p-2 rounded-lg">
          <h3 className="text-2xl font-bold">
            Front-end Developer{" "}
            <span className="text-purple-600">@ DI Solutions </span>
          </h3>
          <p className="text-gray-600">Augest 2023 - Present</p>
          <ul className="mt-4 space-y-3 text-gray-700 lg:text-[20px]">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              Proficient in modern JavaScript frameworks, including React.js,
              Next.js, React Native, and Tailwind CSS, with extensive experience
              building scalable web and mobile applications.
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              Delivered complex, production-grade solutions by implementing
              advanced functionality and optimizing performance for diverse
              client needs.
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">✔</span>
              Successfully developed and deployed sophisticated applications,
              ensuring seamless integration of third-party APIs and delivering
              exceptional user experiences.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
