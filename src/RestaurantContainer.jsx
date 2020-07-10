import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));
  const { name, address, menuItems } = restaurant;

  if (name === undefined) {
    return (
      <h1>Loading...</h1>
    );
  }

  return (
    <div>
      <h1>{name}</h1>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>

  );
}
