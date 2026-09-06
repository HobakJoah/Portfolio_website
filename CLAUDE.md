# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository layout

The actual application lives in `react/` — a Vite + React app. The repo root also has its own `package.json`/`package-lock.json` and `node_modules`, but these are not a build target; don't confuse root-level dependency installs with the app's. Always run app commands from inside `react/`.

## Working agreement

Ask for permission before executing any command or making changes — don't run builds, installs, lints, or edits unprompted.

## Commands

All commands run from the `react/` directory:

```
npm run dev       # start Vite dev server with HMR
npm run build     # production build
npm run lint      # ESLint over the whole project
npm run preview   # preview the production build locally
```

There is no test suite configured.

## Architecture

This is a single-page personal portfolio site.

- **Boot gate**: `App.jsx` renders a `BootSequence` component first (a fake terminal boot animation) and only mounts the `BrowserRouter`/routes once `BootSequence` calls `onComplete`. Any new top-level UI needs to be reachable after this gate, not before it.
- **Routing**: `react-router-dom` v7, nested under a single `Layout` route (`App.jsx`). `Layout.jsx` renders the persistent header/nav/footer chrome and an `<Outlet />` for the active page; `pages/Home.jsx` and `pages/Projects.jsx` are the current routed pages. New pages get added as sibling `<Route>` entries under the `Layout` route and a corresponding nav entry in `Layout.jsx`'s `navLinks` array.
- **Styling**: Tailwind CSS v4, wired in via the `@tailwindcss/vite` plugin (`vite.config.js`) rather than a `tailwind.config.js`. Theme customization (fonts, the `animate-fade-in` keyframes used on every page/route transition) lives in the `@theme` block in `src/index.css`. The site is dark-themed and monospace throughout (`font-mono`, `bg-black`).
- `src/App.css` is unused leftover boilerplate from the Vite template (not imported anywhere) — don't add new styles there.
