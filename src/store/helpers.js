export const filterMoviesByNominations = (state, movies) => {
  const nominationTitles = state.nominations.map(
    (nomination) => nomination.Title,
  );
  return movies.filter((movie) => !nominationTitles.includes(movie.Title));
};

export const test = true;
