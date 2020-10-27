import React from 'react';

import { useSelector } from 'react-redux';

import Loading from './Loading';
import Restaurant from './Restaurant';

export default function RestaurantContainer({ restaurantId }) {
  const state = useSelector(({ restaurants, restaurant }) => ({
    restaurants,
    restaurant,
  }));

  if (state.restaurants.length === 0) {
    return (
      <Loading />
    );
  }

  const restaurant = state.restaurants.find(({ id }) => id === restaurantId);

  return (
    <div>
      <Restaurant restaurant={restaurant} />
      서울 강남구 123456
    </div>
  );
}
