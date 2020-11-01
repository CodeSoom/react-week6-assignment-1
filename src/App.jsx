import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantDetails from './RestaurantDetails';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <div>
      <h1><Link to="/">헤더</Link></h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:restaurantId" component={RestaurantDetails} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
