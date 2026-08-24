# MEA Corporate Membership

Landing page for The Middle East Association corporate membership, built with **Vue 3 + Vite**.

## Development

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Structure

- `index.html` — Vite entry, loads fonts and mounts the app
- `src/main.js` — bootstraps the Vue app
- `src/App.vue` — the full single-page layout (nav, hero, about, events, benefits, join, footer)
- `src/style.css` — global styles and design tokens
- `public/mea-logo.png` — MEA logo

## Deploy

Any static host works. Build with `npm run build` and serve the `dist/` folder
(e.g. Vercel, Netlify, GitHub Pages, or any static file server).
