import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-ink-border px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-amber">03 · projects</p>
        <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">Things I've shipped</h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group flex flex-col rounded-lg border border-ink-border bg-ink-surface p-6 transition-colors hover:border-teal/50"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-text-faint">{p.tag}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-text">{p.name}</h3>
                </div>
                <span className="font-mono text-xs text-teal opacity-0 transition-opacity group-hover:opacity-100">
                  {"//"}
                </span>
              </div>

              <p className="text-sm leading-relaxed text-text-muted">{p.description}</p>

              <ul className="mt-4 space-y-2">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm text-text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
                    {pt}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-ink-border pt-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded border border-ink-border bg-ink px-2 py-1 font-mono text-[11px] text-text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
