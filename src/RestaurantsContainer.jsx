import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from './utils';

import {
  loadRestaurantDetails,
} from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurantId) {
    dispatch(loadRestaurantDetails({ restaurantId }));
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Link to="/details" onClick={() => handleClick(restaurant.id)}>{restaurant.name}</Link>
        </li>
      ))}
    </ul>
  );
}
