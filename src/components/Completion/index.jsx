import React, { useContext } from 'react';
import { GlobalContext } from '../../store/Store';
import { StyledContainer } from '../../styles/components';
import { MAX_NOMINATIONS } from '../../constants';

const Competion = () => {
  const [state] = useContext(GlobalContext);
  const { nominations } = state;

  return nominations.length === MAX_NOMINATIONS ? (
    <StyledContainer>
      <p>
        Congratulations! You&rsquo;ve nominated 5 movies. Thanks for
        participating. 🎈🎉🥂
      </p>
    </StyledContainer>
  ) : null;
};

export default Competion;
