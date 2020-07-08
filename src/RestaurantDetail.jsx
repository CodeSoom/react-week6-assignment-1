import React from 'react';

export default function RestaurantDetail({ restaurant }) {
  return (
    <div>
      <h2>{restaurant.name}</h2>
      {restaurant.address}
      <h3>메뉴</h3>
      {restaurant.menuItems.map((item) => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </div>
  );
}
