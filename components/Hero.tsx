"use client";

import { useEffect, useState } from "react";
import { profile, stats } from "@/data/resume";

const bootLines = [
  "$ whoami",
  `> ${profile.name.toLowerCase().replace(/\s/g, "_")}`,
  "$ status --check",
  "> available for opportunities",
];

export default function Hero() {
  const [typed, setTyped] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= bootLines.length) return;
    const currentLine = bootLines[lineIndex];

    if (charIndex <= currentLine.length) {
      const timeout = setTimeout(() => {
        setTyped((prev) => {
          const copy = [...prev];
          copy[lineIndex] = currentLine.slice(0, charIndex);
          return copy;
        });
        setCharIndex((c) => c + 1);
      }, 28);
      return () => clearTimeout(timeout);
    } else {
      const pause = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setCharIndex(0);
      }, 220);
      return () => clearTimeout(pause);
    }
  }, [charIndex, lineIndex]);

  return (
    <section id="top" className="relative overflow-hidden bg-dot-grid px-6 pb-24 pt-20 md:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />

      <div className="relative mx-auto max-w-4xl">
        {/* terminal boot block */}
        <div className="mb-10 w-full max-w-md rounded-lg border border-ink-border bg-ink-surface/80 p-4 font-mono text-xs text-text-muted shadow-2xl shadow-black/40 sm:text-sm">
          <div className="mb-3 flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-text-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-text-faint/40" />
            <span className="h-2.5 w-2.5 rounded-full bg-text-faint/40" />
          </div>
          <div className="min-h-[6rem]">
            {bootLines.map((_, i) => (
              <div key={i} className={typed[i]?.startsWith(">") ? "text-teal" : "text-text-muted"}>
                {typed[i]}
                {i === lineIndex && <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-blink bg-teal align-middle" />}
              </div>
            ))}
          </div>
        </div>

        <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-amber">
          {profile.role}
        </p>
        <h1 className="text-glow font-display text-4xl font-bold leading-[1.05] text-text sm:text-5xl md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-2xl font-mono text-sm text-teal sm:text-base">
          {profile.tagline}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
          {profile.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#export"
            className="rounded-md bg-teal px-5 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:bg-teal/90"
          >
            export_resume()
          </a>
          <a
            href="#contact"
            className="rounded-md border border-ink-border px-5 py-3 font-mono text-sm text-text transition-colors hover:border-teal hover:text-teal"
          >
            get_in_touch()
          </a>
        </div>

        {/* status bar */}
        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-ink-border bg-ink-border sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-surface px-4 py-4">
              <p className="font-display text-xl font-semibold text-text sm:text-2xl">{s.value}</p>
              <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-text-faint">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
