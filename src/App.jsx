/* eslint-disable eqeqeq */
import React, { useState } from 'react';
import StyledComponents, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import GlobalStyles from './styles/global';
import SearchBox from './components/SearchBox';
import Store from './store/Store';
import NominationsBox from './components/NominationsBox';

const StyledContainer = StyledComponents.div`
  width: 80%;
  margin: 100px auto;
`;

const StyledRow = StyledComponents.div`
  display: flex;
  justify-content: space-between
`;

const App = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme(theme == lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Store>
        <StyledContainer>
          <StyledRow>
            <h1>The Shoppies</h1>
            <button type="button" onClick={toggleTheme}>
              Toggle theme
            </button>
          </StyledRow>
          <NominationsBox />
          <SearchBox />
        </StyledContainer>
      </Store>
    </ThemeProvider>
  );
};

export default App;
