import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';

import AboutPage from './AboutPage';

import RestaurantsPage from './RestaurantsPage';

import NotFound from './NotFound';

import RestaurantsDetailsContainer from './RestaurantsDetailsContainer';

export default function App() {
  return (
    <div>
      <h1><Link to="/">헤더</Link></h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantsDetailsContainer} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
