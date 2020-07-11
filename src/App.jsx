import React from 'react';

import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantDetailPage from './RestaurantDetailPage';
import NotFoundPage from './NotFoundPage';

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
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:restaurantId" component={RestaurantDetailPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
