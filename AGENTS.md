# Repository Guidelines

## Project Overview

Move Muscle Therapy is a Next.js 15 (App Router) marketing site for a physiotherapy practice. It supports two locales — English (`en`) and Serbian (`sr`) — via `next-intl`.

## Project Structure & Module Organization

- **`app/[locale]/`** — All routes are locale-scoped. The `[locale]` segment is resolved by `next-intl` middleware defined in `i18n/routing.ts`.
- **`components/layout/`** — `Header.tsx` and `Footer.tsx` (global shell).
- **`components/sections/`** — One file per home-page section (`Hero`, `About`, `Services`, etc.).
- **`components/ui/`** — Reusable leaf components (`ThemeToggle`, `LanguageSwitcher`, etc.).
- **`lib/data/`** — Static data arrays (services, testimonials, certificates). Not fetched from an API.
- **`messages/en.json` / `messages/sr.json`** — All user-visible strings. Every new string needs a key in both files.
- **`i18n/navigation.ts`** — Re-exports locale-aware `Link`, `redirect`, `useRouter`, etc. Use these instead of Next.js built-ins.

## Build, Test, and Development Commands

```bash
npm run dev       # Start dev server (Turbopack)
npm run build     # Production build
npm run start     # Serve production build
npm run lint      # ESLint
```

No automated test suite is configured.

## Coding Style & Naming Conventions

- **TypeScript** strict mode (`tsconfig.json`).
- **Tailwind CSS** for all styling; avoid inline styles.
- **ESLint** preset: `next/core-web-vitals` + `next/typescript`. Run `npm run lint` before committing.
- **Path alias**: `@/*` resolves to the project root — use it for all imports.
- **Animations**: `framer-motion`. **Icons**: `lucide-react`.
- **Dark/light theme**: managed by `next-themes`; use Tailwind `dark:` variants.
- Component files use PascalCase; utility/data files use camelCase.

## Deployment

Deployed on **Netlify** via `@netlify/plugin-nextjs`. Configuration lives in `netlify.toml`. Serbian (`sr`) is the default locale.
