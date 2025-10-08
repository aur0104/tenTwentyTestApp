import { apiClient } from "./client";

const API_KEY = "1ccfdbeed16c1912b6ae0708df998f4b";
const LANGUAGE = "en-US";

export const getUpcomingMovies = async (page: number = 1) => {
  return apiClient.get(
    `upcoming?api_key=${API_KEY}&language=${LANGUAGE}&page=${page}`
  );
};
export const getMovieDetails = async (movieId: number) => {
  return apiClient.get(`${movieId}?api_key=${API_KEY}&language=${LANGUAGE}`);
};

export const getMovieVideos = async (movieId: number) => {
  return apiClient.get(
    `${movieId}/videos?api_key=${API_KEY}&language=${LANGUAGE}`
  );
};
