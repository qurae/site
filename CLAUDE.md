# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

This repo contains a single Next.js app in `website/`. The repo root otherwise just has GitHub Actions workflows (`.github/workflows/`) and an empty `readme.md`. All commands below are run from `website/`.

## Commands

```bash
cd website
npm install       # install dependencies
npm run dev        # start dev server (localhost:3000)
npm run build       # static export via `next build` (output written to website/out, see below)
npm run start       # serve the production build
npm run lint        # next lint — currently BROKEN, see "Known issues"
```

There is no test suite/framework configured in this project.

## Architecture

**Single-page static marketing site.** `website/src/app/page.tsx` renders one page by composing section components in order: `Header`, `Banner`, `OurExpertise`, `WhoWeAre`, `CTA`, `Footer` (all in `website/src/components/`). In-page navigation uses hash anchors (`#expertise`, `#who-we-are`, `#contact`) rather than routes.

**Static export deploy pipeline.** `next.config.mjs` sets `output: "export"` and `distDir: "out"`, so `npm run build` produces a static site in `website/out` rather than a server bundle (images are `unoptimized` for this reason). The GitHub Actions workflows (`.github/workflows/deploy.website.yml` on push to `main` under `website/**`, and `check.build.yml` on PRs) build the site, then `cp -r website/out docs/` at the repo root, and publish `docs/` to GitHub Pages. Don't hand-edit a `docs/` directory if one appears — it's a build artifact copied in CI, not source.

**Import alias gotcha:** `tsconfig.json` maps `@/*` to the `website/` root (not to `src/`), so all internal imports are written as full paths like `@/src/components/header`, `@/src/lib/utils`, `@/src/app/globals.css` — always include the `src/` segment when importing via the alias.

**UI components.** `website/src/components/ui/` holds shadcn/ui-style primitives (style "new-york", configured in `components.json`) plus several bespoke animated components pulled from Aceternity-style registries (`wavy-background.tsx` using `simplex-noise` canvas noise, `wobble-card.tsx`, `vanta.tsx`). `vanta.tsx` loads three.js and vanta.js from CDN via `next/script` at runtime rather than as npm packages — it's client-only (`"use client"`) and initializes/destroys the effect via refs. The `cn()` helper (`clsx` + `tailwind-merge`) in `src/lib/utils.ts` is used throughout for conditional class merging.

**Theming.** `next-themes` `ThemeProvider` wraps the app in `src/app/layout.tsx` (`attribute="class"`, `defaultTheme="system"`), but the `<body>` also hardcodes a dark background (`bg-[#0f172a]`), and most components hardcode dark-mode-oriented colors directly rather than using theme tokens.

**Fonts.** Loaded per-component via `next/font/google` (e.g. `Gabarito` in `header.tsx`) rather than centrally in the root layout.

## Known issues

- `eslint.config.mjs` references `prettier`, `typescriptEslint`, and `nextPlugin` in its `plugins` object without importing them, so `npm run lint` / `npx eslint` currently throws `ReferenceError: prettier is not defined`. Fix by adding the missing imports (`eslint-plugin-prettier`, `@typescript-eslint/eslint-plugin` as `typescriptEslint`, `@next/eslint-plugin-next` as `nextPlugin`) if you need working lint.
- `lint-staged` is a devDependency but there's no lint-staged config or git hook (no `.husky/`) wiring it up — it isn't currently active.
