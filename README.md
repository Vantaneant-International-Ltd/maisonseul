# Maison Seul

**Singular objects.** A VNTA house.

This repository is the public web presence for Maison Seul. For now it is a
single holding page: the wordmark, one hairline, one line of text.

Maison Seul is a design house, not a fashion label. The earlier garment
direction ("house of absence") is retired.

---

## Stack

- **Framework:** SvelteKit 2 + Svelte 5
- **Bundler:** Vite
- **Output:** Static (`@sveltejs/adapter-static`, `404.html` fallback)
- **Language:** TypeScript
- **Styling:** Bespoke CSS, no Tailwind, no UI kits
- **Font:** Outfit (via `@fontsource`), standing in for Cygre
- **Hosting:** GitHub Pages + custom domain `maisonseul.com`

No backend. Nothing dynamic. Contact is a plain `mailto:`.

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
src/lib/
└── Wordmark.svelte  # MAISON sharp, SEUL out of focus
src/routes/
├── +layout.svelte   # Font, colour tokens, page metadata
├── +layout.ts       # prerender = true
├── +page.svelte     # The holding page
└── +error.svelte    # 404
static/
├── favicon.svg
├── og.png           # Share image, 1200 × 630
├── CNAME            # maisonseul.com
├── robots.txt
└── sitemap.xml
.github/workflows/
└── deploy.yml       # Build + deploy to GitHub Pages on push to main
```

---

## Deploy

Push to `main` → GitHub Actions builds and deploys to GitHub Pages. The custom
domain is served via `static/CNAME`.

---

## Brand

Two colours from the brand book, plus one grey:

| Token        | Value     | Use                  |
| ------------ | --------- | -------------------- |
| `--void`     | `#121619` | Ground ("Unlit")     |
| `--ink`      | `#f2f3f1` | Wordmark and text    |
| `--ink-dim`  | `#a9aeb1` | Small text           |

The wordmark is two weights of one face: MAISON at 400, SEUL at 700 and blurred.
On the holding page SEUL blurs further as the pointer approaches. With reduced
motion, or on touch screens, it stays at its resting blur.

The brand-book typeface is **Cygre**. It is not in this repository because the
font files are licensed. To switch, add the files, replace the `@fontsource/outfit`
imports in `src/routes/+layout.svelte`, and change `--sans`.

No gold, no gradients, no shadows, no outside logo beyond the wordmark.
Maison Seul is part of **VNTA** (Vantanéant International).

Contact: studio@maisonseul.com
