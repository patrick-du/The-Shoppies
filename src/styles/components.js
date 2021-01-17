/* eslint-disable import/prefer-default-export */
import StyledComponents from 'styled-components';
import { lightTheme } from './theme';

export const StyledContainer = StyledComponents.div`
  background-color: ${({ theme }) => theme.foreground};
  border-radius: 10px;
  padding: 40px;
  margin-top: 30px;
  box-shadow: 0 0 5px ${({ theme }) => theme.foregroundShadow};
`;

export const StyledCard = StyledComponents.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  border-radius: 10px;
  border: 3px solid ${({ theme }) => theme.foreground2};
  color: ${({ theme }) => theme.secondaryText}
  background-color: ${lightTheme.background};
  transition: all 0.25s linear;
  -webkit-box-sizing: border-box; 

  &:hover {
    border: 3px solid ${({ theme }) => theme.foregroundShadow};
  }
`;

export const StyledTopRow = StyledComponents.div`
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;

export const StyledInfoRow = StyledComponents.div`
  width: 100%;
  background-color: ${({ theme }) => theme.foreground2};
  border-radius: 0px 0px 10px 10px;
  text-align: center;
`;

export const StyledButton = StyledComponents.button`
  border-radius: 10px;
  border: 0px;
  height: 30px;
  width: 30px;
  font-size: 22px;
  transition: all 0.25s linear;
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.background};
  &:focus {
    outline: none;
  }
`;

export const StyledThemeButton = StyledComponents(StyledButton)`
  align-self: center;
  &:hover {
    color: ${({ theme }) => theme.themeToggle};
    background-color: ${({ theme }) => theme.background};
  }
`;

export const StyledAddButton = StyledComponents(StyledButton)`
  &:hover {
    color: ${({ theme }) => theme.foreground};
    background-color: ${({ theme }) => theme.movieHover};
  }
`;

export const StyledRemoveButton = StyledComponents(StyledButton)`
  &:hover {
    color: ${({ theme }) => theme.foreground};
    background-color: ${({ theme }) => theme.nominationHover};
  }
`;
