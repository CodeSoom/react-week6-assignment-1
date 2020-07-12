import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

import RestaurantDetail from './RestaurantDetail';
import LoadingPage from './LoadingPage';

export default function RestaurantDetailContainer() {
  const restaurant = useSelector(get('restaurant'));

  return restaurant ? (
    <RestaurantDetail restaurant={restaurant} />
  ) : (
    <LoadingPage />
  );
}
