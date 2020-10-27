import React from 'react';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantPage({ match: { params: { restaurantId } } }) {
  const id = Number(restaurantId);

  return ((
    <RestaurantContainer restaurantId={id} />
  ));
}
