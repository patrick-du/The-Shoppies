import StyledComponents from 'styled-components';

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
  border: 3px solid ${({ theme }) => theme.foreground};
  background-color: ${({ theme }) => theme.background};
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
  padding: 15px;
  background-color: ${({ theme }) => theme.foreground};
  border-radius: 0px 0px 10px 10px;
`;

export const StyledButton = StyledComponents.button`
  border-radius: 20px;
  border: 0px;
  height: 30px;
  width: 30px;
  font-size: 22px;
  transition: all 0.25s linear;
  align-self: center;
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme }) => theme.foreground};
  &:hover {
    color: ${({ theme }) => theme.foreground};
  }
  &:focus {
    outline: none;
  }
`;

export const StyledThemeButton = StyledComponents(StyledButton)`
  background-color: ${({ theme }) => theme.background};
  &:hover {
    color: ${({ theme }) => theme.themeToggle};
  }
`;

export const StyledAddButton = StyledComponents(StyledButton)`
  &:hover {
    background-color: ${({ theme }) => theme.movieHover};
  }
`;

export const StyledRemoveButton = StyledComponents(StyledButton)`
  &:hover {
    background-color: ${({ theme }) => theme.nominationHover};
  }
`;
