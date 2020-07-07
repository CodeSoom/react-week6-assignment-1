import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { Link, Switch, Route } from 'react-router-dom';

import {
  loadInitialData,
} from './actions';

import HomePage from './HomePage';
import AboutPage from './AboutPage';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

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
