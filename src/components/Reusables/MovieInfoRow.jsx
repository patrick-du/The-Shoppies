/* eslint-disable react/jsx-wrap-multilines */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StyledComponents from 'styled-components';
import Collapse from '@kunukn/react-collapse';
import MovieInfoField from './MovieInfoField';
import { StyledInfoRow } from '../../styles/components';
import { searchMovieById } from '../../services/movies';
import { IMDB_URL } from '../../constants';

const StyledImage = StyledComponents.img`
    margin-top: 15px;
    width: 100%;
`;

const StyledLink = StyledComponents.a`
    margin-top: 500px;
    text-decoration: none;
    font-size: 19px;
    &:hover {
        text-decoration: none !important;
    }
`;

const MovieInfoRow = ({ id }) => {
  const [showMovieInfo, setShowMovieInfo] = useState(false);
  const [movieInfo, setMovieInfo] = useState(null);

  const renderMovieInfo = () => {
    if (movieInfo) {
      const {
        Title,
        imdbID,
        Poster,
        Year,
        Genre,
        Runtime,
        Director,
        BoxOffice,
        Plot,
      } = movieInfo;
      const imdbLink = `${IMDB_URL}${imdbID}`;

      return (
        <>
          <StyledImage src={Poster} alt={`${Title} (${Year}) Poster`} />
          <MovieInfoField text={`${Year} ◦ ${Genre} ◦ ${Runtime}`} />
          <MovieInfoField header="Director" text={Director} />
          <MovieInfoField header="Box Office" text={BoxOffice} />
          <MovieInfoField header="Plot date" text={Plot} />
          <MovieInfoField
            header="IMDb"
            text={
              <StyledLink
                href={imdbLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(event) => event.stopPropagation()}
              >
                {imdbLink}
              </StyledLink>
            }
          />
        </>
      );
    }
    return <p>Loading...</p>;
  };

  useEffect(() => {
    renderMovieInfo();
  }, [movieInfo]);

  const toggleMovieInfo = async () => {
    if (showMovieInfo === false) {
      searchMovieById(id).then((movie) => {
        setTimeout(() => {
          setMovieInfo(movie);
        }, 200);
      });
    }
    setShowMovieInfo(!showMovieInfo);
  };

  return (
    <StyledInfoRow onClick={toggleMovieInfo}>
      <p>{showMovieInfo ? `Collapse ↑` : `Expand ↓`}</p>
      <Collapse
        isOpen={showMovieInfo}
        transition="height 250ms cubic-bezier(0.4, 0, 0.2, 1)"
      >
        {renderMovieInfo}
      </Collapse>
    </StyledInfoRow>
  );
};

MovieInfoRow.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MovieInfoRow;
