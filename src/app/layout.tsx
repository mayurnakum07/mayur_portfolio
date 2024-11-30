import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import NoSSRProvider from "./provider/NoSSRProvider";
export const metadata: Metadata = {
  title: "Mayur's Portfolio",
  description: "Generated by create next app",
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
          <NoSSRProvider>
            <Header />
            {children}
            <Footer />
          </NoSSRProvider>
        </body>
      </html>
    </>
  );
}
