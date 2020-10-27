import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './About';

export default function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </>
  );
}
