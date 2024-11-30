import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Mayur | Frontend Web Developer Portfolio",
  description:
    "Frontend Developer with expertise in React, Next.js, TypeScript, and React Ionic. Passionate about building dynamic, responsive web applications.",
  icons: "https://cdn-icons-png.flaticon.com/512/2518/2518007.png",
  keywords: [
    "Frontend Web Developer",
    "React Developer",
    "Next.js Developer",
    "React Ionic Developer",
    "JavaScript Expert",
    "TypeScript Developer",
    "Web Application Developer",
    "UI/UX Developer",
    "Modern Web Development",
    "Responsive Web Design",
  ],
  robots: "index, follow",
  openGraph: {
    images: "https://i.ibb.co/0cL5M9C/protfollio-Img.png",
    title: "Mayur | Frontend Web Developer Portfolio",
    description:
      "Frontend Developer with expertise in React, Next.js, TypeScript, and React Ionic. Passionate about building dynamic, responsive web applications.",
  },
  twitter: {
    images: "https://i.ibb.co/0cL5M9C/protfollio-Img.png",
    title: "Mayur | Frontend Web Developer Portfolio",
    description:
      "Frontend Developer with expertise in React, Next.js, TypeScript, and React Ionic. Passionate about building dynamic, responsive web applications.",
  },
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <SpeedInsights />
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
