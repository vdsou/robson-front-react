import React, { createContext, useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import api from '../services/api';
import history from '../history';

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [signupSuccess, setSignupSuccess] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      api.defaults.headers.authenticated = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);
  // handle user login and logout
  const handleLogin = ({ username, password }) => {
    api
      .post('/users/login', {
        username,
        password,
      })
      .then(({ data: { token } }) => {
        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.authentication = `Bearer ${token}`;
        setAuthenticated(true);
        history.push('/');
      })
      .catch((err) => {
        setAuthenticated(false);
        console.log(err);
      });
  };
  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem('token');
    api.defaults.headers.authentication = undefined;
    history.push('/login');
  };
  if (loading) {
    return (
      <h1>
        Loading
        <span className="blink">_</span>
      </h1>
    );
  }
  // handle user registation
  const handleSignup = ({ name, username, password }) => {
    api
      .post('/users/signup', {
        name,
        username,
        password,
      })
      .then(({ data }) => {
        console.log(data);
        setSignupSuccess(true);
        history.push('/welcome');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Context.Provider
      value={{
        loading,
        authenticated,
        signupSuccess,
        handleLogin,
        handleLogout,
        handleSignup,
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