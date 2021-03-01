import React from 'react';

import { Route, Link, Switch } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

export default function App() {
  // 0. Create Home / About/ RestaurantsConainer / NotFound
  // 1. Create Link to re-render to the corresponding componets.
  // 2. Restaurants Detail <- API (with restaurantId)

  function HomePage() {
    return (
      <div>
        <h1>Home</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/restaurants">Restaurants</Link></li>
        </ul>
      </div>
    );
  }

  function AboutPage() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }

  function NotFoundPage() {
    return (
      <div>
        <h1>404 Not Found</h1>
      </div>
    );
  }

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/restaurants" component={RestaurantsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
