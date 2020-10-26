import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';

export default function App() {
  return (
    <div>
      <RestaurantsPage />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
