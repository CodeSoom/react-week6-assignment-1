import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import { loadRestaurant, setRestaurant } from './actions';

import { get } from './utils';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const restaurants = useSelector(get('restaurants'));
  const selectedRegion = useSelector(get('selectedRegion'));
  const selectedCategory = useSelector(get('selectedCategory'));

  if (!restaurants.length) {
    return (
      <p>해당 지역에 선택하신 분야 식당이 없습니다.</p>
    );
  }

  if (selectedRegion && !selectedCategory) {
    return (
      <p>카테고리를 클릭해주세요.</p>
    );
  }

  if (selectedCategory && !selectedRegion) {
    return (
      <p>지역를 클릭해주세요.</p>
    );
  }

  function handleClick(restaurantId) {
    dispatch(setRestaurant({ id: restaurantId }));

    dispatch(loadRestaurant());
  }

  return (
    <Restaurants
      restaurants={restaurants}
      handleClick={handleClick}
    />
  );
}
