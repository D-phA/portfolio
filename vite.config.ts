import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// NOTE: base is '/' because the site is intended to deploy to a custom root
// domain (daphneavkarogullari.dev). If you ever host under a repo subpath
// instead (e.g. user.github.io/portfolio/), change base to '/portfolio/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
