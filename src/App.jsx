import React, { useEffect } from 'react';

import {
  Link,
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantDetailPage from './RestaurantDetailPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  // const MyComponent = {
  //   '/': HomePage,
  //   '/about': AboutPage,
  //   '/restaurants':  RestaurantsPage,
  // }[pathname] || NotFoundPage;

  return (
    <div>
      <header>
        <h1>
          <Link to="/">
            헤더 영역
          </Link>
        </h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:restaurantId`" component={RestaurantDetailPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
