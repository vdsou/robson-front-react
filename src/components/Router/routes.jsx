import React, { useContext } from 'react';
import {
  Redirect, Route, Router, Switch,
} from 'react-router';
import PropTypes from 'prop-types';

import LoginForm from '../LoginForm';
import Home from '../Home';
import NotFound from '../NotFound';
import Register from '../Register';

import history from '../../history';

import { Context } from '../../context/AuthContext';

const CustomRoute = ({ isPrivate, ...rest }) => {
  const { authenticated } = useContext(Context);
  if (isPrivate && !authenticated) {
    return <Redirect to="/login" />;
  }
  if (!isPrivate && authenticated) {
    return <Redirect to="/" />;
  }
  /* eslint-disable react/jsx-props-no-spreading */
  return <Route {...rest} />;
};
export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <CustomRoute component={LoginForm} exact path="/login" />
        <CustomRoute component={Register} exact path="/register" />
        <CustomRoute isPrivate component={Home} exact path="/" />
        <CustomRoute component={NotFound} />
      </Switch>
    </Router>
  );
}

CustomRoute.propTypes = {
  isPrivate: PropTypes.any,
}.isRequired;
