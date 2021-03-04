import React from 'react';

import { Link, Route, Switch } from 'react-router-dom';

import HomePage from './page/HomePage';
import About from './page/About';
import RestaurantsPage from './page/RestaurantsPage';
import RestaurantDetailPage from './page/RestaurantDetailPage';
import NotFound from './page/NotFound';

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
        <Route exact path="/restaurants/:id" component={RestaurantDetailPage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>

  );
}
