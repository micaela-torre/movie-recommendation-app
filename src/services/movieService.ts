import axios from "axios";

const API_KEY = "0d782a4cf8dc3328fc777d9cf34b7e47";
const BASE_URL = "https://api.themoviedb.org/3";

export const fetchMovieDetails = async (id: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};

export const fetchRecommendations = async (genreIds: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreIds}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    return [];
  }
};

export const searchMovies = async (query: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};
