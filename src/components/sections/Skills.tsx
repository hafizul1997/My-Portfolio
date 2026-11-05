
import {
  Code2,
  PanelsTopLeft,
  Server,
  Database,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend Development",
    description: "Creating responsive and modern user interfaces.",
    icon: PanelsTopLeft,
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    number: "02",
    title: "Backend Development",
    description: "Building APIs and server-side applications.",
    icon: Server,
    skills: [
      "Node.js",
      "Express.js",
      "REST API",
      "Authentication",
      "JWT Fundamentals",
    ],
  },
  {
    number: "03",
    title: "Database",
    description: "Working with data storage and database operations.",
    icon: Database,
    skills: ["MongoDB", "CRUD Operations", "MongoDB Atlas"],
  },
  {
    number: "04",
    title: "Tools & Workflow",
    description: "Tools I use to develop and manage projects.",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "npm",
      "Postman",
      "Vercel",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080D18] px-4 py-24 sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            My Technical Expertise
          </p>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#F1F5F9] sm:text-4xl lg:text-5xl">
            Skills & <span className="text-blue-400">Technologies.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-[#A1AFC2]">
            Technologies and tools I use while learning, developing and
            building practical web applications.
          </p>
        </div>

        {/* Skill cards */}
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.number}
                className="group rounded-3xl border border-white/10 bg-[#111827] p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/30 sm:p-8"
              >
                <div className="mb-7 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-400 transition duration-300 group-hover:bg-blue-400 group-hover:text-[#080D18]">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-[#64748B]">
                    {group.number}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-[#F1F5F9]">
                  {group.title}
                </h3>

                <p className="mb-6 text-sm leading-7 text-[#A1AFC2]">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-[#CBD5E1] transition duration-200 hover:border-blue-400/30 hover:bg-blue-400/10 hover:text-blue-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-8 rounded-2xl border border-blue-400/10 bg-blue-400/5 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <Code2 className="mt-1 shrink-0 text-blue-400" size={22} />

            <div>
              <h3 className="font-semibold text-[#F1F5F9]">
                Always Learning, Always Building
              </h3>

              <p className="mt-2 text-sm leading-7 text-[#A1AFC2]">
                I continuously improve my technical knowledge through
                hands-on projects and practical development experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
