import { filterMoviesByNominations } from './helpers';

const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies:
          state.nominations.length > 0
            ? filterMoviesByNominations(state, action.payload)
            : action.payload,
        error: null,
      };
    case 'SET_ERROR':
      return {
        ...state,
        movies: [],
        error: action.payload,
      };
    case 'ADD_NOMINATION':
      return {
        ...state,
        movies: state.movies.filter(
          (movie) => movie.Title !== action.payload.Title,
        ),
        nominations: [...state.nominations, action.payload],
      };
    case 'REMOVE_NOMINATION':
      return {
        ...state,
        nominations: state.nominations.filter(
          (nomination) => nomination.Title !== action.payload.Title,
        ),
        movies: [action.payload, ...state.movies],
      };
    default:
      return state;
  }
};

export default Reducer;
