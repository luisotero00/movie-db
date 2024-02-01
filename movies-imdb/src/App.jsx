import { useEffect, useState } from "react";
import { SearchBar, MovieDetails, MovieList, ModalMovies } from "./components/indexd.js";
import { searchMovies, getMovieDetails, getPopularMovies } from "./services/movieApi";
import "./styles/styles.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null); // Corregido a singular
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loadPopularMovies = async () => {
      const results = await getPopularMovies();
      setMovies(results);
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
    setSelectedMovie(movieDetails);
    setIsModalOpen(true);
  };

  return (
    <>
      <div>
        <h2 className="title-page">ISA MOVIE DB</h2>
        <SearchBar onSearch={handleSearch} />
        <MovieList movies={movies} onSelectMovie={handleSelectMovie} />
        {isModalOpen && selectedMovie && (
          <ModalMovies onClose={() => setIsModalOpen(false)}>
            <MovieDetails movie={selectedMovie} /> 
          </ModalMovies>
        )}
      </div>
    </>
  );
}

export default App;
