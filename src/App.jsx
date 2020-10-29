import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';

import {
  loadInitialData,
} from './actions';

import RestaurantsPage from './RestaurantsPage';
import NotFoundPage from './NotFoundPage';
import RestaurantDetailPage from './RestaurantDetailPage';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <div>
      <h1><Link to="/">헤더</Link></h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantDetailPage} />

        <Route component={NotFoundPage} />
      </Switch>

    </div>
  );
}
