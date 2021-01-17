import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import { loadRestaurant } from './actions';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const restaurants = useSelector(get('restaurants'));

  const handleClickRestaurant = (id) => {
    dispatch(loadRestaurant(id));
  };

  return (
    <Restaurants
      restaurants={restaurants}
      onClickRestaurant={handleClickRestaurant}
    />
  );
}
