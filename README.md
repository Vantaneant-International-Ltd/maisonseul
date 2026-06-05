# Maison Seul

**A fashion house of absence.** A VNTA house.

This repository is the public web presence for Maison Seul — currently a single,
quiet **coming-soon** holding page. Pure black, maximal space, one wordmark.

---

## Stack

- **Framework:** SvelteKit 2 + Svelte 5
- **Bundler:** Vite
- **Output:** Static (`@sveltejs/adapter-static`, `404.html` fallback)
- **Language:** TypeScript
- **Styling:** Bespoke CSS — no Tailwind, no UI kits
- **Fonts:** Marcellus + Marcellus SC (via `@fontsource`)
- **Hosting:** GitHub Pages + custom domain `maisonseul.com`

No backend. Nothing dynamic. Interest is registered via a plain `mailto:`.

---

## Getting Started

**Requirements:** Node 22 LTS

```sh
npm install
npm run dev
```

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start local dev server       |
| `npm run build`   | Production build → `build/`  |
| `npm run preview` | Preview the production build |
| `npm run check`   | Svelte type-check            |

---

## Structure

```
src/routes/
├── +layout.svelte   # Fonts + global monochrome tokens
├── +layout.ts       # prerender = true
├── +page.svelte     # The coming-soon holding page
└── +error.svelte    # Styled 404 ("this page is absent")
static/
├── favicon.svg
├── CNAME            # maisonseul.com
├── robots.txt
└── sitemap.xml
.github/workflows/
└── deploy.yml       # Build + deploy to GitHub Pages on push to main
```

---

## Deploy

Push to `main` → GitHub Actions builds and deploys to GitHub Pages. The custom
domain is served via `static/CNAME`. After the first deploy, enable Pages in the
repo settings (Source: **GitHub Actions**) and point the `maisonseul.com` DNS at
GitHub Pages.

---

## Brand

Monochrome only — off-white `#f4f3f0` on a pure-black void. Marcellus carries the
wordmark (single 400 weight, `font-synthesis: none` so it never faux-bolds);
Marcellus SC sets the small-caps labels. No shadows, no gradients, restraint
throughout. Maison Seul is part of **VNTA** (Vantanéant International).

Contact: studio@maisonseul.com
