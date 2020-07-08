import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h2>{name}</h2>

      <h2>주소</h2>
      <p>{address}</p>

      <h2>메뉴</h2>
      <ul>
        {menuItems && menuItems.map((menu) => <li key={menu.id}>{menu.name}</li>)}
      </ul>
    </div>
  );
}
