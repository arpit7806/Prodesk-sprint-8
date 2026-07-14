const BASE_URL = import.meta.env.VITE_TMDB_BASE_URL;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// small helper so we're not repeating the key + error check everywhere
async function tmdbFetch(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}${endpoint}`);
  url.searchParams.set("api_key", API_KEY);

  Object.entries(params).forEach(([key, value]) => {
    if (value) url.searchParams.set(key, value);
  });

  const res = await fetch(url.toString());

  if (!res.ok) {
    // TMDB sends useful error messages in the body, worth surfacing
    const body = await res.json().catch(() => null);
    throw new Error(body?.status_message || `TMDB request failed (${res.status})`);
  }

  return res.json();
}

export function getPopularMovies(page = 1) {
  return tmdbFetch("/movie/popular", { page });
}

export function searchMovies(query, page = 1) {
  return tmdbFetch("/search/movie", { query, page });
}

export const IMG_BASE = import.meta.env.VITE_TMDB_IMG_URL;
