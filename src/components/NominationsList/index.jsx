import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../store/Store';
import NominationsCard from './NominationsCard';

const NominationsList = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const { nominations } = state;
  const userStorage = window.localStorage;

  useEffect(() => {
    const userNominations = userStorage.getItem('userNominations');
    if (userNominations) {
      dispatch({
        type: 'ADD_NOMINATION',
        payload: JSON.parse(userNominations),
      });
    }
  }, []);

  useEffect(() => {
    userStorage.setItem('userNominations', JSON.stringify(nominations));
  }, [nominations]);

  const renderNominations = nominations.map((nomination) => (
    <NominationsCard key={nomination.imdbID} {...nomination} />
  ));

  return nominations.length === 0 ? (
    <p>You have no nominations - search for a 🎞️ and add it to your list.</p>
  ) : (
    renderNominations
  );
};

export default NominationsList;
