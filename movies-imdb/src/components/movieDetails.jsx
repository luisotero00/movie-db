import React from "react";

const MovieDetails = ({ movie }) => {
  if (!movie) return <div>Choose a movie for more details</div>;

  return (
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h2>{movie.title}</h2>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieDetails;
