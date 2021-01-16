import React from 'react';
import { StyledContainer } from '../styles/components';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';

const SearchBox = () => {
  console.log('test');
  return (
    <StyledContainer>
      <h3>Movie Title</h3>
      <SearchBar />
      <SearchResults />
    </StyledContainer>
  );
};

export default SearchBox;
