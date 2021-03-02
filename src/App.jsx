import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';

import HomePage from './HomePage';

function AboutPage() {
  return (
    <p>About</p>
  );
}

function NotFoundPage() {
  return (
    <p>404 Not Found</p>
  );
}

export default function App() {
  return (
    <div>
      <h1>
        <Link to="/">헤더</Link>
      </h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
