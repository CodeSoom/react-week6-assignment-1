import React from 'react';

import { Link } from 'react-router-dom';

export default function Restaurants({ restaurants, onClickRestaurant }) {
  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          <Link
            to="/"
            onClick={onClickRestaurant}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
