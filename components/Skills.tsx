import { skills } from "@/data/resume";

export default function Skills() {
  const groups = Object.entries(skills);

  return (
    <section id="skills" className="border-t border-ink-border px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-amber">04 · skills</p>
        <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">Stack, by table</h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(([group, items]) => (
            <div key={group} className="overflow-hidden rounded-lg border border-ink-border">
              <div className="flex items-center justify-between bg-ink-alt px-4 py-2.5">
                <span className="font-mono text-xs uppercase tracking-wide text-amber">{group}</span>
                <span className="font-mono text-[10px] text-text-faint">{items.length}</span>
              </div>
              <ul className="divide-y divide-ink-border bg-ink-surface">
                {items.map((item) => (
                  <li key={item} className="px-4 py-2.5 text-sm text-text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
