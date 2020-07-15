import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));
  return (
    <div>
      <h2>{restaurant.name && restaurant.name}</h2>
      <h3>{restaurant.address && restaurant.address}</h3>
      <h2>메뉴</h2>
      <ul>
        {restaurant.menuItems && restaurant.menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
