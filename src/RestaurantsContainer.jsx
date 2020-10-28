import React from 'react';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { get } from './utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Link to={`/restaurant/${restaurant.id}`}>
            {restaurant.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
