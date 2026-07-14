import MovieCard from "./MovieCard";
import "./MovieGrid.css";

function MovieGrid({ movies, loading, error, mode, activeQuery }) {
  if (loading) {
    return (
      <div className="grid-status">
        <div className="spinner" />
        <p>fetching movies…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="grid-status">
        <p className="error-text">something broke: {error}</p>
      </div>
    );
  }

  if (movies.length === 0) {
    return (
      <div className="grid-status">
        <p>
          {mode === "search"
            ? `no results for "${activeQuery}"`
            : "nothing to show right now"}
        </p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieGrid;
