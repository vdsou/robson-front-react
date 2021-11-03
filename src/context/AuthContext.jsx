import React, { createContext } from 'react';
import Proptypes from 'prop-types';
import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    loading,
    authenticated,
    signupData,
    loginData,
    handleLogin,
    handleLogout,
    handleSignup,
    handleToken,
  } = useAuth();
  return (
    /** This will send data to the components:
     * handle methods will deal with data creation
     * and other manipulations
     * */
    <Context.Provider
      value={{
        loading,
        authenticated,
        signupData,
        loginData,
        handleLogin,
        handleLogout,
        handleSignup,
        handleToken,
      }}
    >
      {children}
    </Context.Provider>
  );
}

AuthProvider.propTypes = {
  children: Proptypes.any,
}.isRequired;

export { Context, AuthProvider };
