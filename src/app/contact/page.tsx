import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Contant = () => {
  return (
    <main className="flex-none h-auto max-w-[1300px] relative w-[100%] m-auto">
      <section className="py-28">
        <div className="flex flex-col md:flex-row items-center justify-between mt-8">
          <div className="text-center md:text-left md:w-1/2 lg:w-1/2 p-5">
            <h1 className="lg:text-6xl md:text-6xl font-bold text-gray-800">
              Get In Touch
              <span className="text-purple-600">.</span>
            </h1>
            <p className="mt-6 text-gray-800 lg:text-2xl">
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
          <div className="relative flex items-center justify-center w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mt-10 md:mt-0 rounded-full border-2 border-purple-200">
            <div className="rounded-full overflow-hidden">
              <Image
                src="/profile.jpeg"
                alt="Profile Image"
                className="object-cover"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contant;
