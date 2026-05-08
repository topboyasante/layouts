# Layouts

An open-source gallery of handcrafted dashboard layouts built with React, TypeScript, and Vite.

The app lets you browse reusable dashboard patterns, open a live preview, and inspect the source files behind each layout. Layout metadata and source code are discovered automatically from the filesystem, which makes the project easy to extend.

## What this project does

- Shows a gallery of dashboard layouts on the home page
- Opens each layout in a dedicated preview page
- Displays live React previews for supported layouts
- Lets you browse source files by framework in the code viewer
- Discovers layouts from `src/layouts/*` using `import.meta.glob`

## Current layout library

- `Issue Tracker`
- `Accounting`
- `Git Dashboard`
- `Docs`

Framework support varies by layout. Some layouts currently include only React, while others also ship Svelte, Vue, and Angular source files.

## Tech stack

- React 19
- TypeScript
- Vite
- React Router
- Tailwind CSS v4
- Shiki for syntax highlighting
- Vitest for unit tests

## Getting started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run tests:

```bash
npm run test
```

Run linting:

```bash
npm run lint
```

## Project structure

```text
src/
  components/      Shared UI such as cards, code viewer, and preview frame
  layouts/         Layout definitions grouped by layout slug and framework
  lib/             Layout discovery, highlighting, and shared utilities
  routes/          Gallery and layout preview routes
```

## How layouts work

Each layout lives in its own folder under `src/layouts/<slug>/`.

- `meta.ts` defines the name, description, category, and supported frameworks
- `react/index.tsx` is used for the live preview route when available
- framework-specific source files are loaded into the code viewer automatically

The gallery and preview pages read this structure through glob imports in `src/lib/layouts.ts`, so adding a new layout mostly means adding files in the right place.

## Adding a new layout

1. Create a new folder in `src/layouts/<your-layout-slug>/`
2. Add a `meta.ts` file
3. Add a `react/index.tsx` preview if you want a live preview
4. Add any framework source files you want exposed in the code viewer

## Scripts

- `npm run dev` - start the Vite dev server
- `npm run build` - type-check and build the app
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint
- `npm run test` - run the Vitest suite once
- `npm run test:watch` - run Vitest in watch mode
