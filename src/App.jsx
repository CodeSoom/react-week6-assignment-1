import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';

import AboutPage from './pages/AboutPage';

import RestaurantsPage from './pages/RestaurantsPage';

import NotFound from './components/NotFound';

import RestaurantsDetailsContainer from './containers/RestaurantsDetailsContainer';

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
