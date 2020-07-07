import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/about" component={AboutPage} />
        {/* <HomePage /> */}
        {/* <RestaurantsPage /> */}
      </Switch>
    </div>
  );
}
