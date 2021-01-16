import React, { useContext } from 'react';
import { GlobalContext } from '../store/Store';
import { StyledContainer } from '../styles/components';
import NominationsList from './NominationsList';

const NominationsBox = () => {
  const [state] = useContext(GlobalContext);
  const { nominations } = state;

  return (
    <StyledContainer>
      <h3>Nominations</h3>
      <p>{`You have ${nominations.length} nominations.`}</p>
      <NominationsList />
    </StyledContainer>
  );
};

export default NominationsBox;
