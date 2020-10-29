import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import Loading from './Loading';

export default function RestaurantContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  if (!restaurant.id) {
    return (<Loading />);
  }

  return ((
    <RestaurantDetail restaurant={restaurant} />
  ));
}
