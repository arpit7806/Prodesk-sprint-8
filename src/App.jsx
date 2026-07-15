import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import { useMovies } from "./hooks/useMovies";
import { useFavorites } from "./hooks/useFavorites";
import "./App.css";

function App() {
  const {
    movies,
    loading,
    loadingMore,
    error,
    mode,
    activeQuery,
    hasMore,
    runSearch,
    loadMore,
  } = useMovies();

  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div className="app-shell">
      <Navbar />

      <div className="search-section">
        <SearchBar onSearch={runSearch} />
      </div>

      <MovieGrid
        movies={movies}
        loading={loading}
        loadingMore={loadingMore}
        error={error}
        mode={mode}
        activeQuery={activeQuery}
        hasMore={hasMore}
        onLoadMore={loadMore}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default App;