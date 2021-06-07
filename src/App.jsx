import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

// import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';
// import AboutPage from './AboutPage';
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
      <Route path="/" component={HomePage} />
      {/* <MyComponent /> */}
    </Switch>
  );
}
