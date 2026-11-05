
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--background) px-4 text-(--foreground) sm:px-6">
      <div className="mx-auto max-w-7xl py-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <Link
            href="#home"
            aria-label="Hafizul Islam home"
            className="font-heading text-xl font-bold tracking-tight text-(--foreground)"
          >
            HAFIZUL<span className="text-(--accent)">.DEV</span>
          </Link>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-x-6 gap-y-3"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-(--muted) transition hover:text-(--accent)"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="flex items-center gap-5">
            <Link
              href="https://github.com/hafizul1997"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-(--muted) transition hover:text-(--accent)"
            >
              GitHub <ArrowUpRight size={14} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/hafizul-islam-9a86b8360/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-(--muted) transition hover:text-(--accent)"
            >
              LinkedIn <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-(--border) pt-6 text-center">
          <p className="text-xs leading-6 text-(--muted)">
            © {new Date().getFullYear()} Hafizul Islam. All rights reserved.
          </p>

          <p className="mt-1 text-xs text-(--muted)/70">
            Designed and built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
