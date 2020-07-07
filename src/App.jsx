import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import NotFoundPage from './NotFoundPage';

// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택 - Regions <- API (0)
// 2. 분류 선택 - Categories - 한식, 중식, 일식, ... <- API (0)
// 3. 식당 목록 - Restaurants <- API (with region, category) -> 1, 2 모두 완료된 경우

/**
 * # 레스토랑 시스템 웹
 * 1. Header
 * - 페이지 이름("헤더")이 보인다.
 * - 어느 페이지(/restaurants, /about, /non-exist)에서든, 헤더를 클릭하면 메이 페이지로 이동한다.
 * 2. HomePage
 * - 페이지 이름("Home")이 보인다.
 * - 메뉴들(About, Restaurants)이 보인다.
 * - 메뉴를 클릭하면, 해당 메뉴 페이지로 이동한다.
 * 3. AboutPage
 * - 페이지 이름("About")이 보인다.
 * - 관련 내용("About...")이 보인다.
 * 4. RestaurantsPage
 * - 페이지 이름("Restaurants")이 보인다. (임의로 추가함)
 * - 지역과 카테고리를 모두 선택하면, 레스토랑 목록이 보인다.
 * - 레스토랑을 클릭하면, 레스토랑 상세 페이지로 이동한다.
 * 5. RestaurantPage
 * - 페이지 이름("Restaurant")이 보인다. (임의로 추가함)
 * - 레스토랑에 대한 정보들(이름, 주소, 메뉴 목록)이 보인다.
 * 6. NotFoundPage
 * - 페이지 이름("404 Not Found")이 보인다. (임의로 추가함)
 * - 존재하지 않는 URL로 접근했을 때, 404 Not Found 페이지가 보인다.
*/

function RestaurantPage() {
  return (
    <h2>Restaurant</h2>
  );
}

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/restaurants" component={RestaurantsPage} />
      <Route path="/restaurant" component={RestaurantPage} />
      <Route path="/non-existent" component={NotFoundPage} />
    </Switch>
  );
}
