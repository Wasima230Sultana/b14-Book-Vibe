# Book Vibe

A book catalog web app built with the Next.js App Router. Browse books, view details, and track what you've read and what you want to read.

## Features

- **Home** (`/`) — hero banner plus a featured grid of 6 books
- **All Books** (`/bookList`) — full book grid; each card links to its details page
- **Book Details** (`/books/[bookId]`) — cover, rating, review, tags, and publisher info, with **Read List** and **Wishlist** buttons
- **Listed Books** (`/listedBooks`) — tabbed view of your wishlist and read list, sortable by rating, published year, or page count
- **Read Books** (`/readBooks`) — bar chart of your read books (pages per book) rendered with Recharts
- Toast notifications when adding books to the read list or wishlist

Wishlist and read-list state is held in React context (`src/app/context/BookContext.tsx`) and is **in-memory only** — it resets on page reload.

## Tech Stack

- [Next.js 16](https://nextjs.org) (App Router, React Server Components) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) + [daisyUI 5](https://daisyui.com) (configured declaratively in `src/app/globals.css` — there is no `tailwind.config.js`)
- [Recharts](https://recharts.org) for the read-books chart, [react-toastify](https://fkhadra.github.io/react-toastify) for toasts

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### 1. Install dependencies

```bash
npm install
```

### 2. Create your environment file

This step is required. The app fetches its book data from
`${NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`, and without this variable the
pages **render empty** (fetch failures are silently caught).

Create a `.env` file in the project root:

```env
NEXT_PUBLIC_SERVER_BASE_URL=http://localhost:3000
```

The data itself is served from `public/booksData.json` by the dev server, so the
default value points the app at itself.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command             | Description                       |
| ------------------- | --------------------------------- |
| `npm run dev`       | Start the dev server              |
| `npm run build`     | Production build                  |
| `npm run start`     | Serve the production build        |
| `npm run lint`      | Run ESLint                        |
| `npx tsc --noEmit`  | Type-check (no npm script exists) |

There is no test suite; verify changes with lint, type-check, and build.

## Project Structure

```
src/
├── app/
│   ├── page.tsx               # Home (banner + featured books)
│   ├── bookList/page.tsx      # All books
│   ├── books/[bookId]/page.tsx# Book details
│   ├── listedBooks/page.tsx   # Wishlist + read list (tabs, sorting)
│   ├── readBooks/page.tsx     # Read-books bar chart
│   ├── Components/            # Navbar, Footer, BookCard, buttons, home sections
│   ├── context/BookContext.tsx# Wishlist / read-list state
│   ├── Type/type.tsx          # IBook interface
│   └── globals.css            # Tailwind + daisyUI config
└── public/
    └── booksData.json         # Book data served to the app
```

Path alias: `@/*` maps to `src/*`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [daisyUI](https://daisyui.com/docs)
