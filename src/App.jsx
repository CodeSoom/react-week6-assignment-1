import React from 'react';

import { Link, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import About from './About';
import RestaurantsPage from './RestaurantsPage';
import RestaurantDetailContainer from './RestaurantDetailContainer';
import NotFound from './NotFound';

export default function App() {
  return (
    <div>
      <Link to="/">
        <h1>헤더</h1>
      </Link>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route exact path="/restaurants/:restaurantId" component={RestaurantDetailContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>

  );
}
