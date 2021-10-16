import React from 'react';
import { Route, Router, Switch } from 'react-router';
import history from '../../history';
import LoginForm from '../LoginForm';
import Home from '../Home';
import NotFound from '../NotFound';

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route component={LoginForm} exact path="/login" />
        {/* <Route component={Register} exact path="/register" /> */}
        <Route component={Home} exact path="/" />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
