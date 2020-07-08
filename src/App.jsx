import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';

function NotFoundPage() {
  return (
    <p>Not Found</p>
  );
}

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
