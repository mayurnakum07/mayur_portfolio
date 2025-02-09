import Experience from "@/components/Experience";
import Myplace from "@/components/Myplace";
import MyStory from "@/components/MyStory";

const About = () => {
  return (
    <main className="flex-none h-auto max-w-[1300px] px-2 lg:px-0 md:px-5 relative w-[100%] m-auto">
      <section className="py-20">
        <h1 className="text-4xl lg:text-8xl md:text-6xl font-bold text-gray-800">
          About me<span className="text-purple-600">.</span>
        </h1>
        <p className="mt-8 text-gray-800 text-xl lg:text-2xl px-2  border-l-4 lg:border-l-8 border-purple-600">
          Develop ing beautiful and functional websites is what I love doing, and
          {"that's"} why I give my all in every new challenge.
        </p>
      </section>
      <Myplace />
      <MyStory />
      <Experience />
    </main>
  );
};

export default About;
