import { useState, useEffect } from 'react';
import api from '../../services/api';
import history from '../../history';

export default function useAuth() {
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
      api.defaults.headers.authentication = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  // const validity = () => {
  //   let json = localStorage.getItem('user');
  //   if (json) {
  //     const token = JSON.parse(json).token;
  //     const jwtPayload = authService.verifyToken(token);
  //     if (jwtPayload.exp < Date.now() / 1000) {
  //       authService.logout();
  //       next('/');
  //     }
  //     next();
  //   }
  // };

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
  return {
    loading,
    authenticated,
    signupData,
    loginData,
    handleLogin,
    handleLogout,
    handleSignup,
  };
}
