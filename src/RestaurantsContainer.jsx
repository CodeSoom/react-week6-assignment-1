import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
  Link,
} from 'react-router-dom';

import { get } from './utils';
import { loadRestaurantDetail } from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const restaurants = useSelector(get('restaurants'));

  function handleClick(restaurantId) {
    dispatch(loadRestaurantDetail(restaurantId));
  }

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          <Link
            onClick={() => handleClick(id)}
            to={{
              pathname: `/restaurants/${id}`,
            }}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
