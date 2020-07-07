import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <RestaurantContainer
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </ul>
  );
}
