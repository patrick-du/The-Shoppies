/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../store/Store';
import { StyledCard, StyledRemoveButton } from '../styles/components';

const NominationsCard = (props) => {
  const { Title, Year, imdbID } = props;
  const [state, dispatch] = useContext(GlobalContext);

  const handleButtonClick = () => {
    dispatch({ type: 'REMOVE_NOMINATION', payload: props });
  };

  return (
    <StyledCard>
      <p>{`${Title} (${Year})`}</p>
      <StyledRemoveButton type="button" onClick={handleButtonClick}>
        x
      </StyledRemoveButton>
    </StyledCard>
  );
};

NominationsCard.propTypes = {
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
};

export default NominationsCard;
