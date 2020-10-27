import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';

export default function App() {

  return(
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path='/AboutPage' component={AboutPage} />
    </Switch>
  );
}
