import React from 'react';

import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { get } from './utils';

import {
  setRestaurantInfo,
  loadRestaurantInfo,
} from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const restaurants = useSelector(get('restaurants'));

  function handleClick({ restaurant }) {
    dispatch(setRestaurantInfo({ restaurant }));
    dispatch(loadRestaurantInfo());
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Link
            to={`/restaurants/${restaurant.id}`}
            onClick={() => handleClick({ restaurant })}
          >
            {restaurant.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
