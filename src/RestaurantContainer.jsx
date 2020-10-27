import React from 'react';
import { useSelector } from 'react-redux';

export default function RestaurantContainer({ restaurantId }) {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  const selectedRestaurant = restaurants.find(({ id }) => id === restaurantId);

  return selectedRestaurant.address;
}
