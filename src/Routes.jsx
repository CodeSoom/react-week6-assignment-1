import React from 'react';
import { Route, Switch } from 'react-router-dom';

import AboutPage from './AboutPage';
import Homepage from './Homepage';
import RestaurantsPage from './RestaurantsPage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/restaurants" component={RestaurantsPage} />
    </Switch>
  );
}
