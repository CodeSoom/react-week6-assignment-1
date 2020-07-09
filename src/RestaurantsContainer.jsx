import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import {
  selectRestaurant,
  loadRestaurantDetails,
} from './actions';

import { get } from './utils';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurantId) {
    dispatch(selectRestaurant(restaurantId));
    dispatch(loadRestaurantDetails());
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Link
            to="/restaurant-details"
            onClick={() => handleClick(restaurant.id)}
          >
            {restaurant.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
