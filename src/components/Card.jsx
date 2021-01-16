/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StyledComponents from 'styled-components';
import { GlobalContext } from '../store/Store';
import { lightTheme } from '../styles/theme';

const StyledCard = StyledComponents.div`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.secondaryText}
  background-color: ${lightTheme.background};
  transition: all 0.25s linear;
  justify-content: space-between;
  -webkit-box-sizing: border-box; 

  &:hover {
    border: 2px solid #BBE5B3;
  }
`;

// const StyledButton = StyledComponents.button`

// `;

const Card = ({ Title, Year, imdbID }) => {
  const [state, dispatch] = useContext(GlobalContext);

  const nominateMovie = () => {
    const nominatedMovie = { Title, Year, imdbID };
    dispatch({ type: 'ADD_NOMINATION', payload: nominatedMovie });
  };

  return (
    <StyledCard>
      <p>{`${Title} (${Year})`}</p>
      <button type="button" onClick={nominateMovie}>
        Nominate
      </button>
    </StyledCard>

    // expand
    // api call to get metadata
    // display metadata
  );
};

Card.propTypes = {
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
};

export default Card;
