import axios from "axios";

const apiKey = "080ac31dae8b7747c673e638a898dcd5";
const baseUrl = "https://api.themoviedb.org/3";

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(`${baseUrl}/search/movie`, {
      params: { api_key: apiKey, query },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error :", error);
    return [];
  }
};

export const getMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(`${baseUrl}/movie/${movieId}`, {
      params: { api_key: apiKey },
    });
    return response.data;
  } catch (error) {
    console.error("Error  getting movie details: ", error);
    return null;
  }
};

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${baseUrl}/movie/popular`, {
      params: { api_key: apiKey },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error getting popular movies: ", error);
    return [];
  }
};
