import React from 'react';
import {
  Switch,
  Route,
} from 'react-router';

import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import AboutPage from './AboutPage';

export default function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/restaurants' component={RestaurantsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
