import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RegionsContainer from './RegionsContainer';
import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';

import {
  loadInitialData,
} from './actions';

// 0. 지역, 분류 목록을 얻기
// 1. 지역 선택 - Regions <- API (0)
// 2. 분류 선택 - Categories - 한식, 중식, 일식, ... <- API (0)
// 3. 식당 목록 - Restaurants <- API (with region, category) -> 1, 2 모두 완료된 경우

// TODO: "/" 에 가면 About 링크와 Restaurants 링크가 보인다.
// TODO: "/" 페이지가 아니면 상단에 "뒤로가기" 텍스트가 보이며, 클릭할 수 있다.
// TODO: "/About" 링크에 가면 "About 페이지입니다." 텍스트가 보인다.
// TODO: "/Restaurants" 링크에 가면 지역, 분류 버튼들이 있으며 각각 클릭 시 하단에 음식점 링크들이 나타난다.
// TODO: "/Restaurants/:id" 링크에서는 음식점의 정보가 나온다.
// TODO: 등록된 링크가 아니면 404 페이지를 띄워준다.

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
