import MyProjects from "@/components/MyProjects";

const Projects = () => {
  return (
    <main className="flex-none h-auto max-w-[1300px] px-2 lg:px-0 md:px-5 relative w-[100%] m-auto">
      <section className="py-20">
        <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-gray-800">
          My<span className="text-purple-600">Best</span>
          Creations
        </h1>
        <p className="mt-8 text-gray-800 text-xl lg:text-2xl px-2  border-l-4 lg:border-l-8 border-purple-600">
          Designing and Developing Robust and Stylish Web Applications for a
          Decade and Counting
        </p>
      </section>
      <MyProjects />
    </main>
  );
};

export default Projects;
