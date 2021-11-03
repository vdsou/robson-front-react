import React, { useContext } from 'react';
import {
  Redirect, Route, Router, Switch,
} from 'react-router';
import PropTypes from 'prop-types';

import Home from '../Home';
import LoginForm from '../LoginForm';
import Register from '../Register';
import NotFound from '../NotFound';
import CommandsList from '../Commands';
import Command from '../Commands/ManageCommands/Command';
import ManageCommands from '../Commands/ManageCommands';
import Expired from '../Expired';
import About from '../About';

import history from '../../history';

import { Context } from '../../context/AuthContext';
import InsertCommad from '../Commands/ManageCommands/InsertCommand';

const CustomRoute = ({ isPrivate, ...rest }) => {
  const { loading, authenticated } = useContext(Context);
  if (loading) {
    return (
      <h1>
        baby_bobolete
        <span className="blink">_</span>
      </h1>
    );
  }
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
        <Route component={About} exact path="/about" />
        <CustomRoute isPrivate component={Home} exact path="/" />
        <CustomRoute isPrivate component={Command} exact path="/command/:id" />
        <CustomRoute isPrivate component={CommandsList} exact path="/commands" />
        <CustomRoute isPrivate component={ManageCommands} exact path="/commands/manage-commands" />
        <CustomRoute isPrivate component={InsertCommad} exact path="/commands/insert-command" />
        <Route component={Expired} exact path="/expired" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

CustomRoute.propTypes = {
  isPrivate: PropTypes.any,
}.isRequired;
