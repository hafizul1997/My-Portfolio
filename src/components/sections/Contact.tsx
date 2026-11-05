
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Code2,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Me",
    description: "For projects, opportunities and collaborations.",
    label: "Send an Email",
    href: "mailto:hafiz164738@gmail.com",
  },
  {
    icon: Code2,
    title: "GitHub",
    description: "Explore my code and development projects.",
    label: "Visit GitHub",
    href: "https://github.com/hafizul1997",
  },
  {
    icon: ArrowUpRight,
    title: "LinkedIn",
    description: "Connect with me professionally.",
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/hafizul-islam-9a86b8360/",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080D18] px-4 py-24 sm:px-6 lg:py-32"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-blue-400">
            Get In Touch
          </p>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-[#F1F5F9] sm:text-4xl lg:text-5xl">
            Let&apos;s Build Something{" "}
            <span className="text-blue-400">Together.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-[#A1AFC2]">
            Have a project idea, an opportunity, or just want to connect?
            I would be happy to hear from you.
          </p>
        </div>

        {/* Main contact card */}
        <div className="rounded-3xl border border-blue-400/20 bg-[#111827] p-7 shadow-2xl shadow-black/20 sm:p-10 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-center">
            {/* Left content */}
            <div>
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-blue-400/20 bg-blue-400/10 text-blue-400">
                <Mail size={26} />
              </div>

              <h3 className="font-heading text-2xl font-bold text-[#F1F5F9] sm:text-3xl">
                Have something in mind?
              </h3>

              <p className="mt-4 max-w-md text-sm leading-8 text-[#A1AFC2]">
                I am continuously learning and building practical web
                applications. Feel free to reach out for professional
                connections, collaborations or development opportunities.
              </p>

              <div className="mt-8 flex items-center gap-3 text-sm text-[#A1AFC2]">
                <MapPin size={18} className="text-blue-400" />
                Dubai, United Arab Emirates
              </div>
            </div>

            {/* Contact methods */}
            <div className="space-y-4">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const isEmail = method.title === "Email Me";

                return (
                  <div
                    key={method.title}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/3 p-5 transition duration-300 hover:border-blue-400/30 hover:bg-blue-400/4"
                  >
                    <div className="flex min-w-0 items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-400/10 text-blue-400">
                        <Icon size={20} />
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-semibold text-[#F1F5F9]">
                          {method.title}
                        </h4>

                        <p className="mt-1 text-xs leading-6 text-[#A1AFC2]">
                          {method.description}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={method.href}
                      target={isEmail ? undefined : "_blank"}
                      rel={isEmail ? undefined : "noopener noreferrer"}
                      aria-label={method.label}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#A1AFC2] transition duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-400 group-hover:text-[#080D18]"
                    >
                      <ArrowUpRight size={18} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
