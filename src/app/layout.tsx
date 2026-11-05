
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
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
  title: {
    default: "Hafizul Islam | Full-Stack Web Developer",
    template: "%s | Hafizul Islam",
  },
  description:
    "Portfolio of Hafizul Islam, a project-focused Full-Stack Web Developer building modern web applications with Next.js, React, TypeScript and Node.js.",
  metadataBase: new URL("https://hafizulislam.dev"),
  openGraph: {
    title: "Hafizul Islam | Full-Stack Web Developer",
    description:
      "Explore my projects, technical skills and web development journey.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
