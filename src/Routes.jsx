import React from 'react';
import { Route, Switch } from 'react-router-dom';

import About from './About';
import Homepage from './Homepage';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/about" component={About} />
    </Switch>
  );
}
