import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-ink-border px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 font-mono text-xs text-text-faint sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with Next.js.
        </p>
        <p>designed &amp; coded from Coimbatore</p>
      </div>
    </footer>
  );
}
