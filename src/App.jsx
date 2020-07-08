import React from 'react';

import { Link, Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';

const RestaurantsDetailPage = () => (
  <>
    <div>김밥제국</div>
    <div>서울시 강남구 역삼동</div>
    <div>떡볶이</div>
    <div>라면</div>
  </>
);

export default function App() {
  return (
    <div>
      <h1><Link to="/">헤더</Link></h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/1" component={RestaurantsDetailPage} />
      </Switch>
    </div>
  );
}
