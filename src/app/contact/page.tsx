import { Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
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
  themeColor: "#09090b",
};

const Contact = () => {
  return (
    <main className="container-page">
      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="space-y-6 lg:space-y-8">
              <h1 className="heading-display">
                <span className="text-gradient">Get In</span>
                <span className="text-foreground">Touch</span>
                <span className="text-accent-cyan">.</span>
              </h1>
            </div>

            <div className="space-y-8">
              <p className="text-body-lg max-w-2xl mx-auto lg:mx-0">
                Ready to bring your ideas to life? {`Let's`} collaborate on
                your next project.
                {`I'm`} here to help you create{" "}
                <span className="text-accent-cyan font-semibold">
                  amazing digital experiences
                </span>{" "}
                that your users will love.
              </p>

              <div className="hero-tags">
                <span className="tag-highlight">Quick Response</span>
                <span className="tag-highlight">Free Consultation</span>
                <span className="tag-highlight">Flexible Pricing</span>
              </div>
            </div>

            <div className="space-y-4 w-full max-w-xl mx-auto lg:mx-0">
              <Link
                href="mailto:mayurnakum07@gmail.com"
                className="group flex items-center gap-4 p-4 card-interactive"
              >
                <div className="icon-box-accent">
                  <Mail className="w-5 h-5 text-accent-purple" />
                </div>
                <div className="text-left">
                  <p className="label-text">Email</p>
                  <p className="text-foreground font-semibold">
                    mayurnakum07@gmail.com
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-4 p-4 card">
                <div className="icon-box-accent">
                  <MapPin className="w-5 h-5 text-accent-purple" />
                </div>
                <div className="text-left">
                  <p className="label-text">Location</p>
                  <p className="text-foreground font-semibold">India</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 card">
                <div className="icon-box bg-accent-cyan/10 border-accent-cyan/20">
                  <Clock className="w-5 h-5 text-accent-cyan" />
                </div>
                <div className="text-left">
                  <p className="label-text">Availability</p>
                  <p className="text-foreground font-semibold">
                    Available for new projects
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="relative">
              <div className="hero-visual-glow" />
              <div className="hero-visual-frame">
                <Image
                  src={profileImg}
                  alt="Mayur Nakum - Frontend Developer"
                  className="object-cover w-full h-full"
                  priority
                  sizes="(max-width: 768px) 280px, (max-width: 1024px) 320px, 380px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing-sm">
        <div className="surface-panel-accent p-8 lg:p-12">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <MessageCircle className="w-7 h-7 text-accent-purple" />
              <h2 className="heading-subsection">
                {`Let's`} Start Your Project
              </h2>
            </div>
            <p className="text-body-lg mb-10">
              Whether you have a specific project in mind or just want to
              discuss possibilities,
              {`I'm`} here to help. {`Let's`} create something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:mayurnakum07@gmail.com"
                className="btn-accent px-8 py-4"
              >
                <Send className="w-5 h-5" />
                Send Message
              </Link>
              <Link
                href="https://mayurnakum-portfolio.vercel.app/mayurResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-accent px-8 py-4"
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
