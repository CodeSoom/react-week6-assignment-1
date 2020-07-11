import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Restaurants from './RestaurantsPage';
import RestaurantDetail from './RestaurantDetailContainer';
import Home from './HomePage';
import About from './AboutPage';
import NotFound from './NotFoundPage';

export default function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/restaurantsDetail" component={RestaurantDetail} />
        <Route path="/restaurants" component={Restaurants} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
