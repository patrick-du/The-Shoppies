/* eslint-disable import/prefer-default-export */
import StyledComponents from 'styled-components';

export const StyledContainer = StyledComponents.div`
  background-color: ${({ theme }) => theme.foreground};
  border-radius: 10px;
  padding: 40px;
  margin-top: 30px;
  box-shadow: 0 0 5px ${({ theme }) => theme.foregroundShadow};
`;
