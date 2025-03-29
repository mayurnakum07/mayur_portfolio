import { Mail, Phone } from "lucide-react";
import profileImg from "../../../public/profile.jpg";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mayur - Frontend Developer",
  description:
    "Get in touch with Mayur for web development projects, collaborations, and job opportunities.",
  keywords: [
    "Contact Mayur",
    "Hire Frontend Developer",
    "React Developer Contact",
    "Next.js Developer Contact",
    "Web Developer Consultation",
    "Freelance Web Developer",
    "Work with Mayur",
    "JavaScript Developer for Hire",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/YT4CHxGj/Screenshot-2025-03-29-141903.webp",
    title: "Contact | Mayur - Frontend Developer",
    description:
      "Get in touch with Mayur for web development projects, collaborations, and job opportunities.",
  },
  twitter: {
    images: "https://i.ibb.co/YT4CHxGj/Screenshot-2025-03-29-141903.webp",
    title: "Contact | Mayur - Frontend Developer",
    description:
      "Get in touch with Mayur for web development projects, collaborations, and job opportunities.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

const Contant = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto">
      <section className="py-28">
        {/* Reverse order on mobile so image shows first */}
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between mt-8 gap-10">
          {/* Text Section */}
          <div className="text-center lg:text-left md:w-1/2 lg:w-1/2 p-5">
            <h1 className="text-4xl lg:text-6xl md:text-6xl font-bold text-gray-800">
              Get In Touch
              <span className="text-purple-600">.</span>
            </h1>
            <p className="mt-6 text-gray-800 text-xl lg:text-2xl">
              Looking to partner or work together? Reach out through the form
              and {"I'll"} get back to you in the next 24 hours.
            </p>

            {/* Email Link */}
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

            {/* Phone Link */}
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
          {/* Image Section (First on Mobile) */}
          <div className="relative flex items-center justify-center w-60 md:w-72 lg:w-[25rem] h-60 md:h-72 lg:h-[25rem] mt-10 lg:mt-0 rounded-full border-4 border-purple-300">
            <Image
              src={profileImg}
              alt="Profile Image"
              className="object-cover rounded-full w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contant;
