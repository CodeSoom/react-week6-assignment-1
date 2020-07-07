import React from 'react';

import { Switch, Route } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/restaurants" component={RestaurantsPage} />
      </Switch>
    </div>
  );
}
