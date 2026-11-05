
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
    <footer className="border-t border-white/10 bg-[#080D18] px-4 sm:px-6">
      <div className="mx-auto max-w-7xl py-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <Link
            href="#home"
            aria-label="Hafizul Islam home"
            className="font-heading text-xl font-bold tracking-tight text-[#F1F5F9]"
          >
            HAFIZUL<span className="text-blue-400">.DEV</span>
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
                className="text-sm text-[#A1AFC2] transition hover:text-blue-400"
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
              className="inline-flex items-center gap-1 text-sm text-[#A1AFC2] transition hover:text-blue-400"
            >
              GitHub <ArrowUpRight size={14} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/hafizul-islam-9a86b8360/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[#A1AFC2] transition hover:text-blue-400"
            >
              LinkedIn <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-xs leading-6 text-[#64748B]">
            © {new Date().getFullYear()} Hafizul Islam. All rights reserved.
          </p>

          <p className="mt-1 text-xs text-[#475569]">
            Designed and built with Next.js, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
