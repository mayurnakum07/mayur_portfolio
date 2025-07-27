import { Mail, Phone, MapPin, Clock, Send, MessageCircle } from "lucide-react";
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
    images: "https://i.ibb.co/20FD61NY/image.png",
    title: "Contact | Mayur - Frontend Developer",
    description:
      "Get in touch with Mayur for web development projects, collaborations, and job opportunities.",
  },
  twitter: {
    images: "https://i.ibb.co/20FD61NY/image.png",
    title: "Contact | Mayur - Frontend Developer",
    description:
      "Get in touch with Mayur for web development projects, collaborations, and job opportunities.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

const Contact = () => {
  return (
    <main className="flex-none h-auto px-4 md:px-8 lg:px-28 relative w-[100%] m-auto">
      {/* Hero Section with Enhanced Design */}
      <section className="py-28 relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-200 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-300 rounded-full opacity-20 animate-pulse delay-500"></div>

        {/* Main Content */}
        <div className="relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Text Section with Enhanced Typography */}
            <div className="text-center lg:text-left lg:w-1/2 space-y-8">
              {/* Header with Animation */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-7xl md:text-6xl font-bold leading-tight animate-fade-in-up">
                  <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent animate-fade-in-up delay-200">
                    Get In
                  </span>
                  <span className="text-gray-800 animate-fade-in-up delay-300">
                    Touch
                  </span>
                  <span className="text-purple-600 animate-fade-in-up delay-400">
                    .
                  </span>
                </h1>
              </div>

              {/* Enhanced Description */}
              <div className="space-y-6">
                <p className="text-gray-700 text-lg lg:text-xl xl:text-2xl leading-relaxed max-w-2xl animate-fade-in-up delay-500">
                  Ready to bring your ideas to life? {`Let's`} collaborate on
                  your next project.
                  {`I'm`} here to help you create{" "}
                  <span className="text-purple-600 font-semibold">
                    amazing digital experiences
                  </span>{" "}
                  that your users will love.
                </p>

                {/* Contact Highlights */}
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in-up delay-600">
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                    Quick Response
                  </span>
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                    Free Consultation
                  </span>
                  <span className="bg-purple-50 text-purple-700 px-4 py-2 rounded-full text-sm font-medium border border-purple-200">
                    Flexible Pricing
                  </span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4 animate-fade-in-up delay-700">
                {/* Email */}
                <Link
                  href="mailto:mayurnakum07@gmail.com"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-purple-200"
                >
                  <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-200">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 font-medium">Email</p>
                    <p className="text-gray-800 font-semibold">
                      mayurnakum07@gmail.com
                    </p>
                  </div>
                </Link>

                {/* Phone */}
                <Link
                  href="tel:+917202917242"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:border-purple-200"
                >
                  <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-200">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 font-medium">Phone</p>
                    <p className="text-gray-800 font-semibold">
                      +91 72029-17242
                    </p>
                  </div>
                </Link>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 font-medium">
                      Location
                    </p>
                    <p className="text-gray-800 font-semibold">India</p>
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Clock className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-500 font-medium">
                      Availability
                    </p>
                    <p className="text-gray-800 font-semibold">
                      Available for new projects
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Image Section */}
            <div className="relative flex items-center justify-center w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 animate-fade-in-up delay-300">
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-full border-4 border-purple-300 shadow-xl overflow-hidden">
                <Image
                  src={profileImg}
                  alt="Mayur Nakum - Frontend Developer"
                  className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
                />

                {/* Floating Elements */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-600 rounded-full animate-bounce delay-1000"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-purple-400 rounded-full animate-bounce delay-1500"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 animate-fade-in-up delay-800">
        <div className="bg-gradient-to-r from-purple-50 to-gray-50 rounded-2xl p-8 lg:p-12 border border-purple-100">
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircle className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">
                {`Let's`} Start Your Project
              </h2>
            </div>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Whether you have a specific project in mind or just want to
              discuss possibilities,
              {`I'm`} here to help. {`Let's`} create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:mayurnakum07@gmail.com"
                className="group px-8 py-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                Send Message
              </Link>
              <Link
                href="https://mayurnakum-portfolio.vercel.app/mayurResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-transparent border-2 border-purple-600 text-purple-600 rounded-xl hover:bg-purple-600 hover:text-white font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                Download Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
