import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';

export default function App() {
  return (
    <div>
      <header>
        <h1><Link to="/">Home</Link></h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:restaurantId" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
