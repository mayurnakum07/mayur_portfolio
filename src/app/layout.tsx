import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata: Metadata = {
  title: "Mayur's Portfolio",
  description:
    "Passionate Frontend Web Developer | React js, Next js & React Ionic Specialist | Expert in javascript & TypeScript",
  openGraph: {
    images: "./portfollioImg.png",
  },
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
