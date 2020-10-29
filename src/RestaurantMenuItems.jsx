import React from 'react';

export default function RestaurantMenuItems({ menuItems }) {
  return (
    <>
      <h2>메뉴</h2>
      <ul>
        {menuItems.map(({ name: itemName, id }) => (
          <li key={id}>{itemName}</li>
        ))}
      </ul>
    </>
  );
}
