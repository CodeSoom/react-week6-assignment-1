import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RestaurantsPage from './pages/RestaurantsPage';
import NotFoundPage from './pages/NotFoundPage';

// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택 - Regions <- API (0)
// 2. 분류 선택 - Categories - 한식, 중식, 일식, ... <- API (0)
// 3. 식당 목록 - Restaurants <- API (with region, category) -> 1, 2 모두 완료된 경우

// TODO: "/" 페이지가 아니면 상단에 "뒤로가기" 텍스트가 보이며, 클릭할 수 있다.
// TODO: "/Restaurants" 링크에 가면 지역, 분류 버튼들이 있으며 각각 클릭 시 하단에 음식점 링크들이 나타난다.
// TODO: "/Restaurants/:id" 링크에서는 음식점의 정보가 나온다.

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/restaurants" component={RestaurantsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  );
}
