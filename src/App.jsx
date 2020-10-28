import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import ErrorPage from './ErrorPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <ErrorPage />
    </Switch>
  );
}
