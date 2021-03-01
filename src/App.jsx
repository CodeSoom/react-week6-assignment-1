import React from 'react';

import { Link, Route, Switch } from 'react-router-dom';

import RestaurantPage from './RestaurantPage';

export default function App() {
  return (
    <div>
      <Link to="/">
        <h1>헤더</h1>
      </Link>
      <Switch>
        <Route exact path="/restaurants" component={RestaurantPage} />
      </Switch>
    </div>

  );
}
