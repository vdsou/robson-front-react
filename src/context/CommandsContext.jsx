import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services/api';

const Context = createContext();

function CommandsProvider({ children }) {
  const [commandsList, setCommandsList] = useState([]);
  useEffect(() => {
    api
      .get('/commands/get')
      .then(({ data }) => {
        setCommandsList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Context.Provider value={{ commandsList, setCommandsList }}>{children}</Context.Provider>
  );
}

CommandsProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export { CommandsProvider, Context };
