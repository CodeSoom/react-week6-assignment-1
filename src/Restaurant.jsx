import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function Restaurant() {
  const { name, address, menuItems } = useSelector(get('restaurant'));

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
