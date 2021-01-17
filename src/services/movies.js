import { OMDB_URL, API_KEY } from '../constants';

const omdbRoot = `${OMDB_URL}?apikey=${API_KEY}`;

const searchMovie = async (query) => {
  const moviesEndpoint = `${omdbRoot}&type=movie&s=${query}`;

  const response = await fetch(moviesEndpoint);
  const movies = await response.json();

  return movies;
};

export default searchMovie;
