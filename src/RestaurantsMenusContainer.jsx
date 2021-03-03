import React from 'react';

import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsMenusContainer() {
  const { menuItems } = useSelector(get('restaurant'));

  return (
    <div>
      <h2>메뉴</h2>
      <ul>
        {
          menuItems.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))
        }
      </ul>
    </div>
  );
}
