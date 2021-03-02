import React from 'react';

import { Link, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import About from './About';
import RestaurantPage from './RestaurantPage';
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
        <Route exact path="/restaurants" component={RestaurantPage} />
        <Route exact path="/restaurant/:restaurantId" component={RestaurantDetailContainer} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>

  );
}
