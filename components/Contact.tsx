import { profile, socials } from "@/data/resume";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink-border px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-amber">06 · contact</p>
        <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
          Let's build something.
        </h2>
        <p className="mt-4 max-w-xl text-base text-text-muted">
          Open to new roles and freelance work. The fastest way to reach me is email —
          I usually reply within a day.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="rounded-md border border-ink-border px-5 py-3 font-mono text-sm text-text transition-colors hover:border-teal hover:text-teal"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-ink-border bg-ink-surface px-5 py-4 font-mono text-sm text-text-muted">
          <span className="text-text-faint">{profile.location} ·</span> {profile.email} ·{" "}
          {profile.phone}
        </div>
      </div>
    </section>
  );
}
