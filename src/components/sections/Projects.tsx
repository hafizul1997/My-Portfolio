
import Image from "next/image";
import Link from "next/link";

import {
  ArrowUpRight,
  Layers,
  ShoppingBag,
  Code2,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "StudioSpace",
    category: "Full-Stack Web Application",
    description:
      "A studio booking platform where users can explore studio spaces, manage listings and make bookings. Studio owners can manage booking requests through their dashboard.",

    image: "/images/studiospace.jpeg",

    liveUrl: "https://studiospace-client-t65c.vercel.app",

    githubUrl:
      "https://github.com/hafizul1997/studiospace-client",

    icon: Layers,

    highlights: [
      "Studio listings and details",
      "Booking management",
      "Owner dashboard",
      "Authentication",
    ],

    technologies: [
      "Next.js",
      "TypeScript",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "Tailwind CSS",
    ],
  },

  {
    number: "02",
    title: "Bazar Dor",
    category: "Shopping & Price Comparison",
    description:
      "A shopping and product price comparison web application built with Next.js, focusing on a modern and responsive user experience.",

    image: "/images/bazar-dor.jpeg",

    liveUrl: "https://bazar-dor-07.vercel.app",

    githubUrl:
      "https://github.com/hafizul1997/BazarDor-07-Assingment",

    icon: ShoppingBag,

    highlights: [
      "Shopping-focused experience",
      "Product price comparison concept",
      "Responsive user interface",
      "Modern Next.js development",
    ],

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080D18] px-4 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            My Recent Work
          </p>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#F1F5F9] sm:text-4xl lg:text-5xl">
            Featured{" "}
            <span className="text-blue-400">Projects.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[#A1AFC2]">
            A selection of projects where I apply my technical
            knowledge to build practical web applications.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#111827] transition duration-300 hover:-translate-y-1 hover:border-blue-400/30"
              >

                {/* Project Screenshot */}
                <div className="relative aspect-video overflow-hidden border-b border-white/10 bg-[#17243A]">

                  <Image
                    src={project.image}
                    alt={`${project.title} website screenshot`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#080D18]/60 via-transparent to-transparent" />

                  <span className="absolute right-6 top-6 rounded-full border border-white/10 bg-[#080D18]/70 px-3 py-1.5 text-sm font-semibold tracking-widest text-white backdrop-blur-md">
                    {project.number}
                  </span>
                </div>

                {/* Project Information */}
                <div className="p-6 sm:p-8">

                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-1.5 text-xs font-medium text-blue-400">
                      {project.category}
                    </span>

                    <Icon
                      size={21}
                      className="shrink-0 text-blue-400"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-[#F1F5F9] transition group-hover:text-blue-400">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#A1AFC2]">
                    {project.description}
                  </p>

                  {/* Key Features */}
                  <div className="mt-6">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#64748B]">
                      Key Features
                    </h4>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {(project.highlights ?? []).map((highlight) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-2 text-sm text-[#CBD5E1]"
                        >
                          <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mt-7 border-t border-white/10 pt-6">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#64748B]">
                      Technologies Used
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-[#A1AFC2] transition hover:border-blue-400/30 hover:text-blue-400"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="mt-7 flex flex-wrap gap-3">

                    {project.liveUrl ? (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-blue-400 px-5 py-3 text-sm font-semibold text-[#080D18] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-300"
                      >
                        Live Demo
                        <ExternalLink size={16} />
                      </Link>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-white/10 px-5 py-3 text-sm font-semibold text-[#64748B]"
                      >
                        Live Demo Coming Soon
                      </span>
                    )}

                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-[#F1F5F9] transition duration-300 hover:border-blue-400 hover:text-blue-400"
                    >
                      <Code2 size={17} />
                      GitHub
                      <ArrowUpRight size={16} />
                    </Link>

                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* GitHub Profile */}
        <div className="mt-12 text-center">
          <p className="mb-5 text-sm text-[#A1AFC2]">
            Want to explore more of my development work?
          </p>

          <Link
            href="https://github.com/hafizul1997"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 px-6 py-3 text-sm font-semibold text-blue-400 transition duration-300 hover:bg-blue-400 hover:text-[#080D18]"
          >
            Explore My GitHub
            <ArrowUpRight size={17} />
          </Link>
        </div>

      </div>
    </section>
  );
}
