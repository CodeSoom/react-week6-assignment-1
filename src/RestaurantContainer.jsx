import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantConatiner() {
  const restaurant = useSelector(get('restaurant'));

  return (
    <p>{restaurant.name}</p>
  );
}
