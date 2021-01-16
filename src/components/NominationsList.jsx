/* eslint-disable arrow-body-style */
import React, { useContext } from 'react';
import { GlobalContext } from '../store/Store';

const NominationsList = () => {
  const [state, dispatch] = useContext(GlobalContext);
  const { nominations } = state;

  return nominations.map((nomination) => {
    return (
      <div>
        <p>{nomination.Title}</p>
        <p>{nomination.Year}</p>
        <button
          type="button"
          onClick={() => {
            dispatch({ type: 'REMOVE_NOMINATION', payload: nomination });
          }}
        >
          Delete
        </button>
      </div>
    );
  });
};

export default NominationsList;
