import React from 'react';

import RestaurantsPage from './RestaurantsPage';

import HomePage from './HomePage';

import { 
  Switch,
  Route,
  Link
} from 'react-router-dom';

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
  const { location: { pathname } } = window;
  return (
    <div>
      <h1>
        <Link to="/">헤더</Link>
      </h1>
      <Switch>
        <Route exact path="/" component={HomePage} ></Route>
        <Route path="/about" component={AboutPage} ></Route>
        <Route path="/restaurants" component={RestaurantsPage} ></Route>
        <Route component={NotFoundPage} ></Route>
      </Switch>
    </div>
  );
}
