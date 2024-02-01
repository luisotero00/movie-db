import { useEffect, useState } from "react";
import { SearchBar, MovieDetails, MovieList } from "./components/indexd.js";
import { searchMovies, getMovieDetails, getPopularMovies } from "./services/movieApi";
import "./styles/styles.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovies, setSelectedMovie] = useState(null);

  useEffect(() => {
    const loadPopularMovies = async () => {
      const results = await getPopularMovies();
      setMovies(results); 4
    };
  
    loadPopularMovies();
  }, []);
  

  const handleSearch = async (query) => {
    const results = await searchMovies(query);
    setMovies(results);
    setSelectedMovie(null);
  };

  const handleSelectMovie = async (movieId) => {
    const movieDetails = await getMovieDetails(movieId);
    console.log(movieDetails);
    setSelectedMovie(movieDetails);
  };

  return (
    <>
      <div>
        <h2 className="title-page">ISA MOVIE DB</h2>
        <SearchBar onSearch={handleSearch} />
        <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
        {selectedMovies && <MovieDetails movie={selectedMovies} />}
      </div>
    </>
  );
}

export default App;
