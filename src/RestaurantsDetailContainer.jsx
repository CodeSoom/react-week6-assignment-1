import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsDetail from './RestaurantsDetail';

import { get } from './utils';

export default function RestaurantsDetailContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, []);

  const restaurantsDetail = useSelector(get('restaurantsDetail'));

  return <RestaurantsDetail restaurantsDetail={restaurantsDetail} />;
}
