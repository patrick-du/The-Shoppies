const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload,
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
    default:
      return state;
  }
};

export default Reducer;
