import React from 'react';

export default function RestaurantDetail({ restaurant }) {
  const { name, address, menus } = restaurant;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        주소:
        {address}
      </p>
      <h2>메뉴</h2>
      <ul>
        {menus.map(({ id, type }) => (
          <li key={id}>
            {type}
          </li>
        ))}
      </ul>
    </div>
  );
}
