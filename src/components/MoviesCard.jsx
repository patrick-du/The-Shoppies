/* eslint-disable no-unused-vars */
import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../store/Store';
import { StyledCard, StyledAddButton } from '../styles/components';
import { MAX_NOMINATIONS } from '../constants';

const MoviesCard = (props) => {
  const { Title, Year, imdbID } = props;
  const [state, dispatch] = useContext(GlobalContext);
  const { movies, nominations } = state;
  const [isDisabled, setIsDisabled] = useState(false);
  const cardHeader = `${Title} (${Year})`;

  const conditionalDisable = {
    pointerEvents:
      isDisabled || nominations.length === MAX_NOMINATIONS ? 'none' : 'auto',
  };

  const handleButtonClick = () => {
    dispatch({ type: 'ADD_NOMINATION', payload: props });
    setIsDisabled(true);
  };

  useEffect(() => {
    setIsDisabled(
      nominations.some((nomination) => nomination.imdbID === imdbID),
    );
  }, [movies, nominations]);

  return (
    <StyledCard style={conditionalDisable}>
      {isDisabled ? <strike>{cardHeader}</strike> : <p>{cardHeader}</p>}
      <StyledAddButton
        type="button"
        onClick={handleButtonClick}
        style={conditionalDisable}
      >
        +
      </StyledAddButton>
    </StyledCard>
  );
};

MoviesCard.propTypes = {
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
};

export default MoviesCard;
