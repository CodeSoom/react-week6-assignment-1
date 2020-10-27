import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/AboutPage" component={AboutPage} />
      <Route path="/RestaurantsPage" component={RestaurantsPage} />
    </Switch>
  );
}
