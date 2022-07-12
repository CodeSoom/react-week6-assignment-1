import { useEffect } from 'react';

import { Route, Routes } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import HomePage from './HomePage';
import RestaurantsPage from './RestaurantsPage';

import {
  loadInitialData,
} from './actions';
import NotFound from './NotFound';

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
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/restaurants" element={<RestaurantsPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
