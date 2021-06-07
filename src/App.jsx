import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
// import NotFoundPage from './NotFoundPage';

export default function App() {
  // const { location: { pathname } } = window;

  // const MyComponent = {
  // '/': HomePage,
  // '/about': AboutPage,
  // '/restaurants': RestaurantsPage,
  // }[pathname] || NotFoundPage;

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/restaurants" component={RestaurantsPage} />
      {/* <MyComponent /> */}
    </Switch>
  );
}
