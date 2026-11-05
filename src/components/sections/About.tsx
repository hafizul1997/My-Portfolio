
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const highlights = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "Building responsive and accessible user interfaces with React, Next.js, TypeScript and Tailwind CSS.",
  },
  {
    number: "02",
    title: "Backend Development",
    description:
      "Building server-side applications with Node.js, Express.js, MongoDB and REST APIs.",
  },
  {
    number: "03",
    title: "Continuous Learning",
    description:
      "Improving my development skills through practical projects, problem-solving and consistent learning.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#080D18] px-4 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Get to know me
          </p>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#F1F5F9] sm:text-4xl lg:text-5xl">
            About <span className="text-blue-400">Me.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[#A1AFC2]">
            A little about my journey, what I do, and what drives me to
            build better digital experiences.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Profile Photo */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-3 rounded-3xl bg-blue-400/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-blue-400/20 bg-[#111827] p-3">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <Image
                  src="/images/hafizul-profile.png"
                  alt="Hafizul Islam - Full-Stack Web Developer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                  priority
                />
              </div>

              <div className="px-4 py-5">
                <h3 className="text-xl font-bold text-[#F1F5F9]">
                  Hafizul Islam
                </h3>
                <p className="mt-1 text-sm text-blue-400">
                  Full-Stack Web Developer
                </p>
                <p className="mt-2 text-sm text-[#A1AFC2]">
                  Dubai, United Arab Emirates
                </p>
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="flex flex-col gap-5">
            <div className="rounded-3xl border border-white/10 bg-[#111827] p-7 sm:p-9">
              <div className="mb-6 inline-flex rounded-full border border-blue-400/20 bg-blue-400/10 px-4 py-2 text-xs font-semibold tracking-wide text-blue-400">
                MY JOURNEY
              </div>

              <h3 className="mb-5 text-2xl font-bold leading-snug text-[#F1F5F9] sm:text-3xl">
                Turning curiosity into
                <span className="text-blue-400"> real-world projects.</span>
              </h3>

              <div className="space-y-4 text-sm leading-8 text-[#A1AFC2] sm:text-base">
                <p>
                  Hello! I&apos;m Hafizul Islam, a project-focused
                  Full-Stack Web Developer based in Dubai, UAE. I enjoy
                  creating modern, responsive web applications and solving
                  practical problems through technology.
                </p>

                <p>
                  My web development journey has been built around hands-on
                  learning. I work with technologies like React, Next.js,
                  TypeScript, Node.js, Express.js and MongoDB to turn ideas
                  into functional web applications.
                </p>

                <p>
                  My background in hospitality has also helped me develop
                  communication, teamwork and problem-solving skills. I bring
                  that same practical mindset into every project I build.
                </p>
              </div>

              <Link
                href="https://github.com/hafizul1997"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-400 px-6 py-3 text-sm font-semibold text-[#080D18] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-300"
              >
                Explore My GitHub
                <ArrowUpRight size={17} />
              </Link>
            </div>

            {/* Highlights */}
            <div className="grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div
                  key={item.number}
                  className="group rounded-2xl border border-white/10 bg-[#111827] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
                >
                  <span className="text-sm font-semibold tracking-widest text-blue-400">
                    {item.number}
                  </span>

                  <h4 className="mb-3 mt-4 text-base font-semibold text-[#F1F5F9]">
                    {item.title}
                  </h4>

                  <p className="text-xs leading-6 text-[#A1AFC2]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
