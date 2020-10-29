import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import AboutPage from './AboutPage';

export default function App() {
  function NotFoundPage() {
    return (
      <p>404 not found</p>
    );
  }

  function HomePage() {
    return (
      <h2>Home</h2>
    );
  }

  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
