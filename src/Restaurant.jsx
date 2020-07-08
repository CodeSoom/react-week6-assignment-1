import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function Restaurant() {
  const { name, address } = useSelector(get('restaurant'));
  const menu = useSelector(get('menu'));

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
        {menu.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
