import React from 'react';

import { useParams } from 'react-router-dom';

export default function RestaurantPage() {
  const { restaurantId } = useParams();

  return (
    <div>
      <h2>
        Restaurant
        {restaurantId}
      </h2>
    </div>
  );
}
