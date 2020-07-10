import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route path="/restaurants" component={RestaurantsPage} />
    </Switch>
  );
}
