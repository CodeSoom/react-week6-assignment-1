import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import RestaurantsPage from './RestaurantsPage';

function HomePage() {
  return <div>Home</div>
}

function AboutPage() {
  return <div>About</div>
}

function NotFoundPage() {
  return <div>404 NotFound</div>
}
export default function App() {
  return (
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/restaurants' component={RestaurantsPage} />
        <Route component={NotFoundPage} />
      </Switch>
  );
}
