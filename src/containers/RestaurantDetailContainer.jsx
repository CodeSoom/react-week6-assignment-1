import React from 'react';

import { useSelector } from 'react-redux';
import RestaurantDetail from '../components/detail/RestaurantDetail';

function RestaurantDetailContainer() {
  const { selectedRestaurant } = useSelector((state) => ({
    selectedRestaurant: state.selectedRestaurant,
  }));

  return (
    <RestaurantDetail
      restaurant={selectedRestaurant}
    />
  );
}

export default RestaurantDetailContainer;
