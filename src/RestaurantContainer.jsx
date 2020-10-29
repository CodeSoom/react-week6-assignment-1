import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDatail';

import { get } from './utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return <p>로딩중...</p>;
  }

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
