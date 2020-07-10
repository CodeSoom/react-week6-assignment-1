import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import AboutPage from './AboutPage';
import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantDetailsPage from './RestaurantDetailsPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <div>
      <h1><Link to="/">헤더</Link></h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurant-details" component={RestaurantDetailsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
