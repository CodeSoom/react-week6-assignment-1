import React from 'react';

import { useLocation } from 'react-router-dom';

export default function RestaurantsDetailPage() {
  const { name, address, menuItems } = useLocation().state;

  return (
    <div>
      <h2>{name}</h2>
      <h4>주소: {address}</h4>
      <h3>메뉴</h3>
      <ul>
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            {menuItem.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
