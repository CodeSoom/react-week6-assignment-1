import React from 'react';

import RestaurantDetail from '../RestaurantDetail';

import restaurant from '../../fixtures/restaurant';

export default function RestaurantContainer() {
  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
