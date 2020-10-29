import React from 'react';

export default function RestaurantDetail({ restaurant }) {
  return (
    <div>
      <h3>{restaurant.name}</h3>
      <p>
        주소:
        {restaurant.address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {
          restaurant.menuItems.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))
        }
      </ul>
    </div>
  );
}
