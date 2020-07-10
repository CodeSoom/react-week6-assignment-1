import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantDetailsPage() {
  const {
    name, address, menuItems,
  } = useSelector(get('restaurantDetails'));

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        { address }
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
