import React from 'react';

import { useSelector } from 'react-redux';

import RestaurantsDetail from './RestaurantsDetail';

import { get } from './utils';

export default function RestaurantsDetailContainer() {
  const restaurantsDetail = useSelector(get('restaurantsDetail'));

  return <RestaurantsDetail restaurantsDetail={restaurantsDetail} />;
}
