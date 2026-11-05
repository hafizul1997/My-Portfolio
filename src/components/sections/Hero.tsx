
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Terminal,
} from "lucide-react";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
    >
      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span className="text-xs font-medium tracking-wide text-blue-300">
              FULL-STACK WEB DEVELOPER
            </span>
          </div>

          <p className="mb-5 text-sm font-medium tracking-[0.25em] text-[#A1AFC2]">
            HELLO, I&apos;M HAFIZUL ISLAM
          </p>

          <h1 className="font-heading text-5xl font-bold leading-[1.12] tracking-tight text-[#F1F5F9] sm:text-6xl lg:text-7xl">
            Building Digital
            <span className="mt-2 block bg-linear-to-r from-blue-300 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Experiences.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-[#A1AFC2] sm:text-lg lg:mx-0">
            I&apos;m a project-focused Full-Stack Web Developer
            passionate about creating modern, responsive and
            user-friendly web applications using Next.js,
            React, TypeScript and Node.js.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-400 px-7 py-3.5 font-semibold text-[#080D18] shadow-lg shadow-blue-400/10 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-300 hover:shadow-blue-400/20"
            >
              Explore My Work
              <ArrowUpRight size={18} />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/3 px-7 py-3.5 font-semibold text-[#F1F5F9] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/50 hover:bg-blue-400/5 hover:text-blue-300"
            >
              Contact Me
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-12 flex items-center justify-center gap-5 lg:justify-start">
            <span className="text-sm text-[#64748B]">
              Find me on
            </span>

           <div className="flex items-center gap-3">
  <Link
    href="https://github.com/hafizul1997"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit my GitHub profile"
    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-[#F1F5F9] transition hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-blue-400"
  >
    GitHub
    <ArrowUpRight size={15} />
  </Link>

  <Link
    href="https://www.linkedin.com/in/hafizul-islam-9a86b8361/"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Visit my LinkedIn profile"
    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-[#F1F5F9] transition hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-blue-400"
  >
    LinkedIn
    <ArrowUpRight size={15} />
  </Link>
</div>
          </div>
        </div>

        {/* Right Code Card */}
        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute -inset-5 rounded-4xl bg-blue-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#111827]/90 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>

              <span className="text-xs text-[#64748B]">
                developer.tsx
              </span>

              <Code2 size={17} className="text-blue-400" />
            </div>

            <div className="space-y-5 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Terminal size={19} className="text-blue-400" />
                <span className="text-sm font-medium text-[#F1F5F9]">
                  About Me
                </span>
              </div>

              <div className="space-y-3 font-mono text-sm leading-7">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-blue-300">developer</span>{" "}
                  <span className="text-[#A1AFC2]">=</span>{" "}
                  <span className="text-yellow-300">{"{"}</span>
                </p>

                <p className="pl-5">
                  <span className="text-blue-300">name</span>
                  <span className="text-[#A1AFC2]">:</span>{" "}
                  <span className="text-green-300">
                    &quot;Hafizul Islam&quot;
                  </span>
                  <span className="text-[#A1AFC2]">,</span>
                </p>

                <p className="pl-5">
                  <span className="text-blue-300">role</span>
                  <span className="text-[#A1AFC2]">:</span>{" "}
                  <span className="text-green-300">
                    &quot;Full-Stack Developer&quot;
                  </span>
                  <span className="text-[#A1AFC2]">,</span>
                </p>

                <p className="pl-5">
                  <span className="text-blue-300">location</span>
                  <span className="text-[#A1AFC2]">:</span>{" "}
                  <span className="text-green-300">
                    &quot;Dubai, UAE&quot;
                  </span>
                  <span className="text-[#A1AFC2]">,</span>
                </p>

                <p className="pl-5">
                  <span className="text-blue-300">passion</span>
                  <span className="text-[#A1AFC2]">:</span>{" "}
                  <span className="text-green-300">
                    &quot;Building for the web&quot;
                  </span>
                </p>

                <p>
                  <span className="text-yellow-300">{"}"}</span>
                  <span className="text-[#A1AFC2]">;</span>
                </p>
              </div>

              <div className="border-t border-white/10 pt-5">
                <p className="mb-4 text-xs font-medium uppercase tracking-widest text-[#64748B]">
                  Technologies I Work With
                </p>

                <div className="flex flex-wrap gap-2">
                  {technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-lg border border-blue-400/15 bg-blue-400/5 px-3 py-1.5 text-xs font-medium text-blue-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-7 -left-5 hidden rounded-xl border border-white/10 bg-[#151E2E] px-5 py-4 shadow-xl sm:block">
            <p className="text-xs text-[#64748B]">
              Current Focus
            </p>
            <p className="mt-1 text-sm font-semibold text-[#F1F5F9]">
              Building &amp; Learning
            </p>
          </div>
        </div>
      </div>

      <Link
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#64748B] transition hover:text-blue-400 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.25em]">
          Scroll to explore
        </span>
        <ArrowDown size={17} className="animate-bounce" />
      </Link>
    </section>
  );
}
