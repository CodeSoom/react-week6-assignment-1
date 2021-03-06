import React from 'react';

import MenuItems from './MenuItems';

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  if (!name) {
    return (
      <p>Loading</p>
    );
  }

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {' '}
        {address}
      </p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </div>
  );
}
