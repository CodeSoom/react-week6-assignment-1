import React from 'react';

import { Route, Switch } from 'react-router-dom';

import AboutPage from '../AboutPage';

import HomePage from '../HomePage';

import NotFoundPage from '../NotFoundPage';

import RestaurantsPage from './RestaurantsPage';

export default function App() {
  // 0. Create Home / About/ RestaurantsConainer / NotFound
  // 1. Create Link to re-render to the corresponding componets.
  // 2. Restaurants Detail <- API (with restaurantId)

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/restaurants" component={RestaurantsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
