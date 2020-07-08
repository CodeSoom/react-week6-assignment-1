import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RestaurantPage from './pages/RestaurantPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurant" component={RestaurantPage} />
      </Switch>
    </div>
  );
}
