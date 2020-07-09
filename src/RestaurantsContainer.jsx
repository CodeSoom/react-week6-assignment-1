import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  selectRestaurant,
} from './actions';

import { get } from './utils';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurantId) {
    dispatch(selectRestaurant(restaurantId));
    // TODO: dispatch(loadRestaurantDetails());
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <button
            type="button"
            onClick={handleClick}
          >
            {restaurant.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
