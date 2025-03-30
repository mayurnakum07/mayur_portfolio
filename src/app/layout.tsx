import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ScrollButtons from "@/components/ScrollingUpButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body>
          <Header />
          <ScrollButtons />
          {children}
          <Footer />
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </>
  );
}
