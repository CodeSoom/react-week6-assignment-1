import React from 'react';

export default function RestaurantDetail({ restaurant }) {
  return (
    <div>
      <h1>{restaurant.name}</h1>
      <p>
        주소:
        {' '}
        {restaurant.address}
      </p>
      <h2>메뉴</h2>
      <ul>
        {restaurant.menuItems.map((menu) => (
          <li key={menu.id}>
            {menu.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
