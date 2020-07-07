import React from 'react';

import { Switch, Route } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

export default function App() {
  return (
    <div>
      <h1>헤더</h1>
      <Switch>
        <Route path="/" component={RestaurantsPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
      </Switch>
    </div>
  );
}
