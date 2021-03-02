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
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          <Link
            to={`/restaurants/${id}`}
            onClick={() => handleClick(id)}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
