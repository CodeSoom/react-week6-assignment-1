import React from 'react';

import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <RestaurantContainer restaurantId={id} />
    </div>
  );
}
