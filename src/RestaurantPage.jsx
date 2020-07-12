import React from 'react';

import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantPage({ params }) {
  const { restaurantId } = params || useParams();

  return (
    <div>
      <h2>
        Restaurant
        {restaurantId}
      </h2>
      <RestaurantContainer restaurantId={restaurantId} />
    </div>
  );
}
