import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RestaurantsPage from './RestaurantsPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import HomePage from './HomePage';

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
