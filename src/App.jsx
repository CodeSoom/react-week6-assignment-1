import React from 'react';

import { Switch, Route } from 'react-router-dom';

import RestaurantPage from './pages/RestaurantPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/restaurant" component={RestaurantPage} />
      </Switch>
    </div>
  );
}
