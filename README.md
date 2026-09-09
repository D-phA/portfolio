# Portfolio

My personal site: [d-pha.github.io/portfolio](https://d-pha.github.io/portfolio/)

I'm an ECE undergraduate at Carnegie Mellon working at the intersection of
software and hardware. This is where my projects and work live.

Built with React, TypeScript, Vite and Tailwind. Deployed to GitHub Pages by
the workflow in `.github/workflows/deploy.yml` on every push to `main`.

## Running it

```bash
npm install
npm run dev
```

`npm run build` type-checks and produces `dist/`, which is not committed — CI
builds it.

## Layout

- `src/data/content.ts` — every string the site renders
- `src/components/` — one file per section
- `public/media/` — project photos and video
