import React from 'react';

import { Switch, Route, Link } from 'react-router-dom';

import HomePage from './HomePage';

export default function App() {
  return (
    <div>
      <h1><Link to="/">헤더</Link></h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
