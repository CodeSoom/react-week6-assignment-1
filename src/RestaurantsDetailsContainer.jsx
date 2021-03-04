import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import restaurantsDetails from '../fixtures/restaurantsDetails';

import RestaurantsDetails from './RestaurantsDetails';

export default function RestaurantsDetailsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch();
  }, []);

  return (
    <RestaurantsDetails restaurantsDetails={restaurantsDetails} />
  );
}
