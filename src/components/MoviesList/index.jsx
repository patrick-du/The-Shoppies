import React, { useContext } from 'react';
import { GlobalContext } from '../../store/Store';
import MoviesCard from './MoviesCard';

const MoviesList = () => {
  const [state] = useContext(GlobalContext);
  const { movies, error } = state;

  const renderMovies = movies.map((movie) => (
    <MoviesCard key={movie.imdbID} {...movie} />
  ));

  return movies.length > 0 ? renderMovies : <p>{error}</p>;
};

export default MoviesList;
