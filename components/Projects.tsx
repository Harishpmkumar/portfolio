import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-ink-border px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-amber">
          03 · selected work
        </p>

        <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
          Projects built to solve real problems
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
          Application development, full-stack projects, and reusable Drupal
          modules, with their technologies and implementation details.
        </p>

        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.name}
              className="group flex min-w-0 flex-col rounded-xl border border-ink-border bg-ink-surface p-5 transition duration-200 hover:-translate-y-1 hover:border-teal/60 hover:shadow-xl hover:shadow-black/10 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-amber">
                    {project.category}
                  </p>
                  <h3 className="mt-2 break-words font-display text-xl font-semibold text-text sm:text-2xl">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs text-text-faint">{project.tag}</p>
                </div>

                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-ink-border font-mono text-sm text-teal transition-colors group-hover:border-teal/50"
                >
                  {"</>"}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-text-muted">
                {project.description}
              </p>

              <ul className="mt-4 space-y-2">
                {project.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2.5 text-sm leading-relaxed text-text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-ink-border pt-4">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="max-w-full break-words rounded-md border border-ink-border bg-ink px-2.5 py-1.5 font-mono text-[10px] leading-relaxed text-text-muted sm:text-[11px]"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {project.url && (
                <div className="mt-5">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-teal/40 px-3 py-2 text-sm font-medium text-teal transition-colors hover:bg-teal/10"
                  >
                    View project <span aria-hidden="true">↗</span>
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
