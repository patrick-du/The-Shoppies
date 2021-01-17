import React from 'react';
import PropTypes from 'prop-types';
import StyledComponents from 'styled-components';


const StyledInfoField = StyledComponents.div`
    margin-top: 15px;
`;

const InfoHeader = StyledComponents.p`
    font-family: SFProDisplay-Medium;
`;

const MovieInfoField = ({ header, text }) => (
  <StyledInfoField>
    <InfoHeader>{header}</InfoHeader>
    <p>{text}</p>
  </StyledInfoField>
);

MovieInfoField.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.node.isRequired,
};

export default MovieInfoField;
