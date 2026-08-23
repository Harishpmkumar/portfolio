# Harishkumar M — Portfolio

A Next.js 14 (App Router) + TypeScript + Tailwind CSS portfolio, styled around
the developer's own Drupal Data Export module — the "export resume" section
is an interactive widget you actually click through.

Fully responsive (mobile → desktop), keyboard-accessible, and respects
`prefers-reduced-motion`.

## 1. Before you start

You need **Node.js 18.18+** installed. Check with:

```bash
node -v
```

If you don't have it, install it from https://nodejs.org (LTS version).

## 2. Install dependencies

Unzip the project, open a terminal in the project folder, then run:

```bash
npm install
```

## 3. Add your resume PDF

The "Export resume" button downloads a real file. Put your resume PDF at:

```
public/resume.pdf
```

(any filename works — just update `resumeFile` in `data/resume.ts` to match)

## 4. Personalize your content

Everything text-based lives in **one file**: `data/resume.ts`.
Edit your name, summary, experience, projects, skills, and social links there —
every section on the page reads from it, so you only edit content in one place.

Also update these two placeholder links in `data/resume.ts` under `socials`:

```ts
{ label: "GitHub", href: "https://github.com/your-username" },
{ label: "LinkedIn", href: "https://linkedin.com/in/your-profile" },
```

## 5. Run it locally

```bash
npm run dev
```

Open http://localhost:3000 — the page hot-reloads as you edit.

Check responsiveness with your browser's device toolbar (Chrome DevTools →
Toggle device toolbar, or `Cmd/Ctrl + Shift + M`). The layout has explicit
breakpoints for mobile, tablet, and desktop.

## 6. Build for production (optional, to test before deploying)

```bash
npm run build
```

This generates a static export in the `out/` folder (configured via
`output: "export"` in `next.config.mjs`) — exactly what Netlify will serve.

## 7. Push to GitHub

Netlify deploys best from a Git repo (auto-redeploys on every push).

```bash
git init
git add .
git commit -m "Initial portfolio"
```

Create a new empty repo on GitHub, then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

## 8. Deploy to Netlify

**Option A — Netlify dashboard (recommended, no CLI needed):**

1. Go to https://app.netlify.com and sign in (GitHub login is easiest).
2. Click **"Add new site" → "Import an existing project"**.
3. Choose **GitHub** and select your `portfolio` repo.
4. Netlify will read `netlify.toml` automatically. Confirm these build
   settings (should be pre-filled):
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
5. Click **Deploy site**.
6. Wait for the build to finish — you'll get a live URL like
   `random-name-123.netlify.app`.
7. (Optional) Go to **Site settings → Domain management** to set a custom
   subdomain (e.g. `harishkumar-m.netlify.app`) or connect your own domain.

**Option B — Netlify CLI:**

```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

Follow the prompts — when asked for build command use `npm run build` and
publish directory `out`.

## 9. Every future update

Once connected to GitHub, Netlify redeploys automatically on every push:

```bash
git add .
git commit -m "Update content"
git push
```

No manual redeploy needed.

## Project structure

```
portfolio/
├── app/
│   ├── layout.tsx        # fonts, metadata
│   ├── page.tsx          # assembles all sections
│   └── globals.css       # base styles, tokens
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   ├── ExportWidget.tsx  # the signature interactive piece
│   ├── Contact.tsx
│   └── Footer.tsx
├── data/
│   └── resume.ts         # ← all your content lives here
├── public/
│   └── resume.pdf        # ← add your real resume here
├── netlify.toml           # Netlify build config
├── next.config.mjs        # static export config
└── tailwind.config.ts     # design tokens (colors, fonts, animation)
```

## Design notes

- **Palette:** deep ink navy (`#0E1620`) base, teal accent (`#4FD8C4`) for
  interactive/success states, amber (`#F2B84D`) for section labels —
  deliberately not the generic cream/terracotta or pure-black/neon-green
  combos you see everywhere.
- **Type:** Space Grotesk for headlines, Inter for body copy, JetBrains Mono
  for labels, nav, and terminal-styled elements — ties into the
  data/export theme.
- **Signature element:** the Export Resume widget in `ExportWidget.tsx`
  mirrors the real Drupal module described in the Projects section —
  pick fields, pick a format, run the export, get a real PDF.

## Common tweaks

- **Change accent colors:** edit `teal` / `amber` values in
  `tailwind.config.ts`.
- **Add a project:** add an object to the `projects` array in
  `data/resume.ts`.
- **Add a new section:** create a component in `components/`, then import
  and place it in `app/page.tsx`.
