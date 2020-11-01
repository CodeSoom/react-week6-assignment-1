import React from 'react';

import { useSelector } from 'react-redux';

import Restaurant from './Restaurant';

import { get } from './utils';

const isEmpty = (param) => Object.keys(param).length === 0;

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  if (isEmpty(restaurant)) {
    return <p>Loading...</p>;
  }

  return (
    <Restaurant restaurant={restaurant} />
  );
}
