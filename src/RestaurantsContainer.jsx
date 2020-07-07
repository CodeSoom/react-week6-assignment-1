import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import { get } from './utils';

import RestaurantContainer from './RestaurantContainer';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <Link
          key={restaurant.id}
          to={`/restaurant/${restaurant.id}`}
        >
          <RestaurantContainer
            restaurant={restaurant}
          />
        </Link>
      ))}
    </ul>
  );
}
