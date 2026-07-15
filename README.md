# CineGrid

A Netflix-style movie discovery SPA built with React + Vite, consuming the TMDB (The Movie Database) API. Built as Sprint 8 for the Prodesk IT frontend internship — the final common sprint before track specialization, focused on performance optimization and client-side polish.

**Live URL:** _(https://prodesk-sprint-8.vercel.app/)_
<img width="1882" height="1101" alt="image" src="https://github.com/user-attachments/assets/54f8851d-9767-4557-8c69-dc0f6a1dd46a" />


---

## Features

### Phase 1 — Core
- Fetches and renders TMDB's "Popular Movies" list in a responsive CSS grid
- Each card shows poster, title, release year, and rating
- Search bar hitting TMDB's search endpoint, swaps the grid between popular/search results

### Phase 2 — Performance & Polish
- **Infinite scroll** — an IntersectionObserver watches a sentinel element at the bottom of the grid and fetches the next page automatically as the user scrolls, instead of paginated buttons
- **Debounced search** — input waits 500ms after the user stops typing before firing an API call, instead of hitting TMDB on every keystroke
- **Favorites** — heart icon on each card toggles a favorite, persisted to `localStorage` so it survives page refreshes

---

## Tech Stack
- React + Vite
- TMDB REST API
- Vanilla CSS (class-based, no CSS frameworks) — dark glassmorphism theme
- Fonts: Rajdhani + Space Grotesk

---

## Setup

1. Clone the repo and install dependencies:
   ```
   npm install
   ```

2. Get a free TMDB API key:
   - Create an account at [themoviedb.org](https://www.themoviedb.org/signup)
   - Go to Settings → API → Request an API key (choose "Developer")
   - Copy your API Key (v3 auth)

3. Create a `.env` file in the project root (copy the format from `.env.example`):
   ```
   VITE_TMDB_API_KEY=your_actual_key_here
   VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
   VITE_TMDB_IMG_URL=https://image.tmdb.org/t/p/w500
   ```
   `.env` is gitignored — never commit your real key. `.env.example` stays in the repo as a placeholder template.

4. Run the dev server:
   ```
   npm run dev
   ```

5. Build for production:
   ```
   npm run build
   ```

---

## Project Structure
```
src/
├── components/       # Navbar, SearchBar, MovieCard, MovieGrid
├── hooks/            # useMovies, useDebounce, useFavorites
├── services/         # tmdb.js — API wrapper
├── App.jsx
└── index.css         # theme variables + global styles
```
