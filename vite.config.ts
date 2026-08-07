import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// NOTE: base MUST match how the site is actually served. It currently
// deploys to GitHub Pages under the repo subpath
// (https://d-pha.github.io/portfolio/), so base is '/portfolio/'. Without
// this, the built HTML points assets at '/assets/...' at the domain root and
// they 404 (blank page). If you later move to a custom root domain
// (e.g. daphneavkarogullari.dev with a CNAME), change base back to '/'.
export default defineConfig({
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
