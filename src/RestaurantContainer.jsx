import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantContainer() {
  const { name, address, menuItems } = useSelector(get('restaurant'));

  return (
    <div>
      <h3>{name}</h3>
      <p>
        주소:
        {address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {
          menuItems.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))
        }
      </ul>
    </div>
  );
}
