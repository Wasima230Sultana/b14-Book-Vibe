# AGENTS.md

## Project

`book-vibe` — a single Next.js 16 (App Router) app; not a monorepo. Book catalog UI: browse, details, wishlist, and read-list.

- Routes live in `src/app/`: `/`, `/bookList`, `/books`, `/books/[bookId]`, `/listedBooks`, `/readBooks`.
- Shared UI in `src/app/Components/`; the `IBook` interface is in `src/app/Type/type.tsx`.
- Wishlist/read-list state lives in `src/app/context/BookContext.tsx` (React context, in-memory only — nothing persists across reloads).
- Path alias: `@/*` → `src/*`. Use it instead of relative `../` chains for cross-directory imports.

## Commands

- Dev server: `npm run dev` → http://localhost:3000
- Lint: `npm run lint` (ESLint 9 flat config; no Prettier/formatter configured)
- Typecheck: `npx tsc --noEmit` (no npm script exists)
- **No test suite.** Verify changes with: `npm run lint` → `npx tsc --noEmit` → `npm run build`.

## Data / env gotchas

- All book data is fetched in server components via `` fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`) `` (see `src/app/Components/homePage/Books.tsx`, `src/app/bookList/page.tsx`, `src/app/books/[bookId]/page.tsx`). `.env` sets it to `http://localhost:3000` — the app fetches its own `public/booksData.json`.
- `.env` is gitignored. On a fresh clone every page **silently renders empty** because fetch failures are swallowed (`catch { return [] }`). Create `.env` with `NEXT_PUBLIC_SERVER_BASE_URL=http://localhost:3000` before running.
- `next.config.ts` allows `next/image` from any https hostname (`remotePatterns: hostname '**'`), so cover URLs from arbitrary hosts work without config changes.

## Conventions

- Tailwind CSS v4 + daisyUI 5 are configured declaratively in `src/app/globals.css` (`@import "tailwindcss"; @plugin "daisyui";`). There is **no** `tailwind.config.js` — add customization in that CSS file.
- Dynamic route `params` is a `Promise` in this Next version — `await params` in the page component (see `src/app/books/[bookId]/page.tsx`).
- Client components opt in with `'use client'` and consume `BookContext`; toasts via `react-toastify` (`ToastContainer` mounted in the root layout), charts via `recharts` (`src/app/readBooks/page.tsx`).
- `CLAUDE.md` only imports this file — keep guidance here, not there.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
