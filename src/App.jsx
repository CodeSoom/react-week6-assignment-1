import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {
  Switch,
  Route,
  useParams,
} from 'react-router-dom';

import Header from './Header';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';

import {
  loadInitialData,
} from './actions';

function RestaurantInfoPage() {
  const { restaurantId } = useParams();

  return (
    <div>
      <h2>Restaurant Information</h2>
      <p>
        Showing the information of
        {' '}
        {restaurantId}
      </p>
    </div>
  );
}

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
