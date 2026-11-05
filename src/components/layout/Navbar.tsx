
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => {
    const root = document.documentElement;
    const isLight = root.classList.toggle("light");

    localStorage.setItem(
      "portfolio-theme",
      isLight ? "light" : "dark"
    );
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl rounded-2xl border border-(--border) bg-(--background)/90 px-5 shadow-2xl shadow-black/20 backdrop-blur-xl"
      >
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <Link
            href="#home"
            onClick={() => setIsOpen(false)}
            aria-label="Hafizul Islam home"
            className="group flex items-center gap-2"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-blue-400/20 bg-blue-400/10 font-heading text-sm font-bold text-(--accent) transition group-hover:bg-blue-400/20">
              H
            </span>

            <span className="font-heading text-lg font-bold tracking-tight text-(--foreground)">
              HAFIZUL
              <span className="text-(--accent)">.DEV</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-(--muted) transition-all duration-200 hover:bg-(--surface) hover:text-(--accent)"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Theme Toggle + Desktop CTA */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              title="Switch color theme"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) bg-(--surface) text-(--foreground) transition hover:border-(--accent) hover:text-(--accent)"
            >
              <Sun
                size={19}
                className="theme-dark-icon"
                aria-hidden="true"
              />
              <Moon
                size={19}
                className="theme-light-icon"
                aria-hidden="true"
              />
            </button>

            <Link
              href="#contact"
              className="hidden items-center gap-2 rounded-full bg-blue-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-300 hover:shadow-lg hover:shadow-blue-400/20 lg:inline-flex"
            >
              Let&apos;s Talk
              <ArrowUpRight size={16} />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsOpen((previous) => !previous)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-(--border) bg-(--surface) text-(--foreground) transition hover:border-(--accent) hover:text-(--accent) lg:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          id="mobile-navigation"
          className={`grid transition-all duration-300 ease-in-out lg:hidden ${
            isOpen
              ? "grid-rows-[1fr] pb-5 opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1 border-t border-(--border) pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-(--muted) transition hover:bg-(--surface) hover:text-(--accent)"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-blue-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-blue-300"
              >
                Let&apos;s Talk
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
