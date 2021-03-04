import React from 'react';

import restaurantsDetails from '../fixtures/restaurantsDetails';

import RestaurantsDetails from './RestaurantsDetails';

export default function RestaurantsDetailsContainer() {
  return (
    <RestaurantsDetails restaurantsDetails={restaurantsDetails} />
  );
}
