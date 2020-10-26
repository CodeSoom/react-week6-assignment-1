import React from 'react';

import { Route, Switch } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';

function AboutPage() {
  return (
    <div>
      이 페이지는 소개 페이지 입니다.
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </div>
  );
}
