import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import RestaurantDetailPage from './RestaurantDetailPage';

export default function App() {
  return (
    <div>
      <header>
        <h1>
          <Link to="/">헤더</Link>
        </h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurant" component={RestaurantDetailPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
