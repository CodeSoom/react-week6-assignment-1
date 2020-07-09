import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantViewPanel from '../components/RestaurantViewPanel';

import { get } from '../utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  return (
    <RestaurantViewPanel restaurant={restaurant} />
  );
}
