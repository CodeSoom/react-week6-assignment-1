import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';

import AboutPage from './AboutPage';

export default function App() {
  return (
    <div>
      <h1><Link to="/">헤더</Link></h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}
