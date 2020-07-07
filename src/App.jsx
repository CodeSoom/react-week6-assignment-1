import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import Restaurants from './Restaurants';
import RestaurantsDetail from './RestaurantsDetail';

// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택 - Regions <- API (0)
// 2. 분류 선택 - Categories - 한식, 중식, 일식, ... <- API (0)
// 3. 식당 목록 - Restaurants <- API (with region, category) -> 1, 2 모두 완료된 경우

export default function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/restaurants">Restaurants</Link>
        </li>
        <li>
          <Link to="/invalid">Invalid</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/restaurants/:id" component={RestaurantsDetail} />
        <Route path="/restaurants" component={Restaurants} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}
