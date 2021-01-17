import React from 'react';
import PropTypes from 'prop-types';
import StyledComponents from 'styled-components';

const StyledContainer = StyledComponents.div`
  background-color: ${({ theme }) => theme.foreground};
  border-radius: 10px;
  padding: 40px;
  margin-top: 30px;
  box-shadow: 0 0 5px ${({ theme }) => theme.foregroundShadow};
`;

const StyledTitle = StyledComponents.h3`
  margin-bottom: 20px;
`;

const Container = ({ title, component }) => (
  <StyledContainer>
    <StyledTitle>{title}</StyledTitle>
    {component}
  </StyledContainer>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  component: PropTypes.elementType.isRequired,
};

export default Container;
