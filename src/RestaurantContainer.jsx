import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

export default function RestaurantContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  return ((
    <RestaurantDetail restaurant={restaurant} />
  ));
}
