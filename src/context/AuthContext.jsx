import React, { createContext, useEffect, useState } from 'react';
import Proptypes from 'prop-types';
import api from '../services/api';
import history from '../history';

const Context = createContext();

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [signupData, setSignupData] = useState({
    signupSuccess: true,
    showWelcome: false,
    err: '',
    userData: {
      name: '',
      username: '',
    },
  });
  const [loginData, setLoginData] = useState({
    loginSuccess: true,
    err: '',
  });
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
        setLoginData({ loginSuccess: true });
        history.push('/');
      })
      .catch((err) => {
        setLoginData({ loginSuccess: false, err });
        setAuthenticated(false);
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
        setSignupData({
          ...signupData,
          userData: {
            name: data.saveUser.name,
            username: data.saveUser.username,
          },
          signupSuccess: true,
          showWelcome: true,
        });
        history.push('/login');
      })
      .catch((err) => {
        setSignupData({ showWelcome: false, err });
      });
  };

  return (
    <Context.Provider
      value={{
        loading,
        authenticated,
        signupData,
        loginData,
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
