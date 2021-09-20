import React from 'react';

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        주소:
        {address}
      </p>
      <h3>메뉴</h3>
      {menuItems.map((item) => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </div>
  );
}
