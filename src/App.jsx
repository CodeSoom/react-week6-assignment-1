import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import AboutPage from './AboutPage';

import HomePage from './HomePage';

import RestaurantsPage from './RestaurantsPage';

import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
