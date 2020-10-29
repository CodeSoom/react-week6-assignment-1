import React from 'react';

export default function RestaurantMenu({ menu }) {
  return (
    <ul>
      {menu.map(({ name }) => (<li>{name}</li>))}
    </ul>
  );
}
