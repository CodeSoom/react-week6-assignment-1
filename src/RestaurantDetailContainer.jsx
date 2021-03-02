import React from 'react';
import { useSelector } from 'react-redux';

import RestaurantDetail from './RestaurantDetail';

export default function RestaurantDetailContainer() {
  const restaurant = useSelector((state) => state.restaurant);
  return (
    <div>
      <RestaurantDetail restaurant={restaurant} />
    </div>
  );
}
