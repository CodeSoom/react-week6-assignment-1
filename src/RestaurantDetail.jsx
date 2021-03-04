import React from 'react';

import Menus from './Menus';

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menus } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <Menus menus={menus} />
    </div>
  );
}
