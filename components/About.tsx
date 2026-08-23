import { education, certifications, profile } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="border-t border-ink-border px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-amber">01 · about</p>
        <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
          Backend-leaning, full-stack when it counts.
        </h2>

        <div className="mt-8 grid gap-10 md:grid-cols-5">
          <p className="text-base leading-relaxed text-text-muted md:col-span-3">
            I work mostly in PHP — Laravel for product builds, Drupal for content-heavy
            platforms — and reach into React when a project needs a sharper front end.
            Most of what I ship deals with structured data in one form or another:
            billing records, exportable reports, payment reconciliation. I like the parts
            of the job that don't show up in a screenshot — clean schemas, predictable
            APIs, and queries that don't fall over under load.
            <br />
            <br />
            Based in {profile.location}, currently building at Hapus Infotech.
          </p>

          <div className="rounded-lg border border-ink-border bg-ink-surface p-5 md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-wide text-text-faint">education</p>
            <p className="mt-2 font-display text-lg font-semibold text-text">{education.degree}</p>
            <p className="mt-1 text-sm text-text-muted">{education.school}</p>
            <p className="mt-1 font-mono text-xs text-teal">{education.period} · {education.detail}</p>

            <div className="mt-5 border-t border-ink-border pt-5">
              <p className="font-mono text-xs uppercase tracking-wide text-text-faint">certifications</p>
              <ul className="mt-2 space-y-1.5 text-sm text-text-muted">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
