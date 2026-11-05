
const experiences = [
  {
    number: "01",
    role: "Cook / Chef",
    company: "Eighties Restaurant",
    location: "Mizhar, Dubai, UAE",
    period: "October 2024 – Present",
    type: "Current Role",
    description:
      "Working in a restaurant kitchen, preparing food and supporting daily takeaway and delivery operations.",
    responsibilities: [
      "Food preparation and kitchen operations",
      "Preparing burgers, pasta, pizza and sandwiches",
      "Maintaining food quality and presentation",
      "Supporting online orders and daily operations",
    ],
  },
  {
    number: "02",
    role: "Kitchen Helper",
    company: "French Riviera – Al Qasr",
    location: "Madinat Jumeirah, Dubai, UAE",
    period: "October 2022 – March 2024",
    type: "Hospitality",
    description:
      "Supported kitchen operations in a hospitality environment while working with the kitchen team to maintain food preparation standards.",
    responsibilities: [
      "Assisting chefs with food preparation",
      "Maintaining kitchen cleanliness",
      "Supporting daily kitchen operations",
      "Working collaboratively with kitchen staff",
    ],
  },
  {
    number: "03",
    role: "Waiter",
    company: "V Five Hotel",
    location: "Palm Jumeirah, Dubai, UAE",
    period: "January 2021 – December 2021",
    type: "Hospitality",
    description:
      "Worked in hotel food service, developing customer service, communication and teamwork skills.",
    responsibilities: [
      "Guest service and communication",
      "Taking and handling customer orders",
      "Supporting restaurant service operations",
      "Maintaining a positive guest experience",
    ],
  },
];

const learningJourney = [
  {
    title: "AI-Driven Web Development",
    organization: "Programming Hero",
    description:
      "Learning modern web development through structured lessons and practical coding projects.",
    technologies: "JavaScript · React · Next.js · TypeScript",
  },
  {
    title: "Full-Stack Project Development",
    organization: "Independent Practice",
    description:
      "Building practical applications to improve frontend, backend, database and authentication skills.",
    technologies: "Node.js · Express.js · MongoDB · REST API",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-(--background) px-4 py-24 text-(--foreground) sm:px-6 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-(--accent)">
            My Professional Journey
          </p>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-(--foreground) sm:text-4xl lg:text-5xl">
            Experience &{" "}
            <span className="text-(--accent)">Journey.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-(--muted)">
            My professional background, practical experience
            and continuous journey into web development.
          </p>
        </div>

        {/* Professional Experience */}
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-(--accent)">
              01 / Professional Experience
            </p>

            <h3 className="font-heading text-2xl font-bold text-(--foreground) sm:text-3xl">
              Hospitality Background
            </h3>

            <p className="mt-4 text-sm leading-7 text-(--muted)">
              My hospitality experience has helped me develop
              teamwork, communication, discipline and
              problem-solving skills.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative space-y-6 border-l border-(--accent)/20 pl-6 sm:pl-8">
            {experiences.map((experience) => (
              <article
                key={experience.number}
                className="relative rounded-3xl border border-(--border) bg-(--surface) p-6 transition duration-300 hover:border-(--accent)/40 sm:p-8"
              >
                {/* Timeline dot */}
                <span className="absolute -left-7.75 top-8 h-3 w-3 rounded-full border-2 border-(--accent) bg-(--background) sm:-left-9.75" />

                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-(--accent)/20 bg-(--accent)/10 px-3 py-1.5 text-xs font-medium text-(--accent)">
                    {experience.type}
                  </span>

                  <span className="text-xs font-semibold text-(--muted)">
                    {experience.number}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-(--foreground)">
                  {experience.role}
                </h4>

                <p className="mt-2 font-semibold text-(--accent)">
                  {experience.company}
                </p>

                <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-(--muted)">
                  <span>{experience.period}</span>
                  <span>{experience.location}</span>
                </div>

                <p className="mt-5 text-sm leading-7 text-(--muted)">
                  {experience.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {experience.responsibilities.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-(--foreground)"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* Development Journey */}
        <div className="mt-24 border-t border-(--border) pt-16">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-(--accent)">
              02 / Web Development
            </p>

            <h3 className="font-heading text-2xl font-bold text-(--foreground) sm:text-3xl">
              My Learning Journey
            </h3>

            <p className="mt-4 text-sm leading-7 text-(--muted)">
              Alongside my professional career, I am developing
              my technical skills through structured learning
              and hands-on projects.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {learningJourney.map((item, index) => (
              <article
                key={item.title}
                className="rounded-3xl border border-(--border) bg-(--surface) p-6 transition duration-300 hover:border-(--accent)/40 sm:p-8"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-(--accent)/20 bg-(--accent)/10 font-heading font-bold text-(--accent)">
                  0{index + 1}
                </div>

                <h4 className="text-xl font-bold text-(--foreground)">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm font-medium text-(--accent)">
                  {item.organization}
                </p>

                <p className="mt-4 text-sm leading-7 text-(--muted)">
                  {item.description}
                </p>

                <div className="mt-6 border-t border-(--border) pt-5">
                  <p className="text-xs font-semibold uppercase tracking-wider text-(--muted)">
                    Learning Focus
                  </p>

                  <p className="mt-3 text-sm leading-6 text-(--foreground)">
                    {item.technologies}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
