import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Header from './Header';

import HomePage from './HomePage';

import AboutPage from './AboutPage';

import RestaurantsPage from './RestaurantsPage';

import RestaurantsDetailsPageContainer from './RestaurantDetailsPageContainer';

import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route exact path="/restaurants/:id" component={RestaurantsDetailsPageContainer} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
