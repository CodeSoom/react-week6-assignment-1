import React from 'react';

import { useSelector } from 'react-redux';

import Restaurant from './Restaurant';

import { get } from '../../utils/utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  if (!restaurant.name) {
    return (
      <p>loading</p>
    );
  }

  return (
    <Restaurant restaurant={restaurant} />
  );
}
