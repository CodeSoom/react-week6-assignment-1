import React from 'react';

export default function Restaurants({ restaurants, onClickRestaurant }) {
  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          <a
            href="/"
            onClick={onClickRestaurant}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}
