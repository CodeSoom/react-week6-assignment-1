import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './container/RegionsContainer';
import CategoriesContainer from './container/CategoriesContainer';
import RestaurantsContainer from './container/RestaurantsContainer';

import {
  loadInitialData,
} from './actions';

// 1. Header, HomePage, AboutPage, RestaurantsPage 생성
// 2. Header, HomePage, AboutPage, RestaurantsPage 라우팅 적용
// 3. RestaurantDetailPage 생성
// 4. RestaurantDetailPage 라우팅 적용

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialData());
  });

  return (
    <div>
      <RegionsContainer />
      <CategoriesContainer />
      <RestaurantsContainer />
    </div>
  );
}
