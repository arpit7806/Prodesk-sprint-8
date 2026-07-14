import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import { useMovies } from "./hooks/useMovies";
import "./App.css";

function App() {
  const { movies, loading, error, mode, activeQuery, runSearch } = useMovies();

  return (
    <div className="app-shell">
      <Navbar />

      <div className="search-section">
        <SearchBar onSearch={runSearch} />
      </div>

      <MovieGrid
        movies={movies}
        loading={loading}
        error={error}
        mode={mode}
        activeQuery={activeQuery}
      />
    </div>
  );
}

export default App;
