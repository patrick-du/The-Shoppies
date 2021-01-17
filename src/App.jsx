import React, { useState } from 'react';
import StyledComponents, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { StyledThemeButton } from './styles/components';
import GlobalStyles from './styles/global';
import Container from './components/Reusables/Container';
import SearchBar from './components/SearchBar';
import MoviesList from './components/MoviesList';
import NominationsList from './components/NominationsList';
import Completion from './components/Completion';
import Store from './store/Store';
import InfoCard from './components/InfoCard';

const StyledContainer = StyledComponents.div`
  width: 80%;
  margin: 100px auto;
`;

const StyledRow = StyledComponents.div`
  display: flex;
  justify-content: space-between
`;

const StyledCol = StyledComponents.div`
  flex: 1;
  flex-direction: column;
`;

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Store>
        <StyledContainer>
          <StyledRow>
            <h1>The Shoppies</h1>
            <StyledThemeButton type="button" onClick={toggleTheme}>
              {theme === lightTheme ? (
                <i className="far fa-moon" />
              ) : (
                <i className="far fa-sun" />
              )}
            </StyledThemeButton>
          </StyledRow>
          <Container
            title="Welcome to the movie awards for entrepreneurs!"
            component={<InfoCard />}
          />
          <Container title="Movie Title" component={<SearchBar />} />
          <Completion />
          <StyledRow>
            <StyledCol>
              <Container title="Search Results" component={<MoviesList />} />
            </StyledCol>
            <div style={{ width: '30px' }} />
            <StyledCol>
              <Container title="Nominations" component={<NominationsList />} />
            </StyledCol>
          </StyledRow>
        </StyledContainer>
      </Store>
    </ThemeProvider>
  );
};

export default App;
