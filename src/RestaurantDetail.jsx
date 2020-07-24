import React from 'react';

import MenuItems from './MenuItems';

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;
  return (
    <div>
      <h2>{name}</h2>
      <h3>{address}</h3>
      <h2>메뉴</h2>
      <ul>
        <MenuItems menuItems={menuItems} />
      </ul>
    </div>
  );
}
