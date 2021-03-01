import React from 'react';

import { Route, Switch } from 'react-router-dom';

import RestaurantPage from './RestaurantPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/restaurants" component={RestaurantPage} />
      </Switch>
    </div>

  );
}
