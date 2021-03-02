import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import { loadRestaurant, setRestaurant } from './actions';

import { get } from './utils';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const restaurants = useSelector(get('restaurants'));

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
