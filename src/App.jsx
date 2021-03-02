import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';

import AboutPage from './AboutPage';

import HomePage from './HomePage';

import NotFoundPage from './NotFoundPage';

import RestaurantsPage from './RestaurantsPage';

export default function App() {
  // 0. Create Home / About/ RestaurantsConainer / NotFound
  // 1. Create Link to re-render to the corresponding componets.
  // 2. Restaurants Detail <- API (with restaurantId)

  function RestaurnatDetailPage() {
    return (
      <div>
        <h1>마법사주방</h1>
        <address>주소: 서울 강남구 강남대로94길 9</address>
        <h2>메뉴</h2>
        <ul>
          <li>맛나는 거</li>
          <li>짠 거</li>
        </ul>
      </div>
    );
  }

  return (
    <div>
      <header>
        <p><Link to="/">헤더</Link></p>
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route exact path="/restaurants" component={RestaurantsPage} />
          <Route path="/restaurants/:id" component={RestaurnatDetailPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </main>
    </div>
  );
}
