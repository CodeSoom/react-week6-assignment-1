import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import { loadRestaurant, setRestaurant } from './actions';

import { get } from './utils';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const restaurants = useSelector(get('restaurants'));

  if (!restaurants.length) {
    return (
      <p>해당 지역에 선택하신 분야 식당이 없습니다.</p>
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
