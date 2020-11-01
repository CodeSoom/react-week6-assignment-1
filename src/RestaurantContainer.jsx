import React from 'react';

import { useSelector } from 'react-redux';
import Restaurant from './Restaurant';

import { get } from './utils';

export default function RestaurantConatiner() {
  const restaurant = useSelector(get('restaurant'));

  const isLoading = restaurant === null;

  if (isLoading) {
    return 'loading...';
  }

  return (
    <Restaurant restaurant={restaurant} />
  );
}
