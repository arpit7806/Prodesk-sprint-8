import { useEffect, useState, useCallback, useRef } from "react";
import { getPopularMovies, searchMovies } from "../services/tmdb";

export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState("popular"); // 'popular' | 'search'
  const [activeQuery, setActiveQuery] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const modeRef = useRef(mode);
  const queryRef = useRef(activeQuery);
  modeRef.current = mode;
  queryRef.current = activeQuery;

  useEffect(() => {
    let cancelled = false;

    async function loadInitial() {
      try {
        setLoading(true);
        setError(null);
        const data = await getPopularMovies(1);
        if (cancelled) return;
        setMovies(data.results || []);
        setPage(1);
        setTotalPages(data.total_pages || 1);
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadInitial();
    return () => {
      cancelled = true;
    };
  }, []);

  const runSearch = useCallback(async (query) => {
    const trimmed = query.trim();

    if (!trimmed) {
      try {
        setLoading(true);
        setError(null);
        setMode("popular");
        setActiveQuery("");
        const data = await getPopularMovies(1);
        setMovies(data.results || []);
        setPage(1);
        setTotalPages(data.total_pages || 1);
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
      setPage(1);
      setTotalPages(data.total_pages || 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMore = useCallback(async () => {
    if (loadingMore || page >= totalPages) return;

    const nextPage = page + 1;
    const currentMode = modeRef.current;
    const currentQuery = queryRef.current;

    try {
      setLoadingMore(true);
      const data =
        currentMode === "search"
          ? await searchMovies(currentQuery, nextPage)
          : await getPopularMovies(nextPage);

      setMovies((prev) => [...prev, ...(data.results || [])]);
      setPage(nextPage);
    } catch (err) {
      console.error("failed to load next page:", err.message);
    } finally {
      setLoadingMore(false);
    }
  }, [loadingMore, page, totalPages]);

  const hasMore = page < totalPages;

  return {
    movies,
    loading,
    loadingMore,
    error,
    mode,
    activeQuery,
    hasMore,
    runSearch,
    loadMore,
  };
}