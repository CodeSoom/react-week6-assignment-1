import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';
import Restaurants from './Restaurants';
import RestaurantContainer from './RestaurantContainer';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route exact path="/restaurants" component={Restaurants} />
        <Route path="/restaurants/:id" component={RestaurantContainer} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
}
