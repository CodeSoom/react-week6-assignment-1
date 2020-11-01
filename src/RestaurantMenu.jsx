import React from 'react';

export default function RestaurantMenu({ menu }) {
  return (
    <ul>
      { menu.map(({ id, name }) => (
        <li key={id}>
          {name}
        </li>
      )) }
    </ul>
  );
}
