import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HeaderContainer from './HeaderContainer';

import HomePage from './HomePage';

import AboutPage from './AboutPage';

import RestaurantsPage from './RestaurantsPage';

import RestaurantPage from './RestaurantPage';

import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <div>
      <HeaderContainer />
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id" component={RestaurantPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
}
