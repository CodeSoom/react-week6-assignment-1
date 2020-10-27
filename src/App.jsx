import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import AboutPage from './AboutPage';

import HomePage from './HomePage';

import RestaurantsPage from './RestaurantsPage';

import NotFoundPage from './NotFoundPage';

import Header from './Header';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>

  );
}
