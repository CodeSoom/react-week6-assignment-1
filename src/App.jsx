import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import NotFoundPage from './NotFoundPage';

// TODO:
// Home Page 구현
// About Page 구현
// Restaurants Page 구현
// Notfound Page 구현

export default function App() {
  return (
    <div>
      <h1>헤더</h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route exact component={NotFoundPage} />
      </Switch>
    </div>
  );
}
