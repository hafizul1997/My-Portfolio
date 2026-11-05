
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import ThemeProvider from "@/components/providers/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hafizul-portfolio.vercel.app"),
  title: {
    default: "Hafizul Islam | Full-Stack Web Developer",
    template: "%s | Hafizul Islam",
  },
  verification: {
    google: "5x4UxTfjIy4OB5vHKQb33XVbz7bE1mSim6OCLHb34g4",
  },
  description:
    "Explore the portfolio of Hafizul Islam, a project-focused Full-Stack Web Developer based in Dubai, UAE. Discover projects built with Next.js, React, TypeScript, Node.js, Express.js and MongoDB.",
  keywords: [
    "Hafizul Islam",
    "Hafizul Islam Developer",
    "Full-Stack Web Developer",
    "Frontend Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Web Developer Dubai",
    "Portfolio",
  ],
  authors: [{ name: "Hafizul Islam" }],
  creator: "Hafizul Islam",
  applicationName: "Hafizul Islam Portfolio",
  category: "technology",
  openGraph: {
    title: "Hafizul Islam | Full-Stack Web Developer",
    description:
      "Explore my web development projects, technical skills and journey as a project-focused Full-Stack Web Developer based in Dubai, UAE.",
    siteName: "Hafizul Islam Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hafizul Islam | Full-Stack Web Developer",
    description:
      "Explore my projects, technical skills and web development journey.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body
    className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
  >
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </body>
</html>
  );
}
