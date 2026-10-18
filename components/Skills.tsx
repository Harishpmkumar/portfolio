import { skills } from "@/data/resume";

export default function Skills() {
  const groups = Object.entries(skills);

  return (
    <section
      id="skills"
      className="border-t border-ink-border px-4 py-16 sm:px-6 sm:py-20"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-amber">
          04 · technical skills
        </p>

        <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
          Tools I work with
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
          Technologies grouped by area to make my professional stack and
          full-stack project experience easy to scan.
        </p>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(([group, items]) => (
            <article
              key={group}
              className="overflow-hidden rounded-xl border border-ink-border bg-ink-surface"
            >
              <div className="flex items-center justify-between gap-3 border-b border-ink-border bg-ink-alt px-4 py-3">
                <h3 className="font-mono text-xs font-semibold uppercase tracking-wide text-amber">
                  {group}
                </h3>
                <span className="rounded-full border border-ink-border px-2 py-0.5 font-mono text-[10px] text-text-faint">
                  {items.length}
                </span>
              </div>

              <ul className="flex flex-wrap gap-2 p-4">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-ink-border bg-ink px-2.5 py-1.5 text-xs leading-relaxed text-text-muted transition-colors hover:border-teal/50 hover:text-text"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
