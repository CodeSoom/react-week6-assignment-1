import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';

function AboutPage() {
  return (
    <div>
      <h2>About</h2>
      <p>About 페이지 입니다.</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/about" component={AboutPage} />
        {/* <HomePage /> */}
        {/* <RestaurantsPage /> */}
      </Switch>
    </div>
  );
}
