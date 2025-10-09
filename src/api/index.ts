import { apiClient } from "./client";
import { API_KEY } from "@env";

const LANGUAGE = "en-US";

export const getUpcomingMovies = async (page: number = 1) => {
  return apiClient.get(
    `movie/upcoming?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}`
  );
};
export const getMovieDetails = async (movieId: number) => {
  return apiClient.get(
    `movie/${movieId}?api_key=${API_KEY}&language=${LANGUAGE}`
  );
};

export const getMovieVideos = async (movieId: number) => {
  return apiClient.get(
    `movie/${movieId}/videos?api_key=${API_KEY}&language=${LANGUAGE}`
  );
};

export const searchMovies = async (query: string, page: number = 1) => {
  return apiClient.get("search/movie", {
    params: {
      api_key: API_KEY,
      language: LANGUAGE,
      query: query,
      page: page,
    },
  });
};
