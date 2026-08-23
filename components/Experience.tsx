import { experience } from "@/data/resume";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink-border px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-amber">02 · experience</p>
        <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">Work log</h2>

        <div className="mt-12 space-y-0">
          {experience.map((job, i) => (
            <div key={job.company} className="relative pb-12 pl-8 last:pb-0">
              {/* timeline rail */}
              {i !== experience.length - 1 && (
                <span className="absolute left-[7px] top-4 h-full w-px bg-ink-border" />
              )}
              <span
                className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-2 ${
                  job.status === "current"
                    ? "border-teal bg-ink shadow-[0_0_0_4px_rgba(79,216,196,0.15)]"
                    : "border-ink-border bg-ink-surface"
                }`}
              />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold text-text">{job.role}</h3>
                <span className="font-mono text-xs text-text-faint">{job.period}</span>
              </div>
              <p className="mt-0.5 font-mono text-sm text-teal">
                {job.company} <span className="text-text-faint">· {job.location}</span>
              </p>

              <ul className="mt-4 space-y-2">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-text-faint" />
                    {pt}
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
