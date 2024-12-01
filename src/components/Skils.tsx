import React from "react";

const Skils = () => {
  return (
    <section className="pb-20 pt-8">
      <h1 className="text-5xl lg:text-6xl font-bold text-gray-800">
        Skills
        <span className="text-purple-600">.</span>
      </h1>
      <div className="mt-8 px-2 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-3xl font-bold text-gray-800">Web Design</h3>
          <ul className="mt-4 text-gray-800 lg:text-[20px]">
            <li>UI/UX Design</li>
            <li>Responsive Design</li>
            <li>User Research</li>
            <li>Tailwind</li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-800">Frontend</h3>
          <ul className="mt-4 text-gray-800 lg:text-[20px]">
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>Ionic</li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-800">Backend</h3>
          <ul className="mt-4 text-gray-800 lg:text-[20px]">
            <li>Firebase</li>
            <li>Node JS (Beginner)</li>
          </ul>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-gray-800">Soft Skills</h3>
          <ul className="mt-4 text-gray-800 lg:text-[20px]">
            <li>Effective communication</li>
            <li>Collaboration</li>
            <li>Commitment</li>
            <li>Leadership</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skils;
