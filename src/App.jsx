import React from 'react';

import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';

function AboutPage() {
  return (
    <p>이 홈페이지에 대하여</p>
  );
}

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route path="/restaurants" component={RestaurantsPage} />
    </Switch>
  );
}
