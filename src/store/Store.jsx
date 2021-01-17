import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import Reducer from './Reducer';

const initialState = {
  theme: 'light',
  nominations: [],
  movies: [],
  error: null,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};

export const GlobalContext = createContext(initialState);
export default Store;

Store.propTypes = {
  children: PropTypes.node.isRequired,
};
