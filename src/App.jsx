import React, { useEffect } from 'react';

import { Switch, Route } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import {
  loadInitialData,
} from './actions';

function HomePage() {
  return (
    <h2>Home</h2>
  );
}

function AboutPage() {
  return (
    <h2>About</h2>
  );
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  );
}
