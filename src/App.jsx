import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import ErrorPage from './NotFoundPage';
import AboutPage from './AboutPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <ErrorPage />
    </Switch>
  );
}
