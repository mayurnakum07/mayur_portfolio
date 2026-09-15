import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site";
import { defaultDescription } from "@/lib/metadata";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import ScrollProvider from "@/components/motion/ScrollProvider";
import Preloader from "@/components/motion/Preloader";
import { Archivo, Space_Mono, Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["700", "800"],
  // Metric overrides clip Syne descenders (g/p/y) at display sizes.
  adjustFontFallback: false,
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.title}`,
    template: `%s`,
  },
  description: defaultDescription,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0A0908",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="is-loading" suppressHydrationWarning>
      <body
        className={`${syne.variable} ${archivo.variable} ${spaceMono.variable} antialiased page-shell`}
        suppressHydrationWarning
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Preloader />
        <ScrollProvider>
          <Header />
          <div id="main-content" className="page-content">
            {children}
          </div>
          <Footer />
        </ScrollProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
