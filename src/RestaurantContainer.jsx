import React from 'react';

import { useSelector } from 'react-redux';

export default function RestaurantContainer() {
  const { restaurant } = useSelector((state) => ({
    restaurant: state.restaurant,
  }));

  return (
    <div>
      <h2>{restaurant.name}</h2>
    </div>
  );
}
