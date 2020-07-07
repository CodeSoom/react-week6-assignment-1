import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantDetailPage from './RestaurantDetailPage';

export default function App() {
  return (
    <>
      <header>
        <Link to="/">헤더</Link>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:restaurantId" component={RestaurantDetailPage} />
      </Switch>
    </>
  );
}
