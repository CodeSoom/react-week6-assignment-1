import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  const handleClickRestaurant = () => {
  };

  return (
    <Restaurants
      restaurants={restaurants}
      onClickRestaurant={handleClickRestaurant}
    />
  );
}
