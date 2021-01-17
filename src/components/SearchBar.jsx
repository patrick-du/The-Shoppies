/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-default */
import React, { useState, useEffect, useContext } from 'react';
import StyledComponents from 'styled-components';
import { GlobalContext } from '../store/Store';
import searchMovie from '../services/movies';
import { lightTheme } from '../styles/theme';

const StyledInput = StyledComponents.input`
  width: 100%;
  padding: 15px;
  height: 50px;
  border-radius: 10px;
  font-size: 19px;
  border: 2px solid ${lightTheme.background};
  color: ${({ theme }) => theme.secondaryText}
  background-color: ${lightTheme.background};
  transition: all 0.25s linear;
  -webkit-box-sizing: border-box;

  &:hover {
    border: 2px solid ${lightTheme.foregroundShadow};
  } 
  &:focus {
    outline: none;
    border: 2px solid ${lightTheme.foregroundShadow};
  }
`;

const SearchBar = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    if (query === '') {
      dispatch({ type: 'SET_ERROR', payload: 'Try searching 🔎 for a movie!' });
    } else {
      searchMovie(query).then((movies) => {
        if (movies && movies.Response === 'True') {
          dispatch({ type: 'SET_MOVIES', payload: movies.Search });
        } else {
          dispatch({ type: 'SET_ERROR', payload: movies.Error });
        }
      });
    }
  }, [query]);

  return (
    <StyledInput
      type="text"
      placeholder="Type to search..."
      value={query}
      onChange={(e) => handleChange(e)}
    />
  );
};

export default SearchBar;

// debounce values
// after debouncing values - show the error with the emoji ⚠️
