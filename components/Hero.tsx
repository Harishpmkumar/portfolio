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
        setCharIndex((current) => current + 1);
      }, 28);

      return () => clearTimeout(timeout);
    }

    const pause = setTimeout(() => {
      setLineIndex((current) => current + 1);
      setCharIndex(0);
    }, 220);

    return () => clearTimeout(pause);
  }, [charIndex, lineIndex]);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-dot-grid px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:pb-24 lg:pt-20"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-ink via-ink/70 to-ink" />

      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
        {/* Left: introduction */}
        <div className="min-w-0">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-amber sm:text-sm">
            {profile.role}
          </p>

          <h1 className="text-glow break-words font-display text-4xl font-bold leading-[1.08] text-text sm:text-5xl md:text-6xl xl:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-5 max-w-2xl font-mono text-sm leading-relaxed text-teal sm:text-base">
            {profile.tagline}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#export"
              className="rounded-md bg-teal px-5 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:bg-teal/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            >
              export_resume()
            </a>

            <a
              href="#contact"
              className="rounded-md border border-ink-border px-5 py-3 font-mono text-sm text-text transition-colors hover:border-teal hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
            >
              get_in_touch()
            </a>
          </div>

          <p className="mt-6 flex items-center gap-2 font-mono text-xs text-text-faint">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            Based in {profile.location}
          </p>
        </div>

        {/* Right: terminal and stats */}
        <div className="min-w-0 space-y-5">
          <div className="rounded-xl border border-ink-border bg-ink-surface/90 p-4 font-mono text-xs text-text-muted shadow-2xl shadow-black/20 sm:p-5 sm:text-sm">
            <div className="mb-4 flex items-center justify-between border-b border-ink-border pb-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>

              <span className="text-[10px] uppercase tracking-widest text-text-faint sm:text-xs">
                developer_terminal
              </span>
            </div>

            <div className="min-h-[7rem] space-y-2">
              {bootLines.map((_, index) => (
                <div
                  key={index}
                  className={
                    typed[index]?.startsWith(">")
                      ? "break-words text-teal"
                      : "break-words text-text-muted"
                  }
                >
                  {typed[index] ?? ""}
                  {index === lineIndex && lineIndex < bootLines.length && (
                    <span className="ml-1 inline-block h-3.5 w-1.5 animate-blink bg-teal align-middle" />
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 border-t border-ink-border pt-4">
              <p className="text-text-faint">{"// building useful things"}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Frontend", "Backend", "APIs", "Databases", "Cloud"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded border border-ink-border px-2 py-1 text-[10px] text-text-muted sm:text-xs"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="min-w-0 rounded-xl border border-ink-border bg-ink-surface/80 p-4 transition-colors hover:border-teal/50 sm:p-5"
              >
                <p className="break-words font-display text-xl font-semibold text-text sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-2 break-words font-mono text-[10px] uppercase tracking-wide text-text-faint sm:text-xs">
                  {stat.label.replace(/_/g, " ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
