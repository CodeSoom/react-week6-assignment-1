import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';
import Loading from './Loading';

import { get } from './utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  if (!restaurant.id) {
    return (<Loading />);
  }

  return ((
    <RestaurantDetail restaurant={restaurant} />
  ));
}
