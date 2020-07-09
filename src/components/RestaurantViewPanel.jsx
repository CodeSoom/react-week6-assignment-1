import React from 'react';

import List from './List';

export default function RestaurantViewPanel({ restaurant: { name, address, menuItems } }) {
  return (
    <div>
      <h3>{name}</h3>

      <h4>주소</h4>
      <p>{address}</p>

      <h4>메뉴</h4>
      <List items={menuItems || []} />
    </div>
  );
}
