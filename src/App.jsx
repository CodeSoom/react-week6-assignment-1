import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';

function AboutPage() {
  return (
    <p>About</p>
  );
}

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
      </Switch>
    </div>
  );
}
