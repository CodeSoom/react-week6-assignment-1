import React from 'react';
import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantPage() {
  const { restaurantId } = useParams();
  const id = Number(restaurantId);

  return ((
    <RestaurantContainer restaurantId={id} />
  ));
}
