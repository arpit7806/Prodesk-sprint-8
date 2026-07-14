import { IMG_BASE } from "../services/tmdb";
import "./MovieCard.css";

function getYear(releaseDate) {
  if (!releaseDate) return "—";
  return releaseDate.slice(0, 4);
}

function MovieCard({ movie }) {
  const posterUrl = movie.poster_path
    ? `${IMG_BASE}${movie.poster_path}`
    : null;

  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : "N/A";

  return (
    <div className="movie-card glass-panel">
      <div className="poster-wrap">
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={`${movie.title} poster`}
            loading="lazy"
            className="poster-img"
          />
        ) : (
          <div className="poster-fallback">no image</div>
        )}
        <span className="rating-badge">★ {rating}</span>
      </div>

      <div className="card-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-year">{getYear(movie.release_date)}</p>
      </div>
    </div>
  );
}

export default MovieCard;
