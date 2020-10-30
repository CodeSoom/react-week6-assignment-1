import React from 'react';

import { useSelector } from 'react-redux';
import Restaurant from './Restaurant';

import { get } from './utils';

export default function RestaurantConatiner() {
  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return 'loading...';
  }

  return (
    <Restaurant restaurant={restaurant} />
  );
}
