import React from 'react';

export default function RestaurantDetail({ restaurant: { name, address, menuItems } }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>
        주소:
        {address}
      </p>
      <h3>메뉴</h3>
      <ul>
        {
          menuItems.map((menu) => (
            <li key={menu.id}>{menu.name}</li>
          ))
        }
      </ul>
    </div>
  );
}
