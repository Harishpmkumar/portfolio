"use client";

import { useState } from "react";
import { profile } from "@/data/resume";

const steps = [
  "$ export --format=pdf",
  "> resolving resume data...",
  "> [ok] name & role",
  "> [ok] contact info",
  "> [ok] work experience",
  "> [ok] key projects",
  "> [ok] technical skills",
  "> [ok] education",
  "> compiling document...",
  "> done ✓",
];

export default function ExportWidget() {
  const [log, setLog] = useState<string[]>([]);
  const [running, setRunning] = useState(false);

  const runExport = async () => {
    if (running) return;
    setRunning(true);
    setLog([]);

    for (const line of steps) {
      await new Promise((r) => setTimeout(r, 220));
      setLog((prev) => [...prev, line]);
    }

    // trigger the real download
    const link = document.createElement("a");
    link.href = profile.resumeFile;
    link.download = `${profile.name.replace(/\s/g, "_")}_Resume.pdf`;
    link.click();

    setRunning(false);
  };

  return (
    <section id="export" className="border-t border-ink-border px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-amber">05 · export</p>
        <h2 className="font-display text-3xl font-bold text-text sm:text-4xl">
          Export my resume
        </h2>
        <p className="mt-3 max-w-xl text-sm text-text-muted">
          Same idea as the Drupal module I built at work — just simplified down
          to one click.
        </p>

        <div className="mt-10 grid gap-6 overflow-hidden rounded-lg border border-ink-border md:grid-cols-2">
          {/* control */}
          <div className="flex flex-col justify-between bg-ink-surface p-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-wide text-text-faint">format</p>
              <div className="mt-3">
                <span className="inline-block rounded border border-teal bg-teal/10 px-3 py-1.5 font-mono text-xs text-teal">
                  PDF
                </span>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-text-muted">
                Includes name, contact info, experience, projects, skills, and
                education — the full resume, ready to download.
              </p>
            </div>

            <button
              onClick={runExport}
              disabled={running}
              className="mt-7 w-full rounded-md bg-teal px-5 py-3 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 hover:bg-teal/90 disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {running ? "exporting..." : "run export →"}
            </button>
          </div>

          {/* terminal output */}
          <div className="flex flex-col justify-between bg-ink p-6 font-mono text-xs sm:text-sm">
            <div className="min-h-[10rem] space-y-1.5">
              {log.length === 0 && (
                <p className="text-text-faint">// output will appear here</p>
              )}
              {log.map((line, i) => (
                <p
                  key={i}
                  className={line.startsWith(">") ? "text-teal" : "text-text-muted"}
                >
                  {line}
                </p>
              ))}
            </div>
            <p className="mt-4 text-[11px] text-text-faint">
              downloads /public/resume.pdf on completion
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}