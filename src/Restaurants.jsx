import React from 'react';

import { Link, useRouteMatch } from 'react-router-dom';

export default function Restaurants({ restaurants, onClickRestaurant }) {
  const { url } = useRouteMatch();

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          <Link
            to={`${url}/${id}`}
            onClick={onClickRestaurant}
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
