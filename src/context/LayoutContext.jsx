import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const LayoutContext = createContext();

function LayoutProvider({ children }) {
  const [showRobsonStats, setShowRobsonStats] = useState(true);
  useEffect(() => {
    setShowRobsonStats(true);
  }, []);
  return (
    <LayoutContext.Provider value={{ showRobsonStats, setShowRobsonStats }}>
      {children}
    </LayoutContext.Provider>
  );
}
LayoutProvider.propTypes = {
  children: PropTypes.any,
}.isRequired;

export { LayoutProvider, LayoutContext };
