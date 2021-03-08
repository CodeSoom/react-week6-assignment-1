import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';

import { loadRestaurant } from '../../redux/actions';

import { get } from '../../utils/utils';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurantId) {
    dispatch(loadRestaurant(restaurantId));
  }

  return (
    <Restaurants
      restaurants={restaurants}
      handleClick={handleClick}
    />
  );
}
