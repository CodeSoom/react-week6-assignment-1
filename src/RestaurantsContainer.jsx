import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import {
  selectRestaurant,
  loadDetailRestaurant,
} from './actions';

import { get } from './utils';

export default function RestaurantsContainer() {

  const dispatch = useDispatch();

  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurantId) {
    dispatch(selectRestaurant(restaurantId));
    dispatch(loadDetailRestaurant());
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}> onClick={() => handleClick(restaurant.id)}
          <Link to="/detail">{restaurant.name}</Link>
        </li>
      ))}
    </ul>
  );
}
