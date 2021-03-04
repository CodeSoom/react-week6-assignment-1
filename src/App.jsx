import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  Switch,
  Route,
} from 'react-router-dom';

import Header from './Header';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantInfoPage from './RestaurantInfoPage';

import {
  loadInitialData,
} from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:restaurantId" component={RestaurantInfoPage} />
      </Switch>
    </div>
  );
}
