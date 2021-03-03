import React from 'react';

import RestaurantDetail from '../RestaurantDetail';

import restaurant from '../../fixtures/restaurant';

export default function RestaurantPage() {
  return (
    <div>
      <RestaurantDetail restaurant={restaurant} />
    </div>
  );
}
