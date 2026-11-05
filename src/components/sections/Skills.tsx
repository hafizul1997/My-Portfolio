
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
      className="relative overflow-hidden bg-(--background) px-4 py-24 text-(--foreground) sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-(--accent)">
            My Technical Expertise
          </p>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl lg:text-5xl">
            Skills & <span className="text-(--accent)">Technologies.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-(--muted)">
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
                className="group rounded-3xl border border-(--border) bg-(--surface) p-6 transition duration-300 hover:-translate-y-1 hover:border-(--accent)/40 sm:p-8"
              >
                <div className="mb-7 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-(--accent)/20 bg-(--accent)/10 text-(--accent) transition duration-300 group-hover:bg-(--accent) group-hover:text-white">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>

                  <span className="text-sm font-semibold tracking-widest text-(--muted)">
                    {group.number}
                  </span>
                </div>

                <h3 className="mb-2 text-xl font-bold text-(--foreground)">
                  {group.title}
                </h3>

                <p className="mb-6 text-sm leading-7 text-(--muted)">
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-(--border) bg-(--surface-secondary) px-3 py-2 text-xs font-medium text-(--foreground) transition duration-200 hover:border-(--accent)/40 hover:bg-(--accent)/10 hover:text-(--accent)"
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
        <div className="mt-8 rounded-2xl border border-(--accent)/15 bg-(--accent)/5 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <Code2
              className="mt-1 shrink-0 text-(--accent)"
              size={22}
            />

            <div>
              <h3 className="font-semibold text-(--foreground)">
                Always Learning, Always Building
              </h3>

              <p className="mt-2 text-sm leading-7 text-(--muted)">
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
