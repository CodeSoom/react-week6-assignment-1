import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';

import AboutPage from './AboutPage';

import HomePage from './HomePage';

import NotFoundPage from './NotFoundPage';

import RestaurantsPage from './RestaurantsPage';

import RestaurantDetailPage from './RestaurantDetailPage';

export default function App() {
  // 0. Create Home / About/ RestaurantsConainer / NotFound
  // 1. Create Link to re-render to the corresponding componets.
  // 2. Restaurants Detail <- API (with restaurantId)

  return (
    <div>
      <header>
        <p><Link to="/">헤더</Link></p>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id" component={RestaurantDetailPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
}
