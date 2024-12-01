import { Mail, Phone } from "lucide-react";
import profileImg from "../../../public/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contant = () => {
  return (
    <main className="flex-none h-auto max-w-[1300px] px-2 lg:px-0 md:px-5  relative w-[100%] m-auto">
      <section className="py-28">
        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
          <div className="text-center md:text-left md:w-1/2 lg:w-1/2 p-5">
            <h1 className="text-4xl lg:text-6xl md:text-6xl font-bold text-gray-800">
              Get In Touch
              <span className="text-purple-600">.</span>
            </h1>
            <p className="mt-6 text-gray-800 text-xl lg:text-2xl">
              Looking to partner or work together? Reach out through the form
              and {"I'll"} get back to you in the next 24 hours.
            </p>
            <Link
              href="mailto:mayurnakum07@gmail.com"
              className="mt-6 flex gap-5 items-center"
            >
              <div className="p-3 border-2 border-gray-400 text-gray-600 rounded-full font-bold">
                <Mail />
              </div>
              <p className="text-[18px] text-gray-600">
                mayurnakum07@gmail.com
              </p>
            </Link>
            <Link
              href="tel:+917202917242"
              className="mt-6 flex gap-5 items-center"
            >
              <div className="p-3 border-2 border-gray-400 text-gray-600 rounded-full font-bold">
                <Phone />
              </div>
              <p className="text-[18px] text-gray-600">+91 72029-17242</p>
            </Link>
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

export default Contant;
