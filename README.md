# 📚 Book Vibe — Book Catalog Web App

**Discover. Read. Track. Repeat.**

Book Vibe is a modern book catalog web application built with Next.js. It allows users to explore books, view detailed book information, manage their reading lists, save books to a wishlist, and visualize their reading progress through an interactive chart.

Built with the Next.js App Router, React, TypeScript, and Tailwind CSS, Book Vibe provides a clean and responsive experience for book lovers.

## ✨ Features

- **Home Page:** Explore a welcoming hero banner and a featured collection of six books.
- **All Books:** Browse the complete book catalog in a responsive grid layout.
- **Book Details:** View book covers, ratings, reviews, tags, page counts, and publisher information.
- **Read List:** Add books you have read to your personal reading list.
- **Wishlist:** Save books you want to read in the future.
- **Listed Books:** Manage your read list and wishlist through a tabbed interface.
- **Sorting Options:** Sort listed books by rating, publication year, or page count.
- **Reading Statistics:** Visualize the page counts of your read books using an interactive bar chart.
- **Toast Notifications:** Receive instant feedback when adding books to your lists.
- **Responsive Design:** Enjoy a user-friendly interface across different screen sizes.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org/) | React framework and App Router |
| [React 19](https://react.dev/) | Component-based user interface |
| [TypeScript](https://www.typescriptlang.org/) | Static typing and maintainable code |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [daisyUI 5](https://daisyui.com/) | Prebuilt UI components |
| [Recharts](https://recharts.org/) | Reading statistics visualization |
| [React Toastify](https://fkhadra.github.io/react-toastify/) | Toast notifications |

## 📂 Project Structure

```text
book-vibe/
├── public/
│   └── booksData.json
├── src/
│   └── app/
│       ├── Components/
│       │   ├── Navbar
│       │   ├── Footer
│       │   ├── BookCard
│       │   └── Home sections and buttons
│       ├── context/
│       │   └── BookContext.tsx
│       ├── Type/
│       │   └── type.tsx
│       ├── bookList/
│       │   └── page.tsx
│       ├── books/
│       │   └── [bookId]/
│       │       └── page.tsx
│       ├── listedBooks/
│       │   └── page.tsx
│       ├── readBooks/
│       │   └── page.tsx
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── .env
├── package.json
└── README.md
```

> **Note:** The structure above highlights the main application files. Additional components and configuration files may exist in the project.

## 🚀 Getting Started

Follow these steps to run Book Vibe locally.

### Prerequisites

Make sure you have installed:

- [Node.js 20+](https://nodejs.org/)
- npm (included with Node.js)
- Git

### 1. Clone the repository

```bash
git clone <https://github.com/Wasima230Sultana/b14-Book-Vibe.git>
cd b14-Book-Vibe
```


### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root and add:

```env
NEXT_PUBLIC_SERVER_BASE_URL=http://localhost:3000
```

The application uses this environment variable to fetch book data from:

```text
${NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json
```

The development server serves `public/booksData.json` at `/booksData.json`, so the default URL points to the same Next.js application.

**Important:** Keep the environment variable name exactly as shown. Restart the development server after changing environment variables.

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Application Routes

| Route | Description |
|---|---|
| `/` | Home page with a hero banner and featured books |
| `/bookList` | Complete book catalog |
| `/books/[bookId]` | Detailed information for an individual book |
| `/listedBooks` | Tabbed wishlist and read-list management |
| `/readBooks` | Bar chart displaying page counts for read books |

## 📋 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Runs ESLint |
| `npx tsc --noEmit` | Checks TypeScript types without generating output files |

### Production Build

Before deploying, verify that the application builds successfully:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

Run these commands individually and resolve any reported errors before deployment.

## 🧠 State Management

Book Vibe uses React Context API to manage wishlist and read-list state through:

```text
src/app/context/BookContext.tsx
```

The current implementation stores this state in memory. As a result, wishlist and read-list changes reset when the page is fully reloaded. Persistent storage or a backend database would be needed to retain these lists between sessions.

## 📊 Reading Statistics

The Read Books page uses Recharts to visualize the page counts of books in the read list. This provides a simple visual overview of the books users have tracked.

## 🎨 Styling and UI

The application uses Tailwind CSS v4 and daisyUI 5 for styling and interface components. Tailwind CSS and daisyUI are configured through `src/app/globals.css`, rather than a traditional `tailwind.config.js` file.

## 🔮 Future Improvements

Potential enhancements include:

- Persist wishlist and read-list data using local storage or a database.
- Add user authentication and personalized reading lists.
- Implement book search, filtering, and pagination.
- Add reading goals and progress tracking.
- Integrate a book API for a larger, regularly updated catalog.
- Improve accessibility and add automated tests.

## 📄 License

No license has been specified yet. If you intend to make this project open source, consider adding an appropriate license file.

---

**Book Vibe — Your personal space to discover and track books.** 📚