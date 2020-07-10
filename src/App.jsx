import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';

function NotFoundPage() {
  return (
    <p>404 Not Found !!!</p>
  );
}

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route path="/restaurants" component={RestaurantsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
