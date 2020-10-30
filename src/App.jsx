import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantDetailPage from './RestaurantDetailPage';

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/restaurants">
        <RestaurantsPage />
      </Route>
      <Route path="/restaurants/:id">
        <RestaurantDetailPage />
      </Route>
      <NotFoundPage />
    </Switch>
  );
}
