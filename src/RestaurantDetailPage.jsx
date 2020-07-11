import React from 'react';

import RestaurantDetailContainer from './RestaurantDetailContainer';

export default function RestaurantDetailPage({ match }) {
  const { id } = match.params;

  return (
    <RestaurantDetailContainer
      restaurantId={id}
    />
  );
}
