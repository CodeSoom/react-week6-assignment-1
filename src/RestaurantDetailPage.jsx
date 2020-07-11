import React from 'react';

import { useParams } from 'react-router-dom';

import RestaurantDetailContainer from './RestaurantDetailContainer';

export default function RestaurantDetailPage() {
  const { id } = useParams();

  return (
    <RestaurantDetailContainer
      restaurantId={id}
    />
  );
}
