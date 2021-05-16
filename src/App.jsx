import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';
import HomePage from './HomePage';

export default function App() {
  return (
    <div>
      <h1>
        <Link to='/'>헤더</Link>
      </h1>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route exact path='/restaurants' component={RestaurantsPage} />
        <Route path='/restaurants/:id' component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
      
  );
}
