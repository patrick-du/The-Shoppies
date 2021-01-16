/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import { GlobalContext } from '../store/Store';
import Card from './Card';

const SearchResults = () => {
  const [state] = useContext(GlobalContext);
  const { movies, error } = state;

  const renderMovies = movies.map((movie) => {
    return <Card {...movie} />;
  });

  return movies.length > 0 ? renderMovies : <p>{error}</p>;
};

export default SearchResults;
