import { useEffect, useState, useCallback } from "react";
import { getPopularMovies, searchMovies } from "../services/tmdb";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState("popular"); // 'popular' | 'search'
  const [activeQuery, setActiveQuery] = useState("");

  // load popular movies on first mount
  useEffect(() => {
    let cancelled = false;

    async function loadPopular() {
      try {
        setLoading(true);
        setError(null);
        const data = await getPopularMovies(1);
        if (!cancelled) setMovies(data.results || []);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadPopular();
    return () => {
      cancelled = true;
    };
  }, []);

  const runSearch = useCallback(async (query) => {
    const trimmed = query.trim();

    // empty search just goes back to popular, feels more natural than showing nothing
    if (!trimmed) {
      setMode("popular");
      setActiveQuery("");
      try {
        setLoading(true);
        const data = await getPopularMovies(1);
        setMovies(data.results || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
      return;
    }

    try {
      setLoading(true);
      setError(null);
      setMode("search");
      setActiveQuery(trimmed);
      const data = await searchMovies(trimmed, 1);
      setMovies(data.results || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { movies, loading, error, mode, activeQuery, runSearch };
}
