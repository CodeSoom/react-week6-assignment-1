import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from './Header';

import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';

export default function App() {
  return (
    <>
      <Header />

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
          <RestaurantPage />
        </Route>
        <NotFoundPage />
      </Switch>
    </>
  );
}
