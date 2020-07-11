import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from './utils';

import {
  selectRestaurant,
  loadRestaurantDetailData,
} from './actions';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  const dispatch = useDispatch();

  function handleClick(restaurantId) {
    dispatch(selectRestaurant(restaurantId));
    dispatch(loadRestaurantDetailData());
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id} onClick={() => handleClick(restaurant.id)}>
          <Link to="/restaurantsDetail">
            {restaurant.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
