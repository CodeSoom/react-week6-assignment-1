import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { get } from './utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  const dispatch = useDispatch();

  function handleClick(event, id) {
    event.preventDefault();
    dispatch(loadRestaurantDetail(id));
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <a href="/" onClick={(event) => handleClick(event, restaurant.id)}>
            {restaurant.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
