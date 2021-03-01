import React from 'react';

import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';

import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';
import About from './About';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/restaurants" component={RestaurantsPage} />
          <Route path="/about" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
