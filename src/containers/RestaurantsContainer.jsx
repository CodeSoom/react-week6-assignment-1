import React from 'react';

import { useSelector } from 'react-redux';
import Restaurants from '../components/Restaurants';

import { get } from '../utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <Restaurants restaurants={restaurants} />
  );
}
