import React from 'react';

import { Route, Switch } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

export default function App() {
  return (
    <Switch>
      <Route path="/restaurants" component={RestaurantsPage} />
    </Switch>
  );
}
