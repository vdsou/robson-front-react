import { useState, useEffect } from 'react';
import api from '../../services/api';
import history from '../../history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [expired, setExperied] = useState(false);
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
      const parseUserToken = () => {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(
          Buffer.from(base64, 'base64')
            .toString('ascii')
            .split('')
            .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
            .join(''),
        );
        return JSON.parse(jsonPayload);
      };
      setAuthenticated(true);
      const jwtPayload = parseUserToken();
      setExperied(jwtPayload.exp < Date.now() / 1000);
      if (expired) {
        // eslint-disable-next-line no-use-before-define
        handleLogout();
        history.push('/expired');
      }
      api.defaults.headers.authentication = `Bearer ${JSON.parse(token)}`;
    }
    setLoading(false);
  }, [expired]);

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
    expired,
    handleLogin,
    handleLogout,
    handleSignup,
  };
}
