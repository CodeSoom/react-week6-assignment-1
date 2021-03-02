import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { loadRestaurant, setRestaurant } from './actions';

import { get } from './utils';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurantId) {
    dispatch(setRestaurant({ id: restaurantId }));

    dispatch(loadRestaurant());
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Link
            to={`/restaurants/${restaurant.id}`}
            onClick={() => handleClick(restaurant.id)}
          >
            {restaurant.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
