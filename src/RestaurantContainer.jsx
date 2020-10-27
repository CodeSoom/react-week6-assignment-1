import React from 'react';

import { useSelector } from 'react-redux';

import Loading from './Loading';
import Restaurant from './Restaurant';

export default function RestaurantContainer({ restaurantId }) {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  if (restaurants.length === 0) {
    return (
      <Loading />
    );
  }

  const restaurant = restaurants.find(({ id }) => id === restaurantId);

  return (
    <Restaurant restaurant={restaurant} />
  );
}
