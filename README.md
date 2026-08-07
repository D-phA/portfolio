# Daphne Avkarogullari - Portfolio

A single-page personal developer portfolio for Daphne Avkarogullari: the one
public URL that routes to her GitHub, LinkedIn, resume, and project work. Built
as a standalone project (separate from any private tooling).

Sections: Hero, About / Education, Experience (Cisco, Amazon), Projects (Dunes
Tower Defense featured, plus FanBuddy Robot), Skills, and a Contact footer.

## Tech stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS v4 (via `@tailwindcss/vite`)

## Run it locally

Node is required (installed via Homebrew here). From this directory:

```bash
npm install
npm run dev
```

Then open the printed local URL (typically http://localhost:5173).

## Build

```bash
npm run build      # type-checks (tsc -b) then builds to dist/
npm run preview    # serve the production build locally
npm run lint       # oxlint
```

The production build is emitted to `dist/`. The build must succeed with zero
TypeScript errors.

## Placeholders to fill in (search the code for `TODO`)

All copy lives in one file: **`src/data/content.ts`**. Fill these in there:

1. **`LINKEDIN_URL`** - the LinkedIn URL is pre-filled from the resume files;
   verify it points to the correct profile.
2. **`RESUME_URL`** - currently `"#"`. Host the resume PDF (for example, drop
   `Daphne_Avkarogullari_Resume.pdf` into `public/` and set
   `RESUME_URL = "/Daphne_Avkarogullari_Resume.pdf"`). The Resume button in the
   hero points here.
3. **Project media** - the Dunes and FanBuddy cards render dashed placeholder
   tiles until real assets exist. Add photos/video to `public/media/` and set
   each media entry's `src` (for example `"/media/dunes-1.jpg"`) with a good
   `alt` and `caption`. Empty `src` keeps the placeholder tile.
4. **Dunes repo link** - `repoUrl` is set to
   `https://github.com/D-phA/DunesTowerDefense` as a placeholder. Confirm this
   link. The original hackathon repo is owned by a teammate and commit
   attribution is unresolved; point this at Daphne's own attributed
   fork/mirror (crediting the teammate) or the canonical repo once decided.

## Deployment (NOT yet deployed)

This site is designed to deploy later to GitHub Pages at her root domain
**daphneavkarogullari.dev**. `vite.config.ts` sets `base: '/'` for a custom
root domain. If you ever host it under a repo subpath instead
(`username.github.io/portfolio/`), change `base` to `'/portfolio/'`.

It has NOT been deployed and no GitHub repo has been created yet. The
orchestrator and Daphne review before it goes live.

## Accessibility and motion

- Semantic HTML, keyboard-navigable, skip-to-content link, visible focus rings.
- Alt text / ARIA labels on all icons and media.
- All scroll and hover animations respect `prefers-reduced-motion`.
