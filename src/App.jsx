import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import About from './About';

export default function App() {
  return (
    <div>
      <header>
        <h1>
          헤더
        </h1>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}
