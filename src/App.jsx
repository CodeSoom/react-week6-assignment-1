import React from 'react';

import { Route, Switch } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/restaurants" component={RestaurantsPage} />
      </Switch>
    </div>
  );
}
