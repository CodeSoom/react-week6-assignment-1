import React from 'react';

import { Route, Switch } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

function HomePage() {
  return (
    <p>Home</p>
  );
}

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/restaurants" component={RestaurantsPage} />
    </Switch>
  );
}
