import { OMDB_URL, API_KEY } from '../constants';

const omdbRoot = `${OMDB_URL}?apikey=${API_KEY}`;

export const searchMovie = async (query) => {
  const endpoint = `${omdbRoot}&type=movie&s=${query}`;
  const response = await fetch(endpoint);
  const movies = await response.json();

  return movies;
};

export const searchMovieById = async (id) => {
  const endpoint = `${omdbRoot}&type=movie&i=${id}`;
  const response = await fetch(endpoint);
  const movie = await response.json();
  return movie;
};
