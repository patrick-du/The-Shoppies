/* eslint-disable arrow-body-style */
/* eslint-disable eqeqeq */
import { OMDB_URL, API_KEY } from '../constants';

const omdbRoot = `${OMDB_URL}?apikey=${API_KEY}`;

const searchMovie = async (query) => {
  const moviesEndpoint = `${omdbRoot}&type=movie&s=${query}`;

  const response = await fetch(moviesEndpoint);
  const movies = await response.json();

  return movies;
};

// only shows first 10 results
// handle
//  - Response: False
//        - Error: Movie not found
//        - Error: Incorrect IMDb ID
//        - Error: Too many results
//  - Response: True

export default searchMovie;
