import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantContainer() {
  const restaurant = useSelector(get('restaurant'));
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h3>{name}</h3>

      <h3>주소</h3>
      <p>{address}</p>

      <h3>메뉴</h3>
      <ul>
        {menuItems && menuItems.map((menu) => <li key={menu.id}>{menu.name}</li>)}
      </ul>
    </div>
  );
}
