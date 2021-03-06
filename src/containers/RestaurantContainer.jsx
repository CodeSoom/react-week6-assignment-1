import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantDetail from '../pages/restaurant/RestaurantDetail';

import { get } from '../utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
