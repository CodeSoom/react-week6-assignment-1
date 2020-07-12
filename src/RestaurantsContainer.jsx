import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { Link, useRouteMatch } from 'react-router-dom';

import { get } from './utils';

import { loadRestaurantDetail } from './actions';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  const dispatch = useDispatch();

  const match = useRouteMatch();

  function handleClick(id) {
    dispatch(loadRestaurantDetail(id));
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          <Link to={`${match.path}/${restaurant.id}`} onClick={() => handleClick(restaurant.id)}>
            {restaurant.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
