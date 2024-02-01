import React from "react";

const MovieList = ({ movies = [], onSelectMovie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => onSelectMovie(movie.id)} className="movie-item">
          <img
            src={`${imageUrl}${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
