import React from 'react';

import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import { get } from './utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants.map((restaurant) => {
        const { id } = restaurant;
        const to = `/restaurants/${id}`;
        return (
          <li key={id}>
            <Link to={to}>{restaurant.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
