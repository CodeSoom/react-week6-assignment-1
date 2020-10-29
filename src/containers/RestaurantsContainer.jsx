import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantList from '../components/restaurant/RestaurantList';
import { get } from '../utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <RestaurantList
      restaurants={restaurants}
    />
  );
}
