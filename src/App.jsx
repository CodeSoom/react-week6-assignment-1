import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';

import Header from './Header';

import HomePage from './HomePage';

import AboutPage from './AboutPage';

import RestaurantsPage from './RestaurantsPage';

import RestaurantContainer from './RestaurantContainer';

import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id" component={RestaurantContainer} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
}
