import React from 'react';
import { useSelector } from 'react-redux';

import { get } from './utils';

import RestaurantDetail from './RestaurantDetail';

export default function RestaurantDetailContainer() {
  const restaurant = useSelector(get('restaurant'));

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
