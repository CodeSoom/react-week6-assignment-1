import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantsDetailContainer from './RestaurantsDetailContainer';

export default function App() {
  return (
    <>
      <h1><Link to="/">헤더</Link></h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/About" component={AboutPage} />
        <Route exact path="/Restaurants" component={RestaurantsPage} />
        <Route path="/Restaurants/1" component={RestaurantsDetailContainer} />
      </Switch>
    </>
  );
}
