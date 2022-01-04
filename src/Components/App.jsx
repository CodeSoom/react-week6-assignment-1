import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';

import {
  loadInitialData,
} from '../actions';
import Home from './Home';
import About from './About';
import NotFoundPage from './NotFoundPage';
import RestaurantsPage from './RestaurantsPage';
import RestaurantInfo from './RestaurantInfo';

// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택 - Regions <- API (0)
// 2. 분류 선택 - Categories - 한식, 중식, 일식, ... <- API (0)
// 3. 식당 목록 - Restaurants <- API (with region, category) -> 1, 2 모두 완료된 경우

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <>
      <h1>
        <Link to="/">
          헤더
        </Link>
      </h1>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/restaurants"
          element={<RestaurantsPage />}
        />
        <Route
          path="/restaurants/:restaurantId"
          element={<RestaurantInfo />}
        />
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </>
  );
}
