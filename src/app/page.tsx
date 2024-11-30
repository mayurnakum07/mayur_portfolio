import { Download } from "lucide-react";
import Image from "next/image";
import profileImg from "../../public/profile.jpg";
import Link from "next/link";
const Home = () => {
  return (
    <main className="flex-none h-auto max-w-[1300px] px-0 lg:px-0 md:px-5 relative w-[100%] m-auto">
      <section className="py-28">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <p className="text-2xl text-gray-800 mb-2">
              Hey, {"I'm"} Mayur <span className="inline-block">👋🏻</span>
            </p>
            <h1 className=" text-4xl lg:text-8xl md:text-6xl font-bold text-gray-800">
              <span className="text-purple-600">Front</span>end <br />
              Developer
            </h1>
            <p className="mt-6 text-gray-800 lg:text-2xl px-2">
              I&apos;m a frontend developer based in India, I&apos;ll help you
              build beautiful websites your users will love.
            </p>
            <div className="mt-6 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4">
              <Link
                href="/contact"
                className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-bold"
              >
                Get In Touch
              </Link>
              <button className="px-6 py-2 bg-transparent transition-all duration-300 border border-gray-600 text-gray-800 rounded-lg hover:bg-gray-800 hover:text-white flex gap-2 font-bold">
                <Download /> Download CV
              </button>
            </div>
          </div>
          <div className="relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64 lg:w-[25rem] lg:h-[25rem] mt-10 md:mt-0 rounded-full border-2 border-purple-300">
            <Image
              src={profileImg}
              alt="Profile Image"
              className="object-cover rounded-full w-full h-full lg:w-80 lg:h-80 md:w-60 md:h-60 sm:w-40 sm:h-40"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
