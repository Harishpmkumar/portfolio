import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-ink-border px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-amber">
          02 · experience
        </p>

        <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
          Professional experience
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
          Building, integrating, and maintaining web applications across
          frontend interfaces, backend services, databases, and external
          systems.
        </p>

        <div className="mt-10 space-y-5">
          {experience.map((job) => (
            <article
              key={`${job.company}-${job.period}`}
              className="rounded-xl border border-ink-border bg-ink-surface p-5 sm:p-7"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-display text-xl font-semibold text-text">
                      {job.role}
                    </h3>

                    {job.status === "current" && (
                      <span className="rounded-full border border-teal/40 bg-teal/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-teal">
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-1 font-medium text-teal">{job.company}</p>
                  <p className="mt-1 text-sm text-text-faint">{job.location}</p>
                </div>

                <span className="shrink-0 rounded-md border border-ink-border px-3 py-2 font-mono text-xs text-text-muted">
                  {job.period}
                </span>
              </div>

              <div className="mt-6">
                <p className="mb-3 font-mono text-xs uppercase tracking-wide text-text-faint">
                  Responsibilities & contributions
                </p>

                <ul className="grid gap-3 sm:grid-cols-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-text-muted"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {job.status === "current" && (
                <div className="mt-6 border-t border-ink-border pt-5">
                  <p className="mb-3 font-mono text-xs uppercase tracking-wide text-text-faint">
                    Technology exposure
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "PHP",
                      "Laravel",
                      "Drupal 10/11",
                      "JavaScript",
                      "React",
                      "REST APIs",
                      "MySQL",
                      "MariaDB",
                      "AWS S3",
                      "AWS IAM",
                      "Git",
                    ].map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-ink-border bg-ink px-2.5 py-1.5 font-mono text-[11px] text-text-muted"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
