import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));

  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        주소:
        &nbsp;
        {address}
      </p>
      <h2>메뉴</h2>
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
