import { education, certifications, profile } from "@/data/resume";

export default function About() {
  const focusAreas = [
    {
      title: "Frontend Development",
      description:
        "React, JavaScript, Next.js, Bootstrap, responsive interfaces, and reusable UI components.",
    },
    {
      title: "Backend Development",
      description:
        "PHP, Laravel, Node.js, Express.js, REST APIs, authentication, and application logic.",
    },
    {
      title: "CMS & Application Development",
      description:
        "Drupal custom modules, integrations, reusable functionality, and content-driven applications.",
    },
    {
      title: "Data & Integrations",
      description:
        "MySQL, MariaDB, PostgreSQL, MongoDB, AWS services, and payment gateway integrations.",
    },
  ];

  return (
    <section
      id="about"
      className="border-t border-ink-border px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-amber">
          01 · about
        </p>

        <h2 className="max-w-3xl font-display text-3xl font-bold leading-tight text-text sm:text-4xl">
          Full-stack thinking, backend strength, and user-focused development.
        </h2>

        <div className="mt-8 grid gap-8 md:grid-cols-5 md:gap-10">
          <div className="space-y-4 text-base leading-relaxed text-text-muted md:col-span-3">
            <p>
              I’m a software developer with professional experience building web
              applications, business workflows, APIs, and reusable application
              features. My technical background includes PHP, Laravel, Drupal,
              JavaScript, React, SQL databases, and cloud integrations.
            </p>

            <p>
              I work across different parts of application development, from
              designing backend logic and REST APIs to connecting frontend
              interfaces, managing database operations, and integrating
              third-party services. My professional experience includes
              maintaining production applications, developing custom modules,
              implementing business requirements, and troubleshooting issues.
            </p>

            <p>
              Alongside my professional work, I build full-stack projects using
              React, Next.js, Node.js, Express, and MongoDB. These projects help
              me expand my experience with modern JavaScript development,
              authentication, real-time communication, and end-to-end
              application workflows.
            </p>

            <p>
              I enjoy learning new technologies, solving practical problems, and
              building responsive, maintainable applications that connect a
              useful user experience with reliable backend functionality.
            </p>
          </div>

          <aside className="rounded-xl border border-ink-border bg-ink-surface p-5 md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-wide text-text-faint">
              education
            </p>

            <p className="mt-3 font-display text-lg font-semibold text-text">
              {education.degree}
            </p>

            <p className="mt-1 text-sm leading-relaxed text-text-muted">
              {education.school}
            </p>

            <p className="mt-2 font-mono text-xs text-teal">
              {education.period} · {education.detail}
            </p>

            <div className="mt-6 border-t border-ink-border pt-5">
              <p className="font-mono text-xs uppercase tracking-wide text-text-faint">
                certification
              </p>

              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-text-muted">
                {certifications.map((certification) => (
                  <li key={certification}>{certification}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {focusAreas.map((area) => (
            <article
              key={area.title}
              className="rounded-xl border border-ink-border bg-ink-surface p-5 transition-colors hover:border-teal/50"
            >
              <h3 className="font-display text-lg font-semibold text-text">
                {area.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {area.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
